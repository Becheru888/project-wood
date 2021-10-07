import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import styled from 'styled-components';
import Logo from './assets/Logo2.png';
import Home from './pages/home';
import Galerie from './pages/galerie';
import About from './pages/about';
import Contact from './pages/contact';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function App() {
  return (
    <div className="App">
       <div className='navigation'>
       <img className='logo' src={Logo}/>
        <ul>
              <li><Link to='home' smooth={true} duration={1000}>Acasa</Link></li>
              <li><Link to='galery' smooth={true} duration={1000}>Galerie</Link></li>
              <li><Link to='about' smooth={true} duration={1000}>Despre noi</Link></li>
              <li><Link to='contact' smooth={true} duration={1000}>Contactează-ne</Link></li>
          </ul>
        </div>
        <Home/>
        <Galerie/>
        <About/>
        <Contact/>
         <div className='footer'>
           <small style={{display:'flex', justifyContent:'center'}}>© Copyright 2021 All rights reserved</small>
         </div>
         <MessengerCustomerChat
            pageId="104531298671508"
            appId="3002503663370675"
         />
    </div>
  );
}

export default App;
