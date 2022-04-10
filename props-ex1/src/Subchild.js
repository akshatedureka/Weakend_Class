import React from "react";
function Subchild(props){
    return(
        <React.Fragment>
            {props.key1}....{props.children}
        </React.Fragment>
    )
}
export default Subchild;