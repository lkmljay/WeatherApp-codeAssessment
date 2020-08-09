import React from 'react'

const WeatherDetails=(props)=> {
    return <div className="weather-detail">
                <span>Date: {props.forecast.Date}</span><br />
                <span>Time: {props.forecast.Time}</span><br />
                <span>Feels: {props.forecast.feels}</span><br />
                <span>Temprature: {props.forecast.temprature}</span>
            </div>
}

export default WeatherDetails
