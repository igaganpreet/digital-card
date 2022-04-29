import React from "react";
import ReactDOM from "react-dom";
import Description from "./Description"
import About from "./About"
import Technology from "./Technology"


export default function Info(){
    return (
        <div className="Info">
            <Description />
            <About />
            <Technology />
        </div>
    )
}