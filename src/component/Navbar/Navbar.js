import './Navbar.css';
import logo from '../../assets/logo.svg';
import burger from '../../assets/burger.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };
  return (
    <>
      <div className='navbar-container'>
        <img src={logo} alt='logo' />

        <img src={burger} className='burger' alt='burger' onClick={handleNavbar} />
        <div className='navbar-item-container'>
          <Link to='/'>Home</Link>
        </div>
      </div>
      {show && (
        <div className='responsive-navbar-item-container'>
          <Link to='/'>Home</Link>
        </div>
      )}
    </>
  );
};
