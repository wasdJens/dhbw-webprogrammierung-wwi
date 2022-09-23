import fetch from "node-fetch";

async function myFetch() {
  const result = await fetch("https://reqres.in/api/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  console.log(result.json);
};

myFetch();