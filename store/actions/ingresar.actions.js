import {MOSTRAR_FORMULARIO, ESCONCER_FORMULARIO} from '../../constants/actions.js'

export const showForm = () => ({
    type: MOSTRAR_FORMULARIO,
})

export const hideForm = () => ({
    type: ESCONCER_FORMULARIO,
})

