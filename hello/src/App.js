import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/About'; 
import AvatarDetail from './components/avatarDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guns from './components/Guns';
import Gunsdetail from './components/Gunsdetail';

function App() {
  const html = document.querySelector('html');
const logo = document.querySelector('.logo');
const text = document.querySelector('h1');

html.addEventListener('click', () => {
  logo.style.webkitAnimation = 'none';
  text.style.webkitAnimation = 'none';
  setTimeout(function() {
    logo.style.webkitAnimation = '';
    text.style.webkitAnimation = '';
  }, 10);
});
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/About" exact element={<About/>}/>
          <Route path="/About/:id" element={<AvatarDetail/>}/>
          <Route path="/Guns" exact element={<Guns/>}/>
          <Route path="/Guns/:id" element={<Gunsdetail/>}/>
        </Routes>
      </div> 
    </Router>
  );
}

const Home = () =>(
  <div className='positionlogo'>
    <div class="logo">
  <div class="first"></div>
  <div class="second"></div>
</div>
    <h1 className='valorant'>VALORANT +</h1>
  </div>

);

export default App;
