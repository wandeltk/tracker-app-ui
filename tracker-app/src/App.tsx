import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core';

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
    <NavbarComponent />
    <main className={classes.content}>
      <Router>
        <Switch>
          <Route path="/" render={() => <HomeComponent/>}/>
        </Switch>
      </Router>
    </main>
    </>
  );
}

export default App;
