import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
  const navStyle={
    color:'white'
  };

  return (
    <nav>
        <ul className='Navlist'>
        <Link style={navStyle} to='/'>
            <li>HOME</li>
          </Link>
          <Link className='Avatar' style={navStyle} to='/About'>
            <li>AVATARS</li>
          </Link>
        </ul>
    </nav> 
  );
}

export default Nav;
