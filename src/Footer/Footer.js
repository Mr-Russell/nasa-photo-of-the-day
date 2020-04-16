import React from 'react'

const Footer = (props) =>{

    return(
      <div id='footer'>
        <h3><u>Photo Credit:</u> {props.data.copyright}</h3>
        <a href='https://apod.nasa.gov/apod/astropix.html'>
          View the Original NASA Webpage
          </a>
      </div>
    )
  }

export default Footer;