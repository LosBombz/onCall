import * as types from '../constants/actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadScheduleSuccess(schedule) {
    return {
        type: types.LOAD_SCHEDULE_SUCCESS,
        schedule
    };
}

// thunks
export function loadSchedule() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:1337/schedule', {
            method: 'GET',
            mode: 'cors'
        }).then((response) =>{
            return response.json();
        }).then((schedule)=>{
            dispatch(loadScheduleSuccess(schedule));
        }).catch((error) => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
