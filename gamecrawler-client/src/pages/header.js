import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <nav className = "nav">
            <div className="navLogo">
                <FontAwesomeIcon icon={ faConnectdevelop} />
                <a href="#"> Game Crawler </a>
            </div>
            <ul className="navMenu">
                <li><a href="#">리뷰게시판</a></li>
                <li><a href="#">통계</a></li>
            </ul>
            <ul className="navLoginMenu">
                <li><a href="#">Login</a></li>   
                <li><a href="#">Username</a></li> 
                <li><a href="#">My Page</a></li> 
                <li><a href="#">Logout</a></li>  
            </ul>
            <a href="#" className="navListBtn">   {/* a href=""로 빈칸으로 두니 햄버거 눌러도 메뉴가 일시적으로 나왔다가 사라져버렸음*/}
            <FontAwesomeIcon icon={ faBars } />
            </a>
        </nav>
    )
    
}


export default Header;