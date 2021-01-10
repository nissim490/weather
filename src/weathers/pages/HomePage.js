import Weather from'./weather.js'

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import React, { useContext, useState } from 'react';


import '../../css/style.css'
const HomePage  = () => {
  

  const [isLoading, setIsLoading] = useState(false);
  const {  error,  clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
  
  const src = `https://www.accuweather.com/images/weathericons/13.svg`
  return (
<React.Fragment>


  {isLoading && (<div className="center"><LoadingSpinner /></div> )}
  <div className="tour-item__image"><img src='https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1047&q=80' alt="title" /></div>
    
  <div class="header__text-box">
    <div>   </div>
                <h1 class="heading-primary">
                
                <span class="heading-primary--main"><img  alt="HomeIcon" className="HomeIcon" src={src}></img>FORECAST</span>
                    <p></p>
                   
                </h1>
                {/*  <NavLink to="/Balance"  class="btn btn--white btn--animated">Balance</NavLink> */}
 </div>
           
  

   
 
                
                
</React.Fragment>
  )
};
///'https://images.unsplash.com/photo-1581012771300-224937651c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
export default HomePage ;
