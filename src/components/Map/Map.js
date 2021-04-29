import React, {useState, useEffect} from 'react';
import ReactMapGL from 'react-map-gl';
import MAPBOX_CONSTANTS from './MapboxConstants'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamVucnloZW5uaWZlciIsImEiOiJja28wZ3VvaXEwMTVhMnBzNW56b3Zob3F1In0.KimcaTZ0wuhO6f_dGzKBOQ'


function Map() {
  const [viewport, setViewport] = React.useState({
    width: '100vh',
    height: '100vh',
    latitude: 37.890800,
    longitude: -122.127472,
    zoom: 10,

});

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle={'mapbox://styles/mapbox/streets-v11'}
    />
  );
}

export default Map;
