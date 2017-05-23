import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hello from './components/Hello';

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render/>
  )
}

const Routes = () => (
  <Router>
    <div>
      <Navbar/>
      <Route path='/' render={() => (<Hello hello='there'/>)} />
      <Footer/>
    </div>
  </Router>
)

export default Routes;
