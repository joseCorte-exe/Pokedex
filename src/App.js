import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Header from "./components/header";
import Pokemon from "./pages/pokemon";
import PerTypes from "./pages/types";

import './styles/global.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
        <Route path='/type/:type' element={<PerTypes />} />
      </Routes>
    </div>
  );
}

export default App;
