import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

function Example5(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState("child name")
    const timer:any = useRef()
    useEffect(()=>{
        timer.current = setInterval(()=>{
            setCount(count=>count+1)
        }, 1000)
    },[])

    useEffect(()=>{
        console.log("===>",count)
        if(count > 3){
            clearInterval(timer.current)
        }
    })



    return(
        <div>
            <h3>example5:useRef count:{count}</h3>
            <button onClick={()=>setCount(count+10)}>add</button>
            {/*<Child name={name} onClickfn={(newNmae:string)=>{setName(name+newNmae)}}/>*/}
            <Child name={name}
             onClickfn={useCallback((newNmae:string)=>{setName(name+newNmae)},[])}/>
            <Child2 name={name}
                   onClickfn={useCallback((newNmae:string)=>{setName(name+newNmae)},[])}/>
        </div>
    )
}


interface ChildProps {
    name: string
    onClickfn: Function
}

const Child = ({name, onClickfn}:ChildProps):JSX.Element => {
    const namestr = useMemo(()=>changename(name),[name])

    function changename(name:string):string{
        console.log("child component???")
        return name+"==";
    }

    return(
        <>
            <p>child component name:{name}</p>
            <button onClick={()=>{onClickfn("new name")}}>change name</button>
        </>
    )
}

const Child2 = React.memo(({name, onClickfn}:ChildProps):JSX.Element => {

    console.log("kkkkk")
    return(
        <>
            <p>child component name:{name}</p>
            <button onClick={()=>{onClickfn("new name")}}>change name</button>
        </>
    )
})


export default Example5
