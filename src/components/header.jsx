import { useState, useEffect, Component } from 'react';
import logo from '../assets/logo.svg'; 
import { Link } from 'react-router-dom';

export default function Header() {
    const [activeNav, setActiveNav] = useState(false);
    useEffect(()  => {
       if(activeNav){
        document.body.classList.add('lock');
       } else document.body.classList.remove('lock');
    }, [activeNav]);


  return (
    <header className='header'>
    <div className="header__container">
      <div className="header__logo"><img className='header__logo' src={logo} alt="logo"/><p>NYT Info</p></div>
      <nav className={activeNav ? "header__nav active":'header__nav'}>
        <ul>
          <li> <Link onClick={()=>setActiveNav(false)}to='/' className='header__link'>Home</Link></li>
          <li> <Link onClick={()=>setActiveNav(false)}to='/books' className='header__link'>Books</Link></li>
          <li> <Link onClick={()=>setActiveNav(false)}to='/articles' className='header__link'>Articles</Link></li>
        </ul>
      </nav>
      <button className={activeNav ? "header__btn active":'header__btn'} onClick={()=>setActiveNav(!activeNav)}><span></span></button>
    </div>
   </header>
     
  )
}