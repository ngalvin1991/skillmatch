import React from "react";
import { ChakraProvider, Heading, Divider } from "@chakra-ui/react";

const Footer = () => {
 return (
    <ChakraProvider>
            <Divider orientation='horizontal' borderColor="purple.500" />
    <div className="main-footer">
        <div className="container">
            <div className="row">
               
                <div className="col">
                    <Heading fontSize="large" className="mb-3" color="purple.500">Site Links</Heading>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>Job Search</li>
                        <li>Contact Us!</li>
                    </ul>
                  </div>
                  <div className="col">
                  <Heading fontSize="large" className="mb-3" color="purple.500">Social Links</Heading>
                    <ul className="list-unstyled">
                        <li>Github</li>
                        <li>LinkedIn</li>
                    </ul>
                  </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date ().getFullYear()} SkillMatch | Terms of Service | Privacy
                    
                </p>
            </div>
        </div>
    </div>
    </ChakraProvider>
 )}


export default Footer
