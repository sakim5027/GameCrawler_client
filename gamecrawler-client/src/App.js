// 작성자:김현영
import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import Mypage from './pages/mypage'
import Reviews from './pages/reviews'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FindIdAndPwd from './pages/findIdAndPwd';
import { Signup } from './pages/signup';
import NewReview from './pages/newReview'
import Home from './pages/Home/home';
import Like from './pages/like';
import ModifyUserInfo from './pages/modifyUserInfo'
import CurrentGame from'./pages/CurrentGame'
import Top5Games from './pages/Home/top5Gmaes';
import Test from '../src/pages/Home/test'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: true,
      userData: {
        //userId: "gamecrawler",
        pw: "gameCrawler01",
        nickname: "Crawlers",
        email: "theCrawlers03@gmail.com",
        genre: "FPS"
      }
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
      isLogin: true,
    });
  }

  //슬안: 로그인 상태에 따라 접속 가능한 페이지가 달라지도록 설정
  render(){
    const {isLogin} = this.state;
    return (
      <BrowserRouter>
      <div className="App">
      <Header 
        isLogin={this.state.isLogin} 
        userinfo={this.state.userinfo} 
        loginHandler={this.loginHandler}
        setUserInfo={this.setUserInfo}
        logoutHandler={this.logoutHandler}
      />
      
      {isLogin ? (
        <Switch>
      
          <Route exact path="/"><Redirect to="/home"/></Route>
          <Route path="/mypage"><Mypage userData={this.state.userData}/></Route>
          <Route path="/modify"><ModifyUserInfo userData={this.state.userData}/></Route>
          <Route path="/reviews"><Reviews/></Route>
          <Route path="/writeReviews"><NewReview/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/currentGame"><CurrentGame/></Route>
          <Route path="/statistics"><Top5Games/></Route>
        </Switch>
        ) : (
        <Switch>
      
          <Route exact path="/"><Redirect to="/home"/></Route>
          <Route path="/reviews"><Reviews/></Route>
          <Route path="/findIdAndPwd" component={FindIdAndPwd}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/currentGame"><CurrentGame/></Route>
        </Switch>
        )}
      
      </div>
      <Footer/>
      </BrowserRouter>
    )
  }
}


export default App;
