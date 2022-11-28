import { Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import styles from '../../../styles/Home.module.css';
export default function AppWidgetSummary(props) {

  return (
        <Grid container spacing={1} justifyContent={'center'}>
            <Grid item xs={12} sm={12} md={2.3}>
                <WidgetSummary title="นำเข้าทั้งหมด" total="100" />
            </Grid>

            <Grid item xs={12} sm={12} md={2.3}>
                <WidgetSummary title="นำเข้าได้" color="rgba(90, 178, 237, 1)" total="22"/>
            </Grid>

            <Grid item xs={12} sm={12} md={2.3}>
                <WidgetSummary title="นำเข้าไม่ได้" color="rgba(127, 215, 213, 1)" total="22"/>
            </Grid>

            <Grid item xs={12} sm={12} md={2.3}>
                <WidgetSummary title="เทียบเคียงได้" color="rgba(191, 157, 238, 1)" total="22"/>
            </Grid>

            <Grid item xs={12} sm={12} md={2.3}>
                <WidgetSummary title="เทียบเคียงไม่ได้" color="rgba(252, 221, 69, 1)" total="22"/>
            </Grid>
        </Grid>
    )
}

function WidgetSummary({ title, total, icon, color = 'rgba(92, 106, 196, 1)', sx, ...other }) {
    return (
      <Card
        sx={{
          py: 2,
          textAlign: 'center',
          maxWidth: 'auto',
          borderRadius: '10px'
        }}
        style={{ backgroundColor: color }}
        {...other}
        elevation={6}
      >
        <Stack direction={'column'} >
          <Typography variant="subtitle3" className={styles.kanit1} fontWeight="bold" style={{ color: '#fff' }} >
            {title}
          </Typography>
          <Typography variant="subtitle3" className={styles.kanit1} style={{ color: '#fff' }} >
            จำนวนแปลง
          </Typography>
          <Typography variant="h2" className={styles.kanit1} fontWeight="bold" style={{ color: '#fff' }}>{total}</Typography>
        </Stack>
      </Card>
    );
  }