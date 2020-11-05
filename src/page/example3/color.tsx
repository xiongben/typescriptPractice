import React, {createContext,useReducer} from "react";

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer = (state:any,action:any)=>{
    switch (action.type){
        case UPDATE_COLOR:
            return Object.assign({},state,{
                color: action.color,
                number: state.number+1,
            });
        default:
            return state
    }
}

export const Color = (props:any) => {
    const initState = {
        color: 'blue',
        number: 100,
        info: {
            name: "小红",
            age: 18,
        }
    }
    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <ColorContext.Provider value={{state,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
