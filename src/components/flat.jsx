import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className="card">
          <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg" alt="" className="card"/>
          <div className="card-category">150 EUR</div>
          <div className="card-description">
            <h2>Super 60m2 in trendy neighborhood!</h2>
          </div>
          <a className="card-link" href="#"></a>
        </div>
      </div>
    )
  }
}

export default Flat;


