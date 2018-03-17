import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Header from './includes/Header';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Category from './pages/Category';
import Item from './pages/Item';



export default class App extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <Router>
        <div >

          <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/:city" component={Home}/>
          <Route exact path="/:city/:category" component={Category}/>
          <Route exact path="/:city/:category/:listings" component={Listings}/>
          <Route exact path="/:city/:category/:listings/:item" component={Item}/>

        </div>
      </Router>
    )
  }
}
