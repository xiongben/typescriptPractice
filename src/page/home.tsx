

import React,{useState, useEffect, createContext, useContext} from "react";

const CountContext = createContext({});

function Example1(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`useEffect=>you clicked ${count} times`)
    })
    return (
        <div>
            <p>you click {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}

function Counter(){
    let count = useContext(CountContext)
    return(
        <h2>==={count}====</h2>
    )
}

export default Example1
