import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/apod">Picture of the day</Link></li>
            <li><Link to="/mars">Mars</Link></li>
          

        </ul>
    )
}