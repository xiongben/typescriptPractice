import React,{useState,useMemo} from "react";



function Example4(){
    const [xiaohong,setXiaohong] = useState("xiaohongIsWaiting")
    const [xiaoming,setXiaoming] = useState("xiaomingIsWaiting")

    return(
        <>
            <button onClick={()=>{setXiaohong(String((new Date()).getTime()))}}>xiao hong</button>
            <button onClick={()=>{setXiaoming(String((new Date()).getTime()))}}>xiao ming</button>
            <ChildComponent name={xiaohong}>{xiaoming}</ChildComponent>
        </>
    )
}


function ChildComponent({name,children}:any){

    function changeXiaohong(name:any){
        console.log("xiaohong is change now!")
        return name + " is coming!"
    }

    const actionXiaohong = useMemo(()=>{
        changeXiaohong(name)
    },[name])

    return(
        <>
            {/*<div>{actionXiaohong}</div>*/}
            <div>{children}</div>
        </>
    )
}

export default Example4
