import React,{useRef} from "react";
import {useDispatch,useSelector} from "react-redux";
import {loginAction} from "./actions/loginActions";
import './App.css';
function App() {

  const uname = useRef("");
  const upwd = useRef("");

  const dispatch = useDispatch();

  const login = ()=>{
    dispatch(loginAction({"uname":uname.current.value,"upwd":upwd.current.value}));
  }

  const result = useSelector(state=>state);
  return (
    <div className="App">
        <input type="text" ref={uname} placeholder="Enter User Name"></input>
        <br></br><br></br>
        <input type="password" ref={upwd} placeholder="Enter Password"></input>
        <br></br><br></br>
        <button onClick={login}>Login</button>
        <p>{JSON.stringify(result)}</p>
    </div>
  );
}

export default App;
