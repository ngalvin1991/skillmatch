import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { ChakraProvider, Heading, VStack, Text, Input, Button, FormControl } from "@chakra-ui/react";

function JobForm() {
  return (
    <ChakraProvider>
      <div className="form">
        <Heading as="h1" color="purple.500">Search Jobs</Heading>
        <Text size="5xl" color="purple.500">Enter up to 5 skills, separated by a comma</Text>
        <Text  size="5xl" color="purple.500">Enter your preferred location</Text>
        <Formik
          initialValues={{
            skills: "",
            city: ""
          }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >

          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <VStack spacing="20px">
              <FormControl>
                <Field as={Input}
                  id="skills"
                  name="skills"
                  type="text"
                  variant="filled"
                  placeholder="Skills"
                  _placeholder={{ opacity: 1, color: 'purple.500' }} />
              </FormControl>
              <FormControl>
                <Field as={Input}
                  id="city"
                  name="city"
                  type="text"
                  variant="filled"
                  focusBorderColor='purple'
                  placeholder="City"
                  _placeholder={{ opacity: 1, color: 'purple.500' }} />
              </FormControl>
              <Button type="submit" colorScheme="purple" >Show me my dream job</Button>
            </VStack>
            </Form>
          )}
        </Formik>
      </div>
    </ChakraProvider>
  );
}

ReactDOM.render(<JobForm />, document.getElementById("root"));

export default JobForm;