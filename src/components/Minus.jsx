import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
class Minus extends Component {
  render() {
    const { counter, minusbtn, name } = this.props;
    return (
      <button
        name={name}
        className={`minusBtn${counter === 0 ? "" : ""}`}
        onClick={minusbtn}
        disabled={counter === 0}
      >
        <FontAwesomeIcon className="iconMinus" icon={faMinusCircle} />
      </button>
    );
  }
}
export default Minus;
