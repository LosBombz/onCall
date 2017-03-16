import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadUsersSuccess(users) {
    return {
        type: types.LOAD_USERS_SUCCESS,
        users
    };
}

export function updateUserSuccess(user) {
    return {
        type: types.UPDATE_USER_SUCCESS,
        user
    };
}

export function createUserSuccess(user) {
    return {
        type: types.CREATE_USER_SUCCESS,
        user
    };
}

// thunks
export function loadUsers() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:1337/users', {
            mode: 'no-cors'
        }).then((users) =>{
            console.log(users);
            dispatch(loadUsersSuccess(users));
        }).catch((error) => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
