import React from 'react'
import './Header.css'
// import Logo from '../../assets/logo.png'
import gym from '../../assets/gym.jpeg'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">
      <img src={gym} alt="" className='logo' srcset="" />
      {menuOpened === false && mobile === true ? (
        <div style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}

        onClick={()=> setMenuOpened(true)}>

          <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
      <ul className='header-menu'>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}

          to='home'
          spy={true}
          smooth={true}
          >Home</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}

          to='programs'
          spy={true}
          smooth={true}
          >Program</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}

          to='reasons'
          spy={true}
          smooth={true}
          >Why us</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}

          to='plan'
          spy={true}
          smooth={true}
          >Plan</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}

          to='testimonials'
          spy={true}
          smooth={true}
          >Testimonials</Link>
        </li>
      </ul>)}


    </div>
  )
}

export default Header