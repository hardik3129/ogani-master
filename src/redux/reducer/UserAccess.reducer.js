import { USER_ACCESS } from "../constant";

const initialstate = {
    AccessToken : ''
}

const UserAccessreducer = (state = initialstate, action) => {

    switch (action.type) {
        case USER_ACCESS:
            return { ...state, AccessToken : action.payload }
        default:
            break;
    }
    
  return state
}

export default UserAccessreducer