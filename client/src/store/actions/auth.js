import * as actions from "./actions";

let timer;

export const login = (email, password) => {
    return dispatch => {
        dispatch({ type: actions.AUTH_START });
        fetch('/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(response => {
            response.json().then(res => {
                console.log(res);
                console.log(response.status)
                dispatch({ type: actions.SET_RESPONSE, response: { status: response.status,message:res.message } })
                if (response.status == 200) {
                    localStorage.setItem('idToken', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    localStorage.setItem('expireDate', new Date().getTime() + 7200000);
                    dispatch({ type: actions.AUTH_SUCCESS, idToken: res.token, user: res.user });
                    window.location.reload();
                }
            })

        }).catch(err => {
            console.log(err);
        })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('idToken');
        localStorage.removeItem('user');
        localStorage.removeItem('expireDate');
        dispatch({ type: actions.LOG_OUT });
        window.location = "/";
    }

}