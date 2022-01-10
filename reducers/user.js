export const SET_JWT_TOKEN = 'SET_JWT_TOKEN'

export const setJwtToken = (jwtToken) => ({
    type: SET_JWT_TOKEN,
    payload: jwtToken,
});

const initialState = {
    jwtToken: null,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case (SET_JWT_TOKEN): {
            return {
                ...state,
                jwtToken: action.payload,
            }
        }
        default:
            return state;
    }
}

export default user;
