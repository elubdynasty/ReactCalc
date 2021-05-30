import { Component } from "react";
import * as math from 'mathjs'

import Input from './input'
import Btn from './Btn'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"],
      ],
    }; //what is going to change on the screen
  }

  handleChange = (val) => {
    const input =
      this.state.input === "0"
        ? this.state.input.slice(1) + val
        : this.state.input + val;

    this.setState({
      input
    });
  };

  handleCalc = () => {
    const total = math.evaluate(this.state.input)

    this.setState({
      input: total
    })
  }

  renderButtons = () => {
    return this.state.ops.map((op, idx) => {
      return (
        <div key={idx} className="row">
          {op.map((num) => {
            return (
              <Btn key={num} handleClick={this.handleChange}>
                {num}
              </Btn>
            );
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Input input={this.state.input} />
        
        {this.renderButtons()}

        <div className="row">
          <Btn
            label="clear-btn"
            handleClick={() => this.setState({ input: "0" })}
          >
            Clear
          </Btn>
        
          <Btn label="equal" handleClick={this.handleCalc}>
            =
          </Btn>
        </div>
       
      </div>
    );
  }
}

/* input screen- Done */
/* Buttons - Done */
/* Clear button */
/* Equals button */
/* Style */
/* Don't trust eval func on JS */