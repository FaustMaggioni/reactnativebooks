import {addArticulo} from '../../../store/actions/articulo.actions'

const addItem = (title, subtitle, body, loggedIn, dispatch) =>{
    try {
        const item = crearItem(title, subtitle, body, loggedIn)
        dispatch(addArticulo(item))
    } catch (error) {
        
    }
}

const crearItem = (title, subtitle, body, loggedIn) => ({
    title: title.toUpperCase(), 
    subtitle,
    body,
    user: loggedIn,
    id: Date.now().toString()
})
export default addItem