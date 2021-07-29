import { LOGIN, SIGNUP } from "../actions/auth.actions";

const INITIAL_STATE = {
    token: null,
    user: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP || LOGIN:
            return {...state, token: action.token, user: action.user};
        default:
            return state
    }
}

export default authReducer