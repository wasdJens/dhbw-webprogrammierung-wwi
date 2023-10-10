import React from "react";

const cars = ["Mercedes", "BMW", "Audi", "Volkswagen"];
const carItems = cars.map((car) => <li>{car}</li>);
const carItemsKeys = cars.map((car) => <li key={car.toString()}>{car}</li>);

export default class Lists extends React.Component {
  render() {
    return (
      <div>
        <ul>{carItems}</ul>
        <p>List with keys</p>
        <ul>{carItemsKeys}</ul>
      </div>
    );
  }
}
