import React from 'react'
import { Box, Grid, Typography, Button, Link, Paper, Divider, 
        FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton
       } from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { HiUser } from "react-icons/hi";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#406BBC',
    },
    secondary: {
      main: '#fff',
    },
  },
});
const Signinbutton = styled(Button)`
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

export default function Login() {

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
            backgroundImage: 'url(/login1.png)',
            backgroundSize: 'cover', 
            backgroundPosition: 'bottom',
        });
        const [values, setValues] = React.useState({
            password: '',
            showPassword: false,
          });
        
          const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
          };
        
          const handleClickShowPassword = () => {
            setValues({
              ...values,
              showPassword: !values.showPassword,
            });
          };
        
          const handleMouseDownPassword = (event) => {
            event.preventDefault();
          };
        
          const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            console.log({
              email: data.get('email'),
              password: data.get('password'),
            });
          };
        
              const TypoBanner = styled(Typography)({
                fontWeight: 'bold', 
                color: '#fff', 
                textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
              });
        
              const IdPwField = styled(FormControl)({
                '& label.Mui-focused': {
                  color: '#2F4266',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#2F4266',
                },
                "& .MuiInputBase-root": {
                  backgroundColor: '#fff', fontFamily: 'kanit'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#2F4266',
                  },
                  '&:hover fieldset': {
                    borderColor: 'gray',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2F4266',
                  },
                },
              });
              const Openicon = styled(MdOutlineVisibility)({
                color: '#C7C7C7',
              });
              const Officon = styled(MdOutlineVisibilityOff)({
                color: '#C7C7C7'
              });
        

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Background>
            <Grid container sx= {{height: '20%'}}>
                <Grid item xs={12} lg={2} sx= {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Image src="/Cuma.png" alt="Banner" width= {150}  height= {150}/>
                </Grid>
                <Grid item xs={12} md={10} sx= {{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <Grid sx= {{display: {xs: "none", lg: "block"}}}>
                        <TypoBanner variant='h3' className= {styles.kanit}>
                            บูรณาการทะเบียนทรัพย์สิน 
                        </TypoBanner>
                    </Grid>
                    <Grid sx= {{display: {xs: "none", lg: "block"}}}>
                        <TypoBanner variant='h3' className= {styles.kanit}>
                            (กรมธนารักษ์) 
                        </TypoBanner>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx= {{justifyContent: 'center', height: '60%', alignItems: 'center'}}>
                <Grid item xs={11} lg={4.5}>
                    <Paper 
                    sx={{
                        borderRadius: '30px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        background: 'rgba(255, 255, 255, 0.3)', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 2
                        }} 
                        >
                        <Grid>
                            <Image src="/group.png" alt="Banner" width= {150}  height= {150}/>
                        </Grid>
                    <Box component="form" onSubmit={handleSubmit} noValidate 
                        sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        }}
                        >
                    <IdPwField
                        fullWidth 
                        variant="outlined" 
                        margin="normal" 
                        size= "small"
                        >
                    <InputLabel htmlFor="outlined-adornment-password" >
                        {<Typography className= {styles.kanit} color= "#2F4266">Username</Typography>}
                    </InputLabel>
                    <OutlinedInput
                        autoComplete="current-password"
                        name="Username"
                        id="Username"
                        fullWidth
                        startAdornment={
                          <InputAdornment position="start">
                            <HiUser size= {25} color= "#2F4266"/>
                          </InputAdornment>
                        }
                        label="Username"
                      />
                    </IdPwField>
                    <IdPwField
                        fullWidth 
                        variant="outlined" 
                        margin="normal" 
                        size= "small"
                        >
                    <InputLabel htmlFor="outlined-adornment-password" >
                        {<Typography className= {styles.kanit} color= "#2F4266">Password</Typography>}
                    </InputLabel>
                    <OutlinedInput
                        autoComplete="current-password"
                        name="password"
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        fullWidth
                        startAdornment={
                          <InputAdornment position="start">
                            <IoIosLock size= {25} color= "#2F4266"/>
                          </InputAdornment>
                        }
                        endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                      {values.showPassword ? <Officon size= {20}/> : <Openicon size= {20}/>}
                    </IconButton>
                    </InputAdornment>
                      }
                      label="Password"
                      />
                    </IdPwField>
                    <Grid container justifyContent= "flex-end">
                        <Link 
                            href="#" 
                            variant="body2" 
                            className= {styles.kanit} 
                            underline="none"
                            color= "#424242"
                            sx= {{'&:hover': {textDecoration: 'underline #424242'}}}
                            >
                            ลืมรหัสผ่าน ?
                        </Link>
                        </Grid>
                    <Signinbutton
                        href='./Menu'
                        type="submit"
                        variant="contained"
                        sx={{ mt: 1, mb: 2, width: '130px', fontFamily: 'kanit', borderRadius: '8px', fontWeight: 'bold'}}
                        >
                        เข้าสู่ระบบ
                    </Signinbutton>
                    <Grid mb={2} sx= {{display: 'flex'}}>
                        <Typography variant="body2" sx= {{fontFamily: 'kanit'}}>
                                หรือ ต้องการ 
                        </Typography>
                        <Link href="#" variant="body2" sx= {{fontFamily: 'kanit', color: '#2F4266', fontWeight: 'bold', ml: 1}}>
                                {"ลงทะเบียน"}
                        </Link>
                    </Grid>
                    </Box>
                  </Paper>
              </Grid>
          </Grid>
          <Grid container sx= {{justifyContent: 'center', alignItems :'flex-end', height: '20%'}}>
              <Grid item xs= {8.5}  sx= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems :'center'}}>
                <Typography variant='caption' sx= {{fontFamily: 'kanit', fontWeight: 'bold', color: '#fff'}}>
                  สงวนลิขสิทธิ์ โดย กรมธนารักษ์  ซอยอารีย์สัมพันธ์ ถนนพระรามที่ 6 แขวงพญาไท เขตพญาไท กรุงเทพ 10400
                </Typography>
                <Typography variant='caption'sx= {{fontFamily: 'kanit', fontWeight: 'bold', color: '#fff'}}>
                  Email: Webmaster@treasury.go.th โทร. 0-2273-0899 - 903 
                </Typography>
              </Grid>
          </Grid>
        </Background>
      </ThemeProvider>  
    </div>
  )
}
