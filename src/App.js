import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Jan');

  useEffect(() => {
    document.title = `Celebrate ${name}`
  }, [name]);

  return (
    <div className="App">
      <section>
        <p>Congratulations {name}!</p>
        <button type='button' onClick={() => { setName('Will') }}>Change Winner</button>
      </section>
    </div>
  );
};

export default App;
