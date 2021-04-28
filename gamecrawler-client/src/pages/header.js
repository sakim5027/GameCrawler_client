// 작성자:김현영
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom' //dev에 설치해야 함
import { Container } from './Login/Container'
import axios from 'axios';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.navBarHandler = this.navBarHandler.bind(this);
        this.logoutRequester = this.logoutRequester.bind(this);
    }

navBarHandler(){
    const navMenu = document.querySelector(".navMenu");
    const navLoginMenuDiv = document.querySelector(".navLoginMenu div");
    navMenu.classList.toggle('active') //navMenu의 classList 중에 active 클래스를 토글링한다.
    navLoginMenuDiv.classList.toggle('active') 
}

//슬안: 로그아웃 기능 구현
logoutRequester() {
    axios
      .post('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/user/logout', null,{
        withCredentials: true,
      })
      .then(() => this.props.logoutHandler())
      .catch((e) => alert(e));
  }
render() {

    //슬안님 작성 부분
    const triggerText = 'Login';
    
    
    return (
        <nav id="nav" className = "nav">
            <div className="navLogo">
                <FontAwesomeIcon icon={ faConnectdevelop} />
                <Link to="/"> Game Crawler </Link> {/* a태그와 비슷한데 history에 스택이 저장됨 */}     
            </div>
            <ul className="navMenu">
                <li><Link to="/reviews">리뷰게시판</Link></li>
                <li><Link to="/statistics">통계</Link></li>
            </ul>
            <ul className="navLoginMenu"> 
                {this.props.isLogin? (
                    <div>
                        <li className="loginUser"> {this.props.userinfo}</li>
                        <li><Link to="/mypage">My page</Link></li>
                        <li><Link to="/"><input type='button' className="navLoginBtn" value='Logout' onClick = {this.logoutRequester} /></Link></li>
                    </div>
                ):(
                    <div><li><Container triggerText={triggerText}/></li></div>
                )}
            </ul>
            <a href="#" className="navListBtn" onClick={this.navBarHandler}>  {/*} 이 버튼을 누르면 목록이 나타나도록 js 적용 */}
            <FontAwesomeIcon icon={ faBars } />
            </a>
            
        </nav>
    )}



}


export default Header;