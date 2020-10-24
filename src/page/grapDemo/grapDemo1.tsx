import React,{useEffect} from "react";


function GrapDemo(){
    useEffect(()=>{
        grapTestDemo1();
    },[])

    return(
        <>
            <div>
                <h1>Grap Demo</h1>
            </div>
        </>
    )
}

function grapTestDemo1(){
    const nodeArr:string[] = ['A','B','C','D'];
    const nodeWeightArr:number[] = [1,3,4,2];
    const Max = 99999;
    //无向
    const edg:number[][] = [
        [0,    1,  1   ,Max],
        [1,    0,  Max ,  1],
        [1,  Max,  0   ,  1],
        [Max,  1,  1   ,  0],
    ]
    // 有向
    const edg2:number[][] = [
        [0,    1,  1   ,Max],
        [Max,  0,  1 , 1],
        [Max,Max,  0   ,  1],
        [Max,Max,  Max   ,  0],
    ]
    let largeNum:number = 0;
    let largeNodeArr:string[] = [];
    let grap1 = new Grap(nodeArr,nodeWeightArr,edg);
    // grap1.book[0] = 1;
    // grap1.dfs(0,0,3);
    // grap1.printRes()

    for(let i=0; i < grap1.len ; i++){
        for(let j=0; j < grap1.len ; j++){
            if(i !== j){
                // console.log("=========",i,j)
               grap1.grapReset(i)
                grap1.dfs(i,0,j);
                if(largeNum < grap1.maxWeightTemp){
                    largeNum = grap1.maxWeightTemp;
                    largeNodeArr = [];
                    largeNodeArr = largeNodeArr.concat(grap1.nodeResArr);
                }
            }
        }
    }
    // this is res
    console.log(largeNum,largeNodeArr)
}

class Grap {
    nodeArr:string[];
    nodeWeightArr:number[];
    e:number[][];
    book: number[];
    len: number;
    maxWeightTemp: number;
    nodeResArr:string[];
    nodeResArrTemp:string[];

    constructor(nodeArr:string[],nodeWeightArr:number[],e:number[][]) {
        this.nodeArr = nodeArr;
        this.nodeWeightArr = nodeWeightArr;
        this.e = e;
        this.len = nodeArr.length;
        this.book = Array(this.len).fill(0);
        this.maxWeightTemp = 0;
        this.nodeResArr = [];
        this.nodeResArrTemp = [];
    }

    dfs(cur: number,weightSum:number,target:number){
        // console.log(this.nodeArr[cur]);
        this.nodeResArrTemp.push(this.nodeArr[cur]);
        weightSum = weightSum + this.nodeWeightArr[cur];

        if (target === cur){
            // console.log("=====")
            if(weightSum > this.maxWeightTemp){
                this.maxWeightTemp =weightSum;
            }
            this.nodeResArr = [];
            this.nodeResArr =this.nodeResArr.concat(this.nodeResArrTemp);
            return;
        };
        for(let i =0; i < this.len; i++){
            if(this.e[cur][i] === 1 && this.book[i] === 0){
                this.book[i] = 1;
                this.dfs(i,weightSum,target);

                this.book[i] = 0;
                this.nodeResArrTemp.pop();
            }
        }

        return;
    }



    grapReset(i:number){
        this.nodeResArr = [];
        this.nodeResArrTemp = [];
        this.maxWeightTemp = 0;
        this.book = this.book.fill(0);
        this.book[i] = 1;
    }

    printRes(){
        console.log(this.maxWeightTemp,this.nodeResArr)
    }
}


export default GrapDemo
