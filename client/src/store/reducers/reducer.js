import * as actions from "../actions";

let initialState = {
    idToken: localStorage.getItem('idToken') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    authError: null,
    authenticating: false,
    login:false,
    response: { status: 0}

};

// let expireDate = localStorage.getItem('expireDate');

// if (expireDate) {
//     let remainingTime = expireDate - new Date().getTime();
//     console.log(remainingTime / 1000 + "s remaining of session.");
//     if (remainingTime <= 0) {
//         localStorage.removeItem('idToken');
//         localStorage.removeItem('user');
//         localStorage.removeItem('expireDate');

//         initialState = {
//             ...initialState,
//             idToken: null,
//             user: null,
//             authenticating: false,
//             authError: false
//         }
//     }
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTH_START: return authStart(state, action);
        case actions.AUTH_SUCCESS: return authSuccess(state, action);
        case actions.AUTH_FAIL: return authFail(state, action);
        case actions.LOG_OUT: return logOut(state, action);
        case actions.SET_RESPONSE: return setResponse(state, action);
        default:
            return state;
    }
};


function setResponse(state, action) {
    return {
        ...state,
        response: action.response

    }
}

function authStart(state, action) {
    return {
        ...state,
        authenticating: true,
        authError: false,
        login:false
    }
}

function authSuccess(state, action) {
    return {
        ...state,
        idToken: action.idToken,
        user: action.user,
        authenticating: false,
        authError: false,
        login:true  
    }
}

function authFail(state, action) {
    return {
        ...state,
        authenticating: false,
        authError: action.error
    }
}

function logOut(state, action) {
    return {
        ...state,
        idToken: null,
        user: null,
        authenticating: false,
        authError: false,
        login:false
    }
}

export default reducer;