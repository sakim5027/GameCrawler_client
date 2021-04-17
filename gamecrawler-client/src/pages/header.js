import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom' //dev에 설치해야 함

function Header(props) {
    return (
        <nav className = "nav">
            <div className="navLogo">
                <FontAwesomeIcon icon={ faConnectdevelop} />
                <Link to="/"> Game Crawler </Link> {/* a태그와 비슷한데 history에 스택이 저장됨 */}
            </div>
            <ul className="navMenu">
                <li><Link to="/reviews">리뷰게시판</Link></li>
                <li><Link to="/statistics">통계</Link></li>
            </ul>
            <ul className="navLoginMenu"> 
                <li><Link to="">Username</Link></li>  {/* 로그인 상태일 경우 username 표시*/}
                <li><Link to="/mypage">My Page</Link></li> 
                <li><Link to="/login">Login</Link></li>  {/* 로그인 상태일 경우 Logout으로 변경하기 */}
            </ul>
            <a href="#" className="navListBtn">   {/* 이 버튼을 누르면 목록이 나타나도록 js 적용*/}
            <FontAwesomeIcon icon={ faBars } />
            </a>
        </nav>
    )
    
}


export default Header;