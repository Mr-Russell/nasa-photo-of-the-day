import React from 'react';
import styled from 'styled-components';

const MidDiv = styled.div`
  p {
  margin: 2% 4%;
  line-height: 25px;
  color: #FBFBF2;
  }

  img {
  box-shadow: 1px 1px 10px 1px orange;
  }
`

const Middle = (props) => {

    return(
      <MidDiv>
        <p>{props.data.explanation}</p>
        <a href={props.data.hdurl}>
          <img src={props.data.url} />
        </a>
      </MidDiv>
    )
  }

export default Middle;