import React,{useContext} from "react";
import {ColorContext,UPDATE_COLOR} from "./color";



function Buttons(){
    const colorContext:any = useContext(ColorContext)
    const dispatch = colorContext.dispatch
    return (
        <div>
           <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"red"})}}>red</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"yellow"})}}>yellow</button>
        </div>
    )
}

export default Buttons
