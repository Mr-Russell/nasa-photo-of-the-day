import React from 'react';

const Middle = (props) => {

    return(
      <div>
        <p>{props.data.explanation}</p>
        <img src={props.data.hdurl} />
      </div>
    )
  }

export default Middle;