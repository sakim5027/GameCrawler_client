import React from 'react';
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import Login from './pages/login';
import Mypage from './pages/mypage'
import Reviews from './pages/reviews'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false
    }
  };

  render(){
    const {isLogin} = this.state;
    return (

      <BrowserRouter>
      <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={ ()=>{
          if(isLogin){
            return <Redirect to="/mypage" />
          }return <Redirect to="./login"/>
      }}
    />
        <Route path="/login"><Login/></Route>
        <Route path="/mypage"><Mypage/></Route>
        <Route path="/reviews"><Reviews/></Route>
      </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
    )
  }
}

  

export default App;
