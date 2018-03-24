import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      min_price: 0,
      max_price: 10000,
      sort: "newest",
      select_view: "gallery"
    };
  }

  componentWillMount() {
    const { match, history } = this.props;
    const self = this;
    axios
      .get(`/api/${match.params.city}/${match.params.category}`)
      .then(function(response) {
        self.setState(
          {
            itemsData: response.data
          },
          () => {
            console.log("self.state : " + self.state);
          }
        );
      })
      .catch(function(error) {
        console.log("error axios: " + error);
      });
  }

  loopItems = () => {
    if (this.state.itemsData != undefined) {
      return this.state.itemsData.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div
              className="image"
              style={{ backgroundImage: `url('${item.images[0]}')` }}
            >
              <div className="price">${item.price}</div>
              image
            </div>
            <div className="details">
              <h5>{item.title}</h5>
              <i className="far fa-star" />
              <i className="material-icons ma-clear">&#xE14C;</i>
              <h5>Gray on sale</h5>
              <h6>{item.city}</h6>
            </div>
          </div>
        );
      });
    }
  };

  showMakeModelDropdown = () => {
    const { match, location, history } = this.props;

    if (match.params.listings == "cars-and-trucks") {
      return (
        <div className="make-model-comp">
          <div className="form-group make">
            <label htmlFor="make">Make</label>
            <select name="make" className="make" onChange={this.handleChange}>
              <option value="bmw">bmw</option>
              <option value="benz">benz</option>
              <option value="honda">honda</option>
            </select>
          </div>

          <div className="form-group model">
            <label htmlFor="model">Model</label>
            <select name="model" className="model" onChange={this.handleChange}>
              <option value="x6">x6</option>
              <option value="cseries">cseries</option>
            </select>
          </div>
        </div>
      );
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label htmlFor="price">Price</label>
              <div className="min_max">
                <select
                  name="min_price"
                  className="min-price"
                  onChange={this.handleChange}
                  value={this.state.min_price}
                >
                  <option value="0">0</option>
                  <option value="1000">1000</option>
                  <option value="5000">5000</option>
                </select>
                <select
                  name="max_price"
                  className="max-price"
                  onChange={this.handleChange}
                  value={this.state.max_price}
                >
                  <option value="1000">1000</option>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                </select>
              </div>
            </div>
            {this.showMakeModelDropdown()}
            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
        </div>

        <section id="list-view">
          <div className="container">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select
                    name="select-view"
                    className="select-view"
                    onChange={this.handleChange}
                    value={this.state.select_view}
                  >
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="thumb">Thumb View</option>
                  </select>
                </div>

                <div className="form-group sort-dropdown">
                  <select
                    name="sort"
                    className="sort-dropdown"
                    onChange={this.handleChange}
                    value={this.state.sort}
                  >
                    <option value="newest">Newest</option>
                    <option value="oldests">Oldest</option>
                  </select>
                </div>
              </section>

              <section className="all-items">{this.loopItems()}</section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
