import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types'
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { BsFolder2Open } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { HiOutlineScale } from "react-icons/hi2";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { useRouter } from "next/router";
import User from "../Component/User";


const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  overflowY: 'auto',
  backgroundColor: '#00A09D',
  color: '#fff'
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  overflowY: 'auto',
  backgroundColor: '#00A09D',
  color: '#fff',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#00A09D',
      white: '#fff',
    },
    secondary: {
      main: '#578AA8',
    },
  },
});
const ListButton = styled(ListItemButton)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    color: ${theme.palette.primary.white};
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.08);
  }
  `}
`;
const DrawButton = styled(IconButton)`
  ${({ theme }) => `
  cursor: pointer;
  color: ${theme.palette.primary.white};
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    color: ${theme.palette.primary.white};
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.08);
  }
  `}
`;

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const MenuItems =[
    {
        text: 'หน้าหลัก',
        icon: <CiHome size= {30}/>,
        href: '/'
    },
    {
        text: 'นำเข้า',
        icon: <BsFolder2Open size= {25}/>,
        href: '../Component/Sidebar/Input'
    },
    {
        text: 'เทียบเคียง',
        icon: <HiOutlineScale size= {25}/>,
        href: '../Compare'
    },
    {
        text: 'รายงาน',
        icon: <TbReportSearch size= {25}/>,
        href: '../Component/Sidebar/Mainreport'
    },
    {
        text: 'ออกจากระบบ',
        icon: <LogoutOutlinedIcon size= {25}/>,
        href: '/'
    },
  ]

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}
            sx= {{
              backgroundImage: 'url(/Nav.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
            >
                <Toolbar>
                  <Grid container sx= {{alignItems: 'center', minwidth: '1100px'}}>
                    <Grid item xs={1.5} sx={{display: 'flex'}}>
                      <Image src="/Comu.png" alt="sdda" className={styles.Image} width={300} height={80}/>
                    </Grid>
                    <Grid item xs={9} display="flex" justifyContent="center" alignItems="flex-end" sx= {{height: 60}}>
                      <Typography variant="h5" noWrap className= {styles.kanit1} 
                        sx= {{color: '#fff', 
                              fontWeight: 'bold', 
                              display: {xs: "none", lg: "block"}
                        }} 
                        component="div"
                        >
                          ระบบการประเมินราคาที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
                      </Typography>
                    </Grid>
                    <Grid item xs={1.5} display="flex" sx= {{display: {xs: "none", lg: "block"}, justifyContent: 'center'}} >
                      <User/>
                    </Grid>
                  </Grid>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} sx= {{position: 'static'}}>
                <DrawerHeader sx= {{position: 'static', mt: 10}}>
                  <DrawButton onClick={() => {setOpen((prev) => !prev);}} >
                    {open === true ? <CiSquareChevLeft size={30} /> : <CiSquareChevRight size= {30} />}
                  </DrawButton>
                </DrawerHeader>
                <Divider variant='middle' sx= {{backgroundColor: '#fff'}}/>
                <List>
                    {MenuItems.map(item => (
                        <Link href={item.href} >
                              <ListItem
                                    key={item.text}
                                    disablePadding 
                                    sx={{ display: 'block' }}
                                >
                                    <ListButton
                                    active
                                    sx={{
                                      marginLeft: '5%',
                                      width: '90%',
                                      borderRadius: '10px',
                                      minHeight: 48,
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 2.5,
                                      my: 3,
                                      '&:focus': {
                                        color: '#fff',
                                        backgroundColor: '#578AA8'
                                      },
                                    }} 
                                    >
                                        <ListItemIcon
                                        sx={{
                                          minWidth: 0,
                                          mr: open ? 3 : 'auto',
                                          justifyContent: 'center',
                                          color: '#fff'
                                        }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} classes= {{primary:styles.kanit}}/>
                                    </ListButton>
                                </ListItem>
                          </Link>
                      ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1}}>
                <DrawerHeader />
                  <div className={styles.container}>
                    {children}
                  </div>
            </Box>
            
        </Box>
      </ThemeProvider>  
    </div>
  );
}