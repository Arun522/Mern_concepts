import React, { useState, useMemo } from 'react'

function ExpensiveComponent({ number }) {
  // Define a memoized computation
  const calculateSquare = (num) => {
    console.log('Calculating square...');
    return num * num;
  };

  // Pass dependencies and use useMemo hook
  const square = useMemo(() => calculateSquare(number), [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Square: {square}</p>
    </div>
  );
}

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <ExpensiveComponent number={count} />
    </div>
  )
}

export default UseMemo