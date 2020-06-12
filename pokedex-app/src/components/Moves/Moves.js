import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Move from './Move.js';


function Moves() {
  const [moves, setMoves] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/move?offset=${pages}&limit=20`)
      .then(res => {
        console.log(res.data.results);
        let moveValue = res.data.results;
        moveValue.map(move => {
          let regexPoke = /\/move\/(\d+)\//;
          let id = move.url.match(regexPoke)[1];
          return (move['id'] = id);
        })
        setMoves(moveValue);
        setLoading(false);
      })
      .catch(err => {
        console.log(err, 'error');
      })
  }, [pages]);

  if(loading) return <p>I'm Loading! Please be patient</p>;

  return (
    <>
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
      <div>
        {moves.map(move => <Move moves={move} key={move.name} />)}
      </div>
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
    </>
  );
}

export default Moves;
