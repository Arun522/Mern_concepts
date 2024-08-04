import React, { useState, useCallback } from 'react'

function ChildComponent({ onClick }) {
  console.log('ChildComponent rendered');

  return <button onClick={onClick}>Click me</button>;
}

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // Define the callback function
  const handleClick = () => {
    console.log('Button clicked');
    setCount((prevCount) => prevCount + 1);
  };

  // Pass dependencies and use useCallback hook
  const memoizedHandleClick = useCallback(handleClick, []);
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={memoizedHandleClick} />
    </div>
  )
}

export default UseCallback