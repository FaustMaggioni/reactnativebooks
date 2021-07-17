import {createStore, combineReducers, applyMiddleware} from 'redux'
import articuloReducer from './reducers/articulo.reducer'
import ingresarReducer from './reducers/ingresarVisible.reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    articulos: articuloReducer,
    ingresar: ingresarReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))