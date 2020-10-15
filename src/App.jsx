import React, { Component } from "react";
import MainPage from "./pages/MainPage";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  plusbtn = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return <MainPage />;
  }
}

export default App;
