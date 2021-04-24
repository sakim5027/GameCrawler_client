//작성자:김슬안
import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom' 


export class ModifyUserInfo extends React.Component{

  constructor(props){
    super(props);
    this.state={
        pw: "",
        re_pw: "",
        nickname: "",
        email: "",
        genre: "",
        pwCheck: ""
    }
    this.inputHandler = this.inputHandler.bind(this);
    
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
  render(){
    return (
        <div className = "topContainer">
        <div className = "signinContainer">
            <h1>Signup</h1>
            <br />
            <br />
            <br />
            <div>
                <label>Nickname</label>
                <br />
                <br />
                <input 
                    name="nickname" 
                    type="text" 
                    className = "signupInput"
                    placeholder="닉네임을 입력하세요." 
                    onChange={(e) => this.inputHandler(e)}
                    value={this.state.nickname}
                />
            </div>
            <br />
            <br />
        
            <div>
                <label>Password</label>
                <br />
                <br />
                <input 
                    name="password" 
                    type="password" 
                    className = "signupInput"
                    placeholder="비밀번호를 입력하세요." 
                    onChange={(e) => this.inputHandler(e)}
                    value={this.state.password}
                />
                
            </div>
            <br />
            <br />
            <div>
                <label>Re-Enter Password</label>
                <br />
                <br />
                <input 
                    name="re_pw" 
                    type="password" 
                    className = "signupInput"
                    placeholder="비밀번호를 다시 입력하세요." 
                    onChange={(e) => this.checkPW(e)}
                    value={this.state.re_pw}
                />
                <div className="alert-box">{this.state.pwCheck}</div>
            </div>
            <br />
            <br />
            <div>
                <label>Email</label>
                <br />
                <br />
                <input 
                    name="email" 
                    type="text" 
                    className = "signupInput"
                    placeholder="이메일을 입력하세요." 
                    onChange={(e) => this.inputHandler(e)}
                    value={this.state.email}
                />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <button onClick={this.handleSubmit} className = "submitBtn">가입하기</button>
            </div>
        </div>
    </div>
    );
  }
}

export default ModifyUserInfo;