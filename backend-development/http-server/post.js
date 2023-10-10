const http = require("http");

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/posts",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const data = {
    title: 'Foo',
    body: 'bar',
    userId: 1,
}

const request = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('close', () => {
        console.log(JSON.parse(data))
    })
})

request.write(JSON.stringify(data));
request.end();