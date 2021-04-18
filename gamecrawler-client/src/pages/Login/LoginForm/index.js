//작성자:김슬안
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom' 


export class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
        id: '',
        password: '',
        errorMessage: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.loginRequestHandler = this.loginRequestHandler.bind(this);
    
  }

  inputHandler = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  loginRequestHandler() {
    axios
      .post(
        'http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/login',
        {
          user_id: this.state.id,
          password: this.state.password,
        },
        { 'Content-Type': 'application/json', withCredentials: true }
      )
      .then((res) => {
        this.props.loginHandler(true);
        return axios.get('https://localhost:4000/users/userinfo', {
          withCredentials: true,
        });
      })
      .then((res) => {
        let { user_id, email } = res.data.data;
        this.props.setUserInfo({
          user_id,
          email,
        });
      })
      .catch((err) => {
        this.setState({
          errorMessage: "이메일 또는 비밀번호가 일치하지 않습니다."
        })
        alert(err)
      });
  }
  

  render(){
    return (
      <form >
        <div className="topContainer">
        <div className="loginContainer">
          <h2>Login</h2>
          <div className="loginField">
            <div className = "subTitle">ID</div>
            <input 
              name="user_id" 
              type="text" 
              placeholder="Enter your ID"
              onChange={(e) => this.inputHandler(e)}
              value={this.state.id}
            />
            <div className = "subTitle">Password</div>
            <input 
              name="password" 
              type="text" 
              placeholder="Enter your Password"
              onChange={(e) => this.inputHandler(e)}
              value={this.state.password}
            /> 
            <div className="alert-box">{this.state.errorMessage}</div>
          </div>
          <div className="buttonField">
              <button className="loginSubmitBtn" onClick = {this.loginRequestHandler}>Login</button>
              <button className="loginSubmitBtn">회원가입</button>
              <Link to="/findIdAndPwd">
                <button className="loginSearchBtn" onClick={this.props.closeModal}>아이디/비밀번호 찾기</button>
              </Link>
            </div>
        </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;