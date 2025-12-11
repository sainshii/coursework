import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Merch from './components/Merch';
import TestUserLogin from './components/TestUserLogin';
import CartPage from './components/CartPage';
import Home from './components/Home';
import History from './components/History';
import Plot from './components/Plot';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/history" element = {<History />} />
          <Route path = "/plot" element = {<Plot />} />
          <Route path = "/merch" element = {<Merch />} />
          <Route path = "/cart" element = {<CartPage />} />
          <Route path = "/login" element = {<TestUserLogin />} />
          <Route path = "*" element = {<Navigate to = "/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
