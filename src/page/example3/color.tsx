import React, {createContext,useReducer} from "react";

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer = (state:any,action:any)=>{
    switch (action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = (props:any) => {
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
