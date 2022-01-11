import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import { Campsite } from './Models';

function App() {
  const [campsites] = useState<Array<Campsite>>([{title: "Big Pool", location: {lat: 40.2744767, long: -105.7643305}, datesAvailable: [], elevation: "9,160 ft", detailsLink: "https://www.nps.gov/romo/planyourvisit/upload/072-Big-Pool-2017-2.pdf"}]);

  return (
    <main className="App">
      <h1>RMNP Campsite Planner</h1>

      <Map campsites={campsites}/>
    </main>
  );
}

export default App;
