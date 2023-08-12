import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Soda from "./Soda";
import Chips from './Chips';
import Reload from './Reload';


function App() {
  return (
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/soda" element={<Soda />} />
         <Route path="/chips" element={<Chips />} />
         <Route path="/reload" element={<Reload />} />
      </Routes>
  );
}

export default App;
