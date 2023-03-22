import React, { useState, useEffect } from "react";
import JobSearch from "../JobSearch/JobSearch";

import { APIId, APIkeyDat } from "../../Keys";

var apiID = APIId;
var apiKey = APIkeyDat;

function App() {
  const [jobs, setJobs] = useState([]);
  const [skills] = useState("");
  const [city] = useState("");

  useEffect(() => {
    async function getJobAd() {
      // Define the jobQuery URL, which includes the API ID and key, as well as a results_per_page parameter of 3

      var jobQuery = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${apiID}&app_key=${apiKey}&results_per_page=3&what_and=${skills}&where=${city}`;

      // Fetch data from the jobQuery URL and parse the response as JSON
      try {
        const response = await fetch(jobQuery);
        const data = await response.json();
        // Store the fetched job results in the state
        setJobs(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getJobAd();
  }, [city, skills]);

  fetch('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id='+`${apiID}` +'&app_key=' + `${apiKey}` + '&results_per_page=3&what_and=HTML&where=liverpool')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <div className="container">
      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <JobSearch
              title={job.title}
              location={job.location.display_name}
              salaryRange={job.salary_min + " - " + job.salary_max}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
