import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Campsite } from './Models';

type MapProps = {
  campsites: Campsite[]
}

function Map({ campsites }:MapProps) {
  const campsiteMarkers = campsites.map(campsite => {
    return (
      <Marker key={campsite.title} position={[campsite.location.lat, campsite.location.long]}>
        <Popup>
          <h3>{campsite.title}</h3>
        </Popup>
      </Marker>
    )
  });

  return (
    <MapContainer className="MapContainer" maxZoom={16} center={[40.3658, -105.6836]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
        url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
      />
      {campsiteMarkers}
    </MapContainer>
  );
}

export default Map;
