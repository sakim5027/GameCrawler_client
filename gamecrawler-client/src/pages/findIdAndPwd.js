// 작성자:김현영
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FindIdAndPwd extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            emailForPwd: '',    //inputValueHandler에서 input 박스의 name:value로 state를 업데이트하는데 아이디찾기와 비밀번호 찾기에서 같은 email state를 쓰니까 두 개 동시에 입력이 됨
            userid: '',
            idMessage:'',
            pwdMessage: '',
        }
        this.inputValueHandler = this.inputValueHandler.bind(this);
        this.searchIdHandler = this.searchIdHandler.bind(this);
        this.searchPwdHandler =this.searchPwdHandler.bind(this);
    }


    searchIdHandler(){
        const {email} = this.state;
        if(!email){
            this.setState({idMessage: "이메일을 입력해주세요."})
        }else{
            axios
            .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/find-id', //env 에 서버 주소 적어놓고 갖다 쓰기
                {email: this.state.email},{withCredentials:true}
            )
            .then(res =>{
                return res.data     // response에서 user_id는 data에 들어있음
            })
            .then(user_id =>{
                this.setState({
                    userid: user_id
                }) 
            })
            .catch(err => {
                this.setState({
                    idMessage: "유효하지 않은 이메일입니다"
                })
            })
        }

    }
   

    inputValueHandler(e){
        this.setState({[e.target.name]: e.target.value})
    };

    searchPwdHandler(){
        const {emailForPwd, userid} = this.state;
        if(!emailForPwd || !userid){
            this.setState({pwdMessage: "이메일과 아이디를 모두 입력해주세요."})
        }else{
            axios
            .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/find-password',
                {
                    email: this.state.emailForPwd,
                    user_id: this.state.userid
                },{
                    withCredentials:true
                }
            )
            .then(res =>{
                console.log(res)
                return res.data
            })
            .then(result =>{
                this.setState({
                    pwdMessage: "비밀번호가 등록된 이메일로 발송되었습니다."       //그리고 나서 이메일로 보내는 건 어떻게 하지?
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    pwdMessage: "유효하지 않은 이메일이나 아이디입니다."
                })
            })
        }
    }

    render(){
        const {email,emailForPwd,userid} = this.state;
        return(
            <div className="topContainer">
            <div className="findContainer">
                <h2>아이디/비밀번호 찾기</h2>
                <div className="inputField">
                    <div className = "subTitle">아이디찾기</div>
                    <input name="email" value={email} type="text" placeholder="이메일을 입력하세요." onChange={(e)=>this.inputValueHandler(e)} />
                    <button className = "searchBtn" onClick ={this.searchIdHandler}>조회</button>
                    <div className="alert-box">{this.state.idMessage}</div>
                </div>
                <div className="inputField">
                    <div className = "subTitle">비밀번호찾기</div>
                    <input name="emailForPwd" value={emailForPwd} type="text" placeholder="이메일을 입력하세요." onChange={(e)=>this.inputValueHandler(e)}/>
                    <input name="userid" value={userid} type="text" placeholder="아이디를 입력하세요." onChange={(e)=>this.inputValueHandler(e)}/>
                    <button className = "searchBtn" onClick ={this.searchPwdHandler}>조회</button>
                    <div className="alert-box">{this.state.pwdMessage}</div> 
                </div>
                <Link to="/login"><button className="submitBtn">로그인하기</button></Link>
            </div>
            </div>
        )
    }
}

export default FindIdAndPwd;