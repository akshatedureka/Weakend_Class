//import createStore function from redux library
const { createStore } = require("redux");
//create the initialstate
const initialState = {
    bal : 5000
}
//create the reducer
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "DEPOSIT":
           return{
                ...state,
                bal : state.bal+action.value
           }
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal-action.value 
            }

        default:
            return state;
    }
}
//create the store
const store = createStore(reducer);


//subscribe
store.subscribe(()=>{
    console.log( store.getState() );
})





//request (dispatch)
store.dispatch({type:"DEPOSIT",value:1000});
store.dispatch({type:"WITHDRAW",value:500});
