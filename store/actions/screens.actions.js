import { GO_TO_ARTICULO, GO_TO_LISTA } from "../../constants/actions";

export const goToArticulo = (item) => ({
    type: GO_TO_ARTICULO,
    payload: item
})

export const goToLista = () => ({
    type: GO_TO_LISTA,
})