const fetchPromise = fetch("http://localhost:8080/beer");

fetchPromise
  .then((response) => response.json())
  .then((beers) => {
    console.log(beers);
  });

console.log("Start getting all beers");
