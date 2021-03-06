//작성자:김슬안
import React, { Component } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton'; //헤더의 로그인 버튼


export class Container extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShown: false //기본값은 false
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleScrollLock = this.toggleScrollLock.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  showModal = () => {
    this.setState({ isShown: true }, () => { //showModal이 실행되면 state가 true로 바뀜
      this.closeButton.focus(); //포커스는 닫기 버튼에 가있음
    })
    this.toggleScrollLock();//모달이 실행되는동안 바탕화면은 lock됨
  };

  closeModal = (e) => {
    e.stopPropagation();
    this.setState({ isShown: false }); //closeModal이 실행되면 state가 false로 바뀜
    this.toggleScrollLock();
  };

  toggleScrollLock = () => { //바탕화면 스크롤 lock
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  onSubmit = (event) => {
    event.preventDefault(event);
    this.closeModal();
  };

  
  render(){
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerText={this.props.triggerText}
        />

        {this.state.isShown ? (<Modal
          onSubmit={this.onSubmit}
          modalRef={(n) => (this.modal = n)}
          buttonRef={(n) => (this.closeButton = n)} 
          closeModal={this.closeModal}
        />) : null}
      </React.Fragment>
      
    );
  }
}

export default Container;