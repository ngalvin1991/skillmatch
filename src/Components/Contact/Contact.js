import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import "./styles.css";

function App() {
  return (
    <div className="App">
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
          <button type="submit">Show me my dream job</button>
        </Form>
      </Formik>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default Contact; 