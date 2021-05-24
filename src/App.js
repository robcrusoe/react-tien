import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const body = await response.json();

      console.log(body);
      setData(body);
    };

    fetchUsers();
  }, []);

  let content = <p>No Users!</p>;
  if (data && data.length > 0) {
    content = <ul>{data.map(user => <li key={user.id}>{user.login}</li>)}</ul>
  }

  return (
    <>
      {content}
      <button type='button' onClick={() => { setData([]) }}>Remove Data</button>
    </>
  );
};

export default App;
