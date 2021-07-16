import { ADD_ARTICULO, DELETE_ARTICULO } from "../../constants/actions";

const articuloReducer = (state = [],action) => {
    switch (action.type){
        case ADD_ARTICULO: 
            return [...state, action.payload];
        case DELETE_ARTICULO: 
            return state.filter((item) => item.id !== action.payload)
        default:
            return state
    }
}

export default articuloReducer