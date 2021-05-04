import logo from "./logo.svg";
import "./App.css";
import Formulario from "./components/formulario/Formulario";
import Resultado from "./components/resultado/Resultado";
import Interruptor from "./components/interruptor/Interruptor";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Formulario />
      <Resultado />
      <Interruptor />
      <Login />
    </div>
  );
}

export default App;
