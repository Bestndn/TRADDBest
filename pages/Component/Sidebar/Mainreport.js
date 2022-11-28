import * as React from 'react';
import Link from 'next/link';
import { Button, Grid, Typography, Avatar, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import Map from '../../map'

const customTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        second: 'rgba(255, 255, 255, 0.3)',
      },
      secondary: {
        main: '#8AD2B0',
      },
    },
  });
  const Menubutton = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.second};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      color: ${theme.palette.primary.main};
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.05);
    }
    `}
  `;

  const Iconavatar = styled(Avatar)({
    overflow: 'hidden', 
    width: 60, 
    height: 60, 
    marginTop: '', 
    marginLeft: '-22px', 
    border: '2px solid #8AD2B0', 
    backgroundColor: '#fff', 
    color:'#8AD2B0',
});

export default function Mainreport() {

    const MenuItems =[
        {
            text: 'รายงานบัญชีการประเมินราคาที่ดินไม่ปรากฏในบัญชีราคาประเมินที่ดิน',
            href: '../../Component/Report/Reportsearch1'
        },
        {
            text: 'รายงานสรุปจำนวนแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน ประจำรายเดือน',
            href: '../../Component/Report/Reportsearch'
        },
        {
            text: 'รายงานการเทียบเคียงแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน',
            href: '../Compare'
        },
        {
            text: 'รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียงจากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน',
            href: '../../Component/Dashboard'
        },
        {
            text: 'รายงานสรุปผลการดำเนินงานระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน',
            href: '/'
        },
      ]

  return (
    <div>
        <ThemeProvider theme={customTheme}>
            <Box sx= {{backgroundColor: '#fff', minWidth: '1440px'}}>
                <Grid container sx={{minHeight: '700px'}}>
                    <Grid 
                    sx= {{
                        backgroundColor: '#fff', 
                        background: 'url(/report.png) no-repeat bottom',
                        width: '45%'
                        }}
                        >
                        <Grid container direction= "column" sx= {{alignItems: 'center'}}>
                            <Grid sx= {{backgroundColor: '#00A09D', borderRadius: '5px', my: 3}}>
                                <Typography variant='h6' fontWeight= "bold" className= {styles.kanit1} sx= {{px: 3, color: '#fff'}}>
                                    รายงาน
                                </Typography>
                            </Grid>
                                <Grid>
                                {MenuItems.map(item => (
                                    <Link href={item.href}>
                                        
                                    <Menubutton 
                                        sx= {{
                                        ml: 3,
                                        border: '2px solid #8AD2B0', 
                                        height: '50px',
                                        width: '570px',
                                        mb: 4,
                                        color: '#112A59',
                                        justifyContent: 'flex-start',
                                        }}
                                        >
                                        <Iconavatar>
                                            <BsFileEarmarkBarGraph size= {35}/>
                                        </Iconavatar>
                                            <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                                {item.text}
                                            </Typography>
                                    </Menubutton>
                                        
                                    </Link> 
                                ))}
                                </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid sx= {{width: '55%'}}>
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
            </Box>
        </ThemeProvider>    
    </div>
  )
}
