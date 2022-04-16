import React from "react";
function Child(props){
    return(
        <React.Fragment>
            <button onClick={()=> props.my_fun("Welcome_1",
                                                "Welcome_2",
                                                "Welcome_3")}>
                    Click Me
            </button>
        </React.Fragment>
    )
}
export default Child;