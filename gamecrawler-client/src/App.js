import React from 'react';
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
const toggleBtn =document.querySelector('.navToggleBtn');
const navMenu = document.querySelector('.navMenu');
const loginMenu = document.querySelector('.navLoginMenu');

class App extends React.Component {
  constructor(props){
    super(props);
  };

  render(){
    return (
      <div>
      <Header />
      <h1>Hello World!</h1>
      <h2>Welcome to Game Crawler!</h2>
      <Footer />
    </div>
  );
}
}

export default App;
