const fetchPromise = fetch('http://localhost:8080/beer');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`)
})

console.log('Start getting all beers');