import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { Button } from "@chakra-ui/react";

function JobForm() {
    return (
      <div className="form">
        <h1>Search Jobs</h1>
        <h4>Enter up to 5 skills, separated by a comma</h4>
        <h4>Enter your preferred location</h4>
        <Formik
          initialValues={{ skills: "Skills", city: "Location" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
  
          
          <Form>
            <Field name="skills" type="text" />
            <Field name="city" type="text" />
            <Button type="submit">Show me my dream job</Button>
          </Form>
        </Formik>
      </div>
    );
  }
  
  ReactDOM.render(<JobForm />, document.getElementById("root"));

  export default JobForm;