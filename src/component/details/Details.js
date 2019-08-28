import React ,{Component } from 'react';



class Details extends Component {
  constructor (props) {
    super (props);
    // this.state = [],
    this.data =  [
      {
        Battery : '5000mh',
        Camera : '20px',
        Body : 'Metalic',
        Weight : "300gm",
        Sim : "Dual",
        Bluetooth : 'Yes',
        Sensor : 'Yes',
        Headphone : 'Yes'
      }
    ]
  }
  populateTH = () => {
    return this.data.map((item,idx)=> {
      return Object.keys(item).map(function(item){
        return (<th>{item}</th>)
    })})
  }
  populateTR = () => {
    return this.data.map((item,idx)=> {
      return Object.values(item).map(function(item){
        return (<td>{item}</td>)
    })})
  }
  detailsHandler = () => {
    this.props.history.push('/product');
  }
  render () {
    return (
      <div className="container">
        <div className = "row details">
          <div className = "col-sm-6">
            <img src="../../.././image/download.jpeg" />
            <div clasName="footer">Price : 25$</div>
            <div class="caption">
                <p>
                  <a href="#" class="btn btn-danger " role="button" onClick={this.detailsHandler}>Close</a>
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
      <div className = "row">
        <table class="table table-condensed">
          <thead><tr>{this.populateTH()}</tr></thead>
          <tbody><tr>{this.populateTR()}</tr></tbody>
          <tfoot></tfoot>
        </table>
      </div>
      </div>
    )
  }
}

export default Details;
