import { Grid, Select, Autocomplete, TextField } from '@mui/material';
import React from 'react'
import styles from '../../../styles/Home.module.css';

const optionTypes = [
    { key: '1', title: 'โฉนด' },
    { key: '2', title: 'นส.3.ก' },
]

export default function AppWidgetSummary(props) {

  return (
        <Grid container justifyContent={'flex-start'}>
            <Grid item xs={12} md={4} my={1} mx={3}>
            <Autocomplete
                id="combo-box-demo"
                options={optionTypes}
                getOptionLabel={(option) => option.title}
                disableClearable
                classes={{ option: styles.kanit}}
                fullWidth
                size= "small"
                sx={{ "& .MuiInputBase-root": {
                backgroundColor: '#fff', fontFamily: 'kanit'
                } }}
                renderInput={(params) => <TextField {...params}  
                placeholder= "กรุณาเลือกโฉนด" 
                />}
                />
            </Grid>
            <Grid item xs={12} md={4} my={1} mx={3}>
            <Autocomplete
                id="combo-box-demo"
                options={optionTypes}
                getOptionLabel={(option) => option.title}
                disableClearable
                classes={{ option: styles.kanit}}
                fullWidth
                size= "small"
                sx={{ "& .MuiInputBase-root": {
                backgroundColor: '#fff', fontFamily: 'kanit'
                } }}
                renderInput={(params) => <TextField {...params}  
                placeholder= "กรุณาเลือกจังหวัด" 
                />}
                />
            </Grid>
        </Grid>
    )
}

