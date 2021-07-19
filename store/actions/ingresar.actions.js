import {MOSTRAR_FORMULARIO, ESCONDER_FORMULARIO} from '../../constants/actions.js'

export const showForm = () => ({
    type: MOSTRAR_FORMULARIO,
})

export const hideForm = () => ({
    type: ESCONDER_FORMULARIO
})

