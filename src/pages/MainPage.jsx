import React, { Component } from "react";
import Content from "./Content";
import Header from "../components/Header";
import RestBtn from "../components/RestBtn";

class MainPage extends Component {
  state = {
    counter: 0,
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    disable1: false,
  };
  concatnaiton = {
    1: "counter1",
    2: "counter2",
    3: "counter3",
    4: "counter4",
  };
  plusbtn = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      if (prevState[this.concatnaiton[name]] === 0) {
        return {
          [this.concatnaiton[name]]: prevState[this.concatnaiton[name]] + 1,
          counter: prevState.counter + 1,
        };
      }
      return {
        [this.concatnaiton[name]]: prevState[this.concatnaiton[name]] + 1,
      };
    });
  };

  restbtn = () => {
    this.setState(() => {
      return {
        counter: 0,
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0,
      };
    });
    this.setState({ disable1: true });
  };

  minusbtn = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      const removeState = {
        [this.concatnaiton[name]]: prevState[this.concatnaiton[name]] - 1,
      };
      if (prevState[this.concatnaiton[name]] === 1) {
        removeState.counter = prevState.counter - 1;
      }
      return removeState;
    });
  };

  render() {
    return (
      <div>
        <Header counter={this.state.counter} />
        <RestBtn restbtn={this.restbtn} />
        <Content
          counter={this.state.counter1}
          plusbtn={this.plusbtn}
          minusbtn={this.minusbtn}
          name="1"
        />
        <Content
          counter={this.state.counter2}
          plusbtn={this.plusbtn}
          minusbtn={this.minusbtn}
          name="2"
        />
        <Content
          counter={this.state.counter3}
          plusbtn={this.plusbtn}
          minusbtn={this.minusbtn}
          name="3"
        />
        <Content
          counter={this.state.counter4}
          plusbtn={this.plusbtn}
          minusbtn={this.minusbtn}
          name="4"
        />
      </div>
    );
  }
}

export default MainPage;
