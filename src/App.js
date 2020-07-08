import React from 'react';
import './App.css';
import {GlobalProvider} from './components/GlobalState'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <GlobalProvider>
      <p>inside provider{console.log('inside provider')}</p>
      <Header/>
      <p>inside provider{console.log('inside provider')}</p>
      <div className="container">
      <p>inside container{console.log('inside container')}</p>
          <Balance/>
          <AccountSummary/>
          <TransactionHistory/>
          <AddTransaction/>
      </div>
      <p>THis is sample app</p>
    </GlobalProvider>
  )
}

export default App;
