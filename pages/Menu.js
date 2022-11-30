import React from 'react'
import { Box, Grid, Typography, Stack, Button, Link } from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image'
import styles from '../styles/Home.module.css';

const customTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#8AD2B0',
      },
    },
    Typography: {
            fontFamily: 'kanit',
        },
  });
  const Menubutton = styled(Grid)`
    ${({ theme }) => `
    cursor: pointer;
    transition: ${theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      transform: scale(1.05);
    }
    `}
  `;

export default function Menu() {

        const Background = styled(Box)({
            backgroundColor: '#fff', 
            width: '100%',
            height: '100%', 
            position: 'absolute',
            minWidth: '1100px', 
            minHeight: '700px',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            backgroundColor: '#fff'
        });
        const Banner = styled(Box)({
            width: '100%', 
            height: '50%', 
            background: 'url(Menugif.gif)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
        });
        const TypoBanner = styled(Typography)({
            fontWeight: 'bold', 
            color: '#fff', 
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        });
        const TypoUser = styled(Typography)({
            fontFamily: 'kanit',
            color: '#406BBC', 
        });
        const TypoButton = styled(Link)({
            fontWeight: 'bold', 
            color: '#494A4B', 
            fontFamily: 'kanit',
            '&:hover': {textDecoration: 'underline #494A4B'}
        });
        const Logoutbutton = styled(Button)({
            marginBottom: '2%', 
            marginLeft: '2%', 
            width: '150px', 
            justifyContent: 'flex-start', 
            '&:hover': {boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}, 
                borderRadius: '20px'
        });

  return (
    <div>
        <ThemeProvider theme={customTheme}>
            <Background>
                <Banner container>
                        <Grid container sx= {{justifyContent: 'flex-start', mt: '4%'}}>
                            <Grid container sx= {{mr: '1%', display: 'flex', alignItems: 'center', position: 'absolute'}}>
                                <Grid sx= {{ml: 7}}>
                                    <Image src="/Cuma.png" alt="Banner" width= {180}  height= {180}/>
                                </Grid>
                                <Stack direction= "column" sx= {{ml: 3}}>
                                    <TypoBanner variant='h3' className= {styles.kanit}>
                                        กรมธนารักษ์
                                    </TypoBanner>
                                    <TypoBanner variant='h3' className= {styles.kanit}>
                                        THE TREASURY DEPARTMENT
                                    </TypoBanner>
                                </Stack>
                            </Grid>
                        </Grid>
                </Banner>
                <Grid container sx= {{width: '100%', height: '40%'}}>
                    <Grid container sx= {{justifyContent: 'flex-end', height: '10%'}}>
                        <Grid item xs={6}>
                            <Grid container direction= "column" sx= {{justifyContent: 'flex-end', alignItems: 'center', height: '100%'}}>
                                <Typography variant='text'sx= {{fontFamily: 'kanit', fontWeight: 'bold', color: '#CE8F00', fontSize: '32px'}}>
                                    บูรณาการทะเบียนทรัพย์สิน (กรมธนารักษ์)
                                </Typography>
                                <Grid sx= {{p: '2px', bgcolor: '#DD2025', width: '10%'}}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container direction= "column" sx= {{alignItems: 'flex-end', justifyContent: 'center', height: '100%', pr: 2}}>
                                <TypoUser variant= "body2">
                                    ยินดีต้อนรับ, คุณสมชาย ใจดี
                                </TypoUser>
                                <TypoUser variant= "caption">
                                    (เจ้าหน้าที่กรมที่ดิน)
                                </TypoUser>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid container sx= {{justifyContent: 'center', alignItems: 'space-between' , height: '85%'}}>
                        <Grid item xs={12} sx= {{display: 'flex', justifyContent: 'center'}}>
                            <Typography variant='text' sx= {{fontFamily: 'kanit', color: '#848487', mt: '2%', fontSize: '24px'}}>
                                เลือกเมนู
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sx= {{display: 'flex', justifyContent: 'space-between'}}>
                            <Menubutton item xs={5} sx= {{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                                <Image src="/button1.png" alt="Banner" width= {50}  height= {50}/>
                                <TypoButton variant='button' underline="none" sx= {{ml: 2}}>
                                    ระบบเชื่อมโยงแลกเปลี่ยนข้อมูล
                                </TypoButton>
                            </Menubutton>
                            <Menubutton item xs={5} sx= {{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '470px'}}>
                                <Image src="/seo-process.png" alt="Banner" width= {50}  height= {50}/>
                                <TypoButton variant='button' underline="none" sx= {{ml: 2}}>
                                ระบบการประเมินราคาที่ดินสำหรับเอกสารสิทธิประเภทอื่นนอกเหนือจากโฉนดที่ดินและหนังสือรับรองการทำประโยชน์ (น.ส. 3ก.)
                                </TypoButton>
                            </Menubutton>
                        </Grid>
                        <Grid item xs={10} sx= {{display: 'flex', justifyContent: 'space-between'}}>
                            <Menubutton item xs={5} sx= {{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                                <Image src="/button3.png" alt="Banner" width= {50}  height= {50}/>
                                <TypoButton href="./system4v2/main/main" variant='button' underline="none" sx= {{ml: 2}}>
                                ระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                </TypoButton>
                            </Menubutton>
                            <Menubutton item xs={5} sx= {{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '470px'}}>
                                <Image src="/button4.png" alt="Banner" width= {50}  height= {50}/>
                                <TypoButton variant='button' underline="none" sx= {{ml: 2}}>
                                ระบบการประเมินราคาทรัพย์สินทร์ด้วยการเรียนรู้ของเครื่อง 
                                (Machine Learning)
                                </TypoButton>
                            </Menubutton>
                        </Grid>
                        <Grid item xs={10} sx= {{display: 'flex', justifyContent: 'flex-start'}}>
                            <Menubutton item xs={5} sx= {{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                                <Image src="/seo-report.png" alt="Banner" width= {50}  height= {50}/>
                                <TypoButton variant='button' underline="none" sx= {{ml: 2.1}}>
                                รายงานสรุปงานด้านการประเมินราคาทรัพย์สิน
                                </TypoButton>
                            </Menubutton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx= {{width: '100%', height: '10%'}}>
                    <Grid container sx= {{justifyContent: 'flex-start'}}>
                        <Grid item xs={3} container sx= {{justifyContent: 'flex-start', alignItems: 'flex-end', height: '100%'}}>
                            <Logoutbutton variant='text'>
                                <Image src="/power1.png" alt="Button" width= {30}  height= {30}/>
                                <Typography variant='button' sx= {{ml: '5%', fontFamily: 'kanit', color: '#494A4B'}}>
                                    ออกจากระบบ
                                </Typography>
                            </Logoutbutton>
                        </Grid>
                        <Grid item xs={6} container direction= "column" sx= {{justifyContent: 'flex-end', alignItems: 'center', height: '100%'}}>
                            <Typography variant='caption'sx= {{fontFamily: 'kanit', fontWeight: 'bold', color: '#494A4B'}}>
                                สงวนลิขสิทธิ์ โดย กรมธนารักษ  ซอยอารีย์สัมพันธ์ ถนนพระรามที่ 6 แขวงพญาไท เขตพญาไท กรุงเทพ 10400
                            </Typography>
                            <Typography variant='caption'sx= {{fontFamily: 'kanit', fontWeight: 'bold', color: '#494A4B'}}>
                                Email: Webmaster@treasury.go.th โทร. 0-2273-0899 - 903 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Background>
        </ThemeProvider>    
    </div>
  )
}
