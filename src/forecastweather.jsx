import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion"

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function Forecastweather ({data}) {
    
    const day = new Date().getDay();
    const forecastDays = days.slice(day, days.length).concat(days.slice(0,day))

    
    return(
        <>
            <div className='flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 items-center' >
                <label className='col-span-full text-5xl font-extrabold text-slate-100'>Daily</label>
                
                <Accordion allowZeroExpanded className='col-span-full flex flex-wrap'>
                    {data.list.splice(0,7).map((item,idx) => (
                        <AccordionItem key = {idx} className='m-4 flex-1 sm:flex-1/2 md:flex-1/3 lg:flex-1/4 xl:flex-1/5 '>
                            <AccordionItemHeading>
                                <AccordionItemButton className="">
                                    <div className='bg-gradient-to-r from-blue-500 to-red-500 p-4 rounded-md'>
                                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt = 'weather' className='mx-auto'/>
                                        <p className='text-center font-bold'>{forecastDays[idx]}</p>
                                        <p className='text-center'>{item.weather[0].description}</p>
                                        <p className='text-center'>{Math.round(item.main.temp_max - 272)}°C</p>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="transition-all duration-300 linear">
                                <div className='bg-slate-200 bg-opacity-70 rounded-2xl '>
                                    <div>
                                        Pressure: {item.main.pressure}
                                    </div>
                                    <div>
                                        Humidity: {item.main.humidity}
                                    </div>
                                    <div>
                                        Clouds: {item.clouds.all}
                                    </div>
                                    <div>
                                        Wind Speed: {item.wind.speed}
                                    </div>
                                    <div>
                                        Sea level: {item.main.sea_level}
                                    </div>
                                    <div>
                                        Feels like: {item.main.feels_like}
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    )
}