import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/About'; 
import AvatarDetail from './components/avatarDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/About" exact element={<About/>}/>
          <Route path="/About/:id" element={<AvatarDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

const Home = () =>(
  <div>
    <h1>HOME PAGE</h1>
  </div>

);

export default App;
