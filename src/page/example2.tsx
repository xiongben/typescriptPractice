import React,{useReducer} from "react";


function ReducerDemo(){


    const [count , dispatch] = useReducer((state:any , action:any)=>{
        switch (action){
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    },0)

    return(
        <div>
            <h2>the score is {count}</h2>
            <button onClick={()=>{dispatch('add')}}>Increment</button>
            <button onClick={()=>{dispatch('sub')}}>Decrement</button>
        </div>
    )

}



export default ReducerDemo
