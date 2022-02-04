import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import logo from '../images/bg.jpg'
import Form from './Form';

const useStyles = makeStyles({
    component: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        width: '65%',
        margin: '0 auto'
    },
    leftContainer: {
        backgroundImage: `url(${logo})`,
        height: '80%',
        width: '40%',
        // marginLeft: '50px',
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        height: '80%',
        width: '70%'
    }
})

const Weather = () => {
    const classes = useStyles();
  return (
      <Box className={classes.component}>
          <Box className={classes.leftContainer}></Box>
          <Box className={classes.rightContainer}>
              <Form />
          </Box>
      </Box>
  );
};

export default Weather;
