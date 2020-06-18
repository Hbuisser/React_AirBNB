import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../env.jsx';
import Marker from './marker.jsx';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker
            lat={this.props.marker.lat}
            lng={this.props.marker.lng}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// import React, { Component } from 'react';
// import flats from '../data/flat.js';

// class Mapp extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return(
//       <div>
//           Hello
//       </div>
//     )
//   }
// }

// export default Mapp;
