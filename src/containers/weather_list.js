import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {

renderWeather(cityData) {
 const name = cityData.city.name
 const temps = cityData.list.map(line => line.main.temp);
 const pressures = cityData.list.map(line => line.main.pressure);
 const humidities = cityData.list.map(line => line.main.humidity);
 
  console.log(temps)  
    return (
     <tr key={name}>
        <td>{name}</td>
        <td><Chart color={"red"} data={temps} units="K"/></td>
        <td><Chart color={"black"} data={pressures} units="hPa"/></td>
        <td><Chart color={"blue"} data={humidities} units="%"/></td>
        
    </tr>
  )
 }
    
    render() {
        return (
         <table className="table table-hover">
            <thead>
             <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
                </tr>
                </thead>    
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
         </table>    
        )
    }
}

function mapStateToProps({ weather }) {
 return { weather };
};

export default connect(mapStateToProps)(WeatherList);