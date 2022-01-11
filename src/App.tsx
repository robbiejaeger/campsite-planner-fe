import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import { Campsite } from './Models';

function App() {
  const [campsites, setCampsites] = useState<Array<Campsite>>([]);

  useEffect(() => {
    setCampsites([
      {title: "Big Pool", location: {lat: 40.2744767, long: -105.7643305}, datesAvailable: [], elevation: "9,160 ft", detailsLink: "https://www.nps.gov/romo/planyourvisit/upload/072-Big-Pool-2017-2.pdf"},
      {title: "North Inlet Falls", location: {lat: 40.269919, long: -105.7248948}, datesAvailable: [], elevation: "9,540 ft", detailsLink: "https://www.nps.gov/romo/planyourvisit/upload/079-North-Inlet-Falls-2021-1.pdf"}
    ])
  }, []);

  return (
    <main className="App">
      <h1>RMNP Campsite Planner</h1>

      <Map campsites={campsites}/>
    </main>
  );
}

export default App;
