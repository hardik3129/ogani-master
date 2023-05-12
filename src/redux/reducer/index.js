import { combineReducers } from "redux";
import CartAddreducer from "./CartAdd.reducer";
import UserAccessreducer from "./UserAccess.reducer";

const rootreducer = combineReducers({
    CartAddreducer,
    UserAccessreducer
})

export default rootreducer