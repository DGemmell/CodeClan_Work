import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact";
import NavBar from "./Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      pricing: [
        {level: "Hobby", cost: 0},
        {level: "Startup", cost: 10},
        {level: "Enterprise", cost: 100},
      ]
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/pricing"
                  render={() => <Pricing prices={this.state.pricing}/>}/>
          <Route path="/contact" component={Contact} />

        </React.Fragment>
      </Router>

    );
  }
}


export default Main;
