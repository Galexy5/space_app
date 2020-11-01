import React from "react";
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap"
import mars from "./mars_icon.png";
import galaxy from "./galaxy.png"


export default function Navigation(){
    return (
      //bg="dark" variant="dark"
        <Navbar className="d-flex justify-content-center" fixed="top" style={{backgroundColor:"#373b7d"}} >  
        <Navbar.Brand >
        <Link className="text-decoration-none font-weight-bold text-white" to="/mars"> 
        <img
            alt=""
            src={mars} 
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Mars Roger Photos
          </Link>
        </Navbar.Brand>

        <Navbar.Brand >
        <Link className="text-decoration-none font-weight-bold text-white" to="/apod">
        <img
            alt=""
            src={galaxy}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Picture of the day
          </Link>
        </Navbar.Brand>

        <Navbar.Brand >
        <Link className="text-decoration-none font-weight-bold text-white" to="/apod">
        <img
            alt=""
            src="https://freedesignfile.com/upload/2017/08/telescope-icon-vector.png" 
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
           Hubble Telescope
          </Link>
        </Navbar.Brand>

        <Navbar.Brand >
        <Link className="text-decoration-none font-weight-bold text-white" to="/apod">
        <img
            alt=""
            src="https://cdn0.iconfinder.com/data/icons/flat-design-galaxy/1701/Saturn1-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Glossary
          </Link>
        </Navbar.Brand>

        


      </Navbar>
    )
}