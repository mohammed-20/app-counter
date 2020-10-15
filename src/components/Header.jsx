import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className=" navBar">
          <FontAwesomeIcon className="iconShopp" icon={faShoppingCart} />
          <span className="counterNav" id="counterNav">
            {this.props.counter}
          </span>
          <div className="textNav">
            <span>
              <strong>Items</strong>
            </span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
