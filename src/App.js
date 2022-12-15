// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Erreur from "./pages/Erreur";


const App = () => {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/à_propos" element = {<About />}/>
        <Route path = "/fiche_logement" element = {<Logement />}/>
        <Route path = "/erreur_404" element = {<Erreur />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
