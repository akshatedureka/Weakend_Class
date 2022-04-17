import {LOGIN,LOGIN_SUCCESS,LOGIN_FAIL} from "../constants/loginConstants";
const initialState = {
    loading : false,
    status:{},
    error:""
}
export const loginReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_FAIL:
            return{
                ...state,
                loading:action.loading,
                status:action.status,
                error:action.error
            }
        default:
            return state;
    }
}