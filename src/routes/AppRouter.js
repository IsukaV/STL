import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginForm from '../screens/Login';
import HomePage from '../screens/HomePage';

const AppRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <LoginForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;