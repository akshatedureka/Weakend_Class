//state
//state, used to represent the data
//string,number,boolean,objects,arrays
import React,{useState} from "react";
function App() {
  const [str,setStr] = useState("Hello");
  const [num,setNum] = useState(100);
  const [flag,setFlag] = useState(true);
  const [obj,setObj] = useState({"sub_one":"ReactJS",
                                 "sub_two":"NodeJS",
                                 "sub_three":"MongoDB"});
  const [arr,setArr] = useState([10,20,30,40,50]);

  const my_fun = ()=>{
      setStr("Welcome");
      setNum(1000);
      setFlag(false);
      setObj({...obj,"sub_four":"Angular14"})
      setArr([...arr,60,70,80,90,100]);
  }



  return (
    <React.Fragment>
       <h2>{str}</h2>
       <h2>{num}</h2>
       <h2>{JSON.stringify(flag)}</h2>
       <h2>{JSON.stringify(obj)}</h2>
       {
         arr.map((element,index)=>{
            return <h2 key={index}>{element}....{index}</h2>
         })
       }
       <button onClick={my_fun}>Change</button>
    </React.Fragment>
  );
}
export default App;
