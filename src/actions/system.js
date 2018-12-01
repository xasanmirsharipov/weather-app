import * as Constants from 'constants/system';

export const getCurrentWeather = (cityId) => ({
   type: Constants.CURRENT_WEATHER_REQUEST,
    payload: cityId
});

export const changeCity = (cityId) => ({
    type: Constants.CHANGE_CITY_REQUEST,
    payload: cityId
});

export const getOtherDays = () => ({
    type: Constants.OTHER_DAYS_REQUEST,
});