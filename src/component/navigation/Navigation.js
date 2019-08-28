import React,{Component} from 'react';
import * as Routes from './constant';
import {Link} from 'react-router-dom';

class Navigation extends Component {
submitHandler (e) {
  e.preventDefault();
}
render () {
  return (
    <div>
      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <Link to={Routes.HOME}><a href="#">Home</a></Link>
            </li>
            <li>
              <Link to={Routes.PRODUCT} className="active"><a href="#">Product <span className="sr-only">(current)</span></a></Link>
            </li>
            <li>
              <Link to={Routes.BRAND}><a href="#">Brand</a></Link>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default"  onClick={this.submitHandler}>Submit</button>
          </form>
            <span className="pull-right">Hi Desh!</span>
        </div>
      </div>
    </nav>
    </div>
)
}
}
export default Navigation;
