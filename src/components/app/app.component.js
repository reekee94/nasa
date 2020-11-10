import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import {useStyles} from './app.styles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Header from '../header/header.component'
import RoversPage from '../marsroverpage/marsrover.component'
import PictureOfTheDay from '../APOD/apod.component'
import MainPage from "../main-page/main-page.component";



const App = () => {
  console.log("APP_START")
    return (
      <div className={useStyles().root}>
        <CssBaseline />
        <Router>
          <Header />
          <Switch>

            <Route path="/rovers">
              <RoversPage />
            </Route>

            <Route path="/apod">
              <PictureOfTheDay />
            </Route>

            <Route path="/home">
              <Redirect to="/" />
            </Route>

            <Route path="/">
              <MainPage />
            </Route>

          </Switch>
        </Router>
      </div>
    )
}

export default App
