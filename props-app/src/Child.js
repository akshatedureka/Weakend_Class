import React from "react";
function Child(props){
    return(
        <React.Fragment>
            {props.str} <br></br>
            {props.num} <br></br>
            {JSON.stringify(props.flag)} <br></br>
            {props.obj.key1}....{props.obj.key2}...{props.obj.key3}
            <table>
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                    <th>P_IMAGE</th>
                </tr>
                {
                    props.arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>
                                <td><img src={element.p_image} width="100"></img></td>
                            </tr>
                        )
                    })
                }
            </table>

        
        </React.Fragment>
    )
}
export default Child;