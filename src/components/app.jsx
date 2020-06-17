import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';
import GoogleMapReact from 'google-map-react';
import flats from '../data/flat.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    }
  }

  // center() {
  //   return {
  //     lat: this.state.selectedFlat.lat,
  //     lng: this.state.selectedFlat.lng
  //   };
  // }

  render() {
    return (
      <div>
        <FlatList flatlist={this.state.flats}/>
        <div className="map-container">
            <SimpleMap/>
        </div>
      </div>
    )
  }
}

export default App;

//defaultCenter={this.center()}
