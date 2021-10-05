import React from "react";

export default class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  handleDecrease() {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  }

  render() {
    return (
      <div>
        <Welcome />
        <Controls
          increase={this.handleIncrease}
          decrease={this.handleDecrease}
        />
        <Counter counter={this.state.counter} />
      </div>
    );
  }
}

function Welcome() {
  return <h4>Hello there!</h4>;
}

function Controls(props) {
  return (
    <div>
      <button onClick={props.increase}>Increase</button>
      <button onClick={props.decrease}>Decrease</button>
    </div>
  );
}

function Counter(props) {
  return <p>Counter: {props.counter}</p>;
}
