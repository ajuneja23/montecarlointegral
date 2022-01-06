import React from "react";
import Navbar from "./Navbar.js";
import "../index.css";
const Methodology=()=>
{
  
  return (
    <div id="methodology">

      <Navbar />

      <h2 id="methodologyname">Methodology</h2>
      <div id="methodologylist">

       <div id="step1">
         <h3>Step 1</h3>
         <p>You choose the integral and the desired upper and lower bounds.</p>
       </div>
       <div id="step2">
         <h3>Step 2</h3>
         <p>The calculator generates 100 random numbers within those bounds.</p>
       </div>
       <div id="step3">
         <h3>Step 3</h3>
         <p>The function to be integrated is evaluted for each of those 100 values.</p>
       </div>
       <div id="step4">
         <h3>Step 4</h3>
         <p>The 100 outputs of the function for the random numbers are averaged.</p>
       </div>
       <div id="step5">
         <h3>Step 5</h3>
         <p>You receive that average value multiplied by the difference of the bounds.</p>
       </div>
      </div>
      
    </div>
  );
};

export default Methodology;

