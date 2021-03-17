import './App.css';
import axios from 'axios'
import Button from './Button';
import Card from './Card';
import Footer from './Footer';
import Header from "./Header";


const App = () => {

async function makeGetRequest() {

  let res = await axios.get('https://reqres.in/api/colors?page=1');

  let data = res.data;
  console.log(data.data[3].name);
}

makeGetRequest();

  return (
    <main className="container">
    <Header></Header>
    <section className="card__container">

  
    <Card year="2001" name="blue" color="#139121" pantoneValue="11-1320"></Card>
    
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
