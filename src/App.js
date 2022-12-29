import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MappedCharacters, Character} from './components/Character';

const App = () => {
  const [char, setChar] = useState({})
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
  axios.get(`https://swapi.dev/api/people/`)
  .then(res => {
    console.log(res.data)
    setChar(res.data)
  })
  .catch(err => console.error(err))
}, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        <MappedCharacters char={char}/>
        <Character char={char[0]}/>
      </div>
    </div>
  );
}

export default App;
