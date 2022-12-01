import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import axios from "axios"
import styles from '../../../styles/Home.module.css';
import { Card, CardContent, Divider, IconButton } from '@mui/material';
import { useRef, HTMLInputElement } from 'react';
import Image from 'next/image'


function createData(t1, t2, t3, t4, t5, t6, t7, t8, t9,t10) {
    return { t1, t2, t3, t4, t5, t6, t7, t8, t9,t10 };
}

const rows = [
    createData(
      '1', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Checked.png" alt="Banner" width= {20}  height= {20}/>
      ),
    createData(
      '2', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Checked.png" alt="Banner" width= {20}  height= {20}/>
      ),
    createData(
      '3', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Checked.png" alt="Banner" width= {20}  height= {20}/>
      ),
    createData(
      '4', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Checked.png" alt="Banner" width= {20}  height= {20}/>
      ),
    createData(
      '5', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Checked.png" alt="Banner" width= {20}  height= {20}/>
      ),
    createData(
      '5', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Checked.png" alt="Banner" width= {20}  height= {20}/>
      ),
    createData(
      '5', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Warn.png" alt="Banner" width= {20}  height= {20}/>
      ),
    createData(
      '5', 
      <IconButton size="small" aria-label="Map"><Image src="/Location.png" alt="Banner" width= {20}  height= {20}/></IconButton>, 
      '71000000', 
      '4836', 
      'I', 
      '5030',
      '64', 
      '4000',
      '64',
      <Image src="/Docs.png" alt="Banner" width= {20}  height= {20}/>
      ),
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

export default function Tb() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Grid container mt={2}>
      <Typography className={styles.kanit1} color="#000" ml={1} fontWeight="bold" sx={{mb: 1}}>
        รายละเอียดข้อมูลนำเข้า
      </Typography>
    </Grid>
    <Grid sx={{overflow: 'auto', height: '370px'}}>
    <TableContainer>
    <Table aria-label="simple table" size="small" sx={{width: '950px'}}>
      <TableHead sx= {{backgroundColor: '#009C88'}}>
        <TableRow>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              ลำดับ
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              ไปแผนที่
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              รหัสสำนักงาน
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              UTMMAP1
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              UTMMAP2
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              UTMMAP3
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              UTMMAP4
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              UTMSCALE
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              เลขที่ดิน
              </Typography>
            </TableCell>
            <TableCell align="center" display="flex">
              <Typography variant='body2' className={styles.kanit1} color="#fff">
              สถานะ
              </Typography>
              <IconButton size="small">
                <Image src="/filter.png" alt="Banner" width= {15}  height= {15}/>
              </IconButton>
            </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
            key={row.t1}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
            <TableCell component="th" scope="row" align="center" className={styles.kanit}>
                {row.t1}
            </TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t2}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t3}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t4}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t5}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t6}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t7}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t8}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t9}</TableCell>
            <TableCell align="center" className={styles.kanit}>{row.t10}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    </Grid>
    <Grid container sx={{ my: 0.5, ml: 1, alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='body2' className={styles.kanit}>จำนวนทั้งหมด 5 รายการ</Typography>
          <Pagination count={10} shape="rounded" color="primary"/>
        </Grid>
        <Grid container 
          sx={{
          justifyContent: 'space-between', 
          mt: 1, 
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
        </ThemeProvider>
    </div>
  )
}
