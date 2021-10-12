import './App.css';
import React from 'react';
import Profile from './components/Profile/Profile.js';
import user from '../src/resources/user.json';
import Friends from "../src/components/FriendsList/Friends";
import friends from "../src/resources/friends.json";
import Statistics from "../src/components/Statistics/Statistics";
import statisticalData from "../src/resources/statistic-data.json";
import transactions from "../src/resources/transactions.json";
import TransactionHistory from "../src/components/Transactions/TransactionHistory"

function App() {
  return (
    <>
      <Profile
        userName={user.userName}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Friends friends={friends}/>
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
export default App;
