import React, { useEffect, useState } from "react";
import "./App.css";
import Header from './Header/Header.js'
import Middle from './Middle/Middle.js'
import Footer from './Footer/Footer.js'
import axios from 'axios';

const apiURL = 'https://api.nasa.gov/planetary/apod';
const apiKey = 'fDr3eAgEBI5KB46hfl2zgt7zS9Tca1UsgCoKF3Oc';


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
      <h1>NASA's Astronomy Picture of the Day!</h1>
      {console.log(data)}

      <Header data={data}/>
      <Middle data={data}/>
      <Footer data={data}/>

    </div>
  );
}

export default App;
