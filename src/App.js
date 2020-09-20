
import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './nav'
import MoviesList from './movieslist'
// import Nav from './components/navigation'
import Services from './Services'
import Home from './Home'
import Contact from './Contact'
import BuySell from './BuySell'
import Rent from './Rent'




 class App extends Component {

  render(){
  return (
    <Router>
    <div>
      {/* <Nav /> 
      <MoviesList/> */}
      <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home"  component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/buysell" component={BuySell}/>
        <Route path="/rent" component={Rent}/>
        </Switch>
    </div>
    </Router>
    

  );  
 }
}

export default App;
