import {CUSTOMERS_LIST,CUSTOMERS_LIST_SUCCESS,CUSTOMERS_LIST_FAIL} from "../types/customersConstants";
const initialState = {
    loading:false,
    customers:{},
    error:""
}
export const customersReducer = (state=initialState,action)=>{
    switch(action.type){
        case CUSTOMERS_LIST:
        case CUSTOMERS_LIST_SUCCESS:
        case CUSTOMERS_LIST_FAIL:
            return{
                ...state,
                loading:action.loading,
                customers:action.customers,
                error:action.error
            }
        default:
            return state;
    }
};