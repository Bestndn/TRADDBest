import React from 'react'
import { Divider, Grid, Typography, Stack, Button, Autocomplete, TextField } from '@mui/material'
import { Box } from '@mui/system'
import styles from '../../../styles/Home.module.css';
import { VscSearch } from "react-icons/vsc";
import Image from 'next/image'
import Map from '../../map'
import dayjs from 'dayjs';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FcCalendar } from "react-icons/fc";
import { CiCalendarDate } from "react-icons/ci";
import ThLocale from 'date-fns/locale/th';

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
    const [Dayvalue, setDayvalue] = React.useState(null);
    const [Dayvalue1, setDayvalue1] = React.useState(null);
    
    const handleChange = (newValue) => {
        let startdate = dayjs(newValue).format("YYYY-MM-DD");
        setDayvalue(startdate);
        setDayvalue1(null);
    };
    const handleChange1 = (newValue) => {
        let enddate = dayjs(newValue).format("YYYY-MM-DD");
        setDayvalue1(enddate);
    };

        const Background = styled(Box)({
            backgroundColor: '#fff', 
            width: '100%',
            height: '100vh', 
            minHeight: '700px',
            display: 'flex', 
            backgroundColor: '#fff',
        });
        const edittextfileld1 = {
            fontFamily: 'Kanit',
        }

  return (
    <div>
        <ThemeProvider theme={customTheme}>
            <Background>
                <Grid container>
                    <Grid item xs={12} sm={5.5} sx= {{}}>
                        <Grid container alignItems="center" justifyContent="center" mt={3}>
                            <Grid sx= {{mt: 1, display: {xs: "none", lg: "block"}}}>
                                <Image src="/PinClipart.jpg" alt="Banner" width= {60}  height= {60}/>
                            </Grid>
                            <Grid>
                                <Typography component="div" className= {styles.kanit1} sx= {{fontWeight: 'bold', color: '#2F4266'}}>
                                    รายงานการเทียบเคียงแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
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
                                    fullWidth
                                    classes={{ option: styles.kanit}}
                                    size= "small"
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
                                    fullWidth
                                    classes={{ option: styles.kanit}}
                                    size= "small"
                                    sx={{"& .MuiInputBase-root": {
                                    backgroundColor: '#fff', fontFamily: 'kanit'
                                    } }}
                                    renderInput={(params) => <TextField {...params}  
                                    placeholder= "กรุณาเลือกสำนักงานที่ดิน" 
                                    />}
                                    />
                            </Grid>
                            <Grid item xs={11} md={5.5} mt={2}>
                                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ThLocale}>
                                    <DatePicker
                                        disableFuture
                                        inputFormat='yyyy-MM-dd'
                                        label={
                                            <Grid container>
                                                <Typography sx={edittextfileld1}>ตั้งแต่วันที่</Typography>
                                                <Typography color="red"> *</Typography>
                                            </Grid>}
                                        classes={{option: styles.kanit}}
                                        sx={{"& .MuiInputBase-root": {
                                            backgroundColor: '#fff', fontFamily: 'kanit'
                                            } }}
                                        components={{
                                        OpenPickerIcon: CiCalendarDate}}
                                        value={Dayvalue}
                                        onChange={(handleChange) => {
                                        setDayvalue(handleChange);
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth size= "small"/>}
                                        />
                                </LocalizationProvider>        
                            </Grid>
                            <Grid item xs={11} md={5.5} mt={2}>
                                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ThLocale}>
                                    <DatePicker
                                        disableFuture
                                        inputFormat='yyyy-MM-dd'
                                        label={
                                            <Grid container>
                                                <Typography sx={edittextfileld1}>ถึงแต่วันที่</Typography>
                                                <Typography color="red"> *</Typography>
                                            </Grid>}
                                        classes={{option: styles.kanit}}
                                        sx={{"& .MuiInputBase-root": {
                                            backgroundColor: '#fff', fontFamily: 'kanit'
                                            } }}
                                        components={{
                                        OpenPickerIcon: CiCalendarDate}}
                                        value={Dayvalue1}
                                        onChange={(handleChange1) => {
                                        setDayvalue1(handleChange1);
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth size= "small"/>}
                                        />
                                </LocalizationProvider>        
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