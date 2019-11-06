import React, { Component } from "react";
import store from "../store";
import { increment, decrement } from "../actions/action";

export default class Counter extends Component {
  // Mounting
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      console.log("Counter, subscribe()", store.getState());
      this.setState(store.getState());
    });
  }

    componentWillUnmount() {
      super.componentWillUnmount();

      // Stop listening to state updates
      this.unsubscribe();
    }

  render() {
    console.log("Counter,render():", this.state);
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
    console.log("click +");
    store.dispatch(increment());
  }

  _onPress4Decrement() {
    console.log("click -");
    store.dispatch(decrement());
  }
}
