import React, { useState , useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Button from './Button';
import Card from './Card';
import Footer from './Footer';
import Header from "./Header";


const App = () => {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);  
  const [jsonResponse, setJsonResponse] = useState({});
  
  const [colorsInfo, setColorsInfo] = useState([]);
  
  useEffect(() => {
    // this function will do the fetch to the URL getting the data colors and seting it up in the
    // colorsInfo variable with the setColorsInfo method;

    const fetchingDataColors = async (page) => {
      let standardValue= 1;

      //this for will execute the call to the API as many time as total_pages. 
      //In this case, there are only two pages, but, in case the API gets updated with
      //more colors, the app will keep working since the new colors would get dinamically
      //included.
      for (let index = 1; index <= standardValue; index++) {
        
        let res = await axios.get(`https://reqres.in/api/colors?page=${index}`);
        
        setJsonResponse(res.data);
        let referencialColor = res.data.data;
        
        setColorsInfo(colors => colors.concat(referencialColor));
        standardValue = res.data.total_pages;
      }
        
      }
  
  fetchingDataColors(page);
  }, [])
  
  console.log(colorsInfo);

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
