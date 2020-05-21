import React, { useEffect, useState } from "react";
import "./App.css";
import Header from './Header/Header.js'
import Middle from './Middle/Middle.js'
import Footer from './Footer/Footer.js'
import axios from 'axios';
import styled from 'styled-components'

const apiURL = 'https://api.nasa.gov/planetary/apod';
const apiKey = 'fDr3eAgEBI5KB46hfl2zgt7zS9Tca1UsgCoKF3Oc';

const Title = styled.h1`
  font-size: 2.8rem;
  color: #FF8928;
`

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get(`${apiURL}?api_key=${apiKey}`)
    .then(res =>{
      setData(res.data)
      //console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <Title>NASA's Astronomy Picture of the Day!</Title>
      {console.log(data)}

      <Header data={data}/>
      <Middle data={data}/>
      <Footer data={data}/>

    </div>
  );
}

export default App;
