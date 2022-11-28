import { Grid } from '@mui/material';
import React from 'react'
import Map from "./map";

export default function Home() {
  return (
    <div>
        <Grid container sx={{height: '100vh'}}>
            <Map/>
        </Grid>
    </div>
  )
}
