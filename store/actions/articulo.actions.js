import {ADD_ARTICULO, DELETE_ARTICULO, GET_ARTICULOS} from '../../constants/actions.js'
import {URL_API} from '../../constants/database'

export const addArticulo = (item) => {
    console.log('ITEM: ',item)
    return async dispatch => {
        try {
            await fetch(`${URL_API}/articulos/${item.id}.json`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({date: Date.now(), item })
            })

            dispatch({
                type: ADD_ARTICULO,
                payload: item,
            });
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getArticulos = () => {
    console.log('URL: ',URL_API)
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/articulos.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json()
            const resultValues = Object.values(result)
            const arrResult = resultValues.map((a)=>{
                const obj = Object.values(a)
                const item = obj[0].item
                return item
            })
            dispatch(
                {type: GET_ARTICULOS, payload: arrResult}
                )
        } catch (error) {
            console.log('eee', error)
        }
    }
}

export const deleteArticulo = (id) => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}/articulos/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            dispatch({type: DELETE_ARTICULO, payload: id});
        } catch (error) {
            console.log(error.message)
        }
    }
}

