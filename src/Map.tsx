import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Campsite } from './Models';

type MapProps = {
  campsites: Campsite[]
}

function Map({ campsites }:MapProps) {
  const campsiteMarkers = campsites.map(campsite => {
    return (
      <Marker position={[campsite.location.lat, campsite.location.long]}>
        <Popup>
          <h3>{campsite.title}</h3>
          <a href={campsite.detailsLink} target="_blank" rel="noreferrer">Site Details</a>
        </Popup>
      </Marker>
    )
  });

  return (
    <MapContainer className="MapContainer" center={[40.3428, -105.6836]} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
      {campsiteMarkers}
    </MapContainer>
  );
}

export default Map;
