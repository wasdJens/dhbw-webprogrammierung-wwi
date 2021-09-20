const http = require("http");

const request = http.request({
    hostname: "httpbin.org",
    path: "/get",
    method: "GET",
    headers: { Accept: "application/json"}
}, res => {
    console.log("Server responded with status code", res.statusCode)
});
request.end();