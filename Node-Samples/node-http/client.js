const http = require("http");

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/users?_limit=2",
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const request = http.request(options, (res) => {
  console.log(res.statusCode);
});
request.end();
