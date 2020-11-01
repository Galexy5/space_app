import React from "react";
import {ApodApi} from "../apis/ApodAPI";
import Navigation from "./Navigation"

const apiKey=process.env.REACT_APP_NASA_KEY;
const url=`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

export default function Apod(){
 

     let apod=ApodApi(url);

    console.log(apod)

    return (
        
        <div>
            <Navigation/>
            <div className="container mt-5 pt-5 text-white">

                <h2>Astronomic Picture of the day</h2>
                <img src={apod.url} className="rounded"></img>
                <h3>{"By" && apod.copyright}</h3>

            </div>

        </div>
    );
}