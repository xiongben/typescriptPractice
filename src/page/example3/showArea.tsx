import React,{useContext} from "react";
import {ColorContext} from "./color";



function ShowArea(){
    const statedata:any = useContext(ColorContext)

    return (
        <div style={{color: statedata.state.color}}>the color of font is blue {statedata.state.number}</div>
    )
}

export default ShowArea
