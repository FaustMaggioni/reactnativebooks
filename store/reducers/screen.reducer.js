import {MI_LISTA, ARTICULO} from '../../constants/screens'
import { GO_TO_ARTICULO, GO_TO_LISTA } from '../../constants/actions'
const INITIAL_SCREEN = {
    name: MI_LISTA,
    selected: null
}

const screenReducer = (state = INITIAL_SCREEN, action) =>{
    console.log(action)
    switch(action.type){
        case GO_TO_ARTICULO: 
            return {
                name: ARTICULO,
                selected: action.payload
            }
        case GO_TO_LISTA:
            return {
                name: MI_LISTA,
                selected: null
            }
        default:
            return state
    }
}

export default screenReducer