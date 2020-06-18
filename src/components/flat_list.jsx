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
            console.log("The current iteration is: " + i);
            console.log("The current element is: " + flat.name);
            console.log("\n");
          })
        }
      </div>
    )
  }
}

export default FlatList;
