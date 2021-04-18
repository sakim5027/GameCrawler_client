//작성자:김슬안
import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="topContainer">
      <div className="loginContainer">
        <h2>Login</h2>
        <div className="loginField">
          <div className = "subTitle">ID</div>
          <input name="userId" type="text" placeholder="Enter your ID"/>
          <div className = "subTitle">Password</div>
          <input name="userPassword" type="text" placeholder="Enter your Password"/> 
        </div>
        <div className="buttonField">
            <button className="loginSubmitBtn">Login</button>
            <button className="loginSubmitBtn">회원가입</button>
            <button className="loginSearchBtn">아이디/비밀번호 찾기</button>
          </div>
      </div>
      </div>
    </form>
  );
};
export default Form;