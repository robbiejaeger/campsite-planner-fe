import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import { Campsite } from './Models';
import { getCampsites } from './apiCalls';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

function App() {
  const [campsites, setCampsites] = useState<Array<Campsite>>([]);

  useEffect(() => {
    getCampsites()
      .then(campsiteData => setCampsites(campsiteData))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <AppBar sx={{ mb: 2 }} position="static">
        <Toolbar>
          <h1>RMNP Campsite Planner</h1>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box sx={{ border: 1, p: 2 }}>
              <h3>Itinerary</h3>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ border: 1, p: 2 }}>
              <Map campsites={campsites}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
