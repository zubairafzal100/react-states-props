import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`App ${isMorning ? 'sunLight' : ''}`}>

      <h1>Good: {isMorning ? 'Morning' : 'Night'}</h1>

      <Counter counter={count} />
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>decreament</button>

      <br />
      <button onClick={() => setMorning(!isMorning)}>Update Status</button>
    </div>
  );
}

export default App;
