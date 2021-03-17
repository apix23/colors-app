import './App.css';
import Button from './Button';
import Card from './Card';
import Footer from './Footer';
import Header from "./Header";
function App() {

  return (
    <main className="container">
    <Header></Header>
    <section className="card__container">

  
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
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
