import React, { Component } from "react";

class Counter extends Component {
  /*
  state - we can't modify the other component state. its private from others.
  props - its like arguments (passing the data to component). we cant modify props.because we get this from as parameter.
  we only use the data for current component when we need
  */
  /*
  state = {
    // state is a object and inside is called property (count)
    value: this.props.counter.value,
  };
  
  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };
  */
  // class name is boostrap defined class name for styling
  render() {
    const {onDelete,onIncrement} = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    // method
    let classes = "badge m-2 text-bg-"; // variable. its storing classname in boostrap
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter; // get the property from state object and store in variable to use
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
