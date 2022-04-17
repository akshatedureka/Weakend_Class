import axios from "axios";
import {LOGIN,LOGIN_SUCCESS,LOGIN_FAIL} from "../constants/loginConstants";

export const loginAction = (login_details)=>{
    return async (dispatch)=>{
        dispatch({
            type:LOGIN,
            loading:false,
            status:{},
            error:""
        })
        try{
            const {data} = await axios.post("http://localhost:8080/login",login_details,{headers:{"token":"abc123"}});
            dispatch({
                type:LOGIN_SUCCESS,
                loading:true,
                status:data,
                error:""
            })
        }catch(err){
            dispatch({
                type:LOGIN_FAIL,
                loading:true,
                status:{},
                error:err.message
            })
        }
    }
}