import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "mapbox-gl/dist/mapbox-gl.css";

export default class Main extends Component {

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.0038303,
      longitude: -43.3233906,
      zoom: 9,
    }
  };

  handleMapClick = (e) => {
    const [latitude, longitude] = e.lngLat;
    let modal = document.getElementsByClassName('modal');

    modal[0].classList.add('active')
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport
      }
    });

    //console.log(this.state)
  };

  render() {
    return (
      <ReactMapGL
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={'pk.eyJ1IjoiYmV0YWZsaXAiLCJhIjoiY2sza2QxbmpiMHNubTNjbXZwNml0aWQ0NyJ9.LmPTU7uoUOQ7110LTlw8sw'}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

