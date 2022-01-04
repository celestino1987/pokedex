import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import '../css/AppSpinner.css'

export default function AppSpinner() {
  return (
    <div className='spinner'>

    
      <CircularProgress className="circular" /> 
      <h3>Loading...</h3>
    
    </div>
  );
}