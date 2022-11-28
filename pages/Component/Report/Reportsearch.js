import React from 'react'
import { Divider, Grid, Typography, Stack, Button, Autocomplete, TextField } from '@mui/material'
import { Box } from '@mui/system'
import styles from '../../../styles/Home.module.css';
import { VscSearch } from "react-icons/vsc";
import Image from 'next/image'
import Map from '../../map'
import dayjs from 'dayjs';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const optionTypes = [
    { key: '1', title: 'Structure' },
    { key: '2', title: 'Un-Structure' },
]

const customTheme = createTheme({
    palette: {
      primary: {
        main: '#2F4266',
      },
      secondary: {
        main: '#fff',
      },
    },
  });
  const Searchbutton = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      color: ${theme.palette.primary.main};
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.08);
    }
    `}
  `;

export default function Menu() {
    
    const Background = styled(Box)({
            backgroundColor: '#fff', 
            width: '100%',
            height: '100%', 
            minHeight: '700px',
            display: 'flex', 
            backgroundColor: '#fff'
        });
  
return (
    <div>
        <ThemeProvider theme={customTheme}>
            <Background>
                <Grid container>
                    <Grid item xs={12} sm={5.5} sx= {{}}>
                        <Grid container alignItems="center" justifyContent="center" mt={2}>
                            <Grid sx= {{mt: 1, display: {xs: "none", lg: "block"}}}>
                                <Image src="/PinClipart.jpg" alt="Banner" width= {60}  height= {60}/>
                            </Grid>
                            <Grid>
                                <Typography component="div" className= {styles.kanit1} sx= {{fontWeight: 'bold', color: '#2F4266'}}>
                                    รายงานสรุปจำนวนแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดินประจำรายเดือน 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx= {{justifyContent: 'space-around'}}>
                            <Grid item xs={11} md={5.5} mt={2}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={optionTypes}
                                    getOptionLabel={(option) => option.title}
                                    disableClearable
                                    classes={{ option: styles.kanit}}
                                    size= "small"
                                    fullWidth
                                    sx={{"& .MuiInputBase-root": {
                                    backgroundColor: '#fff', fontFamily: 'kanit'
                                    } }}
                                    renderInput={(params) => <TextField {...params}  
                                    placeholder= "กรุณาเลือกจังหวัด" 
                                    />}
                                    />
                            </Grid>
                            <Grid item xs={11} md={5.5} mt={2}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={optionTypes}
                                    getOptionLabel={(option) => option.title}
                                    disableClearable
                                    classes={{ option: styles.kanit}}
                                    size= "small"
                                    fullWidth
                                    sx={{"& .MuiInputBase-root": {
                                    backgroundColor: '#fff', fontFamily: 'kanit'
                                    } }}
                                    renderInput={(params) => <TextField {...params}  
                                    placeholder= "กรุณาเลือกสำนักงานที่ดิน"
                                    />}
                                    />
                            </Grid>
                            <Grid item xs={11} md={5.5} mt={2}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={optionTypes}
                                    getOptionLabel={(option) => option.title}
                                    disableClearable
                                    classes={{ option: styles.kanit}}
                                    size= "small"
                                    fullWidth
                                    sx={{"& .MuiInputBase-root": {
                                    backgroundColor: '#fff', fontFamily: 'kanit'
                                    } }}
                                    renderInput={(params) => <TextField {...params}  
                                    placeholder= "กรุณาเลือกเดือน" 
                                    />}
                                    />        
                            </Grid>
                            <Grid item xs={11} md={5.5} mt={2}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={optionTypes}
                                    getOptionLabel={(option) => option.title}
                                    disableClearable
                                    classes={{ option: styles.kanit}}
                                    size= "small"
                                    fullWidth
                                    sx={{"& .MuiInputBase-root": {
                                    backgroundColor: '#fff', fontFamily: 'kanit'
                                    } }}
                                    renderInput={(params) => <TextField {...params}  
                                    placeholder= "กรุณาเลือกปี "
                                    />}
                                    />     
                            </Grid>
                            <Grid item xs={12} my={2} justifyContent="center" alignContent="center" display="flex">
                                <Searchbutton 
                                variant='contained' 
                                startIcon= {<VscSearch/>}
                                sx= {{
                                    borderRadius: '8px', 
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                }}
                                >
                                    <Typography variant='button' className= {styles.kanit}>
                                        ค้นหา
                                    </Typography>
                                </Searchbutton>
                                <Divider variant="middle" />
                            </Grid>
                            <Grid item xs={12} justifyContent="center" alignContent="center">
                                <Divider variant="middle" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6.5} sx={{overflow: 'hidden'}}>
                        <Map/>                    
                    </Grid>
                </Grid>
            </Background>
        </ThemeProvider>
    </div>
  )
}