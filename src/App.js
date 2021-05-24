import { useState } from 'react';
import './App.css';

function App() {
  const [packageName, setPackageName] = useState('Not Delivered');

  return (
    <div className="App">
      <h1>The package is: {packageName}</h1>
      <button type='button' onClick={() => { setPackageName('Delivered') }}>Deliver</button>
    </div>
  );
}

export default App;
