import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route exact path='/' element=  {<Home/>}/>
      <Route path='/about' element=  {<About/>}/>
      <Route path='/contact' element=  {<Contact/>}/>
      <Route path='/login' element=  {<Login/>}/>
      <Route path='/register' element=  {<Register/>}/>
      <Route path='*' element=  {<Error/>}/>
    </Routes>
   
    <Footer/>
    
   
    </>
  );
}

export default App;
