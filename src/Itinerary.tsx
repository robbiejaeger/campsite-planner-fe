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

function Itinerary() {
  const [firstNight, setFirstNight] = useState<null | Dayjs>(null);
  const [lastNight, setLastNight] = useState<null | Dayjs>(null);

  return (
    <Paper sx={{p: 3}} elevation={2}>
      <Stack spacing={2}>
        <Typography variant="h4">
          Itinerary
        </Typography>

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
    </Paper>
  )
}

export default Itinerary;
