import './App.css';
import { Route ,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Contact from './components/Contact';
import  Modal  from 'react-modal';
import { createContext,useReducer } from 'react';


Modal.setAppElement('#root')
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Switch>
      <Route exact path = '/'>
        <Home/>
      </Route>
      <Route path = '/profile'>
        <Profile></Profile>
      </Route>
      <Route path = '/SignUp'>
        <Signup/>
      </Route>
      <Route path = '/LogIn'>
        <Login/>
      </Route>
      <Route path = '/ContactUs'>
        <Contact/>
      </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
