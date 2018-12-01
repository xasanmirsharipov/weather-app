import React, {Component, Fragment} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {getCurrentWeather, changeCity, getOtherDays} from "actions/system";
import Header from "components/header";
import NavLink from "components/navlink";
import CurrentItem from "components/currentItem";

class HomePage extends Component {

    static path = '/';

    componentDidMount(){
        const { getCurrentWeather, cityId, getOtherDays } = this.props;
        getCurrentWeather(cityId);
        getOtherDays();
    }

    componentDidUpdate(prevProps){
        const { getCurrentWeather, cityId } = this.props;
        if(cityId !== prevProps.cityId){
            getCurrentWeather(cityId);
        }
    }

    render() {
        const { currentDayInfo, isLoading, changeCity, cityId, otherDaysInfo } = this.props;

        const cities = [
            {
                id: 1512569,
                title: 'Tashkent'
            },
            {
                id: 1514588,
                title: 'Andijon'
            },
            {
                id: 1217662,
                title: 'Buxoro'
            },
            {
                id: 1513966,
                title: 'Guliston'
            },{
                id: 1513886,
                title: 'Jizzax'
            },
            {
                id: 1538230,
                title: 'Zarafshon Shahri'
            },
            {
                id: 1216311,
                title: 'Qarshi'
            },
            {
                id: 1513131,
                title: 'Navoiy'
            },
            {
                id: 1513157,
                title: 'Namangan'
            },
            {
                id: 601294,
                title: 'Nukus'
            },
            {
                id: 1216265,
                title: 'Samarqand'
            },
            {
                id: 1512770,
                title: 'Sirdaryo'
            }
        ];

        return (

            <Fragment>
                <Header/>
                <NavLink cities={cities} changeCity={changeCity} active={cityId}/>
                <div className="main-container">
                    <CurrentItem currentDayInfo={currentDayInfo} isLoading={isLoading} otherDaysInfo={otherDaysInfo}/>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    currentDayInfo: state.system,
    isLoading: state.system.all.isLoading,
    cityId: state.system.activeCityId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getCurrentWeather,
        changeCity,
        getOtherDays
    },
    dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);