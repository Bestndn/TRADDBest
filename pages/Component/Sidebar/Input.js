import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"
import styles from '../../../styles/Home.module.css';
import { Card, CardContent, Divider, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { HiFolderOpen } from 'react-icons/hi2';
import { useRef, HTMLInputElement } from 'react';
import Image from 'next/image'
import Map from '../../map'
import Table2 from '../Table/Tb'
import Tb from '../Table/Tbdata'


const optionTypes = [
    { key: '1', title: 'Structure' },
    { key: '2', title: 'Un-Structure' },
];
const download = [
    {name: "โฉนด โซน47"},
    {name: "โฉนด โซน48"},
    {name: "น.ส. 3ก. โซน47"},
    {name: "น.ส. 3ก. โซน48"},
];
const top100Films = [
    { label: 'โฉนดที่ดิน', year: 1994 },
    { label: 'น.ส. 3ก.', year: 1994 },
];

const customTheme = createTheme({
    palette: {
      primary: {
        main: '#2F4266',
        second: '#FFC71A',
        third: '#226CFD',
      },
      secondary: {
        main: '#fff',
        second: '#4167B3'
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
      
    }
    `}
  `;
  const Examinebutton = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.second};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      color: ${theme.palette.secondary.main};
      background-color: ${theme.palette.primary.third};
      
    }
    `}
  `;

export default function Menu() {
    const [data, setData] = React.useState([]);
    const [errorChangwat, setErrorChangwat] = React.useState(false);
    const [errorBranch, setErrorBranch] = React.useState(false);
    const [errorDocument, setErrorDocument] = React.useState(false);
    const [errorFile, setErrorFile] = React.useState(false);
    const [errorZone, setErrorZone] = React.useState(false);
    const [searchChangwat, setSearchChangwat] = React.useState([]);
    const [searchBranch, setSearchBranch] = React.useState([]);
    const [valueChangwat, setValueChangwat] = React.useState(null);
    const [valueBranch, setValueBranch] = React.useState(null);
    const [document, setDocument] = React.useState('');
    const [files, setFiles] = React.useState('');
    const [zones, setZone] = React.useState(null);
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    const inputRef = useRef(null);
        
    const handleChangwat = (event, value) => {
        setValueChangwat(value);
        console.log(value);
        setErrorChangwat(false);
      }
    
      const handleBranch = (event, value) => {
        setValueBranch(value);
        console.log(value);
        setErrorBranch(false);
      }
    
      const handleChangeDocument = (event, value) => {
        setDocument(value); 
        setErrorDocument(false);
      }
    
      const handleFile = (event, value) => {
        setFiles(value); 
        setErrorFile(false);
      }
      const handleZone = (event, value) => {
        setZone(value); 
        setErrorZone(false);
      }
      const handleSubmit = () => {
        setShow(true)
        setShow1(false)
        setShow2(false)
      }

      
    
      const _resSearchChangwat = async () => {
        try {
          let url = `${process.env.hostAPI}/MASTER/SearchChangwat`
    
    
          let res = await axios.get(url)
          let data = res.data
          console.log('_resSearchChangwat' ,data);
          await setSearchChangwat(data);
        } catch (e) {
          console.log(e);
        }
      }
    
      const _resSearchBranch = async () => {
        let databranch = new Object()
        if (valueChangwat != null) {
          databranch.CHANGWAT_CODE = valueChangwat.CHANGWAT_CODE;
        }
        if (valueChangwat == null) {
          databranch.CHANGWAT_CODE = "";
        }
        console.log(databranch)
        try {
          let url = `${process.env.hostAPI}/MASTER/Searchbranch`
          let res = await axios.post(url, databranch)
          let data = res.data
          console.log('_resSearchBranch', data);
          await setSearchBranch(data);
        } catch (e) {
          console.log(e);
        }
      }
    
      React.useEffect(()=>{
        _resSearchChangwat()
      },[])
    
      React.useEffect(() => {
        _resSearchBranch()
      }, [valueChangwat]);

        const Background = styled(Box)({
            backgroundColor: '#fff', 
            width: '100%',
            height: '100vh', 
            minHeight: '700px',
            display: 'flex', 
            backgroundColor: '#fff'
        });

  return (
    <div>
        <ThemeProvider theme={customTheme}>
            <Background>
                <Grid container sx={{height: '100%'}}>
                    <Grid item xs={12} sm={5.5} sx= {{}}>
                        <Grid container alignItems="center" justifyContent="center" sx={{}}>
                            <Grid mt={4}>
                                <Typography component="div" className= {styles.kanit1} sx= {{fontWeight: 'bold', color: '#2F4266'}}>
                                    นำเข้าและจัดการชั้นข้อมูลรูปแปลงที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx= {{justifyContent: 'space-around'}}>
                            <Grid item xs={11} md={4.5} mt={2}>
                            <Autocomplete
                                size= "small"
                                disableClearable
                                fullWidth
                                id="combo-box-demo"
                                options={optionTypes}
                                value={valueChangwat}
                                onChange={handleChangwat}
                                classes={{ option: styles.kanit}}
                                getOptionLabel={(option) => option.CHANGWAT_NAME}
                                renderInput={(params) => <TextField {...params} 
                                sx={{"& .MuiInputBase-root": {
                                  backgroundColor: '#fff', fontFamily: 'kanit'
                                  } }}
                                label={<div>
                                <Typography variant="text" className={styles.kanit}> จังหวัด </Typography>
                                <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
                                </div>}  
                                error={errorChangwat}
                                helperText={errorChangwat ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                />}
                                />
                            </Grid>
                            <Grid item xs={11} md={7} mt={2}>
                                <Autocomplete
                                    size= "small"
                                    disableClearable
                                    fullWidth
                                    id="combo-box-demo"
                                    options={searchBranch}
                                    value={valueBranch}
                                    onChange={handleBranch} 
                                    classes={{ option: styles.kanit}}
                                    getOptionLabel={(option) => option.BRANCH_NAME}
                                    renderInput={(params) => <TextField {...params} 
                                    sx={{"& .MuiInputBase-root": {
                                      backgroundColor: '#fff', fontFamily: 'kanit'
                                      } }}
                                    label={<div>
                                    <Typography variant="text" className={styles.kanit}> สำนักงาน </Typography>
                                    <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
                                    </div>} 
                                    error={errorBranch}
                                    helperText={errorBranch ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                    />}
                                    />     
                            </Grid>
                            <Grid item xs={11} md={4} mt={2}>
                                <Autocomplete
                                    disableClearable
                                    fullWidth
                                    size= "small"
                                    id="combo-box-demo"
                                    options={top100Films}
                                    value={document}
                                    onChange={handleChangeDocument}
                                    classes={{ option: styles.kanit}}
                                    renderInput={(params) => <TextField {...params} 
                                    sx={{"& .MuiInputBase-root": {
                                      backgroundColor: '#fff', fontFamily: 'kanit'
                                      } }}
                                    label={<div>
                                    <Typography variant="text" className={styles.kanit}> ประเภทเอกสาร </Typography>
                                    <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
                                    </div>} 
                                    error={errorDocument}
                                    helperText={errorDocument ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                    />}
                                    />
                            </Grid>
                            <Grid item xs={11} md={5.3} mt={2}>
                              <TextField
                                focused 
                                type="file"
                                fullWidth
                                size= "small"
                                value={files}
                                onChange={handleFile}
                                inputRef={inputRef}
                                classes={{ option: styles.kanit}}
                                sx={{
                                  '& input::file-selector-button': {
                                    display: 'none'},
                                  "& .MuiInputBase-root": {
                                  backgroundColor: '#fff', fontFamily: 'kanit'
                                  } }}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        variant="outlined"
                                        sx= {{color: '#2F4266'}}
                                        onClick={(e) =>
                                        inputRef.current?.dispatchEvent(
                                        new MouseEvent('click', {
                                        view: window,
                                        bubbles: true,
                                        cancelable: true,
                                        buttons: 1,
                                        }),
                                        )
                                        }
                                        >
                                        <HiFolderOpen/>
                                      </IconButton>
                                    </InputAdornment>
                                        ),
                                        }}
                                        error={errorFile}
                                        helperText={errorFile ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                        label={<div>
                                        <Typography variant="text" className={styles.kanit}> เลือกไฟล์ </Typography>
                                        </div>}
                                      />
                            </Grid>
                            <Grid item xs={11} md={2} mt={2}>
                                <Autocomplete
                                    disableClearable
                                    fullWidth
                                    size= "small"
                                    id="combo-box-demo"
                                    options={[
                                    {value:'47', title:'47'},
                                    {value:'48', title:'48'},]
                                    }
                                    value={zones}
                                    onChange={handleZone}
                                    classes={{ option: styles.kanit}}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} 
                                    sx={{"& .MuiInputBase-root": {
                                      backgroundColor: '#fff', fontFamily: 'kanit'
                                      } }}
                                    label={<div>
                                    <Typography variant="text" className={styles.kanit}> เลือกโซน </Typography>
                                    <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
                                    </div>}  
                                    error={errorZone}
                                    helperText={errorZone ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                    />}
                                    />       
                            </Grid>
                      {show1?  <Grid item xs={12} my={2} justifyContent="center" alignContent="center" display="flex">
                                <Searchbutton 
                                variant='contained' 
                                sx= {{
                                    borderRadius: '8px', 
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    width: '100px'
                                }}
                                onClick={handleSubmit}
                                >
                                    <Typography variant='button' className= {styles.kanit}>
                                        นำเข้า
                                    </Typography>
                                </Searchbutton>
                            </Grid> :null}
                                
                            
                      {show1?  <Grid container sx= {{justifyContent: 'center'}}>
                                <Grid item xs={11.5}>
                                <Card elevation={3} sx= {{bgcolor: '#FBFFFF', borderRadius: '5px', height: '170px'}}>
                                    <CardContent>
                                    <Grid container>
                                        <Grid item xs={12} lg={8.5}>
                                        <Grid>
                                        <Typography className={styles.kanit} variant='body2' fontWeight="bold" sx= {{textDecoration: 'underline'}}>
                                            ข้อกำหนดในการนำเข้า
                                        </Typography>
                                        </Grid>
                                        <Grid sx= {{display: 'flex', mt: 1}}>
                                        <Typography className={styles.kanit} variant='body2'>
                                        • พิกัดรูปแปลง
                                        </Typography>
                                        <Typography className={styles.kanit} variant='body2' sx= {{textDecoration: 'underline', color: '#FF0000', mx: 0.5, fontWeight: 'bold'}}>
                                            Indian 1975 (Zone 47/48)  
                                        </Typography>
                                        <Typography className={styles.kanit} variant='body2'>
                                            เท่านั้น 
                                        </Typography>
                                        </Grid>
                                        <Grid sx= {{display: 'flex', flexDirection: 'column', mt: 0.5}}>
                                        <Grid sx= {{display: 'flex'}}>
                                        <Typography className={styles.kanit} variant='body2'>
                                        • รูปแบบไฟล์ต้องเป็น รูปแบบของ 
                                        </Typography>
                                        <Typography className={styles.kanit} variant='body2' sx= {{textDecoration: 'underline', color: '#FF0000', mx: 0.5, fontWeight: 'bold'}}>
                                            กรมที่ดิน 
                                        </Typography>
                                        <Typography className={styles.kanit} variant='body2'>
                                            เท่านั้น 
                                        </Typography>
                                        </Grid>
                                        <Grid sx= {{display: 'flex', mt: 0.5}}>
                                        <Typography className={styles.kanit} variant='body2'>
                                        • นำเข้าได้
                                        </Typography>
                                        <Typography className={styles.kanit} variant='body2' sx= {{textDecoration: 'underline', color: '#FF0000', mx: 0.5, fontWeight: 'bold'}}>
                                            ไม่เกิน
                                        </Typography>
                                        <Typography className={styles.kanit} variant='body2'>
                                            100 รูปแปลง 
                                        </Typography>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                        
                                    </Grid>
                                    </CardContent>
                                </Card>
                                </Grid>
                            </Grid>  :null}
                            
                              {/* <Grid container>
                                <Button variant='contained'className={styles.kanit1} 
                                sx={{
                                  borderRadius: '4px 4px 0px 0px', 
                                  bgcolor: '#D7D7D7', 
                                  color: '#000',
                                  boxShadow: 'none',
                                  fontWeight: 'bold',
                                  '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  '&:focus': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  }}>
                                  นำเข้าได้
                                </Button>
                                <Button variant='contained'className={styles.kanit1} 
                                sx={{
                                  borderRadius: '4px 4px 0px 0px', 
                                  bgcolor: '#D7D7D7', 
                                  color: '#000',
                                  boxShadow: 'none',
                                  fontWeight: 'bold',
                                  '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  '&:focus': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  }}>
                                  เคยเทียบเคียง
                                </Button>
                                <Button variant='contained'className={styles.kanit1} 
                                sx={{
                                  borderRadius: '4px 4px 0px 0px', 
                                  bgcolor: '#D7D7D7', 
                                  color: '#000',
                                  boxShadow: 'none',
                                  fontWeight: 'bold',
                                  '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  '&:focus': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  }}>
                                  มีในบัญชีประกาศ
                                </Button>
                                <Button variant='contained'className={styles.kanit1} 
                                sx={{
                                  borderRadius: '4px 4px 0px 0px', 
                                  bgcolor: '#D7D7D7', 
                                  color: '#000',
                                  boxShadow: 'none',
                                  fontWeight: 'bold',
                                  '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  '&:focus': {
                                    color: '#fff',
                                    backgroundColor: '#009C88'
                                  },
                                  }}>
                                  นำเข้าไม่ได้
                                </Button>
                              </Grid> */}
                              
                              {show?   
                                <Grid sx={{overflow: 'hidden'}}>
                                  <Tb/>
                                </Grid>
                              :null}

                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6.5}>
                      <Grid container 
                        sx= {{
                            justifyContent: 'center', 
                            alignItems: 'center',
                            height: '100%',
                            }}
                            > 
                            <Grid sx= {{width: '100%', height: '100%', backgroundColor: '#fff', overflow: 'hidden'}}>
                                <Map/>
                            </Grid>
                        </Grid>                   
                    </Grid>
                </Grid>
            </Background>
        </ThemeProvider>    
    </div>
  )
}
