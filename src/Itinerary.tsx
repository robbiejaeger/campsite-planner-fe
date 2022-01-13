import React, { useState } from 'react';
import { Dayjs } from 'dayjs';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

function Itinerary() {
  const [firstNight, setFirstNight] = useState<null | Dayjs>(null);
  const [lastNight, setLastNight] = useState<null | Dayjs>(null);

  return (
    <Paper sx={{p: 3}} elevation={2}>
      <Stack spacing={2}>
        <Typography variant="h4">Itinerary</Typography>

        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="First night"
            value={firstNight}
            onChange={(newValue) => {
              setFirstNight(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="Last night"
            value={lastNight}
            onChange={(newValue) => {
              setLastNight(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button variant="contained">See Availability</Button>
      </Stack>

      <Stack sx={{mt: 4}} spacing={2}>
        <Typography variant="h4">Campsite Bookings</Typography>

        <Card elevation={4}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6">08/13/2022</Typography>
              <Typography variant="body1">Click to see campsite availability</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card elevation={4}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6">08/14/2022</Typography>
              <Typography variant="body1">Big Pool</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card elevation={4}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6">08/15/2022</Typography>
              <Typography variant="body1">Select campsite on map</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Paper>
  )
}

export default Itinerary;
