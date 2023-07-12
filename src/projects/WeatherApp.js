import {useState, useEffect} from "react";

const WeatherApp = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    useEffect(() =>{
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) =>{
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }else{
            console.log("Geolocation not supported by this browser");
        }
        },[]);/* 
    fetch("https://api.weather.gov/gridpoints/LWX/{longitude},{latitude}/forecast") */
    return ( 
        <div className="weatherapp">
            <h2>Forecast</h2>
            <p>Latitude: {latitude} <br/>
            Longitude: {longitude}</p>

        </div>
     );
}
 
export default WeatherApp;
            {/* Get geolocation coordinates */}
            {/* {use https://api.weather.gov/points/{latitude},{longitude} 
            go to properties
            - forecast
- example: https://api.weather.gov/gridpoints/LWX/84,67/forecast*/}