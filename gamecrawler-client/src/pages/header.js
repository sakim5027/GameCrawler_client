import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom' //dev에 설치해야 함


class Header extends React.Component {
    constructor(props){
        super(props);
        // this.state={
        //     isLogin: true,
        //     userinfo: null
        // }
    this.barHandler = this.barHandler.bind(this);
}
barHandler(){
    const toggleBtn =document.querySelector('.navToggleBtn');
    const navMenu = document.querySelector('.navMenu');
    const loginMenu = document.querySelector('.navLoginMenu');
    
    toggleBtn.addEventListener('click', ()=>{
        navMenu.classList.toggle('active') //loginMenu의 classList 중에 active 클래스를 토글링한다.
        loginMenu.classList.toggle('active') 
    });
}
render() {
    // const { nickname } = this.state.userinfo;
    // const {isLogin} = this.state
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
                {/* {isLogin? (
                    <div>
                    <li> {nickname}</li>
                    <li><Link to="/mypage">My page</Link></li>
                    <li><Link to="/">Logout</Link></li>
                    </div>
                ):(
                    <li><Link to="/login">Login</Link></li>
                )} */}
                <li className="loginUser"> username</li>
                <li><Link to="/mypage">My page</Link></li>
                <li><Link to="/login">Login</Link></li>

            </ul>
            <a href="javascript:void(0);" className="navListBtn" onClick={this.barHandler}>  {/* 이 버튼을 누르면 목록이 나타나도록 js 적용*/}
            <FontAwesomeIcon icon={ faBars } />
            </a>
            
        </nav>
    )

}
}



export default Header;