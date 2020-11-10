import React, { useState, useEffect } from 'react'
import API_KEY from '../../api-key.js'

import { useStyles } from './main-page.styles'
import PageTitle from '../page-title/page-title.component.js'
import ImageWrapper from '../image-wrapper/image-wrapper.component'
import VideoWrapper from '../video-wrapper/video-wrapper.component'

import LinearProgress from "@material-ui/core/LinearProgress"
import CssBaseline from "@material-ui/core/CssBaseline"
import Explore from "../explore/explore.component"
import RoversPage from "../marsroverpage/marsrover.component";


const MainPage = () => {

  return (
    <div className={useStyles.root}>
      <CssBaseline />
      <Explore />
      <RoversPage />

    </div>

  );
}

export default MainPage
