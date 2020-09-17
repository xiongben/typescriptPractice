import React,{useContext} from "react";
import {ColorContext} from "./color";



function ShowArea(){
    const color:any = useContext(ColorContext)
    console.log(color)
    return (
        <div style={{color: color.color}}>the color of font is blue</div>
    )
}

export default ShowArea
