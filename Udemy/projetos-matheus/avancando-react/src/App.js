import Imagem from './assets/city.jpg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import MessageState from './components/MessageState';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = "roberto";
  const [userName] = useState("maria");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];
  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>avançando</h1>
      <div>
      <img src={Imagem} alt="" />
      </div>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <ShowUserName name="beto"></ShowUserName>
      <ShowUserName name={name}></ShowUserName>
      <ShowUserName name={userName}></ShowUserName>
      <CarDetails brand={"VW"} color={"AZUL"} km={25}></CarDetails>
      <Fragment/>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      <Container myValue={"testing"}>
        <p>teste</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>
      <MessageState msg={message}></MessageState>
      <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
    </div>
  );
}

export default App;
