import React from 'react';
import axios from 'axios';

export class FindIdAndPwd extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            id: '',
            idMessage:'',
            pwdMessage: '',
        }
        this.inputValueHandler = this.inputValueHandler.bind(this);
        this.searchIdHandler = this.searchIdHandler.bind(this);
        this.searchPwdHandler =this.searchPwdHandler.bind(this);
    }
    inputValueHandler = (key) => (e)=>{
        this.setState({[key]: e.target.value})
    };

    searchIdHandler(){
        const {email} = this.state;
        if(!email){
            this.setState({idMessage: "이메일을 입력해주세요."})
        }else{
            axios
            .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/find-id',
                {email: this.state.email},{withCredentials:true}
            )
            .then(res => {
                return res.data
         })
         .then(result =>{
             this.setState({
                 email: result,
                 idMessage: result
             })
         })
         .catch(err => {
             this.setState({
                 idMessage: "유효하지 않은 이메일입니다."
             })
         })      
        }

    }

    searchPwdHandler(){
        const {email, id} = this.state;
        if(!email || !id){
            this.setState({pwdMessage: "이메일과 아이디를 모두 입력해주세요."})
        }else{
            axios
            .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/find-password',
                {
                    email: this.state.email,
                    id: this.state.id
                },{
                    withCredentials:true
                }
            )
            .then(res =>{
                return res.data
            })
            .then(result =>{
                this.setState({
                    pwdMessage: "비밀번호가 등록된 이메일로 발송되었습니다."       //그리고 나서 이메일로 보내는 건 어떻게 하지?
                })
            })
            .catch(err => {
                this.setState({
                    pwdMessage: "유효하지 않은 이메일이나 아이디입니다."
                })
            })
        }
    }

    render(){
        const { email } = this.state;
        return(
            <div className="topContainer">
            <div className="findContainer">
                <h2>아이디/비밀번호 찾기</h2>
                <div className="inputField">
                    <div className = "subTitle">아이디찾기</div>
                    <input name="userEmail" type="text" placeholder="이메일을 입력하세요." />
                    <button className = "searchBtn" onClick ={this.searchIdHandler}>조회</button>
                    <div className="alert-box">{this.state.idMessage}</div>
                </div>
                <div className="inputField">
                    <div className = "subTitle">비밀번호찾기</div>
                    <input name="userEmail" type="text" placeholder="이메일을 입력하세요." />
                    <input name="userId" type="text" placeholder="아이디를 입력하세요." />
                    <button className = "searchBtn" onClick ={this.searchPwdHandler}>조회</button>
                    <div className="alert-box">{this.state.pwdMessage}</div> 
                </div>
                <button className="submitBtn">로그인하기</button> 
            </div>
            </div>
        )
    }
}

export default FindIdAndPwd;