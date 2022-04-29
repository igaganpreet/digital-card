import React from "react";
import ReactDOM from "react";
import myImage from "./My-Image.jpg";

export default function ImageDisplay(){
    return <img className="MyImage" src={myImage} alt="MY IMAGE"></img>
}