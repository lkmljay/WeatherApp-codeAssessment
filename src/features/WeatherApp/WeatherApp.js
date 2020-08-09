import React from 'react'
import { connect } from 'react-redux'
import Input from '../../common/Input/Input'
import SubmitButton from '../../common/button/Button'
import WeatherDetails from './WeatherDetails'
import {getWeatherData} from './WeatherApp.actions'
import data from './WeatherData'
import './WeatherApp.css'
class WeatherApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        curVal : '',
        curCity: null,
        cityDetails: null,
        notFound: null
      }
    }
    
    getLatest=(val)=>{
        this.setState({ curVal: val})
    }
    
    getWeather=()=>{
        const {weatherData} = this.props.weather
        const {curVal} = this.state 
        if( weatherData[curVal]) {
          this.setState({
            cityDetails: weatherData[curVal],
            curCity: curVal,
            notFound: null
           })
        } else {
          this.setState({
            notFound: 'City Not Found',
            curCity: null,
            cityDetails: null
          })
        }
      
    }

    componentDidMount = () =>{
        this.props.getWeatherData(data) 
    }
    
    render() {
      return (
        <div>
          <h2>{this.state.curCity? this.state.curCity : null}</h2>
          <Input getChanges={this.getLatest} />
          <SubmitButton click={this.getWeather} />
          <div className="weather-detail-container">
          {this.state.cityDetails !==  null ? 
              this.state.cityDetails.map((detail) => (
                <WeatherDetails forecast={detail}/>
              ))
            : null
          } 
          {this.state.notFound? <span>City Not Found</span> : null}
          </div>
        </div>
      )
    }
  }
  const mapStateToProps=(state) =>{
    const { weather } = state
    return { weather }
  }

  const mapDispatchToProps = {
    getWeatherData,
   };
   
  export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);

