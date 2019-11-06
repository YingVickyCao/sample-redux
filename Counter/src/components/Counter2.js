import React, { Component } from "react";
export default class Counter2 extends Component {
  // Mounting
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };

    this._onPress4Increment = this._onPress4Increment.bind(this);
    this._onPress4Decrement = this._onPress4Decrement.bind(this);
  }

  render() {
    console.log("Counter2,render():", this.state);
    return (
      <div style={{ width: "50%" }}>
        <p onClick={this._onPress4Increment}>+</p>
        <p>{this.state.num}</p>
        <p onClick={this._onPress4Decrement}>-</p>
      </div>
    );
  }
  _onPress4Increment() {
    // Dispatching Actions
    console.log("Counter2,click +");
    // this.setState(previousState => {
    //   return {
    //     num: previousState.num + 1
    //   };
    // });
    this.setState(globalData);
  }
  _onPress4Decrement() {
    console.log("Counter2,click -");
    this.setState(previousState => {
      return {
        num: previousState.num - 1
      };
    });
  }
}

var globalData = {
  num: 10
};
