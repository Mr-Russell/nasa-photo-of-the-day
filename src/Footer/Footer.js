import React from 'react'
import styled from 'styled-components';

const FooterDiv = styled.div`
  margin-bottom: 3%;

  h3 {
  color: #8F8D97;

    span {
    font-weight: 800;
    border-bottom: 2px solid #8F8D97;
    }
  }

  a{
  color: dodgerblue;
  }
`

const Footer = (props) =>{

    return(
      <FooterDiv>
        <h3><span>Photo Credit:</span> {props.data.copyright}</h3>
        <a href='https://apod.nasa.gov/apod/astropix.html'>
          View the Original NASA Webpage
          </a>
      </FooterDiv>
    )
  }

export default Footer;