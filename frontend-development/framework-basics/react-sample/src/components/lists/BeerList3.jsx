import "./BeerList.css";
import Beer2 from "../beer/Beer2";
import BeerVote from "../BeerVote";
import { useEffect, useState } from "react";
import BeerCreate from "../BeerCreate";
import { Link } from "react-router-dom";

function BeerList3() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:8080/api/v1/beers")
      ).json();

      setBeers(data.items);
      setIsLoading(false);
    };

    dataFetch();
  }, []);

  const addBeerItem = (newBeer) => {
    setBeers([...beers, newBeer]);
  }

  if (isLoading) {
    return "Loading...";
  } else {
    return (
      <div>
        <h2>Beer List</h2>
        <BeerCreate addBeerItem={addBeerItem}></BeerCreate>
        <div className="beer-list">
          {beers.map((beer, index) => {
            return (
              <Link to={`/beers/${beer.id}`} key={index}>
              <Beer2 beer={beer}>
                <BeerVote></BeerVote>
              </Beer2>
            </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BeerList3;