import axios from "axios";
import {PRODUCTS_LIST,PRODUCTS_LIST_SUCCESS,PRODUCTS_LIST_FAIL} from "../types/productsConstants";
export const productsActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:PRODUCTS_LIST,
            loading:false,
            products:[],
            error:""
        })
        try{
            const {data} = await axios.get(`http://localhost:5000/api/v1/products`);
            dispatch({
                type:PRODUCTS_LIST_SUCCESS,
                loading:true,
                products:data,
                error:""
            })
        }catch(err){
            dispatch({
                type:PRODUCTS_LIST_FAIL,
                loading:true,
                products:[],
                error:err.message
            })
        }
    }
}