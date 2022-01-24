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
                  <button className="btn">
                    <span className="btn__inner">
                      <span className="btn__slide"></span>
                      <span className="btn__content">HOME</span>
                    </span>
                  </button>
                </div>
              </div>
          </Link>
          <Link className='Avatar' style={navStyle}   to='/About'>

          <div>
                <div>
                  <button className="btn">
                    <span className="btn__inner">
                      <span className="btn__slide"></span>
                      <span className="btn__content">AVATARS</span>
                    </span>
                  </button>
                </div>
              </div>
            
          </Link>
          <Link className='Avatar' style={navStyle}   to='/Guns'>

<div>
      <div>
        <button className="btn">
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">WEAPONS</span>
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
