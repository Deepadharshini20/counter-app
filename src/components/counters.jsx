import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    const {handleDelete,handleIncrement,handleReset,counters} = this.props; //destructing objects
    return (
      <div>
        <button
          onClick={handleReset}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
