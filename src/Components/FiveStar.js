import React, { useState } from 'react';

function FiveStar() {
  const [color, setColor] = useState(0);

  const handleClick = (index) => {
    setColor(index + 1);
  };

  return (
    <div className="center-container">
      {Array(5).fill(0).map((value,index) => (
        <button
          key={index}
          className='button'
          onClick={() => handleClick(index)}
          style={{ backgroundColor: index < color ? 'yellow' : 'red' }}
        >
          ⭐
        </button>
      ))}
    </div>
  );
}

export default FiveStar;