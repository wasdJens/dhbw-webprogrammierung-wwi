# React Delete Beer API Example

In der Vorlesung haben wir live das `react-starter` API Beispiel ergänzt, um einen delete request. Das Beispiel hat in der Vorlesung nicht vollständig funktioniert. 

Hier ist die vollständige Lösung:

```javascript
import React from "react";

export default class BeerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      beers: [],
      error: null,
    };

    this.getBeers = this.getBeers.bind(this);
    this.deleteBeer = this.deleteBeer.bind(this);
  }

  async componentDidMount() {
    await this.getBeers();
  }

  async getBeers() {
    try {
      const result = await fetch("http://localhost:8080/beers");
      if (result.status === 200) {
        const beers = await result.json();
        console.log(beers);
        this.setState({ beers });
      } else {
        throw Error("Beers not found");
      }
    } catch (error) {
      console.log(error);
      this.setState({ error });
    }
    this.setState({ isLoading: false });
  }

  async deleteBeer(name) {
    console.log(name);
    try {
      await fetch(`http://localhost:8080/beer/${name}`, {
        method: "DELETE",
      });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { err, isLoading, beers } = this.state;
    if (err) {
      return <div>Something went wrong :(</div>;
    } else if (isLoading) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <CreateBeerComponent getBeers={this.getBeers} />
          <ul>
            {beers.map((beer) => (
              <li key={beer.name}>
                {beer.name} {beer.taste}
                // The function call was wrong
                <button onClick={() => this.deleteBeer(beer.name)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

class CreateBeerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      taste: "",
    };

    this.handleCreateBeer = this.handleCreateBeer.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  async handleCreateBeer() {
    const { name, taste } = this.state;
    await fetch("http://localhost:8080/beer", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, taste }),
    });
    await this.props.getBeers();
    this.setState({
      name: "",
      taste: "",
    });
  }

  handleInput(event, key) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    const { name, taste } = this.state;

    return (
      <div>
        <span>Beer name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => this.handleInput(e, "name")}
        ></input>
        <span>Beer Taste</span>
        <input
          type="text"
          value={taste}
          onChange={(e) => this.handleInput(e, "taste")}
        ></input>
        <button onClick={this.handleCreateBeer}>Create beer</button>
      </div>
    );
  }
}

```