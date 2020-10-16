import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Plus from "./Plus";
class Content extends Component {
  render() {
    const { counter, plusbtn, minusbtn } = this.props;
    return (
      <section className="container">
        <div className="content">
          <span
            className={`counter ${counter ? "counternum" : ""}`}
            id="counter1"
          >
            <strong>{`${counter > 0 ? counter : "Zero"}`}</strong>
          </span>
          <Plus plusbtn={plusbtn} />
          <button
            className={`minusBtn${counter === 0 ? "" : ""}`}
            onClick={minusbtn}
            disabled={counter === 0}
          >
            <FontAwesomeIcon className="iconMinus" icon={faMinusCircle} />
          </button>
        </div>
      </section>
    );
  }
}

export default Content;
