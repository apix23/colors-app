import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Button from "./Button";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const [page, setPage] = useState(1);
  const [resultPerPage] = useState(9);
  const [colorsArray, setColorsArray] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // this function will do the fetch to the URL getting the data colors and seting it up in the
    // colorsArray variable with the setColorsArray method;

    const fetchingDataColors = async (page) => {
      let standardValue = 1;

      //this for will execute the call to the API as many time as total_pages.
      //In this case, there are only two pages, but, in case the API gets updated with
      //more colors, the app will keep working since the new colors would get dinamically
      //included.
      for (let index = 1; index <= standardValue; index++) {
        let res = await axios.get(`https://reqres.in/api/colors?page=${index}`);

        let referencialColor = res.data.data;
        setTotalPages(2);
        setColorsArray((colors) => colors.concat(referencialColor));
        standardValue = res.data.total_pages;
      }
    };
    fetchingDataColors(page);
  }, []);
  console.log("this is pages", page);
  console.log("this is total pages", totalPages);

  const testFunction = () => {
    setPage(page + 1);
  };
  return (
    <main className="container">
      <Header></Header>
      <section className="card__container">
        {colorsArray
          ?.slice(
            page * resultPerPage - resultPerPage,
            resultPerPage * page || colorsArray.length
          )
          .map((colordata) => {
            const { id, year, name, color, pantone_value } = colordata;
            return (
              <Card
                clipboardCopyFunc={() => navigator.clipboard.writeText(color)}
                key={id}
                year={year}
                name={name}
                color={color}
                id={id}
                pantoneValue={pantone_value}
              />
            );
          })}
      </section>

      <section className="btn__container">
        <Button
          disableEnableFunction={console.log("hey brother")}
          content="Atras"
          buttonAparience={page === 1 ? "secondary" : "primary"}
          disableClass={page === 1 ? "disabled" : ""}
        ></Button>

        <Button
          disableEnableFunction={testFunction}
          content="Siguiente"
          buttonAparience={page === totalPages ? "secondary" : "primary"}
          disableClass={page === totalPages ? "disabled" : ""}
        ></Button>
      </section>

      <Footer></Footer>
    </main>
  );
};

export default App;
