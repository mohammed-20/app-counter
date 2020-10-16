import React, { Component } from "react";
import Plus from "../components/Plus";
import Minus from "../components/Minus";
class Content extends Component {
  render() {
    const { counter, plusbtn, minusbtn, name } = this.props;
    return (
      <section className="container">
        <div className="content">
          <span
            className={`counter ${counter ? "counternum" : ""}`}
            id="counter1"
          >
            <strong>{`${counter > 0 ? counter : "Zero"}`}</strong>
          </span>
          <Plus plusbtn={plusbtn} name={name} />
          <Minus minusbtn={minusbtn} name={name} counter={counter} />
        </div>
      </section>
    );
  }
}

export default Content;
