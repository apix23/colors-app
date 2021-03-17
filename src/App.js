import './App.css';
import Card from './Card';
import Header from "./Header";
function App() {
  const arr = new Array(9)
  return (
    <>
    <Header></Header>
    <section className="container card__container">

  
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

    </>
  );
}

export default App;
