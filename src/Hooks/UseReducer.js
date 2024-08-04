import React, { useReducer } from 'react'

// Step 1: Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Step 2: Define initial state
const initialState = { count: 0 };

// Step 3: Use useReducer hook
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Step 4: Dispatch actions
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseReducer