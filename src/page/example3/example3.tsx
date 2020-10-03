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
console.log(xiaoming1.say())

export default Example3
