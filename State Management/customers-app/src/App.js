import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {customersActions} from "./actions/customersActions";

function App() {
  const dispatch = useDispatch();

  const res = useSelector(state=>state);
  const {loading,customers,error} = res;

    useEffect(()=>{
      dispatch(customersActions());
    },[]);
  

  return (
    <div>
        <p>{JSON.stringify(loading)}....{JSON.stringify(customers)}.....{error}</p>
    </div>
  );
}

export default App;
