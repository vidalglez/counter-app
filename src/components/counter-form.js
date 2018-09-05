import React from "react";
import { connect } from "react-redux";
import {
  addCounter,
  decreaseCounter,
  setCounter,
  resetCounter
} from "../actions/counter-actions";

class CounterForm extends React.Component {
  render() {
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

    return (
      <div>
        <form>
          <div>
            <label>Counter: {this.props.counter}</label>
            <button onClick={addCounterHandler}>+</button>
            <button onClick={decreaseCounterHandler}>-</button>
          </div>
          <div>
            <button onClick={setCounterHandler}>Set</button>
            <button onClick={resetCounterHandler}>Reset</button>
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
