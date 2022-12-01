import React from 'react';
import DataTable from './Data';
import { ButtonBase, Divider, Grid, Typography, Button } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
// import { saveAs } from 'file-saver';
// import axios from 'axios';

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
    background-color: ${theme.palette.secondary.third};
    
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

export default function TableSearch(props) {
  const [datalist, setDataList] = React.useState([])
//   const setDate = () => {
//     let nawData = []
//     let data = props.data
//     data.forEach((el) => {
//       let dataitems = el
//       let actions = (
//         <ButtonAction
//           onClickExcel={() => onClickExcel(dataitems)}
//           onClickPDF={() => onClickPDF(dataitems)}
//           onClickCSV={() => onClickCSV(dataitems)}
//           onClickTXT={() => onClickTXT(dataitems)}
//         />
//       )
//       dataitems['actions'] = actions
//       nawData.push(dataitems)
//     })
//     setDataList(nawData)
//   }

//   const onClickExcel = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportExcel(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportExcel(el)
//     }
//   }
  
//   const onClickPDF = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportPdf(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportPdf(el)
//     }
//   }
  
//   const onClickCSV = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportCsv(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportCsv(el)
//     }
//   }
  
//   const onClickTXT = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportTxt(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportTxt(el)
//     }
//   }

//   const structureReportExcel = async (el) => {
//     try {
//       let res = await StuctureReportXlsx.downloadExcel(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportExcel = async (el) => {
//     try {
//       let res = await UnStuctureReportXlsx.downloadExcel(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
  
//   const structureReportPdf = async (el) => {
//     try {
//       let res = await StuctureReportPdf.downloadPdf(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportPdf = async (el) => {
//     try {
//       let res = await UnStuctureReportPdf.downloadPdf(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   const structureReportTxt = async (el) => {
//     try {
//       let res = await StuctureReportTxt.downloadTxt(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportTxt = async (el) => {
//     try {
//       let res = await UnStuctureReportTxt.downloadTxt(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   const structureReportCsv = async (el) => {
//     try {
//       let res = await StuctureReportCsv.downloadCsv(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportCsv = async (el) => {
//     try {
//       let res = await UnStuctureReportCsv.downloadCsv(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }


let colum = [
    {
      name: "ลำดับ",
      listname: "",
    },
    {
      name: "ไปแผนที่",
      listname: "",
    },
    {
      name: "รหัสสำนักงาน",
      listname: "",
    },
    {
      name: "UTMMAP1",
      listname: "",
    },
        {
      name: "UTMMAP2",
      listname: "",
    },
    {
      name: "UTMMAP3",
      listname: "",
    },
    {
      name: "UTMMAP4",
      listname: "",
    },
    {
      name: "UTMSCALE",
      listname: "",
    },
    {
      name: "เลขที่ดิน",
      listname: "",
    },
    {
      name: "สถานะ",
      listname: "",
    },
  ];

  

//   React.useEffect(() => {
//     setDate()
//   }, [props.data])

  return (
    <div>
      <ThemeProvider theme={customTheme}>
      <Grid container sx={{ justifyContent: 'center', bgcolor: 'white'}}>
        <Grid container mt={2}>
          <Typography className={styles.kanit1} color="#000" ml={1} fontWeight="bold" sx={{mb: 1}}>
            รายละเอียดข้อมูลนำเข้า
          </Typography>
        </Grid>
        <Grid sx={{ width: '100%' }}>
          <DataTable data={datalist} colum={colum} sx={{ overflow: 'auto' }} />
        </Grid>
        <Grid container 
          sx={{
          justifyContent: 'space-between', 
          }}>
          <Grid>
            <Grid display="flex">
              <Grid ml={1} display="flex" sx={{width: '120px'}}>
                <Image src="/checked.png" alt="Banner" width= {20}  height= {20}/>
                <Typography ml={1} variant='body2' color="#000" className={styles.kanit}>
                  นำเข้าได้
                </Typography>
              </Grid>
              <Grid display="flex">
                <Image src="/warn.png" alt="Banner" width= {20}  height= {20}/>
                <Typography ml={1} variant='body2' color="#000" className={styles.kanit}>
                  เคยเทียบเคียงแล้ว
                </Typography>
              </Grid>
            </Grid>
            <Grid display="flex" mt={1} ml={1}>
              <Grid display="flex" sx={{width: '120px'}}>
                <Image src="/cancel.png" alt="Banner" width= {20}  height= {20}/>
                <Typography ml={1} variant='body2' color="#000" className={styles.kanit}>
                  นำเข้าไม่ได้
                </Typography>
              </Grid>
              <Grid display="flex">
                <Image src="/docs.png" alt="Banner" width= {20}  height= {20}/>
                <Typography ml={1} variant='body2' color="#000" className={styles.kanit}>
                  มีในบัญชีราคาประเมินที่ดิน
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            {/* <Examinebutton variant="contained" className={styles.kanit} 
              sx={{borderRadius: '8px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', width: '110px', height: '45px', mr: 2}}>
              รายงาน
              แปลงนำเข้า
            </Examinebutton> */}
            <Examinebutton variant="contained" className={styles.kanit} 
              sx={{borderRadius: '8px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', width: '110px', height: '45px', mr: 1}}>
              ตรวจสอบ
              แปลงนำเข้า
            </Examinebutton>
          </Grid>
          </Grid>   
          </Grid>   
        </ThemeProvider>
    </div>
  );
}

function ButtonAction(props) {
  return (
    <Grid container  sx= {{justifyContent: 'space-evenly'}}>
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#009D23', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickExcel}
      >
        <Typography variant='text' className={styles.kanit} color="white">Excel</Typography>
      </ButtonBase>
        <Divider orientation="vertical" flexItem color="gray" />
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#E20000', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickPDF}
      >
        <Typography variant='text' className={styles.kanit} color="white">PDF</Typography>
      </ButtonBase>
        <Divider orientation="vertical" flexItem color="gray" />
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#266F36', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickCSV}
      >
        <Typography variant='text' className={styles.kanit} color="white">CSV</Typography>
      </ButtonBase>
        <Divider orientation="vertical" flexItem color="gray" />
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#3D39FF', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickTXT}
      >
        <Typography variant='text' className={styles.kanit} color="white">TXT</Typography>
      </ButtonBase>
    </Grid>
  )
}