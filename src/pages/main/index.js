import React, { Component, Fragment } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../store/actions/users';

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmV0YWZsaXAiLCJhIjoiY2sza2QxbmpiMHNubTNjbXZwNml0aWQ0NyJ9.LmPTU7uoUOQ7110LTlw8sw';

class Main extends Component {

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.0038303,
      longitude: -43.3233906,
      zoom: 9,
    }
  };

  mapRef = React.createRef();

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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.users.length) {
      console.log(nextState)
      //this.handleOnResult();
    }

    return nextState;
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport
      }
    });

    //console.log(this.state)
  };

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    console.log(event)
    // this.setState({
    //   searchResultLayer: new GeoJsonLayer({
    //     id: "search-result",
    //     data: event.result.geometry,
    //     getFillColor: [255, 0, 0, 128],
    //     getRadius: 1000,
    //     pointRadiusMinPixels: 10,
    //     pointRadiusMaxPixels: 10
    //   })
    // });
  };

  render() {
    const { viewport, searchResultLayer } = this.state;
    return (
      <Fragment>
        <ReactMapGL
          ref={this.mapRef}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...this.state.viewport}
          onViewportChange={this.handleViewportChange}
        >

          <Geocoder
            mapRef={this.mapRef}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onResult={(e) => this.handleOnResult(e)}
            onViewportChange={this.handleGeocoderViewportChange}
          />
        </ReactMapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
