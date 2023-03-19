import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import React from 'react'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GoogleIcon from '@mui/icons-material/Google';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: "#fff",
        alignItems: "center",
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f3f3ff',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
}));

export default function LoginScreen() {
    const classes = useStyles();
    return (
        <>

            <Grid container>
                <Grid item xs={12} sm={12} md={5} lg={5}>

                    <Box
                        style={{
                            marginTop: 50,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            ml: 30
                        }}
                    >
                        <img style={{ width: 120, height: 50, alignItems: "center", }} src="images/yozy-logo.png" alt="dark logo" />
                    </Box>
                    <br />
                    <br />
                    <Box
                        style={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            margin: 0,
                            marginLeft: 50,
                            fontFamily: "var(--ct-body-font-family)",
                            fontSize: "var(--ct-body-font-size)",
                            fontWeight: "var(--ct-body-font-weight)",
                            lineHeight: "var(--ct-body-line-height)",
                            color: "var(--ct-body-color)",
                            textAlign: "var(--ct-body-text-align)",
                            backgroundColor: "var(--ct-body-bg)",
                            // -webkit-text-size-adjust:" 100%",
                            // -webkit-tap-highlight-color: "rgba(0,0,0,0)"

                        }}
                    >
                        <Box style={{
                            color: "#6c757d",
                            fontSize: "18px",
                            fontFamily: "Nunito,sans-serif"
                        }}>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                        </Box>
                        <br />
                        <Box style={{
                            color: "#8a969c",
                            fontSize: "14.4px",
                            fontFamily: "Nunito,sans-serif"
                        }}>
                            <Typography variant='p'>Enter your email address and password to access account.</Typography>
                        </Box>
                        <br />
                        <br />
                        <Box component="form" noValidate style={{ mt: 1, }}>
                            <Box style={{
                                color: "#6c757d",
                                fontSize: "14.4px",
                                fontFamily: "Nunito,sans-serif"
                            }}>
                                <Typography> Email Address</Typography>
                            </Box>
                            <Box
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    fullWidth
                                    rows={1}
                                    style={{
                                        width: '48ch',
                                        backgroundColor: "#f3f3ff"
                                    }}
                                    InputProps={{
                                        style: {
                                            height: 40,
                                            padding: '0 14px',
                                        },
                                    }}
                                    id="outlined-textarea"
                                    placeholder="Enter your email"
                                    multiline
                                    variant="outlined"
                                />
                            </Box>
                            <br />
                            <br />
                            <Box style={{
                                color: "#6c757d",
                                fontSize: "14.4px",
                                fontFamily: "Nunito,sans-serif"
                            }}>
                                <Typography>Password</Typography>
                            </Box>
                            <Box
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    fullWidth
                                    style={{
                                        width: '48ch',
                                        backgroundColor: "#f3f3ff",
                                    }}
                                    InputProps={{
                                        style: {
                                            height: 40,
                                            padding: '0 14px',
                                        },
                                    }}
                                    id="outlined-textarea"
                                    placeholder="Enter your password"
                                    multiline
                                    variant="outlined"
                                />
                            </Box>
                            <br />
                            <FormControlLabel
                                style={{
                                    color: "#6c757d"
                                }}
                                control={<Checkbox checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                                    icon={<span className={classes.icon} />}
                                    inputProps={{ 'aria-label': 'decorative checkbox' }}
                                />}
                                label="Remember me"
                            />
                            <br />
                            <br />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ mt: 3, mb: 2, backgroundColor: "#5a89f2", width: '48ch', color: "#ffffff", fontFamily: "Nunito,sans-serif" }}
                            >
                                <ExitToAppIcon style={{ fontSize: "18px" }} />
                                Login
                            </Button>



                        </Box>
                    </Box>
                    <br />
                    <br />
                    <Box>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Nunito,sans-serif",
                            fontSize: "16px",
                            color: "#8a969c"
                        }}>
                            <Typography>Sign in with</Typography>
                        </Box>
                        <br />
                        <div className={classes.root}>

                            <Avatar
                                style={{
                                    border: "2px solid #3b5998",
                                    backgroundColor: "#fff",
                                    width: 32,
                                    height: 32,
                                    // "&:hover": { color: "#ff7519" },
                                }}

                            >
                                <FacebookIcon style={{ width: 18, height: 18, color: "#3b5998" }} />
                            </Avatar>
                            <Avatar
                                style={{
                                    border: "2px solid #FF6666",
                                    backgroundColor: "#fff",
                                    width: 32,
                                    height: 32,
                                    // "&:hover": { color: "#ff7519" },
                                }}
                            >
                                <GoogleIcon sx={{ width: 18, height: 18, color: "#FF6666" }} />
                            </Avatar>
                            <Avatar
                                style={{
                                    border: "2px solid #1DA1F2",
                                    backgroundColor: "#fff",
                                    width: 32,
                                    height: 32,
                                    // "&:hover": { color: "#ff7519" },
                                }}
                            >
                                <TwitterIcon style={{ width: 18, height: 18, color: "#1DA1F2" }} />
                            </Avatar>
                            <Avatar
                                style={{
                                    border: "2px solid #666666",
                                    backgroundColor: "#fff",
                                    width: 32,
                                    height: 32,
                                    // "&:hover": { color: "#ff7519" },
                                }}
                            >
                                <GitHubIcon style={{ width: 18, height: 18, color: "#666666" }} />
                            </Avatar>

                        </div>
                        <br />
                        <br />

                    </Box>
                    <Box style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "16px",
                        color: "#8a969c"
                    }}>
                        <Typography variant='p'>Don't have an account?  <Typography variant='p'>Sign Up</Typography></Typography>
                    </Box>
                </Grid>
                <Grid item xs={7} style={{  width: 10 }}>
                    <div class="auth-fluid-right text-center">
                        <div
                            style={{
                                backgroundImage: `url(images/bg-login.jpeg)`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                width: '735px',
                                minHeight: '790px',
                                marginTop: "-8px",
                                mr: 6
                            }}
                        >
                            <Box
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    fontFamily: "var(--ct-body-font-family)",
                                    fontSize: "var(--ct-body-font-size)",
                                    fontWeight: "var(--ct-body-font-weight)",
                                    lineHeight: "var(--ct-body-line-height)",
                                    boxSizing: "border-box"
                                }}
                            >
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "Nunito,sans-serif",
                                    fontSize: "15px",
                                    color: "#ffffff",
                                    marginTop: 60,
                                }}>
                                    <Typography sx={{

                                    }} variant="h4">Next gen DevOps Accelerator platform</Typography>
                                </Box>
                                <Box style={{

                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "sans-serif",
                                    fontSize: "1.125rem",
                                    color: "#ffffff",
                                    margin: " 0 auto 20px auto",
                                    maxWidth: "700px",
                                    padding: "0px 28px",
                                    mt: 3,

                                }}>
                                    <Typography variant="p">  <FormatQuoteIcon style={{ transform: "rotate(-180deg)" }} />The way forward
                                        <FormatQuoteIcon />
                                    </Typography>
                                </Box>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "sans-serif",
                                    fontSize: "1.125rem",
                                    color: "#ffffff",
                                    margin: " 0 auto 20px auto",
                                    maxWidth: "700px",
                                    padding: "0px 28px",
                                    mt: 3,
                                    lineHeight: 2

                                }}>
                                    <Typography variant="p"> <FormatQuoteIcon style={{ transform: "rotate(-180deg)" }} />
                                        Welcome to the Next Generation DevOps Accelerator Platform. Please log in to access our powerful tools and features designed to help you streamline and optimize your software development and deployment processes.

                                        <FormatQuoteIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </>

    )
}


