import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  ChakraProvider,
  Heading,
  VStack,
  Text,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { APIId, APIkeyDat } from "../../Keys";
import JobSearch from "../JobSearch/JobSearch.js";
import ModalComponent from "../Modal/modal";

function JobForm() {

  const [jobs, setJobs] = useState([]);
console.log(jobs);
  return (
    <ChakraProvider>
      <div className="form">
        <Heading as="h1" color="purple.500">
          Search Jobs
        </Heading>
        <Text size="5xl" color="purple.500">
          Enter up to 5 skills, separated by a comma
        </Text>

        <Formik
          initialValues={{
            skills: "",
            city: "",
          }}
          onSubmit={async (values) => {
            const { skills, city } = values;
            const jobQuery = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=ec468fc8&app_key=9874d489179896531020b5b3c1c50a12&results_per_page=3&what_and=${skills}&where=${city}`;
            try {
              const response = await fetch(jobQuery);
              const data = await response.json();
              
              setJobs(data.results);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <VStack spacing="20px">
                <FormControl isRequired variant="floating">
                  <Field
                    as={Input}
                    id="skills"
                    name="skills"
                    type="text"
                    variant="filled"
                    width="25%"
                    focusBorderColor="pink.400"
                    placeholder="Skills"
                    _placeholder={{ opacity: 1, color: "purple.500" }}
                  />
                </FormControl>
                <Text size="5xl" color="purple.500">
                  Your preferred location
                </Text>
                <FormControl isRequired>
                  <Field
                    as={Input}
                    id="city"
                    name="city"
                    type="text"
                    variant="filled"
                    width="25%"
                    focusBorderColor="pink.400"
                    placeholder="City"
                    _placeholder={{ opacity: 1, color: "purple.500" }}
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple">
                  Show me my dream job
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>

        <div className="container">
          <div className="row">
            {jobs.map(job => (
              <div className="col-md-4 mb-4" key={job.id}>
                <JobSearch title={job.title} location={job.location.display_name} salaryRange={'£'+job.salary_min + ' - ' + '£'+job.salary_max} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            {jobs.map(job => (
              <div className="col-md-4 mb-4" key={job.id}>
                <ModalComponent title={job.title} company={job.company.display_name} salaryRange={'£'+job.salary_min + ' - ' + '£'+job.salary_max} description={job.description}/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </ChakraProvider>
  );
}

export default JobForm;
