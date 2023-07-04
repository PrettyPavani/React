import './App.css';
import './Styles/Navbar.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './Components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/menu' element = {<Menu/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
