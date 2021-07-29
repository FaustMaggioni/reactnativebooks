import {URL_AUTH_LOGIN, URL_AUTH_SIGNUP} from '../../constants/database'

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email,password)=> {
    return async dispatch =>{
        const response = await getResponse(URL_AUTH_SIGNUP,email,password)
        console.log(response)
        if(!response.ok) throw new Error('No se ha podido registrar')

        const resData = await response.json()
        dispatch({
            type: SIGNUP,
            token: resData.idToken, 
            user: resData.localId,
        })
    }
}

export const login = (email,password) => {
    return async dispatch => {
        const response = await getResponse(URL_AUTH_LOGIN, email, password)
        alert(response.ok)
        if(!response.ok) throw new Error('No se ha podido ingresar')

        const resData = await response.json()
        dispatch({
            type: LOGIN,
            token: resData.idToken, 
            user: resData.localId,
        })
    }
};


const getResponse = async (URL,email,password) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, 
            password,
            returnSecureToken: true,
        }),
    });

    return response
}
