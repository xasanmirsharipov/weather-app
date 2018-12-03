import * as Constants from 'constants/system';
import * as moment from "moment";

const initialState = {
    all: {
        isLoading: true,
        data: {}
    },
    activeCityId: 1512569,
    otherDaysList: {
        isLoading: true,
        data: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.CURRENT_WEATHER_REQUEST: {
            return {
                ...state,
                all: {
                    isLoading: true
                }
            }
        }
        case Constants.CURRENT_WEATHER_SUCCESS: {
            return {
                ...state,
                all: {
                    data: action.payload,
                    isLoading: false,
                }
            }
        }
        case Constants.CHANGE_CITY_REQUEST: {
            return{
                ...state,
                activeCityId: action.payload,
                otherDaysList: {
                    isLoading: true
                }
            }
        }
        case Constants.OTHER_DAYS_REQUEST: {
            return{
                ...state,
                otherDaysList: {
                    isLoading: true
                }
            }

        }
        case Constants.OTHER_DAYS_SUCCESS: {
            return {
                ...state,
                otherDaysList: {
                    isLoading: false,
                    // eslint-disable-next-line
                    data: action.payload.list.filter(item => {
                        if(moment.unix(item.dt).format('HH:mm') === '11:00' && moment().format('DD/MM/YYYY') !== moment.unix(item.dt).format('DD/MM/YYYY')){
                            return item
                        }
                    })
                }
            }
        }
        default:
            return state;

    }
}