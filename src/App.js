import React from 'react';
import logo from './logo-weather.png';
import './App.css';
import WeatherApp from './features/WeatherApp/WeatherApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <WeatherApp />    
      </header>
    </div>
  );
}

export default App;
