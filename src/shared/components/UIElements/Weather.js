
import React, { useState ,useEffect} from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import Card from './Card';
<i class="fas fa-cloud-sun"></i>
const Weather = props => {
    const api = {
        key: "9cac328010a0f347de2647ed5e0a1d47",
        base: "https://api.openweathermap.org/data/2.5/"
    };
        const [query, setQuery] = useState('');
        const [weather, setWeather] = useState({});
        const defaults = { icon: 'RAIN',color: 'white',size: 112,animate: true};
      
        var hr = (new Date()).getHours(); //get hours of the day in 24Hr format (0-23)
       

        let WeatherObj = new Map()
        WeatherObj.set('clear sky', 'CLEAR_DAY')
        WeatherObj.set('few clouds', 'PARTLY_CLOUDY_DAY')
        WeatherObj.set('rain', 'RAIN') 
        WeatherObj.set('snow', 'SNOW')
        WeatherObj.set('thunderstorm', 'RAIN')
        WeatherObj.set('shower rain', 'RAIN')
        WeatherObj.set('broken clouds', 'CLOUDY')
        WeatherObj.set('scattered clouds', 'CLOUDY')
        WeatherObj.set('mist', 'FOG')
        if (hr>17||hr<6)
        {
  
          WeatherObj.set('clear sky', 'CLEAR_NIGHT')
          WeatherObj.set('few clouds', 'PARTLY_CLOUDY_NIGHT')
  
  
           }
        useEffect(() => {
                /* getWeather() */
                fetch(api.base + "weather?q=" + props.Country + "&units=metric&APPid=" + api.key)
                    .then(res => res.json())
                    .then(result => {

                        setQuery('');
                        setWeather(result);
                        console.log(result);

                    });
                }, []);
                const dateBuilder = (d) => {
                    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    let days = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "];


                    let day = days[d.getDay()];
                    let date = d.getDate();
                    let month = months[d.getMonth()];
                    let year = d.getFullYear();

                    return "" + day + " " + date + " " + month + " " + year;

                }
                
                function getWeather() {



                    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=27b52d410ba6453e8ba96e6fc23d5462`)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));

 


                }
                return (

                   
                        <main >
                         
                            {(typeof weather.main != "undefined") ? (
                                <div>

                                  
                                        <h1 className="location">{weather.name},{weather.sys.country} </h1>
                                        <h1 className="date">{dateBuilder(new Date())}</h1>
                                        <div className="weather-box">
                                            <h1 className="temp">{Math.round(weather.main.temp_min)}°c - {Math.round(weather.main.temp_max)}°c</h1>
                                            <h1 className="weather">{weather.weather[0].main}</h1>
                                        </div>
                                        
                                        <ReactAnimatedWeather
                                          icon={WeatherObj.get(weather.weather[0].description) }
                                         color={defaults.color}
                                          size={defaults.size}
                                          animate={defaults.animate}
                                         /> 
                                


                                </div>
                            ) : ('')}
                        </main>
                    
                );
            };

            export default Weather;
