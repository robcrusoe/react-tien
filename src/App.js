import { useState } from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <input type='checkbox' value={checked} onChange={() => { setChecked((prevState) => { return !prevState }) }} />
      <p>{checked ? 'Checked' : 'Not Checked'}</p>
    </div>
  );
}

export default App;
