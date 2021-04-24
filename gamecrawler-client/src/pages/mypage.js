import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


function Mypage(props) {
  function logoutRequester() {
    axios
      .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/user/logout', null, {
        'Content-Type': 'application/json',
        withCredentials: true,
      })
      .then(() => props.logoutHandler())
      .catch((e) => alert(e));
  }
  return props.userData == null ? (
    <div>waiting...</div>
  ) : (
    <div>
      <div className='mypageContainer'>
        <div>
          <span className='title'>Mypage</span>
        </div>
        <br />
        <hr />
        <br />
        <br />
        <br />
        <div>
          안녕하세요, <span className='name'>{props.userData.nickname}</span>님!
        </div>

        <br />
        <br />
        <div className = "mypageSmallContainer">
            <div>
                <h2>User Info</h2>
                <br />
                <hr />
                <br />
            </div>
            <br />
            <div >
            <span>사용자 닉네임: </span> {props.userData.nickname}
            </div>
            <br />
            <div >
            <span >사용자 이메일: </span> {props.userData.email}
            </div>
            <br />
            <div >
            <span >가장 관심있는 장르: </span> {props.userData.genre}
            </div>
            <br />
            <br />
            <div>
            <Link to='/modify'><input type='button' className = "submitBtn" value='회원정보 수정' /></Link>
            </div>
            


        </div>
        
      </div>
    </div>
  );
}

export default Mypage;