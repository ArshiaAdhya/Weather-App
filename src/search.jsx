import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';

import { GEO_API_URL, GeoOptions } from './API.js'



export default function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null)

    function handleChange(searchData) {
        setSearch(searchData);
        onSearchChange(searchData)
    }

    const loadOptions = (inputValue) => {
        return (
            fetch (`${GEO_API_URL}/cities?namePrefix=${inputValue}`,GeoOptions)
            .then(res => res.json())
            .then(data => {
                return{
                    options: data.data.map((city) => {
                        return {
                            value : `${city.latitude} ${city.longitude}`,
                            label : `${city.name}, ${city.countryCode}`,
                        }
                    }),
                }
            })
            .catch(err => console.error(err))

        )
    }

    return(
        <AsyncPaginate
            placeholder = "Search for city"
            debounceTimeout = {600}
            value = {search}
            onChange={handleChange}
            loadOptions = {loadOptions}
        />
    )
}