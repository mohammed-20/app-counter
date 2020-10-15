import React, { Component } from "react";
import Content from "../components/content";
import Header from "../components/Header";
import RestBtn from "../components/RestBtn";

class MainPage extends Component {
  state = {
    counter: 0,
  };

  plusbtn = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <Header />
        <RestBtn />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    );
  }
}

export default MainPage;
