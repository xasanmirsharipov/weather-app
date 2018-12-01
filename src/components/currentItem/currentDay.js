import React, {Component} from 'react';
import { weather } from 'services';
import moment from 'moment';
import Loader from "../preloader";

class CurrentDay extends Component {
    render() {
        const {item, isLoading} = this.props;

        if(isLoading){
            return (
                <div className='current-day'>
                    <Loader/>
                </div>
            )
        }

        return (
            <div className="current-day">
                <div className={`main-info-box weather-${item.id}`}>
                    <div className="left-block">
                        <span className='temp'>{item.main.temp > 0 ? '+' : ''}{item.main.temp.toFixed(0)}</span>
                    </div>
                    <div className="center-block">
                        <span className='city-name'>{item.name}</span>
                        <span className='last-update'>{moment.unix(item.dt).format('MMMM Do YYYY')}</span>
                        <div className={`weather-icon weather-icon-${weather.name(item.weather[0].id)}`}></div>
                        <div className='weather-title'>
                            <span>{item.weather[0].main}</span>
                            <span>{item.weather[0].description}</span>
                        </div>
                    </div>
                    <div className="right-block">
                        <span className='humidity'>humidity: {item.main.humidity}</span>
                        <span className='pressure'>pressure: {item.main.pressure}</span>
                        <span className='wind'>wind: {item.wind.speed} m/s {item.wind.deg}</span>
                        <span className='sunrise'>sunrise: {moment.unix(item.sys.sunrise).format('hh:mm')} </span>
                        <span className='sunset'>sunset: {moment.unix(item.sys.sunset).format('hh:mm')}</span>

                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentDay;