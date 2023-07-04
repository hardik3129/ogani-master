import { USER_ACCESS, USER_EMAIL } from "../constant";

const initialstate = {
    AccessToken : '',
    UserEmail : ''
}

const UserAccessreducer = (state = initialstate, action) => {

    switch (action.type) {
        case USER_ACCESS:
            return { ...state, AccessToken : action.payload }
        case USER_EMAIL:
            return { ...state, UserEmail : action.payload }
        default:
            break;
    }
    
  return state
}

export default UserAccessreducer