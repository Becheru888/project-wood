import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Logo from './assets/logov3.svg';
import Home from './pages/home';
import Galerie from './pages/galerie';
import About from './pages/about';
import Contact from './pages/contact';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function App() {
  return (
    <div className="App">
       <div className='navigation'>
       <img className='logo' src={Logo} width='80px'/>
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
           <small style={{display:'flex', justifyContent:'center', padding:'10px'}}>© Copyright 2021 All rights reserved</small>
         </div>
         <MessengerCustomerChat
            pageId="104531298671508"
            appId="3002503663370675"
         />
    </div>
  );
}

export default App;
