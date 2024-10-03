import './BeerVote.css';
import { useState } from "react";

function BeerVote() {
  const [count, setCount] = useState(0);

  return (
    <div className="beer-vote">
      <p>Votes: {count}</p>
      <button  className="beer-vote-button" onClick={() => setCount(count + 1)}>👍</button>
      <button  className="beer-vote-button" onClick={() => setCount(count - 1)}>👎</button>
    </div>
  );
}

export default BeerVote;
