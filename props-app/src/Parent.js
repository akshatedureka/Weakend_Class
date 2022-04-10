import React,{useState} from "react";
import Child from "./Child";
function Parent(){
    const [str,setStr] = useState("Welcome");
    const [num,setNum] = useState(100);
    const [flag,setFlag] = useState(true);
    const [obj,setObj] = useState({"key1":"value1",
                                   "key2":"value2",
                                   "key3":"value3"});
    const [arr,setArr] = useState([{"p_id":111,"p_name":"shirt1","p_cost":"$100.00","p_image":"https://nodebucket1.s3.ap-south-1.amazonaws.com/shirt1.jpg"},
                                   {"p_id":222,"p_name":"shirt2","p_cost":"$200.00","p_image":"https://nodebucket1.s3.ap-south-1.amazonaws.com/shirt2.jpg"},
                                   {"p_id":333,"p_name":"shirt3","p_cost":"$300.00","p_image":"https://nodebucket1.s3.ap-south-1.amazonaws.com/shirt3.jpg"},
                                   {"p_id":444,"p_name":"pant1","p_cost":"$400.00","p_image":"https://nodebucket1.s3.ap-south-1.amazonaws.com/pant1.jpg"},
                                   {"p_id":555,"p_name":"pant2","p_cost":"$500.00","p_image":"https://nodebucket1.s3.ap-south-1.amazonaws.com/pant2.jpg"},
                                   {"p_id":666,"p_name":"pant3","p_cost":"$600.00","p_image":"https://nodebucket1.s3.ap-south-1.amazonaws.com/pant3.jpg"}]) 

    return(
        <React.Fragment>
            <Child str={str}
                   num={num}
                   flag={flag}
                   obj={obj}
                   arr={arr}></Child>
        </React.Fragment>
    )


}
export default Parent;