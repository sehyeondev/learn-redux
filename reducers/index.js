import user from './user';
import question from './question'
import {combineReducers} from 'redux';

export const USER_LOGOUT = "USER_LOGOUT"
export const userLogOut = () => ({
    type: USER_LOGOUT
})

const appReducer = combineReducers({
    user,
    question,
})

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;