import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
class Plus extends React.Component {
  render() {
    const { plusbtn } = this.props;
    return (
      <button className={`plusBtn`} onClick={plusbtn}>
        <FontAwesomeIcon className="iconPlus" icon={faPlusCircle} />
      </button>
    );
  }
}
export default Plus;
