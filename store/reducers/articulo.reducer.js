import { ADD_ARTICULO, DELETE_ARTICULO, GET_ARTICULOS } from "../../constants/actions";

const articuloReducer = (state = [],action) => {
    console.log('payload: ',action.payload)
    switch (action.type){
        case ADD_ARTICULO: 
            return [...state, action.payload];
        case DELETE_ARTICULO: 
            return state.filter((item) => item.id !== action.payload);
        case GET_ARTICULOS:
            return action.payload
        default:
            return state
    }
}

export default articuloReducer