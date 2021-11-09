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
import { initialState,reducer } from './reducers/Usereducer';
import Logout from './components/Logout';
export  const UserContext = createContext()


Modal.setAppElement('#root')
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
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
      <Route path = '/LogOut'>
        <Logout/>
      </Route>
      </Switch>
      </UserContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
