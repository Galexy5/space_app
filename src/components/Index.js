import React from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import mars from "./mars_icon.png";
import galaxy from "./galaxy.png"


//I have to remove card text if I wont use it
//Or If i dont use text at all maybe I dont need cards

export default function Index(){

 
    return (
        <div className="d-flex align-items-center" style={{marginTop:"100px", height:"500px"}}> 
            <div className="row pl-5 pr-3  w-100 ">
                <div className="col-4">
                    <Link className="d-flex justify-content-center" to="/apod">
                        <img src={mars} width="300px" height="300px" alt=""/> 
                    </Link>
               </div>

               <div className="col-4">
                    <Link className="d-flex justify-content-center" to="/apod">
                        <img src={galaxy} width="300px" height="300px" alt=""/> 
                    </Link>
                </div>

                <div className="col-4">
                    <Link className="d-flex justify-content-center" to="/apod">
                        <img src="https://freedesignfile.com/upload/2017/08/saturn-icon-vector.png" width="300px" height="300px" alt=""/> 
                    </Link>
                </div>

            <div className="row pl-5 pr-3  w-100 ">
                <div className="col-6">
                    <Link className="d-flex justify-content-center" to="/apod">
                        <img src="https://freedesignfile.com/upload/2017/08/telescope-icon-vector.png" width="300px" height="300px" alt=""/> 
                    </Link>
               </div>

               <div className="col-6">

                    <Link className="d-flex justify-content-center" to="/apod">
                        <img src="https://cdn0.iconfinder.com/data/icons/flat-design-galaxy/1701/Saturn1-512.png" width="300px" height="300px" alt=""/> 
                    </Link>
                </div>

            </div>

              



               


                {/* <Card className="bg-dark text-white rounded-circle">
                    <Link to="/apod">
                            <Card.Img src="https://freedesignfile.com/upload/2017/08/saturn-icon-vector.png" alt="Card image" />
                            <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                <Card.Title>Picture of the day</Card.Title>
                                <Card.Text>
                              
                                </Card.Text>
                            </Card.ImgOverlay>
                            </Link>
                </Card>

                 
                       
                    </div>                 
                

                <div className="col-4">
                <Card className="bg-dark text-white rounded-circle ">
                    <Link to="/apod">
                            <Card.Img src="https://freedesignfile.com/upload/2017/08/saturn-icon-vector.png" alt="Card image" />
                            <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                <Card.Title>Picture of the day</Card.Title>
                                <Card.Text>
                           
                                </Card.Text>
                            </Card.ImgOverlay>
                            </Link>
                </Card>
                </div>

                <div className="col-4">
                <Card className="bg-dark text-white rounded-circle">
                    <Link to="/apod">
                            <Card.Img src="https://freedesignfile.com/upload/2017/08/saturn-icon-vector.png" alt="Card image" />
                            <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                <Card.Title>Picture of the day</Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.ImgOverlay>
                            </Link>
                </Card> */}
                
            </div>        
        </div>

    )
}