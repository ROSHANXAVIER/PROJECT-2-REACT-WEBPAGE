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
                      <div>
                <div>
                  <button class="btn">
                    <span class="btn__inner">
                      <span class="btn__slide"></span>
                      <span class="btn__content">HOME</span>
                    </span>
                  </button>
                </div>
              </div>
          </Link>
          <Link className='Avatar' style={navStyle}   to='/About'>

          <div>
                <div>
                  <button class="btn">
                    <span class="btn__inner">
                      <span class="btn__slide"></span>
                      <span class="btn__content">AVATARS</span>
                    </span>
                  </button>
                </div>
              </div>
            
          </Link>
        </ul>
        </nav> 

  );
}

export default Nav;
