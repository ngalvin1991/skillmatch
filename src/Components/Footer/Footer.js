import React from "react";
import { ChakraProvider, Heading, Divider } from "@chakra-ui/react";
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
 return (
    <ChakraProvider>
            <Divider orientation='horizontal' borderColor="purple.500" mt="75" mb="75"/>
    <div className="main-footer">
        <div className="container">
            <div className="row">
               
                <div className="col">
                    <Heading fontSize="large" className="mb-3" color="purple.500">Site Links</Heading>
                    <Nav defaultActiveKey="/home" as="li">
                        <Nav.Item as="li">
                            <Nav.Link href="#">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="#">Job Search</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="#">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    
                  </div>
                

                  <div className="col">
                  <Heading fontSize="large" className="mb-3" color="purple.500">Social Links</Heading>
                  <Nav defaultActiveKey="/home" as="li" className="justify-content-center" >
                        <Nav.Item as="li">
                            <Nav.Link href="#">Github</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="#">LinkedIn</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
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
