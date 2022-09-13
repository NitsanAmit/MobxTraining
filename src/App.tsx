import React from 'react';
import './App.css';
import { TeamOrdersBoard } from './without-mobx/TeamOrdersBoard';
import { TeamOrdersBoardMobx } from './with-mobx/TeamOrdersBoardMobx';

function App() {
  return (
    <div className="App">
      <TeamOrdersBoard/>
    </div>
  );
}

export default App;
