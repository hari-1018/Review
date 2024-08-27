import React from 'react';

const people = [ 'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'];

function Lists() {
    const listItems = people.map(people =>
        <li>{people}</li>
      );
      return <ul>{listItems}</ul>;
    }


export default Lists

import React, { useState } from 'react';

function FiveStar() {
  // State to track the current rating
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    // Set the rating based on the clicked star's index
    setRating(index + 1);
  };

  return (
    <div className="center-container">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: rating > index ? 'yellow' : 'red',
            margin: '5px',
            fontSize: '24px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ⭐
        </button>
      ))}
    </div>
  );
}

export default FiveStar;
