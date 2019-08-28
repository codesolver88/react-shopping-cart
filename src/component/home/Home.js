import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as Routes from '../navigation/constant';

class Home extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron">
          <h1>Hello Desh, Welcome to your shopping zone.</h1>
          <p>Click on the button below to check your dream smartphone</p>
          <Link to ={Routes.PRODUCT}><p><a class="btn btn-primary btn-lg" href="#" role="button">Check Products</a></p></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
