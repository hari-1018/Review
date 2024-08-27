import React, { useState, useEffect } from 'react';

function FetchEvent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes') 
      .then(response => response.json())
      .then(result => {
        setData(result.quotes); 
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.quote}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchEvent;
