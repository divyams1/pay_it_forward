import { RECEIVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from '../actions/session_actions';




const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USERS:  
            return Object.assign({}, state, action.users)
        case RECEIVE_USER:
            debugger
            return Object.assign({}, state, { [action.user.id]: action.thisUser });
        default:
            return state;
    }
}




export default usersReducer; 
