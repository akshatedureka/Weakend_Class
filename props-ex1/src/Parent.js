import React from "react";
import Child from "./Child";
function Parent(){
    return(
        <React.Fragment>
            <Child key1="Hello_1">
                Hello_2
            </Child>
        </React.Fragment>
    )
}
export default Parent;