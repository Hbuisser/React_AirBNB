import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
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
        <div className="flat-list">
          <FlatList/>
        </div>
        <div className="map-container">
            <SimpleMap/>
        </div>
      </div>
    )
  }
}

export default App;

//defaultCenter={this.center()}
