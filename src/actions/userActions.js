import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadUsersSuccess(workouts) {
    return {
        type: types.LOAD_USERS_SUCCESS,
        workouts
    };
}

export function updateUserSuccess(workout) {
    return {
        type: types.UPDATE_USER_SUCCESS,
        workout
    };
}

export function createUserSuccess(workout) {
    return {
        type: types.CREATE_USER_SUCCESS,
        workout
    };
}

// thunks
export function loadUsers() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return UserApi.getAllUsers().then((workouts) =>{
            dispatch(loadUsersSuccess(workouts));
        }).catch((error) => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
