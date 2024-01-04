
export default function Currentweather ({data}) {
    
    
    return(
        <>
            <div className="bg-purple-950 bg-opacity-90 m-4 py-4 w-1/3 rounded-2xl text-slate-400 font-bold">
                <p className="text-2xl">{ data.city }</p>
                <div className="flex flex-row items-center justify-around ">
                <img 
                    alt="weather-icon"
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                />
                <p className="text-5xl font-extrabold">{Math.round(data.main.temp - 272)}°C</p>
                </div>
                <p className="text-xl">{ data.weather[0].description }</p>
            </div>
        </>
    )
}