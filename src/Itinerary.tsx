import React, { useState } from 'react';
import { Dayjs } from 'dayjs';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function Itinerary() {
  const [firstNight, setFirstNight] = useState<null | Dayjs>(null);
  const [lastNight, setLastNight] = useState<null | Dayjs>(null);

  return (
    <Paper elevation={2}>
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
    </Paper>
  )
}

export default Itinerary;
