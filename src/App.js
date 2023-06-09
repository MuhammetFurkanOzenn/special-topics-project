import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState (0)

  function increaseVal(){
    setValue(value+1)
  }

  function decreaseVal(){
    setValue(value-1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{value}</h1>
        <div className='button-container'>
          <button onClick={()=> decreaseVal()}>Decrease (-)</button>
          <button onClick={()=> increaseVal()}>Increase (+)</button>
        </div>
      </header>
    </div>
  );
}

export default App;
