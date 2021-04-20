import React from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            pw: "",
            re_pw: "",
            nickname: "",
            email: "",
            genre: "",
            idCheck: "",
            pwCheck: ""
        };
        this.inputHandler = this.inputHandler.bind(this);
        this.checkID = this.checkID.bind(this);
        this.checkPW = this.checkPW.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //인풋 핸들러
    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //아이디 중복검사
    checkID = (e) => {

        //아이디 유효성 검사 함수
        const chkId = function(str) {
            var idRegExp = /^[a-zA-z0-9]{4,12}$/; //아이디는 영문 대소문자와 숫자 4~12자리
            return idRegExp.test(str) ? true : false;
        };

        const inputId = {
            userId: this.state.userId
        };

        const id_info = {
            method: "POST",
            body: JSON.stringify(inputId),
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (chkId(this.state.userId) === false) {
        alert("아이디는 영문 대소문자와 숫자를 혼합하여 4~12자리로 입력해야합니다!");
        this.setState({
            email: ""
        });
        } else {
        fetch("http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/check-login-id", id_info)
            .then(res => res.json())
            .then(json => {
            if (json === true) {
                this.setState({
                    idCheck: "사용가능한 아이디입니다"
                });
            } 
            else {
                this.setState({
                    idCheck: "이미 존재하는 아이디입니다"
                });
            }
            });
        }
    };


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

    //서버로 가입 양식 제출
    handleSubmit = (e) => {
        
        const {
            userId,
            pw,
            re_pw,
            nickname,
            email,
            genre,
            idCheck,
            pwCheck
        } = this.state;

        const signupInfo = {
            userId: this.state.userId,
            pw: this.state.pwCheck,
            nickname: this.state.nicknameCheck,
            email: this.state.emailCheck,
            genre: this.state.genre
        };

        const signup_info = {
        method: "POST",
        body: JSON.stringify(signupInfo),
        headers: {
            "Content-Type": "application/json"
        }
        };

        if (
            userId &&
            pw &&
            nickname &&
            email &&
            genre &&
            idCheck === "사용가능한 아이디입니다" &&
            pw === re_pw &&
            pwCheck === "비밀번호가 일치합니다."
        ) {
        fetch("http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/signup", signup_info)
            .then(alert("가입이 완료되었습니다."))
            .then(this.props.history.push("/login"));
        } else {
        alert("입력값을 확인해주세요");
        }
    };

    render() {
        return (
        <div className = "topContainer">
            <div className = "signinContainer">
                <h1>Signup</h1>
                <br />
                <br />
                <br />
                <div>
                    <label>ID</label>
                    <br />
                    <br />
                    <input 
                        name="userId" 
                        type="text" 
                        className = "signupIdInput"
                        placeholder="아이디를 입력하세요." 
                        onChange={(e) => this.inputHandler(e)}
                        value={this.state.userId}
                    />
                    <button onClick ={this.checkID} className = "checkBtn">아이디 중복체크</button>
                    <div className="alert-box">{this.state.idCheck}</div>
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

export default Signup;