// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Card, CardContent, CardMedia, TextField } from '@mui/material';
// import { Stack } from 'react-bootstrap';
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@mui/material/Grid";
// import TextareaAutosize from '@mui/base/TextareaAutosize';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox'
// import Paper from '@mui/material/Paper';


// const useStyles = makeStyles((theme) => ({
//   logo: {
//     maxWidth: 125,
//   },
//   root: {
//     maxWidth: 645,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: "red[500]",
//   },
// }));
function Rgisterscreen() {
//   const classes = useStyles();
//   return (
//     <Box>
//       <AppBar position="fixed"
//         style={{
//           zIndex: 999,
//           background: "#000000",
//         }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Toolbar>
//               <img src="images/yozy-logo.png" alt="logo" className={classes.logo} />
//             </Toolbar>
//             <Typography
//               variant="p"
//               noWrap
//               component="ul"
//               href=""
//               sx={{
//                 mr: 2,
//                 flexGrow: 1,
//                 fontFamily: 'Nunito,SansSerif',
//                 color: '#fff',
//                 fontSize: ".8rem",
//                 textDecoration: 'none',
//               }}
//             >
//               <Typography
//                 variant="p"
//                 noWrap
//                 component="li"
//                 href=""
//                 sx={{
//                   mr: 2,
//                   flexGrow: 1,
//                   fontFamily: 'Nunito,SansSerif',
//                   fontSize: ".8rem",
//                   color: '#fff',
//                   textDecoration: 'none',
//                 }}
//               >  Phone 0431-2964305</Typography>

//               E-mail business@yozytech.com
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"

//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>

//             </Box>
//             <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               <Button

//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >

//               </Button>

//             </Box>

           
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Box>
//         <Box>

//           <div class="auth-fluid-right text-center">
//             <div
//               style={{
//                 backgroundImage: `url(images/login/1.jpg)`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 width: '100%',
//                 minHeight: '105vh',
//               }}
//             >
//               <Grid container>
//                 <Grid item xs={12} sm={12} md={7} lg={7}>
//                   <Box>
//                     <Typography

//                       variant='h3'
//                       href=""
//                       sx={{
//                         mt: 10,
//                         ml: 5,
//                         mr: "10px 0",
//                         flexGrow: 1,
//                         fontFamily: 'Nunito,SansSerif',
//                         color: '#000000',
//                         fontSize: "32px",
//                         textDecoration: 'none',

//                       }}>
//                       Request a demo
//                     </Typography>
//                     <Typography

//                       variant='p'
//                       href=""
//                       sx={{
//                         ml: 5,
//                         display: "flex",
//                         justifyContent: "center",
//                         mr: "10px 0",
//                         flexGrow: 1,
//                         fontFamily: 'Nunito,SansSerif',
//                         color: '#000000',
//                         fontSize: "16px",
//                         textDecoration: 'none',

//                       }}> Welcome to our SAAS products FAQ page! Here, you'll find answers to the most frequently asked questions about our software. Our comprehensive FAQ section covers everything from basic functionality to advanced features. If you don't find what you're looking for here, please contact our customer support team. We're always ready to help!</Typography>
//                     <CardMedia
//                       className={classes.media}
//                       image="images/undraw_project_team_lc5a.svg"
//                       title="Paella dish"
//                     />
//                   </Box>
//                 </Grid>
//                 <Grid  item sx={{}}xs={12} sm={12} md={5} lg={5}>
//                   <Paper elevation={0} sx={{ mt: 10, bgcolor: "#FFFCFC" }} variant="outlined" className={classes.root}>
//                     <CardContent>
//                       <Typography

//                         variant='h2'
//                         href=""
//                         sx={{
//                           mr: "10px 0",
//                           flexGrow: 1,
//                           fontFamily: 'Nunito,SansSerif',
//                           color: '#000000',
//                           fontSize: "30px",
//                           textDecoration: 'none',

//                         }}>
//                         In order to prepare your demo

//                       </Typography>
//                       <Typography

//                         variant='p'

//                       >
//                         we kindly request some information from you

//                       </Typography>
//                       <Box component="form">
//                         <Card sx={{ mt: 3 }} variant="outlined">
//                           <CardContent>
//                             <Typography sx={{
//                               fontFamily: 'Nunito,SansSerif',
//                               color: '#24354A',
//                               fontSize: "15px",
//                               padding: "0px 0px 8.2px"
//                             }}>Your Name</Typography>
//                             <Box sx={{ display: "flex" }}>

//                               <Box

//                                 sx={{

//                                   '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
//                                 }}
//                                 noValidate
//                                 autoComplete="off"
//                               >
//                                 <TextField InputProps={{
//                                 }} id="outlined-size-normal" placeholder='First Name' size="small" />
//                               </Box>
//                               <Box

//                                 sx={{

//                                   '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
//                                 }}
//                                 noValidate
//                                 autoComplete="off"
//                               >
//                                 <TextField InputProps={{
//                                 }} id="outlined-size-normal" placeholder='Last Name' size="small" />
//                               </Box>
//                             </Box>
//                             <Typography sx={{
//                               fontFamily: 'Nunito,SansSerif',
//                               color: '#24354A',
//                               fontSize: "15px",
//                               padding: "0px 0px 8.2px"
//                             }}>Work Email</Typography>
//                             <Box

//                               sx={{

//                                 '& .MuiTextField-root': { m: 1, width: '55ch', height: '5ch' },
//                               }}
//                               noValidate
//                               autoComplete="off"
//                             >
//                               <TextField InputProps={{
//                               }} id="outlined-size-normal" placeholder='Test@yourcompany.com' size="small" />
//                             </Box>
//                             <Typography sx={{
//                               fontFamily: 'Nunito,SansSerif',
//                               color: '#24354A',
//                               fontSize: "15px",
//                               padding: "0px 0px 8.2px"
//                             }}>Phone</Typography>
//                             <Box

//                               sx={{

//                                 '& .MuiTextField-root': { m: 1, width: '55ch', height: '5ch' },
//                               }}
//                               noValidate
//                               autoComplete="off"
//                             >
//                               <TextField InputProps={{
//                               }} id="outlined-size-normal" placeholder='' size="small" />
//                             </Box>
//                             <Typography sx={{
//                               fontFamily: 'Nunito,SansSerif',
//                               color: '#24354A',
//                               fontSize: "15px",
//                               padding: "0px 0px 8.2px"
//                             }}>Any specific requirements</Typography>
//                             <Box
//                               noValidate
//                               autoComplete="off"
//                             >
//                               <TextareaAutosize
//                                 aria-label="minimum height"
//                                 minRows={3}
//                                 style={{ width: 450 }}
//                               />
//                             </Box>
//                             <Box sx={{ display: "flex" }}>
//                               <FormGroup>
//                                 <FormControlLabel control={<Checkbox defaultChecked />} label="Agree with" />
//                               </FormGroup>
//                               <Typography sx={{
//                                 mt: 1,
//                                 fontFamily: 'Nunito,SansSerif',
//                                 color: '#24354A',
//                                 fontSize: "15px",
//                                 padding: "0px 0px 8.2px"
//                               }}>Privacy Policy</Typography>

//                             </Box>
//                             <Button fullWidth variant="contained">submit</Button>

//                             <Box sx={{ display: "flex" }}>
//                               <Typography sx={{
//                                 mt: 1,
//                                 fontFamily: 'Nunito,SansSerif',
//                                 color: '#24354A',
//                                 fontSize: "15px",
//                                 padding: "0px 0px 8.2px"
//                               }}> Already have an account?</Typography>
//                               <Typography sx={{
//                                 mt: 1,
//                                 fontFamily: 'Nunito,SansSerif',
//                                 color: 'blue',
//                                 fontSize: "15px",
//                                 padding: "0px 0px 8.2px"
//                               }}> Sign in</Typography>

//                             </Box>
//                           </CardContent>
//                         </Card>
//                       </Box>
//                     </CardContent>
//                   </Paper >
//                 </Grid>
//               </Grid>
//             </div>
//           </div>
//         </Box>

//       </Box>
//     </Box>
//   )
}

export default Rgisterscreen
