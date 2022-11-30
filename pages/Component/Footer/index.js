import { Grid, Typography } from '@mui/material'
import styles from '../../../styles/Home.module.css';
import React from 'react'

export default function index() {
  return (
    <div>
        <footer>
              <Grid container sx={{height: '50px'}}>
                <Grid item xs={12} sx={{backgroundColor: '#00A09D', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography className={styles.kanit1} color="#fff">
                    Copyright  © The Treasury Department  
                   </Typography>
                </Grid>
              </Grid>
        </footer>
    </div>
  )
}
