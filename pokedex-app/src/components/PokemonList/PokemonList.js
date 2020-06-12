import React, {useState,useEffect} from 'react';
import axios from 'axios';
// We will probably later need another component to import here
import Pokemon from '../Pokemon/Pokemon.js';
import './PokemonList.css';

function PokemonList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?offset=${pages}&limit=20/`)
        .then(res => {
          console.log(res.data.results);
          console.log(pages);
          let pokemonValue = res.data.results;
          pokemonValue.map(pokemon => {
            let regexPoke = /\/pokemon\/(\d+)\//;
            let id = pokemon.url.match(regexPoke)[1];
            return (pokemon['id'] = id)
          })
          setData(pokemonValue);
          setLoading(false);
        })
        .catch(err => {
          console.log('error', err);
        });
    };

    fetchData();
  }, [pages]);

  //console.log(data);
  if(loading) return <p>I'm Loading! Please be patient</p>;

  return (
    <>
    <div>
      <div className='cards'>
        <div className = 'paginationRow'>
          <button onClick={() => {
            if(pages > 100) {
              setPages(pages - 100)
            }
          }}>Prev - 5</button>
          <button onClick={() => {
            if(pages > 20) {
              setPages(pages - 20)
            }
          }}>Prev</button>
          <button onClick={() => {
            if(pages < 960) {
              setPages(pages + 20)
            }
          }}>Next</button>
          <button onClick={() => {
            if(pages < 860) {
              setPages(pages + 100)
            }
          }}>Next + 5</button>
        </div>
       {data.map(pokemon => <Pokemon data={pokemon} key={pokemon.name}/>)}
       <div className = 'paginationRow'>
         <button onClick={() => {
           if(pages > 100) {
             setPages(pages - 100)
           }
         }}>Prev - 5</button>
         <button onClick={() => {
           if(pages > 20) {
             setPages(pages - 20)
           }
         }}>Prev</button>
         <button onClick={() => {
           if(pages < 960) {
             setPages(pages + 20)
           }
         }}>Next</button>
         <button onClick={() => {
           if(pages < 860) {
             setPages(pages + 100)
           }
         }}>Next + 5</button>
       </div>
      </div>
    </div>
    </>
  );
}

export default PokemonList;
