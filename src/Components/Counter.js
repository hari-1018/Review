import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const Increment = () => setCount(count + 5);
  const Decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={Increment}>
        Increment
      </button>
      <button onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
