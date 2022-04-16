import {PRODUCTS_LIST,PRODUCTS_LIST_SUCCESS,PRODUCTS_LIST_FAIL} from "../types/productsConstants";
const initialState = {
    loading:false,
    products:[],
    error:""
}
export const productsReducer = (state=initialState,action)=>{
    switch(action.type){
        case PRODUCTS_LIST:
        case PRODUCTS_LIST_SUCCESS:
        case PRODUCTS_LIST_FAIL:
            return{
                ...state,
                loading:action.loading,
                products:action.products,
                error:action.error
            }
        default:
            return state;
    }
}