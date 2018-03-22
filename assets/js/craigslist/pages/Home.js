import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      categoriesData: ''
    }
  }

  componentWillMount(){

}


componentDidMount(){

  const{match, history} = this.props

  if (match.params.city === undefined){
    history.push('/nyc');
  }

  const self = this;
  axios.get(`/api/${match.params.city}`)
  .then(function (response) {
    self.setState({
      categoriesData: response.data
    }, () =>{
      console.log(self.state);
    })
  })
  .catch(function (error) {
    console.log(error);
  });
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

  loopCategories = () =>
  {
    console.log();
    // if statement for data
    if(this.state.categoriesData != ''){
      //return back the loop of categories
      return this.state.categoriesData.map((category,index) =>
      {
        // created a loop for the listings
        const loopListings = () =>{
          return category.listings.map((listing, index) => {
            return(
              <a href={`${category.title}/${listing.slug}`} className="link" key={index}>
               {listing.name}
              </a>
            )
          })
        }
        return(
          <div className="categories" key={index}>

            <div className="title">{category.title}</div>

              <div className={`group-links ${(category.title == 'jobs' || category.title == 'personals' || category.title == 'housing') ? 'single-col' : ''}`}>

                {loopListings()}

              </div>

          </div>
        )
      })
    }else{
      return 'LOADING'
    }
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
          <input type="text" name="search" className="search" placeholder="Search classifieds, Housing, Discussions, Personals..."/>
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
