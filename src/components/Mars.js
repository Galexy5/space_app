import React from "react";
import {MarsApi} from "../apis/MarsAPI";

const apiKey=process.env.REACT_APP_NASA_KEY;
const url=`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${apiKey}`;

export function Mars(){
 

     let rover=MarsApi(url);

    console.log(rover.photos)

    return (
        <div>

            <h2>Mars Rover Photos</h2>

            {rover.photos.map((photo)=> (
                <img key={photo.id} src={photo.img_src}></img>
            ))}

        </div>
    );
}