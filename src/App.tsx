import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import { Campsite } from './Models';
import { getCampsites } from './apiCalls';

function App() {
  const [campsites, setCampsites] = useState<Array<Campsite>>([]);

  useEffect(() => {
    getCampsites()
      .then(campsiteData => setCampsites(campsiteData))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className="App">
      <h1>RMNP Campsite Planner</h1>

      <Map campsites={campsites}/>
    </main>
  );
}

export default App;
