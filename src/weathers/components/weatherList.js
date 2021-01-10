

import WeatherItem from './weatherItem';

import './weatherList.scss';

const WeatherList = props => {



 
 
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
       
          <h2>No weather </h2>
        
     
      </div>
    );
  }

  return (
   
     <div class="flex-container">
      {props.items.map(weather => (
       <div class="item">
        <WeatherItem
          Date={weather.Date}
          id={weather._id}
          Link={weather.Link}
          MobileLink={weather.MobileLink}
          Night={weather.Night}
          Day={weather.Day}
          Temperature={weather.Temperature}
         
        />
        </div>
      ))}
       </div>
 
  );
};

export default WeatherList;
