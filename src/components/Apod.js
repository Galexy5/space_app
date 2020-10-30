import React from "react";
import {ApodApi} from "../apis/ApodAPI";
import Navbar from "./Navbar"

const apiKey=process.env.REACT_APP_NASA_KEY;
const url=`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

export default function Apod(){
 

     let apod=ApodApi(url);

    console.log(apod)

    return (
        
        <div>
            <Navbar/>
            <h2>Astronomic Picture of the day</h2>
            <img src={apod.url}></img>
    <h3>By {apod.copyright}</h3>

        </div>
    );
}