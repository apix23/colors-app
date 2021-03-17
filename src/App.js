import React, { useState , useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Button from './Button';
import Card from './Card';
import Footer from './Footer';
import Header from "./Header";


const App = () => {

  const [colorsInfo, setColorsInfo] = useState([]);
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    
    const makeGetRequest = async (page) => {
    let res = await axios.get(`https://reqres.in/api/colors?page=${page}`);
    setColorsInfo(res.data.data);
  }
  makeGetRequest(page);
  console.log('this is colorsinfo',colorsInfo);
  
  }, [])


  return (
    <main className="container">
    <Header></Header>
    <section className="card__container">
    {colorsInfo?.map((colordata)=> {
      const {year, name, color, pantone_value} = colordata;
    return <Card year={year} name={name} color={color} pantoneValue={pantone_value}></Card>

    })}

    </section>
    
    <section className="btn__container">
      <Button content="atras" buttonAparience="secondary" disableClass="disabled" ></Button>
      <Button content="siguiente" buttonAparience="primary" disableClass=""></Button>
    </section>
    
    <Footer></Footer>
    </main>
  );
}

export default App;
