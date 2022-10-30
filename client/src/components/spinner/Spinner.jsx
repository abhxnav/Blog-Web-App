import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './spinner.scss';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex' }} className="spinner">
      <CircularProgress />
    </Box>
  );
}
