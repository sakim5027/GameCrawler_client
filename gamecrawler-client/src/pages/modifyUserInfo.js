//작성자:김슬안
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom' 


class ModifyUserInfo extends React.Component{

  constructor(props){
    super(props);
    this.state={
        userId: this.props.userData.userId,
        pw: this.props.userData.pw,
        re_pw: "",
        nickname: this.props.userData.nickname,
        email: this.props.userData.email,
        genre: this.props.userData.genre,
        pwCheck: "",
        options: selectList.options
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.checkPW = this.checkPW.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //첫번 째 두번 째 패스워드 일치 확인
  checkPW = (e) => {

    this.setState({re_pw: e.target.value})
    //비밀번호 유효성검사(영문,숫자 혼합 6~12자리)
    const chkPwd = function(str) {
        var reg_pwd = /^[a-zA-z0-9]{6,12}$/;
        return !reg_pwd.test(str) ? false : true;
    };

    if (chkPwd(this.state.re_pw) === false) {
       
        this.setState({
            pw: "",
            re_pw: "",
            pwCheck: "비밀번호는 영문 대소문자와 숫자를 혼합하여 6~12자 이내로 입력해야 합니다!"
        });
    } 
    else {
        if (this.state.pw === this.state.re_pw) {
            this.setState({
                pwCheck: "비밀번호가 일치합니다."
            });
        } 
        else {
            this.setState({
                pwCheck: "비밀번호가 불일치합니다."
            });
        }
    }
    };

    //장르 변경 셀렉트박스 핸들링
    handleGenreChange(event) {
        this.setState({selectedOption: event.target.value});
    }

    //수정된 회원정보 저장
    modifyInfoHandler(){
        const {nickname, pw, email, genre} = this.state;

        axios
        .put('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/edit',
            {
                pw: this.state.pw,
                nickname: this.state.nickname,
                email: this.state.email,
                genre: this.state.genre,

            },{withCredentials:true}
        )
        .then(alert("가입이 완료되었습니다."))
        .then(this.props.history.push("/myPage"))
        .catch(err => {
            alert(err);
        })
        

    }

  
  render(){
    return (
        <div className = "topContainer">
        <div className = "signinContainer">
            <h1>회원정보 수정</h1>
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
            <div>
                <label>Favourite Genre</label>
                <select className = "selectBox" name="genre" value={this.state.selectedOption} onChange={this.handleGenreChange}>
                    { this.state.options.map((option) => <option>{option}</option>)}
                </select>
            </div>
            <br />
            <br />
            <div>
            <Link to='/mypage'><input type='button' className = "submitBtn" value='수정하기' onClick={this.modifyInfoHandler}/></Link>
            </div>
        </div>
    </div>
    );
  }
}

const selectList = {
    selectedOption : "",
    options: ['Select Genre','Adventure','Action','Arcade','FPS','Horror','Puzzle','Role Playing','Sport','Simulator']
}

export default ModifyUserInfo;