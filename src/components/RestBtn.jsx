import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class RestBtn extends Component {
  render() {
    return (
      <div className="restBtn" onClick={this.props.restbtn}>
        <FontAwesomeIcon className="iconSyn" icon={faSyncAlt} />
      </div>
    );
  }
}

export default RestBtn;
