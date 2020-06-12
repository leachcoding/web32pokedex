import React from 'react';
import './Pokemon.css';

const Pokemon = props => {
  let idVal = '';

  if(props.data.id < 10) {
    idVal = 'Id#: 00' + props.data.id;
  } else if(props.data.id < 100) {
    idVal = 'Id#: 0' + props.data.id;
  } else {
    idVal = 'Id#: ' + props.data.id;
  }

  const capitalize = (str) => {

    if(typeof str !== 'string') {
      return ''
    }


    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <div className='card'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`}/>
      <p>{idVal}</p>
      <p>{capitalize(props.data.name)}</p>
    </div>
  )
}

export default Pokemon;
