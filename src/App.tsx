import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import { Campsite } from './Models';
import { getCampsites } from './apiCalls';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  const [campsites, setCampsites] = useState<Array<Campsite>>([]);

  useEffect(() => {
    getCampsites()
      .then(campsiteData => setCampsites(campsiteData))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container className="App">
      <h1>RMNP Campsite Planner</h1>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <h3>Bookings...</h3>
        </Grid>
        <Grid item xs={9}>
          <Map campsites={campsites}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
