import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useShop from './ShopContext';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from "./components/Payment"



function App() {
  const { updateUserStatus } = useShop();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The User is >>>", authUser)
      updateUserStatus(authUser);
    })
  }, [])

  return (

    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/payment" element={<><Header /><Payment /></>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
