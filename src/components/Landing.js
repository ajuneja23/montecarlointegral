import React from "react";
import Navbar from "./Navbar.js";
import "../index.css";
const Landing=()=>{
    return (
      <div id="landingintro">
        <Navbar />
        <h1 id="introname">Integrals. Made Easy.</h1>
        <h2 id="moreinfo"> Evaluating integrals with Monte Carlo simulations</h2>
        <p id="explain">This is a calculator that uses Monte Carlo Simulations to estimate definite integrals of one variable. You can read more about the methodology in the methodology tab.</p>
        <div id="aboutme">
          <h2>Why did you make this?</h2>
          <p>This calculator was made so people can explore integral estimation using Monte Carlo simulations. I came across them and was intrigued by how accurate they could be.  </p>
          <h2>What future goals do you have for this project?</h2>
          <p>The main goal for this project is for users to be able to input their own integrals rather than be limited to 4 choices. To do this, the Shunting-Yard algorithm would have to be employed, which I am working on exploring right now. In addition, double integrals, line integrals, could be added to this calculator in the future.</p>
          <h2>Where is the github repo?</h2>
          <p>The repo can be viewed <a href="https://github.com/ajuneja23/montecarlointegralcalculatorapp">here.</a> </p>
       </div>
      </div>

    );
  };
  export default Landing;