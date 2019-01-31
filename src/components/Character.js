import React from "react";

const Character = props => {
  return (
    <div className='charCard'>
      <h2>{props.character.name}</h2>
      <h4>{props.character.gender}</h4>
      <p>{props.character.height}</p>
    </div> )
};

export default Character;
