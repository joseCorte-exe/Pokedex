import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from './components/card';
import Header from './components/header';
import Home from './pages/home';
import Pokemon from "./pages/pokemon";

import './styles/global.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
