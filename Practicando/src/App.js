import './App.css';
import React, {useState, useEffect}  from 'react';

function App() {

  const [input, setInput] = useState(1);

  const incrementar = () => {
    setInput(input * 5)
  }

 setInterval(() => {
  incrementar()
 }, 1000);

  return (
    <div className="App">
      <h1>El numero ingresado es: {input}</h1>
    </div>
  );
}

export default App;
