import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Contact from './components/Contact';
import  Modal  from 'react-modal';


Modal.setAppElement('#root')
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path = '/'>
        <Home></Home>
      </Route>
      <Route path = '/profile'>
        <Profile></Profile>
      </Route>
      <Route path = '/SignUp'>
        <Signup></Signup>
      </Route>
      <Route path = '/LogIn'>
        <Login></Login>
      </Route>
      <Route path = '/ContactUs'>
        <Contact/>
      </Route>
      <Footer></Footer>
    </div>
  );
}

export default App;
