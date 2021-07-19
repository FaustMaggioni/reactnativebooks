import { MOSTRAR_FORMULARIO, ESCONDER_FORMULARIO } from "../../constants/actions";

const INITIAL_STATE = {
    mostrar: false
}
const ingresarReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type){
        case MOSTRAR_FORMULARIO: 
            return {...state, mostrar: true};
        case ESCONDER_FORMULARIO: 
            return {...state, mostrar: false};
        default:
            return state
    }
}

export default ingresarReducer