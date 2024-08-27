import React, { useState } from 'react';
// import './App.css';

function CenteredBox() {
  const [bgColor, setBgColor] = useState('red');

  const handleClick = () => {
    // Change background color on button click
    setBgColor(bgColor === 'red' ? 'blue' : 'red');
  };

  return (
    <div className="center-container">
      <div className="rectangle" style={{ backgroundColor: bgColor }}>
      </div>
      <button onClick={handleClick}>Change Background</button>
    </div>
  );
}

export default CenteredBox;
