import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css';

const createArray = (length) => {
  return [...Array(length)];
};

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />
};

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  const content = (createArray(totalStars).map((n, i) => {
    return <Star key={i} selected={selectedStars > i} onSelect={() => {
      setSelectedStars(i + 1);
    }} />
  }));

  return (
    <>
      {content}
      <p>Rating: {selectedStars} out of {totalStars}</p>
    </>
  )
};

function App() {
  return (
    <div className="App">
      <StarRating totalStars={10} />
    </div>
  );
};

export default App;
