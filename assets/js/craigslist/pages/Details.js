import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Details extends Component {

  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    const {match, location, history } = this.props
    return (
      <div className="details-page">
        <div className="container">
            this item is {match.params.item}
        </div>
      </div>
    );
  }
}
