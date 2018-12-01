import {takeLatest, call, put} from 'redux-saga/effects';

import * as Constants from 'constants/system';
import {api} from "services";

function* getCurrentWeather (action) {
    try {
        const {data} = yield call(api.request.get, `/data/2.5/weather?id=${action.payload}`);
        yield put({
            type: Constants.CURRENT_WEATHER_SUCCESS,
            payload: data
        })
    } catch(error){
        yield put ({
            type: Constants.CURRENT_WEATHER_FAILED,
            payload: error,
        })
    }
}

function* getOtherDays(action) {
    try {
        const {data} = yield call(api.request.get, `/data/2.5/forecast?id=${action.payload}`);
        yield put({
            type: Constants.OTHER_DAYS_SUCCESS,
            payload: data
        })
    } catch(error){
        yield put ({
            type: Constants.OTHER_DAYS_FAILED,
            payload: error,
        })
    }
}

export default function* root() {
    yield [
        takeLatest(Constants.CURRENT_WEATHER_REQUEST, getCurrentWeather),
        takeLatest(Constants.CURRENT_WEATHER_REQUEST, getOtherDays),
    ]
}