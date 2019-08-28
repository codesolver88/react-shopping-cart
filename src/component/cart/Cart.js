import React, {Component} from 'react';

class Cart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      basePrice : 25,
      currentvalue : 0,
      count : 1
    }
  }
  componentWillMount () {
    console.log(this.props.history.location.state);
     this.state.currentvalue = this.state.basePrice;
  }
backToProduct = () => {
  this.props.history.push('/product')
}
addItem = (e) => {
  this.setState({count :this.state.count+1})
  e.preventDefault();
  let val = this.state.currentvalue + this.state.basePrice;
  this.setState({currentvalue : val});
}
removeItem = (e) => {
  e.preventDefault();
  let val = this.state.currentvalue - this.state.basePrice;
  if(!(val < this.state.basePrice))
  this.setState({currentvalue : val});
  console.log(this.state.count)
  if(!(this.state.count < 2)){
    this.setState({count :this.state.count-1})
  }
}
  render () {
    console.log(this.props);
    return (
      <div className="container">
        <div className = "row">
          <div className = "col-sm-6 item-wrapper">
            <img src="../../.././image/download.jpeg" />
            <div clasName="footer"><i>Price : 25$</i>
            <div class="caption">
            <a href="#" class="btn btn-danger" role="button" onClick = {this.removeItem}>-</a>
              <a href="#" class="btn btn-success" role="button" onClick = {this.addItem}>+</a>
                <div clasName><span className="glyphicon glyphicon-shopping-cart"></span><strong >Total Item(s) :</strong><span className="badge">{this.state.count}</span></div>
                <div clasName> <strong>Total Amount :</strong> <i>{ `${this.state.currentvalue}$`}</i></div>
            </div>
            </div>

            <div class="caption">
                <p>
                  <a href="#" class="btn btn-primary pull-left" role="button" onClick={this.backToProduct}> Back To Product</a>

                  <a href="#" class="btn btn-success pull-right" role="button">Proceed To Checkout { `(${this.state.currentvalue}$)`}</a>
                </p>
            </div>
          </div>
          <div className = "col-sm-6">
            <div className="well">MI Note III Pro</div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Cart;
