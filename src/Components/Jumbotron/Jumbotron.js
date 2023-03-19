import React from "react";
import logo from "../Jumbotron/SkillMatch.gif"

function Jumbotron() {
    return (
        <div className="container-fluid bg-light p-5">
            <img src={logo} />
            <h1 className="display-4">SkillMatch</h1>
            <p className="lead">slogan of some kind</p>
            <hr className="my-4"></hr>
                <p>something something something </p>
        </div>
    )
}

export default Jumbotron; 