import {createStore, combineReducers} from 'react-redux'
import articuloReducer from './reducers/articulo.reducer'

const rootReducer = combineReducers({
    articulos: articuloReducer
})

export default createStore(rootReducer)