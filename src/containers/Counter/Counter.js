import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  increment,
  decrement,
  addFive,
  subtractFive,
  storeResult,
  deleteResult,
} from "../../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractFiveCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResult.map((sr, index) => {
            return (
              <li
                key={index}
                onClick={() => this.props.onDeleteStoredResult(index)}
              >
                {sr}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.c.counter,
    storedResult: state.r.results,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddFiveCounter: () => dispatch(addFive()),
    onSubtractFiveCounter: () => dispatch(subtractFive()),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onDeleteStoredResult: (index) => dispatch(deleteResult(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Counter);
