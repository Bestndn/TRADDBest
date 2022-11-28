import { Grid, Typography } from '@mui/material'
import styles from '../../../styles/Home.module.css';
import React from 'react'

export default function index() {
  return (
    <div>
        <footer>
              <Grid container sx={{height: '50px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00A09D', position: 'static'}}>
                   <Typography className={styles.kanit1} color="#fff">
                    Copyright  © The Treasury Department  
                   </Typography>
              </Grid>
        </footer>
    </div>
  )
}
