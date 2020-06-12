import React from 'react';
import logo from './logo.svg';
import PokemonList from './components/PokemonList/PokemonList.js';
import Generations from './components/Generations/Generations.js';
import Moves from './components/Moves/Moves.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Moves />
    </div>
  );
}

export default App;
