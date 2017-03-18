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

export function deleteUserSuccess(user) {
    return {
        type: types.DELETE_USER_SUCCESS,
        user
    };
}

// thunks
export function loadUsers() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:1337/users', {
            method: 'GET',
            mode: 'cors'
        }).then((response) =>{
            return response.json();
        }).then((users)=>{
            dispatch(loadUsersSuccess(users));
        }).catch((error) => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function addUser(user) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:1337/users', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(user)
        }).then((response) => {
            return response.json();
        }).then((res) => {
            dispatch(createUserSuccess(res));
        }).catch((error) => {
            throw(error);
        });
    };
}

export function removeUser(user) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:1337/users', {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(user)
        }).then((response) => {
            return response.json();
        }).then((res) => {
            dispatch(deleteUserSuccess(res));
        }).catch((error) => {
            throw(error);
        });
    };
}
