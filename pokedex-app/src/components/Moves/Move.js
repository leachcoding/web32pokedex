import React from 'react';

function Move(props) {
  return (
    <>
      <div className='card'>
        <p>Id: {props.moves.id}</p>
        <p>Move: {props.moves.name}</p>
      </div>
    </>
  );
}

export default Move;
