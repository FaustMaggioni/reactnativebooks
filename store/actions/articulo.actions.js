import {ADD_ARTICULO, DELETE_ARTICULO} from '../../constants/actions.js'

export const addArticulo = (item) => ({
    type: ADD_ARTICULO,
    payload: item,
})

export const deleteArticulo = (id) => ({
    type: DELETE_ARTICULO,
    payload: id
})