import React from 'react';
import './App.css';
import { Container } from './Container';


function App() {
  const triggerText = 'Login';
  const onSubmit = (event) => {
    event.preventDefault(event);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Welcome to Game Crawler!</h2>
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
