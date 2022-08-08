import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllData from './alldata';
import Balance from './balance';
import Context from './context';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Home from './home';
import Login from './login';
import NavBar from './navbar';
import Withdraw from './withdraw';


export default function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path='/CreateAccount/' component={CreateAccount} />
        <Route path='/login/' component={Login} />
        <Route path='/deposit/' component={Deposit} />
        <Route path='/withdraw/' component={Withdraw} />
        <Route path='/balance/' component={Balance} />
        <Route path='/alldata/' component={AllData} />  
      </Routes>
    </HashRouter>
  );
}