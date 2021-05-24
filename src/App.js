import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Jan');
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`
  }, [name]);

  useEffect(() => {
    console.log(`The user is ${admin ? 'admin' : 'not admin'}.`);
  }, [admin]);

  return (
    <div className="App">
      <section>
        <p>Congratulations {name}!</p>
        <button type='button' onClick={() => { setName('Will') }}>Change Winner</button>

        {admin && <p>Logged In!</p>}
        {!admin && <p>Not Logged In!</p>}
        <button type='button' onClick={() => { setAdmin(true) }}>Log In</button>
      </section>
    </div>
  );
};

export default App;
