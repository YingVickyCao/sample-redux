import React, { Component } from 'react';
import store from '../store';
import { increment, decrement, update_second_action } from '../action/action';

export default class Counter extends Component {
	// Mounting
	constructor(props) {
		super(props);

		this.state = store.getState();
		// 通过 subscribe(listener) 注册监听器;
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	componentWillUnmount() {
		super.componentWillUnmount();
		// 通过 subscribe(listener) 返回的函数注销监听器。
		// Stop listening to state updates
		this.unsubscribe();
	}

	render() {
		console.log('Counter,render():' + this.state);
		/**
		 * <pre>
		 * state/store cache data is one json object:
			{
				counterReducer: {num: 0}
				secondReducer: {second: 0}
			}
		 * </pre>
		 */
		return (
			<div style={{ width: '50%', margin: '10%' }}>
				<p onClick={this._onPress4Increment}>+</p>
				<p>{this.state.counterReducer.num}</p>
				<p onClick={this._onPress4Decrement}>-</p>

				<p onClick={this._onPress4UpdateSeconds}>Seconds:</p>
				<p>{this.state.secondReducer.second}</p>
			</div>
		);
	}
	_onPress4Increment() {
		// Dispatching Actions
		store.dispatch(increment());
	}

	_onPress4Decrement() {
		store.dispatch(decrement());
	}

	_onPress4UpdateSeconds() {
		store.dispatch(update_second_action());
	}
}
