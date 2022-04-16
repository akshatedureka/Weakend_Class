import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {productsActions} from "./actions/productsActions";

function App() {

  const res = useSelector(state=>state)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(productsActions());
  },[]);

  return (
    <div>
        <p>{JSON.stringify(res)}</p>
    </div>
  );
}

export default App;
