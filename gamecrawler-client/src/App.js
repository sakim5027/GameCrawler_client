// 작성자:김현영
import React from 'react';
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import Mypage from './pages/mypage'
import Reviews from './pages/reviews'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FindIdAndPwd from './pages/findIdAndPwd';
import { Container } from './pages/Login/Container'
import { Signup } from './pages/signup';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      userinfo: null
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
    this.setState({ userData: object });
  }

  logoutHandler() {
    this.setState({
      isLogin: false,
    });
  }

  render(){
    const {isLogin} = this.state;
    
    return (

      <BrowserRouter>
      <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={ ()=>{
          if(isLogin){
            return <Redirect to="/"/>
          }return <Redirect to="/login"/>
      }}
    />
        <Route path="/login" component={Container}></Route>
        <Route path="/mypage"><Mypage/></Route>
        <Route path="/reviews"><Reviews/></Route>
        <Route path="/findIdAndPwd" component={FindIdAndPwd}></Route>
        <Route path="/signup" component={ Signup }></Route>
      </Switch>
      </div>
      
      <Footer/>
      </BrowserRouter>
    )
  }
}

  

export default App;
