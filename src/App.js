// import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //this is to store array of counter from state
    const index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(counter =>(
          counter.value>0)).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
