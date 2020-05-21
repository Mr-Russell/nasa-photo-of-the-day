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

        {/* <form>
          <p>View an Image From Another Day:</p>

          <select
          name='month'>
            <option value ='01'>January</option>
            <option value ='02'>February</option>
            <option value ='03'>March</option>
            <option value ='04'>April</option>
            <option value ='05'>May</option>
            <option value ='06'>June</option>
            <option value ='07'>July</option>
            <option value ='08'>August</option>
            <option value ='09'>September</option>
            <option value ='10'>October</option>
            <option value ='11'>November</option>
            <option value ='12'>December</option>
          </select>
        </form> */}

        <a href='https://apod.nasa.gov/apod/astropix.html'>
          View the Original NASA Webpage
          </a>
      </FooterDiv>
    )
  }

export default Footer;