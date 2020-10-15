import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

class Content extends Component {
  render() {
    const { counter } = this.props;
    return (
      <section className="container">
        <div className="content">
          <span
            className={`counter ${counter ? "counternum" : ""}`}
            id="counter1"
          >
            <strong>{`${
              this.props.counter > 0 ? this.props.counter : "Zero"
            }`}</strong>
          </span>
          <button className={`plusBtn`} onClick={this.props.PlusBtn}>
            <FontAwesomeIcon className="iconPlus" icon={faPlusCircle} />
          </button>
          <button
            className={`minusBtn${this.counter1 === 0 ? "display" : ""}`}
            onClick={() => this.minusbtn()}
            disabled={this.counter1 === 0}
          >
            <FontAwesomeIcon className="iconMinus" icon={faMinusCircle} />
          </button>
        </div>
      </section>
    );
  }
}

export default Content;
