// import Parent from './Components/Parent';
// import Lists from './Components/Lists';

// import RecipeList from './Components/RecipeList';
// import FetchEvent from './Components/FetchEvent';
// import Hooks from './Components/Hooks';
// import CenteredBox from './Components/CenteredBox';
// import Counter from './Components/Counter';
import FiveStar from './Components/FiveStar';
import './App.css';
import React from 'react';
function App() {
  // const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/quotes')
  //     .then(response => response.json())
  //     .then(data => {
  //       setQuotes(data.quotes.slice(0, 10)); // Get the first 10 quotes
  //     })
  //     .catch(error => console.error('Error fetching the quotes:', error));
  // }, []);
  return (
    <div className="App">
     {/* <h1>Welcome to React Hooks</h1>
     <h2>Types of Hooks</h2>
     <Parent /> 

     <Lists />
     <RecipeList /> */}
     {/* <FetchEvent /> */}
     {/* <Hooks /> */}
     {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote, index) => (
            <tr key={index}>
              <td>{quote.id}</td>
              <td>{quote.quote}</td>
              <td>{quote.author}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* <Counter />
      <CenteredBox /> */}
      
      <FiveStar />




    </div>
  );
}

export default App;
