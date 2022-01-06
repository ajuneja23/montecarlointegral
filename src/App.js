
import React from "react";
import {
  //BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing.js";
import Methodology from "./components/Methodology.js";
import Calculator from "./components/Calculator.js";
//https://blog.logrocket.com/react-router-v6/
const App=()=>
{
  return (
    <div class="App">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      
    </div>
    
  );
};
export default App;