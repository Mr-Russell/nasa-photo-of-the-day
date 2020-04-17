import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  h2{
    font-size: 2.2rem;
    color: #FF8928;
  }

  h3 {
  color: #8F8D97;

    span {
    font-weight: 800;
    border-bottom: 2px solid #8F8D97;
    }
  }
`

const Header = (props) => {

return(
  <Heading>
    <h2>{props.data.date}</h2>
    <h3><span>Title:</span> {props.data.title}</h3>
  </Heading>
    )
}

export default Header;