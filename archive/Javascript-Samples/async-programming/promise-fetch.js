import fetch from "node-fetch";

// use a http get request to target a public rest api endpoint
fetch("https://reqres.in/api/users", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  // The first callback function is received when the http call was successfully
  .then((response) => {
    // Here we get the response as a Promise Object back
    // Next we transform this Promise to a JSON object and
    // chain the next callback function
    return response.json();
  })
  // The second callback function uses the result from the first callback
  // Here we receive the response as json and print it to the console
  .then((json) => {
    console.log(json);
  })
  // If any then callback fails this catch block is called to print the error
  .catch((err) => {
    console.log(err);
  });
