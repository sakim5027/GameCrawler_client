//작성자:김슬안
import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group-input">
        <label htmlFor="name">ID</label>
        <input 
          className="form-input" 
          id="userId" 
          placeholder="Enter your ID"
        />
      </div>

      <div className="form-group-input">
        <label htmlFor="email">Password</label>
        <input
          className="form-input"
          id="userPassword"
          placeholder="Enter your Password"
        />
      </div>


      <div className="form-group">
        <button className="form-btn">
          Login
        </button>

        <button className="form-btn">
          회원가입
        </button>
      </div>

      <div>
        <button className="form-btn">
          아이디/비밀번호 찾기
        </button>
      </div>
    </form>
  );
};
export default Form;