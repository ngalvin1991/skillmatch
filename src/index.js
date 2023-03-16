import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { APIId, APIkeyDat } from './Keys.js';
let skillSearch=null;
var apiID=APIId;
var apiKey=APIkeyDat;
async function getJobAd() {
  // Define the jobQuery URL, which includes the API ID and key, as well as a results_per_page parameter of 5
  var jobQuery = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=' + apiID + '&app_key=' + apiKey + '&results_per_page=5'
  +'&what_and='+'Project Management PLC';
  
  // Fetch data from the jobQuery URL and parse the response as JSON
  try {
    const response = await fetch(jobQuery);
    const data = await response.json();
    // Store the fetched job results in a variable
    var jobResults = data.results;
    return jobResults;
  } catch (error) {
    return console.error(error);
  }
}

// Call the getJobAd function and store the results in a jobResults
getJobAd()
  .then(jobResults => {
    // Log the fetched job results to the console
    console.log("Results: ", jobResults);
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
