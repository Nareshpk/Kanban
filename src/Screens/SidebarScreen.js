// import { useEffect, useState } from "react";
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { makeStyles } from "@material-ui/core/styles";
// import { Button, Grid } from '@mui/material';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import Paper from '@mui/material/Paper';
// import { DataGrid } from "@mui/x-data-grid";
// import { Container } from 'react-bootstrap';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';


// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(15)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(13)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));


// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//     // eslint-disable-next-line no-undef
// })(({ theme, open }) => ({
//     //   zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         backgroundColor: "#424040",
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );


// const useStyles = makeStyles((theme) => ({
//     logo: {
//         maxWidth: 125,
//     },
//     logs: {
//         maxWidth: 85,
//     },
//     root: {
//         maxWidth: 645,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: "red[500]",
//     },
// }));

export default function SidebarScreen() {

//     const classes = useStyles();

//     const theme = useTheme();
//     const [open, setOpen] = useState(true);

//     const handleDrawerOpen = () => {


//         if (open === true) {
//             setOpen(false);
//         } else {
//             setOpen(true);
//         }
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     const [opendiolog, setOpendiolog] = useState(false);
//     const [opendiolog1, setOpendiolog1] = useState(false);
//     console.log("");
//     const handleClickOpendiolog = () => {
//         setOpendiolog(true);
//     };

//     const handleClosediolog = () => {
//         setOpendiolog(false);
//     };
//     const handleClickOpendiolog1 = () => {
//         setOpendiolog1(true);
//     };

//     const handleClosediolog1 = () => {
//         setOpendiolog1(false);
//     };

//     return (
//         <Box sx={{ display: 'flex', }}>
//             <CssBaseline />
//             <AppBar position="fixed" open={open}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={{
//                             marginLeft: 10,
//                             ...(open && { display: 'block' }),
//                         }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Mini variant drawer
//                     </Typography>
//                 </Toolbar>
//             </AppBar>

//             <Drawer variant="permanent" open={open}>
//                 <DrawerHeader>
//                     {open ? (
//                         <Toolbar>
//                             <img src="images/yozy-logo.png" alt="logo" className={classes.logo} />
//                         </Toolbar>
//                     ) : (
//                         <Toolbar>
//                             <img src="images/yozy-logo.png" alt="logo" className={classes.logs} />
//                         </Toolbar>
//                     )}
//                 </DrawerHeader>
//                 <Divider />
//                 <ListItem disablePadding sx={{ display: 'block' }}>
//                     <>
//                         <ListItemButton >
//                             <ListItemText primary="GETTING STARTED" />
//                         </ListItemButton>

//                         <List>
//                             <ListItemButton sx={{ pl: 10 }}>
//                                 <ListItemText sx={{ color: '#000000' }} primary="Introduction" />
//                             </ListItemButton>
//                         </List>
//                         <List>
//                             <ListItemButton sx={{ pl: 10 }}>
//                                 <ListItemText sx={{ color: '#000000' }} primary="Getting Started" />
//                             </ListItemButton>
//                         </List>
//                         <ListItemButton >
//                             <ListItemText primary="CUSTOMIZATION" />
//                         </ListItemButton>
//                         <List>
//                             <ListItemButton sx={{ pl: 10 }}>
//                                 <ListItemText
//                                     sx={{ color: '#000000' }}
//                                     primary="Layout & Themes"
//                                 />

//                             </ListItemButton>
//                         </List>
//                         <ListItemButton >
//                             <ListItemText primary="UI COMPONENTS" />
//                         </ListItemButton>
//                         <List>
//                             <ListItemButton sx={{ pl: 10 }}>
//                                 <ListItemText
//                                     sx={{ color: '#000000' }}
//                                     primary="Widgets"
//                                 />
//                             </ListItemButton>
//                         </List>
//                         <ListItemButton >
//                             <ListItemText primary="OTHER" />
//                         </ListItemButton>
//                         <List>
//                             <ListItemButton sx={{ pl: 10 }}>
//                                 <ListItemText sx={{ color: '#000000' }} primary="Change Log" />
//                             </ListItemButton>
//                         </List>
//                         <List>
//                             <ListItemButton sx={{ pl: 10 }}>
//                                 <ListItemText sx={{ color: '#000000' }} primary="Upgrade" />
//                             </ListItemButton>
//                         </List>

//                     </>
//                 </ListItem>
//             </Drawer>

//             <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#eef2f7" }}>

//                 <DrawerHeader />
//                 <Box sx={{ display: "flex" }}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={9}>
//                             <Typography>Projects</Typography>
//                         </Grid>
//                         <Grid item xs={3}>

//                             <Breadcrumbs
//                                 separator={<NavigateNextIcon fontSize="small" />}
//                                 aria-label="breadcrumb"
//                             >
//                                 <Typography>Projects</Typography>
//                                 <Typography>Tasks</Typography>
//                                 <Typography>Main</Typography>
//                             </Breadcrumbs>

//                         </Grid>
//                     </Grid>
//                 </Box>
//                 <Box sx={{ mt: 7 }}>
//                     <Typography>Para</Typography>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexWrap: 'wrap',
//                             '& > :not(style)': {
//                                 m: 0.2,
//                                 width: 230,
//                                 height: 180,
//                             },
//                         }}
//                     >
//                         <Paper elevation={0}>
//                             <Box sx={{ alignItems: "center", justifyContent: "center", mt: 5, ml: 12 }}>
//                                 <Typography>Projects</Typography>
//                                 <Typography>Tasks</Typography>
//                                 <Typography>Main</Typography>
//                             </Box>
//                         </Paper>
//                         <Paper elevation={0}>
//                             <Box sx={{ alignItems: "center", justifyContent: "center", mt: 5, ml: 12 }}>
//                                 <Typography>Projects</Typography>
//                                 <Typography>Tasks</Typography>
//                                 <Typography>Main</Typography>
//                             </Box>
//                         </Paper>
//                         <Paper elevation={0}>
//                             <Box sx={{ alignItems: "center", justifyContent: "center", mt: 5, ml: 12 }}>
//                                 <Typography>Projects</Typography>
//                                 <Typography>Tasks</Typography>
//                                 <Typography>Main</Typography>
//                             </Box>
//                         </Paper>
//                         <Paper elevation={0}>
//                             <Box sx={{ alignItems: "center", justifyContent: "center", mt: 5, ml: 12 }}>
//                                 <Typography>Projects</Typography>
//                                 <Typography>Tasks</Typography>
//                                 <Typography>Main</Typography>
//                             </Box>
//                         </Paper>
//                     </Box>
//                 </Box>
//                 <Box sx={{ mt: 5 }}>

//                     <Grid container spacing={2}>
//                         <Grid item xs={5}>
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     flexWrap: 'wrap',
//                                     '& > :not(style)': {
//                                         m: 0.2,
//                                         mt: 2,
//                                         width: 330,
//                                         height: 620,
//                                     },
//                                 }}
//                             >
//                                 <Paper elevation={0}>
//                                     <Box sx={{ mt: 1, display: "flex" }}>
//                                         <Box sx={{ mt: 1, ml: 2 }} >
//                                             <Typography>Products</Typography>
//                                         </Box>
//                                         <Box sx={{ ml: 25 }} >
//                                             <IconButton onClick={handleClickOpendiolog}>
//                                                 <MoreVertIcon />
//                                             </IconButton>
//                                         </Box>
//                                         <Dialog
//                                             open={opendiolog}
//                                             onClick={handleClosediolog}
//                                             aria-labelledby="alert-dialog-title"
//                                             aria-describedby="alert-dialog-description"
//                                         >

//                                             <DialogContent>
//                                                 <List>
//                                                     <ListItemButton sx={{ pl: 4 }}>
//                                                         <ListItemText sx={{ color: '#000000' }} primary="Weekly Report" />
//                                                     </ListItemButton>
//                                                 </List>
//                                                 <List>
//                                                     <ListItemButton sx={{ pl: 4 }}>
//                                                         <ListItemText sx={{ color: '#000000' }} primary="Monthly Report" />
//                                                     </ListItemButton>
//                                                 </List>
//                                                 <List>
//                                                     <ListItemButton sx={{ pl: 4 }}>
//                                                         <ListItemText sx={{ color: '#000000' }} primary="Action" />
//                                                     </ListItemButton>
//                                                 </List>
//                                                 <List>
//                                                     <ListItemButton sx={{ pl: 4 }}>
//                                                         <ListItemText sx={{ color: '#000000' }} primary="Setting" />
//                                                     </ListItemButton>
//                                                 </List>
//                                             </DialogContent>

//                                         </Dialog>
//                                     </Box>

//                                 </Paper>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={7}>
//                             <Paper elevation={0}>
//                                 <Box sx={{ mt: 2, display: "flex" }}>
//                                     <Box sx={{ mt: 2, ml: 2 }} item xs={4}>
//                                         <Typography>Tasks</Typography>
//                                     </Box>
//                                     <Box sx={{ mt: 2, ml: 55 }} >
//                                         <IconButton onClick={handleClickOpendiolog}>
//                                             <MoreVertIcon />
//                                         </IconButton>
//                                     </Box>
//                                     <Dialog
//                                         open={opendiolog1}
//                                         onClick={handleClosediolog1}
//                                         aria-labelledby="alert-dialog-title"
//                                         aria-describedby="alert-dialog-description"
//                                     >

//                                         <DialogContent>
//                                             <List>
//                                                 <ListItemButton sx={{ pl: 4 }}>
//                                                     <ListItemText sx={{ color: '#000000' }} primary="Weekly Report" />
//                                                 </ListItemButton>
//                                             </List>
//                                             <List>
//                                                 <ListItemButton sx={{ pl: 4 }}>
//                                                     <ListItemText sx={{ color: '#000000' }} primary="Monthly Report" />
//                                                 </ListItemButton>
//                                             </List>
//                                             <List>
//                                                 <ListItemButton sx={{ pl: 4 }}>
//                                                     <ListItemText sx={{ color: '#000000' }} primary="Action" />
//                                                 </ListItemButton>
//                                             </List>
//                                             <List>
//                                                 <ListItemButton sx={{ pl: 4 }}>
//                                                     <ListItemText sx={{ color: '#000000' }} primary="Setting" />
//                                                 </ListItemButton>
//                                             </List>
//                                         </DialogContent>

//                                     </Dialog>
//                                 </Box>
//                                 <Box style={{ height: 560, width: "100%" }}>
//                                     {/* <DataGrid
//                                         sx={{
//                                             boxShadow: 10,
//                                             borderRadius: 0,
//                                             m: 2,
//                                         }}
//                                         // columns={}
//                                         // rows={}
//                                         getRowId={(rows) => rows.id}
//                                         // pageSize={10}
//                                         // rowsPerPageOptions= {[25, 50, 100]}
//                                         pagination
//                                         checkboxSelection
                                
//                                     /> */}
//                                 </Box>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 </Box>

//                 <Paper sx={{
//                     marginTop: 'calc(5% + 60px)',
//                     width: '100%',
//                     position: 'relative',
//                     bottom: 0,
//                     width: '100%',
//                     backgroundColor: "#eef2f7"
//                 }} component="footer" variant="outlined">
//                     <Container maxWidth="700px">
//                         <Box
//                             sx={{
//                                 flexGrow: 1,
//                                 justifyContent: "center",
//                                 display: "flex",
//                                 my: 1
//                             }}
//                         >

//                         </Box>

//                         <Box
//                             sx={{
//                                 flexGrow: 1,
//                                 justifyContent: "center",
//                                 display: "flex",
//                                 mb: 2,
//                             }}
//                         >
//                             <Typography variant="caption" color="initial">
//                                 Copyright ©2022. [] Limited
//                             </Typography>
//                         </Box>
//                     </Container>
//                 </Paper>
//             </Box>
//         </Box>
//     );
}