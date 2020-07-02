import React, { useState } from 'react';
import {Theme, makeStyles, createStyles, useTheme, CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Button, Grid, Modal, FormControl, FormLabel, TextField} from '@material-ui/core'
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close'


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 0),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
      },
  }),
);

const NavbarComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setUsername("");
        setPassword("");
        setOpenModal(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const setUsernameState = (event: any) => {
        setUsername(event.target.value)
    }
    const setPasswordState = (event: any) => {
        setPassword(event.target.value)
    }

    const body = (
        <div style={{top: '35%', left: '40%'}} className={classes.paper}>
            <div style={{marginBottom: '2%'}}>
            <Grid container>
                <Grid item xs={10}>
                    <Typography variant="h4">Login</Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={handleCloseModal}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
            </div>
            
            <form>
                <div style={{marginTop:'2%'}}>
                    <TextField onChange={setUsernameState} label="Username" variant="outlined"/>
                </div>
                <div style={{marginTop:'2%'}}>
                    <TextField onChange={setPasswordState} label="Password" variant="outlined"/>
                </div>
                <div style={{marginTop:'2%'}}>
                    <Button variant="contained">Login</Button>
                </div>
            </form>
        </div>
      );

    return(
        <>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="static"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <Grid container>
                    <Grid item>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={{marginTop: '.5%'}} variant="h6" >
                            My Tracker App
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <div style={{marginTop: '1%'}}>
                            <Link to={"/register"}>
                                <Button>Register</Button>
                            </Link>
                            <Button onClick={handleOpen}>Login</Button>
                            <Modal
                                open={openModal}
                                closeAfterTransition={true}
                                onClose={handleCloseModal}
                                disableBackdropClick={true}
                            >
                                {body}
                            </Modal>
                        </div>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            </div>
            
        </>
    )
}

export default NavbarComponent;