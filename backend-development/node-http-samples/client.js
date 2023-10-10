import { request } from "http";

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/users?_limit=2",
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const req = request(options, (res) => {
  console.log(res.statusCode);
});
req.end();
