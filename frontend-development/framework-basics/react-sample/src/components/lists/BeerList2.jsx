import "./BeerList.css";
import Beer2 from "../beer/Beer2";
import BeerVote from "../BeerVote";

function BeerList2() {
  const beers = [
    { name: "Ulmer Goldochsen Kellerbier", id: 1, taste: "good" },
    { name: "Wasseralfinger", id: 2, taste: "bad" },
    { name: "Nattheimer Spezial", id: 3, taste: "okay" },
  ];

  const listItems = beers.map((beer) => {
    return (
      <Beer2 key={beer.id} beer={beer}>
        <BeerVote></BeerVote>
      </Beer2>
    );
  });

  return (
    <div>
      <h2>Beer List</h2>
      <div className="beer-list">{listItems}</div>
    </div>
  );
}

export default BeerList2;
