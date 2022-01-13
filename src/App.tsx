import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import Itinerary from './Itinerary';
import { Campsite } from './Models';
import { getCampsites } from './apiCalls';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
          <Typography variant="h3" component="h1">
            RMNP Campsite Planner
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Itinerary />
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={2}>
              <Map campsites={campsites}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
