import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {

  const [arr,setArr] = useState([]);

  useEffect(()=>{
     axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
        const {data} = posRes;
        const { records } = data;
        setArr(records);
     },(errRes)=>{
        console.log(errRes);
     })
  },[])
  
  
  return (
    <React.Fragment>
        <h2>{JSON.stringify(arr)}</h2>
    </React.Fragment>
  );
}

export default App;
