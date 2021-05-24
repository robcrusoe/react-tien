import { useReducer } from 'react';
import './App.css';

const defaultNumberState = 0;

function numberReducer(state, action) {
  if (action.type === 'ADD_NUMBER') {
    return state + action.numberToAdd;
  }
}

function App() {
  const [numberState, dispatchNumberAction] = useReducer(numberReducer, defaultNumberState);

  return (
    <>
      <h1 onClick={() => { dispatchNumberAction({ type: 'ADD_NUMBER', numberToAdd: 1 }) }}>{numberState}</h1>
    </>
  );
};

export default App;
