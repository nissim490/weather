import React, { useState  } from 'react';
import RotatCard from '../../shared/components/UIElements/RotatCard.js';



import './weatherItem.scss';
import axios from 'axios'

const WeatherItem = props => {
 
  
 


  return (
    <React.Fragment>
  <RotatCard
  backNight={props.Night}
  backTemperature={props.Temperature.Minimum}
  frontDate={props.Date}
  frontDay={props.Day}
  frontTemperature={props.Temperature.Maximum}
  linkComp={props.Link}
  linkMob={props.MobileLink}
  />
    </React.Fragment>
  );
};

export default WeatherItem;

