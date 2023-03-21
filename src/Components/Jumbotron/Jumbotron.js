import React from "react";
import logo from "../Jumbotron/SkillMatch.gif"
import "../Jumbotron/Jumbotron.css"
import { ChakraProvider,  Divider } from "@chakra-ui/react";
function Jumbotron() {
    return (
        <ChakraProvider>
        <div className="container-fluid  p-5 jumboTron">
            <img className="center" src={logo} alt="logo" />
            <div className="headingText">
            <p className="lead">Step into a job that best matches your skills</p>
            </div>
            <hr className="my-4"></hr>
                <p>SkillMatch is the perfect way to explore your job and career options. 
                   <p> With our easy-to-use skills search platform, you can find the right job for your skills and experience.</p>
                    <p>Ready to take the plunge? </p>
                    You'll be amazed at how much easier it is to find a job when you have everything you need right at your fingertips.</p>
                    <Divider orientation='horizontal' borderColor="purple.500" />
        </div>
        
        </ChakraProvider>
    
    )
}

export default Jumbotron; 