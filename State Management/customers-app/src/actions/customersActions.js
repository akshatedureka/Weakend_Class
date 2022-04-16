import axios from "axios";
import { CUSTOMERS_LIST, CUSTOMERS_LIST_FAIL, CUSTOMERS_LIST_SUCCESS } from "../types/customersConstants";
export const customersActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:CUSTOMERS_LIST,
            loading:false,
            error:"",
            customers:{}
        });
        try{
            const {data} = await axios.get(`https://www.w3schools.com/angular/customers.php`);
            dispatch({
                type:CUSTOMERS_LIST_SUCCESS,
                loading:true,
                error:"",
                customers:data
            })
        }catch(err){
            dispatch({
                type:CUSTOMERS_LIST_FAIL,
                loading:true,
                customers:{},
                error:err.message
            })
        }
    }
}
