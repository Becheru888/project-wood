import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components';
import Logo from './assets/Logo2.png';
import Home from './pages/home';
import Galerie from './pages/galerie';
import About from './pages/about';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
    <div className="App">
       <div className='navigation'>
       <img className='logo' src={Logo}/>
        <ul>
              <li><Link to='/'>Acasa</Link></li>
              <li><Link to='/about'>Galerie</Link></li>
              <li><Link to='/about'>Despre noi</Link></li>
              <li><Link to='/contact'>Contactează-ne</Link></li>
          </ul>
        </div>
        <Home/>
        <Galerie/>
        <About/>
        <Contact/>
         <div className='footer'>
           <h1>Footer</h1>
         </div>
         <MessengerCustomerChat
            pageId="104531298671508"
            appId="3002503663370675"
         />
    </div>
    </Router>
  );
}

export default App;
