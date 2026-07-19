import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>FORM</h1>
      <MyForm user={{ name: "Josias", email: "josias@hotmail.com" }}></MyForm>
    </div>
  );
}

export default App;
