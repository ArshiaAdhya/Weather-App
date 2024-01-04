import React, {useState} from 'react';
import './App.css';
import Search from './search.jsx'
import Currentweather from './currentweather.jsx';
import Forecastweather from './forecastweather.jsx';



export default function Header () {

    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecastWeather, setForecastWeather] = useState(null)

    function handleSearchChange(searchData){

        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5c1d15a724059c9d78e74726bd1a3010`)
        const forecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5c1d15a724059c9d78e74726bd1a3010`)

        Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
            const weatherResponse = await response[0].json()
            const forecastResponse = await response[1].json()
            setCurrentWeather({city : searchData.label, ...weatherResponse })
            setForecastWeather({...forecastResponse })
        })
        .catch(console.log);
    }

    console.log(currentWeather)
    console.log(forecastWeather)

    return(
        <>
            <div className = "bg-gradient-to-br from-rose-600 via-violet-800 via-indigo-800 via-indigo-900 via-indigo-900 to-indigo-900 sticky top-0 m-0 w-1/1 flex justify-between items-center p-2">
                <div>
                    <h1 className="text-3xl text-white">ClimeCraft</h1>
                </div>
                <div className="flex items-center justify-center">
                <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="5 0 10 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                    <Search onSearchChange = {handleSearchChange} />
                </div>
            </div>
            <div>
                {/* <Leftpane /> */}
            </div>
            <div className='flex flex-col items-center '>
                {currentWeather && <Currentweather data = {currentWeather} />}
                {forecastWeather && <Forecastweather data = {forecastWeather} /> }
            </div>
            <div>
                {/* <rightpane /> */}
            </div>
        
        </>
    )
}
