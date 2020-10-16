import React, { Component } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import RestBtn from "../components/RestBtn";

class MainPage extends Component {
  state = {
    counter: 0,
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
  };

  plusbtn1 = () => {
    this.setState((prevState) => {
      if (prevState.counter1 === 0) {
        return {
          counter1: prevState.counter1 + 1,
          counter: prevState.counter + 1,
        };
      }
      return { counter1: prevState.counter1 + 1 };
    });
  };
  plusbtn2 = () => {
    this.setState((prevState) => {
      if (prevState.counter2 === 0) {
        return {
          counter2: prevState.counter2 + 1,
          counter: prevState.counter + 1,
        };
      }
      return {
        counter2: prevState.counter2 + 1,
      };
    });
  };

  plusbtn3 = () => {
    this.setState((prevState) => {
      if (prevState.counter3 === 0) {
        return {
          counter3: prevState.counter3 + 1,
          counter: prevState.counter + 1,
        };
      }

      return { counter3: prevState.counter3 + 1 };
    });
  };

  plusbtn4 = () => {
    this.setState((prevState) => {
      if (prevState.counter4 === 0) {
        return {
          counter4: prevState.counter4 + 1,
          counter: prevState.counter + 1,
        };
      }

      return { counter4: prevState.counter4 + 1 };
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
  };

  minusbtn1 = () => {
    this.setState((prevState) => {
      const removeState = { counter1: prevState.counter1 - 1 };
      if (prevState.counter1 === 1) {
        removeState.counter = prevState.counter - 1;
      }
      return removeState;
    });
  };
  minusbtn2 = () => {
    this.setState((prevState) => {
      const removeState = { counter2: prevState.counter2 - 1 };
      if (prevState.counter2 === 1) {
        removeState.counter = prevState.counter - 1;
      }
      return removeState;
    });
  };
  minusbtn3 = () => {
    this.setState((prevState) => {
      const removeState = { counter3: prevState.counter3 - 1 };
      if (prevState.counter3 === 1) {
        removeState.counter = prevState.counter - 1;
      }
      return removeState;
    });
  };
  minusbtn4 = () => {
    this.setState((prevState) => {
      const removeState = { counter4: prevState.counter4 - 1 };
      if (prevState.counter4 === 1) {
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
          plusbtn={this.plusbtn1}
          minusbtn={this.minusbtn1}
        />
        <Content
          counter={this.state.counter2}
          plusbtn={this.plusbtn2}
          minusbtn={this.minusbtn2}
        />
        <Content
          counter={this.state.counter3}
          plusbtn={this.plusbtn3}
          minusbtn={this.minusbtn3}
        />
        <Content
          counter={this.state.counter4}
          plusbtn={this.plusbtn4}
          minusbtn={this.minusbtn4}
        />
      </div>
    );
  }
}

export default MainPage;
