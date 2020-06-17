import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props)
  }

  backgroundImage() {

  }

  render() {
    return(
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price}</div>
        <div className="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;


