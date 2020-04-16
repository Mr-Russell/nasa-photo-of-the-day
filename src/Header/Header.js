import React from 'react';


const Header = (props) => {

return(
  <div>
    <h2>{props.data.date}</h2>
    <h3><span>Title:</span> {props.data.title}</h3>
  </div>
    )
}

export default Header;