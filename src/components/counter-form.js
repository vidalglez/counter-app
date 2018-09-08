import React from "react";
import { connect } from "react-redux";
import {
  addCounter,
  decreaseCounter,
  setCounter,
  resetCounter
} from "../actions/counter-actions";

class CounterForm extends React.Component {
  constructor(props) {
    super(props);

    this.addCounterHandler = this.addCounterHandler.bind(this)
    this.decreaseCounterHandler = this.decreaseCounterHandler.bind(this)
    this.setCounterHandler = this.setCounterHandler.bind(this)
    this.resetCounterHandler = this.resetCounterHandler.bind(this)
  }

  addCounterHandler(event) {
    event.preventDefault();
    this.props.dispatch(addCounter());
  }

  decreaseCounterHandler(event) {
    event.preventDefault();
    this.props.dispatch(decreaseCounter());
  }

  setCounterHandler(event) {
    event.preventDefault();
    this.props.dispatch(setCounter({ counter: 1 }));
  }

  resetCounterHandler(event) {
    event.preventDefault();
    this.props.dispatch(resetCounter());
  }

  render() {
    /*
    const addCounterHandler = e => {
      e.preventDefault();     
      this.props.dispatch(addCounter());
    };

    const decreaseCounterHandler = e => {
      e.preventDefault();
      this.props.dispatch(decreaseCounter());
    };

    const resetCounterHandler = (e) => {
        e.preventDefault();
        this.props.dispatch(resetCounter());
    };

    const setCounterHandler = (e) => {
        e.preventDefault();
        this.props.dispatch(setCounter({ counter: 1}))
    }
    */

    return (
      <div>
        <form>
          <div>
            <label className="display-4">Counter: {this.props.counter}</label>
            <button className="btn btn-primary btn-sm" type="button" onClick={this.addCounterHandler}>+</button>
            <button className="btn btn-primary btn-sm" onClick={this.decreaseCounterHandler}>-</button>
          </div>
          <div>
            <button className="btn btn-secondary btn-sm" onClick={this.setCounterHandler}>Set</button>
            <button className="btn btn-secondary btn-sm"  onClick={this.resetCounterHandler}>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

//export default CounterForm;
export default connect(mapStateToProps)(CounterForm);
