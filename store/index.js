import {createStore, combineReducers, applyMiddleware} from 'redux'
import articuloReducer from './reducers/articulo.reducer'
import ingresarReducer from './reducers/ingresarVisible.reducer'
import thunk from 'redux-thunk'
import screenReducer from './reducers/screen.reducer'
import authReducer from './reducers/auth.reducer'

const rootReducer = combineReducers({
    articulos: articuloReducer,
    ingresar: ingresarReducer,
    screen: screenReducer,
    auth: authReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))