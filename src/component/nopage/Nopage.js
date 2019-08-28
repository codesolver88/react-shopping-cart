import React from 'react';
import * as Routes from '../navigation/constant';
import {Link} from 'react-router-dom';
export default function nopage () {
  return (
    <div>
    <h3>Sorry! you have landed on a wrong place</h3>
    <p> Please click <Link to = {Routes.HOME}>Here </Link>to vist our Home page</p>
  </div>
)
}
