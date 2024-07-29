import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./pantallas/Home";
import Contacto from "./pantallas/Contacto";

function App() {
  return (
    <div className="">
          <NavBar />
      <Router>
        <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
