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
          this.props.flatlist.map((flat, i) => {
            return <Flat index={i} flat={flat} key={flat.imageUrl} selectedFlat={this.props.selectedFlatFct}/>
          })
        }
      </div>
    )
  }
}

export default FlatList;
