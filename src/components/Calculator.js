import React,{useState, button} from "react";
import Navbar from "./Navbar.js";
import "../index.css";

const Calculator=()=>{
    const [funcname,setfunc]=useState('func1');
    const [lowerbound,setlowerbound]=useState(0);
    const [upperbound,setupperbound]=useState(0);
    const [avgval,setavgval]=useState(0);
    function func1(x) {
        return Math.floor(x)*x;
    }
    function func2(x) {
       return Math.exp(x);
    }
    function func3(x){
        return x*Math.sin(x);
    }
    function montecarlo(function_used,lower_bound,upper_bound)
    {
        let sum=0;
        if(funcname==="func1")
        {
            for(let t=0;t<100;t++)
            {
                sum+=(func1(Math.random()*(upper_bound-lower_bound)+lower_bound));

            }
            return ((sum/100)*(upper_bound-lower_bound));
        }
        else if(function_used==="func2")
        {
            for(let trial=0;trial<100;trial++)
            {
                sum+=func2((Math.random()*(upper_bound-lower_bound)+lower_bound));
            }
            return ((sum/100)*(upper_bound-lower_bound));
        }
        else if(function_used==="func3")
        {
            for(let trial=0;trial<100;trial++)
            {
                sum+=func3((Math.random()*(upper_bound-lower_bound)+lower_bound));
            }
            return ((sum/100)*(upper_bound-lower_bound));
        }
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        setavgval(montecarlo(funcname,lowerbound,upperbound));
    }
    return (
        <div id="calculator">
            <Navbar />
            <h1 id="calctitle"> Calculator </h1>
            <div id="functioninfochoose">
            <h2 id="optionsfunctitle"> Function Options </h2>
            <div id="funcs">
                <div id="f1">
                    <h4>1: x*floor(x)</h4>
                </div>
                <div id="f2">
                    <h4>2: e^x</h4>
                </div>
                <div id="f3">
                    <h4>3: x*sin(x)</h4>
                </div>
            </div>
            
            <div id="funcbuttons">
             <button id="funconebutton" onClick={()=>setfunc("func1")}>Function 1</button> {'\n'}
            <button id="functwobutton" onClick={()=>setfunc("func2")}>Function 2</button> {'\n'}
            <button id="functhreebutton" onClick={()=>setfunc("func3")}>Function 3</button> {'\n'}
            </div>
            <h4>Selected Function: {funcname[4]}</h4>
            </div>
            <h2 id="boundselecttitle"> Select Bounds </h2>
            <form id="inputdata" onSubmit={handleSubmit}>
                <label> Lower Bound <br></br>
                    <input 
                    type="number"
                    value={lowerbound}
                    onChange={(e)=>setlowerbound(e.target.value)}
                    />
                </label> <br></br><br></br>
                <label> Upper Bound <br></br>
                    <input 
                    type="number"
                    value={upperbound}
                    onChange={(e)=>setupperbound(e.target.value)}
                    />
                </label> <br></br> <br></br>
                <input 
                type="submit"
                id="submitter"
                />
            </form>
            {/* <h2>Selected LB: {lowerbound} </h2>
            <h2>Selected UB: {upperbound}</h2> */}
            <h2 id="results">The estimated value of the integral is: {avgval.toFixed(3)}</h2>
        </div>
    );
};
export default Calculator;