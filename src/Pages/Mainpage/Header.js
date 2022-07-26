import React from 'react';
import './Css_folder/Header.css';

function Header() {
  return (
    <div className='header-wrapper' >
      <h1 className='main-heading'> Zero.<span>Academy</span> </h1>

      <div className='pages'>
        <a href='/' className='main-page'> Главная </a>
        <a href='/' className='courses'> Курсы </a>
        <a href='/' className='about-us'> О нас </a>
      </div>
      <div className='buttons'>
        <button className='login'>Login</button>
        <button className='signup'>Sign up</button>
      </div>
    </div>
  )
}

export default Header
