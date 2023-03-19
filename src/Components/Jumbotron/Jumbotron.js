import React from "react";
import logo from "../Jumbotron/SkillMatch.gif"
import "../Jumbotron/Jumbotron.css"

function Jumbotron() {
    return (
        <div className="container-fluid  p-5">
            <img className="center" src={logo}  />
            <h1 className="display-4">SkillMatch</h1>
            <p className="lead">Step into a job that best matches your skills</p>
            <hr className="my-4"></hr>
                <p>something something something </p>
        </div>
    )
}

export default Jumbotron; 