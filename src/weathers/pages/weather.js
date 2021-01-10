import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import axios from 'axios'
import Autocomplete from "react-autocomplete";
import WeatherList from '../components/weatherList';
import '../../css/style.css'
const Weather = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUsers2, setLoadedUsers2] = useState()
    const [loadedUsers, setLoadedUsers] = useState()
    const [loadedUsers3, setLoadedUsers3] = useState()
    const [city, setCity] = useState("md");
    const [value, setvalue] = useState();
    const [icon, setIcon] = useState();
    const [title, setTitle] = useState('Jerusalem');
    const [value1, setvalue1] = useState("213225");
    const [Warning, setWarning] = useState();
    
    let autoCompleteCity =[]
let i=0
let m = new Map()

    const n = (e)=>{
        setvalue(e.target.value)
        setCity(e.target.value)
        
             }



             useEffect(() => {
  
              const fetchUsers = async () => {
                try {
                  const response = await sendRequest(
                    ` https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=b1B7VUr0HfJ8VbIqmHG1TFUIjM7dDj6M&q=${city}`,
                    'get',
                  );
                  setLoadedUsers2(response.data);
                  if(response.data.length===0)
                    setWarning(true)
                } catch (err) { 
                  console.error(err);
                }  
              };
              fetchUsers();
            }, [city]);
    

  /*           useEffect(() => {
  ///WwI9p6r8dGQtToXg4mP4GKgF1J7pHJy  U6aCDll4XCfWmsiW2eUuDGY6rlkcLM9y jCLPUDFqHDZV7369qCF3gfHGutmpcVKG MYHpxs7tlWWvlbbL2eeAJG09ow85LYER b1B7VUr0HfJ8VbIqmHG1TFUIjM7dDj6M
              const fetchUsers = async () => {
                try {
                  const response = await sendRequest(
                    ` https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&APPid=9cac328010a0f347de2647ed5e0a1d47`,
                    'get',
                  );
                  setLoadedUsers3(response)
                } catch (err) { 
                  console.error(err);
                }  
              };
              fetchUsers();
            }, [value]); */

            useEffect(() => {
              ///WwI9p6r8dGQtToXg4mP4GKgF1J7pHJy  U6aCDll4XCfWmsiW2eUuDGY6rlkcLM9y jCLPUDFqHDZV7369qCF3gfHGutmpcVKG MYHpxs7tlWWvlbbL2eeAJG09ow85LYER
                          const fetchUsers = async () => {
                            try {
                              const response = await sendRequest(
                                ` https://dataservice.accuweather.com/currentconditions/v1/${value1}?apikey=b1B7VUr0HfJ8VbIqmHG1TFUIjM7dDj6M`,
                                'get',
                              );
                              
                               setLoadedUsers3(response.data[0]) 
                               console.log(loadedUsers3);
                               setIcon(loadedUsers3.WeatherIcon)
                            } catch (err) { 
                              console.error(err);
                            }  
                          };
                          fetchUsers();
                        }, [value1]);



            useEffect(() => {
              setWarning(false)
                          const fetchUsers = async () => {
                            try {
                              const response = await sendRequest(
                                `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${value1}?apikey=b1B7VUr0HfJ8VbIqmHG1TFUIjM7dDj6M`,
                                'get',
                              );
                              if(!response)
                              setWarning(true)
                            setLoadedUsers(response.data.DailyForecasts)
                            let today = new Date()
                           
                            if(today.getHours()>=17||today.getHours()<=6)
                            setIcon(response.data.DailyForecasts[0].Night.Icon)
                            else
                            setIcon(response.data.DailyForecasts[0].Day.Icon)
                            } catch (err) { 
                              setWarning(true)
                              console.error(err);
                            }  
                          };
                          fetchUsers();
                        }, [value1]);





if(!!loadedUsers2)
  { loadedUsers2.map(el=> m.set (el.LocalizedName,el.Key) )
      loadedUsers2.map(el=> {autoCompleteCity[i]=el.LocalizedName
      i=i+1
} ) 
 }
 
/*  console.log(loadedUsers3.data.weather[0].description);
 console.log(loadedUsers3.data.weather[0].icon); */
  const menuStyle = {
    display: 'block',
    border: ' none',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2.5rem 2rem',
    fontSize: '1.5rem',
     position: 'none', 
    overflow: 'auto',
    fontfamily: "inherit",
    maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
    transition: "all .3s",
    zIndex: 100,
    borderBottom:'3px solid #3b63d1',
  };
  
  let src=`https://www.accuweather.com/images/weathericons/${icon}.svg`
  return (
    <React.Fragment> 
    
 <div className='weaterContiner'>

      <div className='Autocomplete'>
      <div className='search'>  <i class="fas fa-search"></i></div> 
        <Autocomplete  
         
        inputProps={{ style: menuStyle, placeholder:"Choose a City"}}
        items={autoCompleteCity}
        shouldItemRender={(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item}
        renderItem={(item, isHighlighted) => <div style={{   color:'black',   /* position: 'none',  */ background: isHighlighted ? '#3b63d1' : 'white' }}> <b>{item}</b> </div>}
        value={value}
        onChange={n}
        onSelect={ (val)=>{
        setvalue(val)
        setTitle(val)
        setvalue1(m.get(val))
        
        }}/>
        {!!Warning&&<label className="Warning">Enter valid city name</label>}
      </div>
      <div className='firstContiner'>
     
      <img  alt="weatherIcon" className="weather-icon-nav1" src={src}></img>
      {!!loadedUsers&&<h1 className='h1_item'>{title}</h1>}
          {!!loadedUsers3&&<b className='b_item'>{Math.floor(loadedUsers3.Temperature.Metric.Value)}°C</b>} 
    </div>
    {!!loadedUsers3&&<h1 className='h2_item'> {loadedUsers3.WeatherText} </h1>}
      { !!loadedUsers&&<WeatherList items={loadedUsers}/>} 
     


 </div>
    </React.Fragment>
  );
        }

export default Weather ;
