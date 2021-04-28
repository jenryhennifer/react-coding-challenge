import * as React from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamVucnloZW5uaWZlciIsImEiOiJja28wZ3VvaXEwMTVhMnBzNW56b3Zob3F1In0.KimcaTZ0wuhO6f_dGzKBOQ'

function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.890800,
    longitude: -122.127472,
    zoom: 10,

});

  return (
    <ReactMapGL
      {...viewport}
      width="100vh"
      height="100vh"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

export default Map;
