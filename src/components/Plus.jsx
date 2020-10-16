import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
class Plus extends Component {
  render() {
    const { plusbtn, name } = this.props;
    return (
      <button className={`plusBtn`} onClick={plusbtn} name={name}>
        <FontAwesomeIcon className="iconPlus" icon={faPlusCircle} />
      </button>
    );
  }
}
export default Plus;
