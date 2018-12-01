import React, {Component} from 'react';
import * as moment from "moment";
import { weather } from 'services';
import Loading from 'components/preloader'
class OtherDay extends Component {
    render() {

        const { items, isLoading } = this.props;

        if(isLoading){
            return (
                <div className="other_days_block">
                    <div className="other-day-item">
                        <div className="wrap">
                            <Loading/>
                        </div>
                    </div>
                    <div className="other-day-item">
                        <div className="wrap">
                            <Loading/>
                        </div>
                    </div>
                    <div className="other-day-item">
                        <div className="wrap">
                            <Loading/>
                        </div>
                    </div>
                    <div className="other-day-item">
                        <div className="wrap">
                            <Loading/>
                        </div>
                    </div>
                    <div className="other-day-item">
                        <div className="wrap">
                            <Loading/>
                        </div>
                    </div>
                </div>
            )
        }
        return (

            <div className="other_days_block">
                {items.map(items => (
                    <div className='other-day-item' key={items.dt}>
                        <div className="wrap">
                            <span className='weather-day'>{moment.unix(items.dt).format('dddd')}</span>
                            <div className={`weather-icon-small weather-icon-${weather.name(items.weather[0].id)}`}></div>
                            <span className='temp'>{items.main.temp > 0 ? '+' : ''}{items.main.temp.toFixed(0)}</span>
                            <span>{items.weather[0].main}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default OtherDay;

