//작성자:김슬안
import React from 'react';
import ReactDOM from 'react-dom';
import { LoginForm } from '../LoginForm';
import FocusTrap from 'focus-trap-react';

export const Modal = ({
  modalRef,
  buttonRef,
  closeModal,
  onSubmit
}) => {
  return ReactDOM.createPortal( //포커스가 모달 안에만 있도록 focusTrap 사용
    <FocusTrap>  
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
      >
        <div className="modal-area" ref={modalRef}>
          <button   //close 버튼
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <LoginForm /> 
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;