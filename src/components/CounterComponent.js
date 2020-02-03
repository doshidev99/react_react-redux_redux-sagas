import React, { Component } from "react";
import { connect } from "react-redux";

import { incrementAction, decrementAction } from "../redux/actions";

class CounterComponent extends Component {
  render() {
    const { value, incrementAction, decrementAction } = this.props;

    return (
      <div>
        <button onClick={() => incrementAction(1)}>Increment +</button>
        <h2> {value} </h2>
        <button onClick={() => decrementAction(2)}>Decrement -</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counterReducers.value
});

const mapDispatchToProps = dispatch => ({
  incrementAction: payload => dispatch(incrementAction(payload)),
  decrementAction: payload => dispatch(decrementAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
