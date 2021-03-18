import React from 'react'

import Door from './components/Door'

function App() {
  return (
    <div className="app">
      <h1>Problema Monty Hall</h1>
      <Door number= "1" hasGift ={false}/>
    </div>
  );
}

export default App;
