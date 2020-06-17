import React, { Component } from 'react';
import flats from '../data/flat.js';
import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="flat-list">
        {
          this.props.flatlist.map((flat) => {
            return <Flat flat={flat} key={flat.imageUrl}/>
          })
        }
      </div>
    )
  }
}

export default FlatList;
