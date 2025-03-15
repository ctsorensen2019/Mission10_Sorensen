import { useState } from 'react';
import './App.css';
import BowlHeading from './BowlHeading';
import BowlerList from './BowlerList';

function App() {
  return (
    <>
      <BowlHeading />
      <BowlerList />
    </>
  );
}

export default App;
