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


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../env.jsx';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
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
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
