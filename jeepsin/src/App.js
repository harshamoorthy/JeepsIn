import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarComponent from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Pages/SignupPage'
import Login from './Pages/Login';
import CartPage from './Pages/CartPage';


function App(){
  return(
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Routes>
          <Route path='/' exact Component={HomePage}/>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
