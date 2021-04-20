// 작성자:김현영
import React, {useState} from 'react';
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import Mypage from './pages/mypage'
import Reviews from './pages/reviews'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FindIdAndPwd from './pages/findIdAndPwd';
import { Container } from './pages/Login/Container'
import { Signup } from './pages/signup';
import GameList from './pages/Home/gameList';   //home


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: true,
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
      <Header isLogin={this.state.isLogin} userinfo={this.state.userinfo}/>
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

// const App=() =>{
//   const [games, setGames] = useState([
//     {"title":"Game #1", "genre" : "sports", "img":"https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460"},
//     {"title":"Game #2", "genre" : "action", "img":"https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_styleA_original_film_art_d26e81c0-1b87-4076-9da4-9fcdc0389ea5_1200x.jpg?v=1607475298"},
//     {"title":"Game #3", "genre" : "sports", "img": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289"},
// ])

// return ( 
//     <div>
//       <GameList games={games}/>
//     </div>
//   )
// }

export default App;
