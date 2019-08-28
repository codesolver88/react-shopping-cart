import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import * as Routes from '../navigation/constant';
import Details from '../details/Details';

class Product extends Component {
  constructor (props) {
    super(props);
    this.state = {
      recordCount : 10,
      records : [],
      showModal : true,
      showProduct : false
    }
    this.productHandler = this.productHandler.bind(this);
    this.cartHandler = this.cartHandler.bind(this);
  }
componentWillMount() {
  // console.log(this.props);
  // this.setState({showModal : false})
  // this.setState({showProduct : true})
}
cartHandler = (e) => {
    e.preventDefault();
    e.target.setAttribute('disabled','true');
      //this.setAttribute('disabled','true');
      return  this.props.history.push('/cart',{name:'cart',count:10});
  }
  detailsHandler = ()=> {
      return  this.props.history.push('/details',{name:'product',count:10});
  }
productHandler(){
  let that=this;
  let arr =[];
  for(var i=0;i<this.state.recordCount;i++){
    arr.push(i);
  }
  this.state.records.push(arr.map(function(item,idx){return (<div class="col-sm-6 col-md-4" id={idx}>
        <div class="thumbnail">
          <img src="../../.././image/download.jpeg" width="100" height="100"alt="..."/>
        <div class="caption">
            <h3>Redmi Note III</h3>
            <p>Yes! you got the coolest mobile ever</p>
            <p>
              <a href="#" class="btn btn-success" role="button" onClick = {(e)=>that.cartHandler(e)}>Add To Cart</a>
              <a href="#" class="btn btn-primary" role="button" onClick = {(e) => that.detailsHandler(e)}>Details</a>
            </p>
        </div>
        </div>
      </div>)}))
      return this.state.records;
//  return this.populateProduct(arr);
}
// detailsHandler = () => {
//   this.setState({showModal : !this.state.showModal})
//   this.setState({showProduct : !this.state.showProduct})
// }


  render () {
    return (
      <div class="container-fluid">
        { <div class="row">{this.productHandler()}</div>}
      </div>
      )
  }
}
export default Product;
