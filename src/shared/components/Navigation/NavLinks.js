import React, { useContext,useEffect ,useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './NavLinks.scss';
import axios from "axios";
const NavLinks = props => {
  
  

  const inputHandler = async event => { 
        
    event.preventDefault()
    
  }
  const srcHome = `https://svgsilh.com/svg/309113.svg`
const src = `https://www.accuweather.com/images/weathericons/3.svg`


  return (




<div class="navigation">
<input type="checkbox" class="navigation__checkbox" id="navi-toggle"></input>

<label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">

            <ul class="navigation__list">
           
            <li class="navigation__item"><a href="/" class="navigation__link"><span> <img  alt="weatherIcon" className="weather-icon-nav" src={srcHome}></img></span>Home Page</a></li>
            <li class="navigation__item"><a href="/Forecaste" class="navigation__link"><span> <img  alt="weatherIcon" className="weather-icon-nav" src={src}></img></span> Weather</a></li>
  
            
            </ul>
            </nav>

</div>

  );
};

export default NavLinks;
