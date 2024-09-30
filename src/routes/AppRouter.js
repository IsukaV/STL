import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginForm from '../screens/Login';
import HomePage from '../screens/HomePage';
import Authentication from "../screens/Authentication";
import Bills from "../screens/Bills";
import Services from "../screens/Services";
import SignUp from "../screens/Signup"
import Payment from "../screens/Payment"

const AppRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Authentication/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/bils" element={isAuthenticated ? <HomePage /> : <LoginForm />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;