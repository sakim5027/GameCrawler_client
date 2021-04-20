// 작성자:김현영
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom' //dev에 설치해야 함
import { Container } from './Login/Container'



class Header extends React.Component {
    constructor(props){
        super(props);

    this.navBarHandler = this.navBarHandler.bind(this);
}

navBarHandler(){
    const navMenu = document.querySelector(".navMenu");
    const navLoginMenu = document.querySelector(".navLoginMenu");
    navMenu.classList.toggle('active') //navMenu의 classList 중에 active 클래스를 토글링한다.
    navLoginMenu.classList.toggle('active') 
}
render() {

    //슬안님 작성 부분
    const triggerText = 'Login';
    const onSubmit = (event) => {
        event.preventDefault(event);
    };
    
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
                {/* {this.props.isLogin? (
                    <div>
                    <li> {nickname}</li>
                    <li><Link to="/mypage">My page</Link></li>
                    <li><Link to="/">Logout</Link></li>
                    </div>
                ):(
                    <li><Link to="/login">Login</Link></li>
                )} */}
                <li className="loginUser"> username</li>    {/* userinfo에서 가져온 nickname을 넣어야하는데 어떻게 가져오지? */}
                <li><Link to="/mypage">My page</Link></li>
                <li><Link to="/login"><Container triggerText={triggerText} onSubmit={onSubmit}/></Link></li>

            </ul>
            <a href="#" className="navListBtn" onClick={this.navBarHandler}>  {/*} 이 버튼을 누르면 목록이 나타나도록 js 적용 */}
            <FontAwesomeIcon icon={ faBars } />
            </a>
            
        </nav>
    )}



}


export default Header;