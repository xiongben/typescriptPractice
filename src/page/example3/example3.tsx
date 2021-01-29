import React, {useReducer, useState, useEffect} from "react";
import ShowArea from "./showArea";
import Buttons from "./buttom";
import {Color} from "./color";
import UserInfo from "../userInfo";
import axios from "axios";

import "./example.css"

function Example3(){
    const [userInfo, setUserInfo] = useState({name:"xb",num:23})
    const [list1, setList1] = useState([0,1,2,3,4,5,6,7,8,9,10])
    // const params = {name:"xb",num:23}
    const ref:any = React.createRef();

    function changeUserInfo(){
       setUserInfo({
           name: "xiaohong",
           num: 55
       })
    }

    // useEffect(()=>{
    //     axios.get("https://suggest.taobao.com/sug?code=utf-8&q=maoyi").then(res => {
    //         console.log(res.data);
    //     })
    // },[])

    function handleOnScroll(e:any){
        // console.log(ref.current)
        let dom = ref.current;
       if(dom != null){
           console.log(dom.scrollTop);
       }
    }

    return (
       <div>
           <Color>
               <ShowArea></ShowArea>
               <Buttons></Buttons>
           </Color>
           <UserInfo data={userInfo}/>
           <button onClick={changeUserInfo}>change user info</button>
           <div>
               <div className="box">
                   <div className="l-box"></div>
                   <div className="r-box"></div>
               </div>
           </div>
           <div className="scrollbox1" onScrollCapture={(e) => handleOnScroll(e)} ref={ref}>
               {list1.map((item)=>{
                   return (
                       <div className="itemBox" key={item}>
                           item
                       </div>
                   )
               })}
           </div>
       </div>
    )
}

function testTreeDemo(){
   class Node  {
       val:number;
       left:Node|null;
       right:Node|null;
       constructor( val : number,left : Node|null,right : Node|null) {
           this.val = val;
           this.left = left;
           this.right = right;
       }
   }

   var node1 = new Node(7,null,null);
   var node2 = new Node(8,null,null)
    var node3 = new Node(6,null,null)
    var node4 = new Node(3,node1,node2)
    var node5 = new Node(5,node3,null)
    var node6 = new Node(2,node4,node5)


    function getNum(node:Node|null,sum:number){
      if(node == null){
          return sum
      }
      if(node.left != null || node.right != null){
          sum += node.val;
      }
      sum = getNum(node.left, sum)
        sum= getNum(node.right,sum)
        return sum

    }

    var res = getNum(node6,0)
    console.log(res)

}

// testTreeDemo()

function getLadyInfo({name,age}:{name:string,age:number}){
    console.log("name: ",name)
    console.log("age: ",age)
}

type Lady = {
    name: string,
    age: number
}

const arr1:{name:string,age:number}[] = []
arr1[0] = {name: "xiaohong", age: 12}

const arr2:Lady[] = []
arr2[0] = {name: "xiaoming", age: 13}

// console.log(arr1,arr2)

interface Man{
    name:string,
    age?:number,
    [propname:string]:any,
    say():string
}

class Xiaoming implements Man{
    name:string
    age:number
    score: number
    constructor() {
        this.name="xiaoming"
        this.age = 22
        this.score = 99
    }

    say():string{
        return "hello!" + this.name
    }
}

const xiaoming1 = new Xiaoming()
// console.log(xiaoming1.say())


interface Girl{
    name:string;
}

class SelectGirl<T extends Girl>{
    constructor(private girls:T[]) {
    }
    getGirl(num:number):string{
        return this.girls[num].name;
    }
}

const selectGirls1 = new SelectGirl<Girl>([
    {name:"aa"},
    {name:"bb"},
    {name:"cc"},
]);
const res3 = selectGirls1.getGirl(1);
console.log(res3);

export default Example3
