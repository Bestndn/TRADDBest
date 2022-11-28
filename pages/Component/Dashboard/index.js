import { Grid, Typography } from '@mui/material'
import styles from '../../../styles/Home.module.css';
import Image from 'next/image'
import React from 'react'
import AppWidgetSummary from './Dashboard'
import Map from '../../map'
import Auto from './autocom'
import AppDonutGraph from './Donutgraph'
import AppBarGraph from './BarYgraph'

export default function index() {
  return (
    <div>
        <Grid container mt={2}>
            <Grid item xs={12} sx= {{display: 'flex', alignItems: 'center'}}>
                <Grid sx= {{mx: 1, mt: 1}}>
                    <Image src="/PinClipart.jpg" alt="Banner" width= {60}  height= {60}/>
                </Grid>
                <Typography component="div" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#2F4266'}}>
                    รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียง จากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                </Typography>
            </Grid>
            <Grid item xs={12} md={9} mt={1}>
                <AppWidgetSummary/>
                <Grid container>
                    <Grid item xs={12} my={1}>
                        <Auto/>
                    </Grid> 
                    <Grid container my={2} sx={{justifyContent: 'space-evenly'}} >
                        <Grid item xs={12} md={5.6}>
                            <AppDonutGraph/>
                        </Grid> 
                        <Grid item xs={12} md={5.6}>
                            <AppBarGraph/>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={3} sx= {{overflow: 'hidden', borderRadius: '4px'}}>
                <Map />
            </Grid>
        </Grid>
    </div>
  )
}
