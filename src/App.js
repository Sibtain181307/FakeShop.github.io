import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
