import React from "react";

export default class Smart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Warning: Unsaved Changes",
      type: "Warning",
      subtitle: "Please save your changes",
    };

    this.handleButtonAction = this.handleButtonAction.bind(this);
  }

  handleButtonAction(e) {
    console.log("Do something");
  }

  render() {
    return (
      <div>
        <p>Smart component does some logic...</p>
        <Dumb
          title={this.state.title}
          subtitle={this.state.subtitle}
          type={this.state.type}
        ></Dumb>
      </div>
    );
  }
}

class Dumb extends React.Component {
  render() {
    const style = {
      backgroundColor: this.props.type === "Warning" ? "yellow" : "red",
      color: "black",
      border: "3px solid white",
      borderRadius: "3px",
    };

    return (
      <div style={style}>
        <h3>{this.props.title}</h3>
        <p>{this.props.subtitle}</p>
        <button onClick={this.props.buttonAction}>Close</button>
      </div>
    );
  }
}
