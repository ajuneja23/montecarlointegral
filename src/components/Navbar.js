import React from "react";
import {Link} from "react-router-dom";
import "../index.css";
function Navbar() {
    return (
        <div>
            <nav id="navigationbar">
                <Link to="/" id="navigator">Home</Link> 
                <Link to="/methodology" id="navigator">Methodology</Link>
                <Link to="/calculator" id="navigator">Calculator</Link>
                <hr id="introbar"></hr>
            </nav>
        </div>
    );
};
export default Navbar;