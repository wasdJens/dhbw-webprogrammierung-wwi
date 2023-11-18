/* eslint-disable react/prop-types */
import "./BeerCreate.css";
import { useState } from "react";

function BeerCreate({ addBeerItem }) {
  const [beer, setBeer] = useState({
    name: "",
    taste: "",
  });

  function handleNameChange(e) {
    setBeer({ ...beer, name: e.target.value });
  }

  function handleTasteChange(e) {
    setBeer({ ...beer, taste: e.target.value });
  }

  const handleCreate = async () => {
    const request = await fetch("http://localhost:8080/api/v1/beers", {
      method: "POST",
      body: JSON.stringify(beer),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    if (request.ok) {
      setBeer({ name: "", taste: "" });
      const response = await request.json();
      addBeerItem({
        name: response.createdItem.name,
        taste: response.createdItem.taste,
        id: response.createdItem.id,
      });
    }
  };

  return (
    <div>
      <h2>Create new Beer</h2>
      <div className="beer-create-inputs">
      <label>
            Beer Name:
            <input type="text" value={beer.name} onChange={handleNameChange} />
          </label>
          <label>
            Beer Taste:
            <input
              type="text"
              value={beer.taste}
              onChange={handleTasteChange}
            />
          </label>
          <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default BeerCreate;
