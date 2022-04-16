import React,{useState} from "react";
import Child from "./Child";
function Parent(){
    const [str1,setStr1] = useState("Hello_1");
    const [str2,setStr2] = useState("Hello_2");
    const [str3,setStr3] = useState("Hello_3");
    const my_fun = (param1,param2,param3)=>{
        setStr1(param1);
        setStr2(param2);
        setStr3(param3);
    };
    return(
        <React.Fragment>
            {str1}....{str2}....{str3}
            <Child my_fun={my_fun}></Child>
        </React.Fragment>
    )
}
export default Parent;
