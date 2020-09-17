import React,{useReducer} from "react";
import ShowArea from "./showArea";
import Buttons from "./buttom";
import {Color} from "./color";

function Example3(){
    return (
       <div>
           <Color>
               <ShowArea></ShowArea>
               <Buttons></Buttons>
           </Color>
       </div>
    )
}

export default Example3
