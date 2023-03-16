import React from "react";
import { Formik } from "formik";

function JobSearch(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Skills:</label>
                <input 
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Input 3 or more skills"
                id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search 
                    </button>
            </div>
        </form>
    );
}
export default JobSearch; 
