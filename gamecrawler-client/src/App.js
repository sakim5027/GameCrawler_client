// 작성자:김현영
import React, {useState} from 'react';
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import Mypage from './pages/mypage'
import Reviews from './pages/reviews'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FindIdAndPwd from './pages/findIdAndPwd';
import { Signup } from './pages/signup';
import GameSearch from './pages/Home/homeGameSearch'
import NewReview from './pages/newReview'
import HomeGameSearch from './pages/Home/homeGameSearch';
import Like from './pages/like';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      userinfo: '',
    }
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  };

  loginHandler() {
    this.setState({
      isLogin: true,
    });
  }

  setUserInfo(object) {
    this.setState({ userinfo: object });
  }

  logoutHandler() {
    this.setState({
      isLogin: true,
    });
  }

  render(){
    const {isLogin} = this.state;
    return (
      <BrowserRouter>
      <div className="App">
      <Header isLogin={this.state.isLogin} userinfo={this.state.userinfo}/>
      <Switch>
        {/* <Route exact path="/" render={ ()=>{
          if(isLogin){
            return <Redirect to="/mypage"/>
          }return <Redirect to="/home"/>
      }} 
     /> */}
        <Route exact path="/"><Redirect to="/home"/></Route>
        <Route path="/mypage"><Mypage/></Route>
        <Route path="/reviews"><Reviews/></Route>
        <Route path="/findIdAndPwd" component={FindIdAndPwd}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/home"><HomeGameSearch/></Route>

      </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
    )
  }
}


export default App;
