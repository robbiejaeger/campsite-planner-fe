import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import './App.css';

function App() {
  return (
    <main className="App">
      <h1>RMNP Campsite Planner</h1>

      <MapContainer className="MapContainer" center={[40.3428, -105.6836]} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </main>
  );
}

export default App;
