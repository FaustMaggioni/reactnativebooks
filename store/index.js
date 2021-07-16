import {createStore, combineReducers, applyMiddleware} from 'react-redux'
import articuloReducer from './reducers/articulo.reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    articulos: articuloReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))