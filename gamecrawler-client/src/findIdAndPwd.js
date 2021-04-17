import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class FindIdAndPwd extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            id: '',
            idErrorMessage:'',
            pwdErrorMessage: '',
        }
        this.searchIdHandler = this.searchIdHandler.bind(this);
        this.searchPwdHandler =this.searchPwdHandler.bind(this);
    }
    searchIdHandler(){
        const {email} = this.state;
        if(!email){
            this.setState({idErrorMessage: '이메일을 입력해주세요.'})
        }else{
            axios
            .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/find-id',
                {
                    email: this.state.email
                },{
                    withCredentials:true
                }
            )
            .then(res => {
                //조회된 아이디를 표시한다. 어떤 데이터 안에 들어 있지? 데이터가 어떻게 생겼지?
         })
        }

    }

    searchPwdHandler(){
        const {email, id} = this.state;
        if(!email || !id){
            this.setState({pwdErrorMessage: '이메일과 아이디를 모두 입력해주세요.'})
        }else{
            axios
            .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/find-password',
                {
                    email: this.state.email,
                    id: this.state.id
                },{
                    withCredentials:true
                }
            ).then()// 조회된 비밀번호를 이메일로 보낸다.
        }
    }

    render(){
        return(
            <div className="findContainer">
                <h2>아이디/비밀번호 찾기</h2>
                <div className="inputField">
                    <div className = "subTitle">아이디찾기</div>
                    <input name="userEmail" type="text" placeholder="이메일을 입력하세요." />
                    <button className = "searchBtn" onClick ={this.searchIdHandler}>조회</button>
                    <div className="alert-box">{this.state.idErrorMessage}</div>
                    <div className="searchResult">조회된 아이디: </div>
                </div>
                <div className="inputField">
                    <div className = "subTitle">비밀번호찾기</div>
                    <input name="userEmail" type="text" placeholder="이메일을 입력하세요." />
                    <input name="userId" type="text" placeholder="아이디를 입력하세요." />
                    <button className = "searchBtn" onClick ={this.searchPwdHandler}>조회</button>
                    <div className="alert-box">{this.state.pwdErrorMessage}</div>
                    <div className="searchResult">조회된 비밀번호: </div>
                </div>
                <button className="homeBtn">Home</button> 
            </div>
        )
    }
}

export default FindIdAndPwd;