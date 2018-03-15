import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Home extends Component {

  constructor() {
    super();
    this.state = {

    };
  }
  clickedBtn = () => {
    console.log("swag");
  };


  loopTags =() => {
    let testTags = ['a','s','d','f','g','h','j'];
    return testTags.map((item, index) => {
      return(<div key={index} className="tag">Apple macbook</div>);
    })
  }

  loopCategories = () =>{
    let testArray = [1,2,3,4,5,6,7];

    return testArray.map((item,index) => {

      return(
        <div className="categories" key={index}>

          <div className="title">Community</div>

            <div className="group-links">
              <a href="#1" className="link">Community</a>
              <a href="#1" className="link">Activities</a>
              <a href="#1" className="link">Artists</a>
              <a href="#1" className="link">Childcare</a>
              <a href="#1" className="link">Classes</a>
              <a href="#1" className="link">events</a>

              <a href="#1" className="link">General</a>
              <a href="#1" className="link">Groups</a>
              <a href="#1" className="link">Local News</a>
              <a href="#1" className="link">Lost + Found</a>
              <a href="#1" className="link">Musicians</a>
              <a href="#1" className="link">Pets</a>
            </div>

        </div>
      )
    })
  }

  render() {
    return (
      <div className="home">
      <div className="container">
        <h1>Connecting People <br/> Everywhere  :)</h1>
        <section className={'links'}>

          {this.loopCategories()}

        </section>
        <section className={"trending"}>
          <input type="text" name="search" className="search"/>
          <div className="title">
            <i className="far fa-clock"></i>Trending Now
          </div>
          <div className="trending-tags">
              {this.loopTags()}
          </div>
        </section>
        </div>
      </div>
    );
  }
}
