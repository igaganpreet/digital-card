import React from "react";
import ReactDOM from "react-dom";
import ImageDisplay from "./ImageDisplay";
import Info from "./Info"


export default function Main(){
    return (
        <div className="Main">
            <ImageDisplay />
            <Info />
        </div>
    )
}