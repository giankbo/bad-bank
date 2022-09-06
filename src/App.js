import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import AllData from './alldata';
import { UserContextProvider } from './context';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Footer from './footer';
import Home from './home';
import Login from './login';
import NavBar from './navbar';
import Withdraw from './withdraw';
import './App.css';

export default function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContextProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/CreateAccount/' element={<CreateAccount />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/deposit/' element={<Deposit />} />
          <Route path='/withdraw/' element={<Withdraw />} />
          <Route path='/alldata/' element={<AllData />} />
        </Routes>
      </UserContextProvider>
      <Footer />
    </HashRouter>
  );
}

// Updated version https://reactrouter.com/docs/en/v6/components/routes
