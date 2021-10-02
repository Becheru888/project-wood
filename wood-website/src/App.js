import './App.css';
import Logo from './assets/Logo2.png';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/home';
import Services from './pages/services';
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
        <Services/>
        <About/>
        <Contact/>
         <div className='footer'>
           <h1>Footer</h1>
         </div>
    </div>
    </Router>
  );
}

export default App;
