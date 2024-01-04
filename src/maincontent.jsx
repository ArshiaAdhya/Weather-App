import React from 'react';
import './App.css';


export default function Weather () {

    const options = {method: 'GET', headers: {accept: 'application/json'}};

    // 5c1d15a724059c9d78e74726bd1a3010

    fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=G0CXoBRqTBR1zZvA08gyRWfvsloECbKR', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return (
        <>
            <h1>Main content goes here...</h1>
        </>

    )

}