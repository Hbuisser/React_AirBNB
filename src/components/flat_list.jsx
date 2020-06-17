import React, { Component } from 'react';
import flats from '../data/flat.js';
import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Flat/>
      </div>
    )
  }
}

export default FlatList;
