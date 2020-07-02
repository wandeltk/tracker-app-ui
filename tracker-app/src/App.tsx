import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core';
import RegisterComponent from './components/RegisterComponent';
import MyTrackerComponent from './components/MyTrackersComponent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginLeft: '5%',
      flexGrow: 1,
      padding: theme.spacing(3),
    }
  })
);
function App() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
    <Router>
    <NavbarComponent />
    <main className={classes.content}>
      <Switch>
        <Route path="/" render={() => <HomeComponent/>}/>
        <Route path="/register" render={() => <RegisterComponent/>}/>
        <Route path="/my-trackers" render={() => <MyTrackerComponent/>}/>
      </Switch>
    </main>
    </Router>
    </>
  );
}

export default App;
