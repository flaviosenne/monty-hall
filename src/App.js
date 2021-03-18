import React, { useState } from 'react'

import Door from './components/Door'

function App() {

  const [started, setStarted] = useState(false)
  const [portsAmount, setPortsAmount] = useState(3)
  const [selectedPort, setSelectedPort] = useState(null)
  const [list, setList] = useState([])
  

  function resetList(){
    setList([])
    setStarted(false)
  }

  function cont(){
    setStarted(true)
    for (let i =1; i<= portsAmount; i++){
      list.push(i)
    }
  }

  return (
    <div className="app">
      <h1>Problema Monty Hall</h1>
      <div className="form">
        {!started ? <div>
          <label for="portsAmount"> Quantas portas?</label>
          <input
            type="text"
            id="portsAmount"
            size="3"
            value={portsAmount}
            onChange={e => setPortsAmount(e.target.value)} />

        </div> : ""}

        {!started ? <div>
          <label for="selectedPort"> Qual a porta premiada?</label>
          <input
            type="text"
            id="selectedPort"
            value={selectedPort}
            onChange={e => setSelectedPort(e.target.value)} />

        </div> : ""}

        {!started ?
          <button onClick={() => cont()}> Iniciar</button> :
          <button onClick={() => resetList()}>Reiniciar</button>}

          {started ? <div className= "doors">
            {list.map(numberPort => {
              return(
                <div>
                  <Door hasGift = {numberPort == selectedPort} number ={numberPort} />
                </div>
              )
            })}
          </div>:""}
      </div>
    </div>
  );
}

export default App;
