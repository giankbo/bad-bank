import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.css';
import AllData from './alldata';
import Balance from './balance';
import {UserContext} from './context';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Home from './home';
import Login from './login';
import NavBar from './navbar';
import Withdraw from './withdraw';

// Routes https://reactrouter.com/docs/en/v6/components/routes

export default function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{users:[{name:'abel', email:'abel.mit.edu', password:'secret', balance:100}]}}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/CreateAccount/' element={<CreateAccount />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/deposit/' element={<Deposit />} />
          <Route path='/withdraw/' element={<Withdraw />} />
          <Route path='/balance/' element={<Balance />} />
          <Route path='/alldata/' element={<AllData />} />
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
}