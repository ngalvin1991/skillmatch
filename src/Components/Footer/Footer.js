import React from "react";

const Footer = () => {
 return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
               
                <div className="col">
                    <h4>Site Links</h4>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>Job Search</li>
                        <li>Contact Us!</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h4>Social Links</h4>
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
 )}


export default Footer
