import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.schedule, action) {
    switch(action.type) {
        case types.LOAD_SCHEDULE_SUCCESS:
            return action.schedule;
        default:
            return state;
    }
}
