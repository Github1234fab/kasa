// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Erreur from "./pages/Erreur";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import footer et header
// import Collection from "./components/Collection";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a_propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
