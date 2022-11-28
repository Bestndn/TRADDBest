import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle, AiFillMinusCircle, AiFillChrome, AiOutlineCloudDownload } from "react-icons/ai";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import axios from "axios"
import styles from '../../../styles/Home.module.css';
import { Card, CardContent, Divider, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { HiFolderOpen } from 'react-icons/hi2';
import { useRef, HTMLInputElement } from 'react';
import Image from 'next/image'
import Map from '../../map'


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

function createData(t1, t2, t3, t4, t5, t6, t7, t8, t9) {
    return { t1, t2, t3, t4, t5, t6, t7, t8, t9 };
}
const rows = [
    createData(
      1, 
      2922, 
      2531, 
      "4836 | 4830-00 (1:4000)", 
      64, 
      1-2-0,
      <Fab size="small" color="success" aria-label="add" className={styles.AiFillCheckCircle}><AiFillCheckCircle size={40}/></Fab>, 
      <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillChrome}><AiFillChrome size={40}/></Fab>,
      '',
      ),
  
      createData(
        2, 
        2922, 
        2531, 
        "4836 | 4830-00 (1:4000)", 
        64, 
        1-2-0,
        <Fab size="small" color="success" aria-label="add" className={styles.AiFillCheckCircle}><AiFillCheckCircle size={40}/></Fab>, 
        <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillChrome}><AiFillChrome size={40}/></Fab>,
        '',
        ),
  
        createData(
          3, 
          2922, 
          2531, 
          "4836 | 4830-00 (1:4000)", 
          64, 
          1-2-0,
          <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillExclamationCircle}><AiFillExclamationCircle size={40}/></Fab>, 
          <Fab size="small" color="secondary" aria-label="add"  className={styles.AiFillMinusCircle}><AiFillMinusCircle size={40}/></Fab>,
          '',
          ),
  
          createData(
            4, 
            2922, 
            2531, 
            "4836 | 4830-00 (1:4000)", 
            64, 
            1-2-0,
            <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillCloseCircle}><AiFillCloseCircle size={40}/></Fab>, 
            <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillMinusCircle}><AiFillMinusCircle size={40}/></Fab>,
            '',
            ),
  
            createData(
              5, 
              2922, 
              2531, 
              "4836 | 4830-00 (1:4000)", 
              64, 
              1-2-0,
              <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillCloseCircle}><AiFillCloseCircle size={40}/></Fab>, 
              <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillMinusCircle}><AiFillMinusCircle size={40}/></Fab>,
              '',
              ),
];

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
    const [data, setData] = React.useState([]);
    const [errorChangwat, setErrorChangwat] = React.useState(false);
    const [errorBranch, setErrorBranch] = React.useState(false);
    const [searchChangwat, setSearchChangwat] = React.useState([]);
    const [valueChangwat, setValueChangwat] = React.useState(null);
    const [searchBranch, setSearchBranch] = React.useState([]);
    const [valueBranch, setValueBranch] = React.useState(null);
    const inputRef = useRef(null);
        
    const handleChange = (newValue) => {
        let startdate = dayjs(newValue).format("YYYY-MM-DD");
        setDayvalue(startdate);
        setDayvalue1(null);
    };
    const handleChange1 = (newValue) => {
        let enddate = dayjs(newValue).format("YYYY-MM-DD");
        setDayvalue1(enddate);
    };
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
    
      const [errorD, setErrorD] = React.useState(false);
      const [document, setDocument] = React.useState('');
      const handleChangeDocument = (event, value) => {
        setDocument(value); 
        setErrorD(false);
      }
    
      const [errorF, setErrorF] = React.useState(false);
      const [errorZ, setErrorZ] = React.useState(false);
      const [files, setFiles] = React.useState('');
      const [zones, setZone] = React.useState(null);
      const handleFile = (event, value) => {
        setFiles(value); 
        setErrorF(false);
      }
      const handleZone = (event, value) => {
        setZone(value); 
        setErrorZ(false);
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
                        <Grid container alignItems="center" justifyContent="center" sx={{}}>
                            <Grid mt={2}>
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
                                    error={errorD}
                                    helperText={errorD ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                    />}
                                    />
                            </Grid>
                            <Grid item xs={11} md={4.8} mt={2}>
                              <TextField
                                focused 
                                type="file"
                                fullWidth
                                size= "small"
                                onChange={handleFile}
                                value={files}
                                inputRef={inputRef}
                                error={errorF}
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
                                        helperText={errorF ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                        label={<div>
                                        <Typography variant="text" className={styles.kanit}> เลือกไฟล์ </Typography>
                                        </div>}
                                      />
                            </Grid>
                            <Grid item xs={11} md={2.5} mt={2}>
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
                                    error={errorZ}
                                    helperText={errorZ ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
                                    />}
                                    />       
                            </Grid>
                            <Grid item xs={12} my={2} justifyContent="center" alignContent="center" display="flex">
                                <Searchbutton 
                                variant='contained' 
                                sx= {{
                                    borderRadius: '8px', 
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                }}
                                >
                                    <Typography variant='button' className= {styles.kanit}>
                                        นำเข้า
                                    </Typography>
                                </Searchbutton>
                                <Divider variant="middle" />
                            </Grid>
                            
                            <Grid container sx= {{justifyContent: 'center'}}>
                                <Grid item xs={11.5}>
                                <Card sx= {{bgcolor: '#FBFFFF', borderRadius: '5px'}}>
                                    <CardContent>
                                    <Grid container>
                                        <Grid item xs={12} lg={8.5}>
                                        <Grid>
                                        <Typography className={styles.kanit} variant='body2' fontWeight="bold" sx= {{textDecoration: 'underline'}}>
                                            ข้อกำหนดในการนำเข้า
                                        </Typography>
                                        </Grid>
                                        <Grid sx= {{display: 'flex', mt: 0.5}}>
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
                                        <Grid>
                                            <Typography className={styles.kanit} variant='caption' ml={1}>
                                            สามารถ Download Template จากหน้าหลัก
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
                                        <Grid item xs={12} lg={3.5}>
                                        <Grid display="flex" alignItems="center">
                                            <AiOutlineCloudDownload color="#437FD8" size={20}/>
                                            <Typography className={styles.kanit} variant='overline' fontWeight="bold" sx= {{textDecoration: 'underline', ml: 1}}>
                                            Download Template
                                            </Typography>
                                        </Grid>
                                        <Grid display="flex" flexDirection="column" ml={4}>
                                            {download.map((el)=> {
                                                return(
                                                    <div>
                                                        <Typography className={styles.kanit} variant='caption' sx= {{textDecoration: 'underline'}}>
                                                        {el.name}
                                                        </Typography>
                                                    </div>
                                                    )
                                                })}
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    </CardContent>
                                </Card>
                                </Grid>
                            </Grid>

                            {/* <Grid>
                                <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                                <caption><Pagination count={10} variant="outlined" shape="rounded"/></caption>
                                    <TableHead>
                                    <TableRow >
                                        <TableCell align="ce nter" className={styles.kanit}>ลำดับ</TableCell>
                                        <TableCell align="center" className={styles.kanit}>โฉนดที่ดินเลขที่</TableCell>
                                        <TableCell align="center" className={styles.kanit}>หน้าสำรวจ</TableCell>
                                        <TableCell align="center" className={styles.kanit}>ระวาง</TableCell>
                                        <TableCell align="center" className={styles.kanit}>เลขที่ดิน</TableCell>
                                        <TableCell align="center" className={styles.kanit}>เนื้อที่ไร่-งาน-ตร.ว.</TableCell>
                                        <TableCell align="center" className={styles.kanit}>สถานะนำเข้า</TableCell>
                                        <TableCell align="center" className={styles.kanit}>ไปแผนที่</TableCell>
                                        <TableCell align="center" className={styles.kanit}> </TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.t1}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.t1}
                                        </TableCell>
                                        <TableCell align="center">{row.t2}</TableCell>
                                        <TableCell align="center">{row.t3}</TableCell>
                                        <TableCell align="center">{row.t4}</TableCell>
                                        <TableCell align="center">{row.t5}</TableCell>
                                        <TableCell align="center">{row.t6}</TableCell>
                                        <TableCell align="center">{row.t7}</TableCell>
                                        <TableCell align="center">{row.t8}</TableCell>
                                        <TableCell align="center">{row.t9}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </TableContainer>
                                    </Grid>
                                    <Grid container sx={{ mt: 1, ml: 1 }}>
                                    <Grid className={styles.kanitM}>จำนวนทั้งหมด 5 รายการ</Grid>
                                    <Grid className={styles.kanitM}>นำเข้าได้ 2</Grid>
                                    <Grid className={styles.kanitM}>นำเข้าไม่ได้ 3</Grid>

                                    <Grid sx={{ ml: '42%', mt: -2}}>
                                    <Pagination count={10} variant="outlined" shape="rounded" color="primary"/>
                                    </Grid>
                                    </Grid>
                                    <Grid container sx={{ justifyContent: 'flex-end', mt: 3}}>
                                    <Button variant="contained" sx={{ mr: 10}} className={styles.kanit}>ปรับปรุงข้อมูล</Button>
                                    <Button variant="contained" sx={{ mr: 5 }} className={styles.kanit}>เทียบเคียง</Button>
                                </Grid> */}

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
