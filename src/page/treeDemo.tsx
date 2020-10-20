import React from "react";

function TreeDemo(){
    // maxHeapDemo();
    // radixSortDemo()
    // topKFrequent([1,1,1,2,2,3],2)
    // splitStringToArr()
    // insertSort()
    mergeSort()
    return(
        <div>
            <h2>tree demo</h2>
        </div>
    )
}

//归并排序
function mergeSort(){
    let arr1:number[] = [34,66,71,22,35,98,21,27,11,9,3,68,40];

    let res = slicefn(arr1);
    console.log(res);

    function slicefn(arr:number[]):number[]{
        if(arr.length <2) return arr;
        let mid:number = Math.floor(arr.length/2);
        let leftArr:number[] = arr.slice(0,mid);
        let rightArr:number[] = arr.slice(mid)
        return mergeFn(slicefn(leftArr),slicefn(rightArr))
    }

    function mergeFn(arr1:number[],arr2:number[]):number[]{
        let res:number[] = [];
        while(arr1.length > 0 && arr2.length > 0){
            if(arr1[0] > arr2[0]){
                res.push(arr2.shift() as number);
            }else{
                res.push(arr1.shift() as number);
            }
        }
        while (arr1.length > 0){
            res.push(arr1.shift() as number);
        }
        while (arr2.length > 0){
            res.push(arr2.shift() as number);
        }

        return res;
    }
}

//插入排序
function insertSort(){
    let arr1:number[] = [34,66,71,22,35,98,21,27,11,9,3,68,40];
    let pre:number = 0;
    let current: number = 0;

    for(let i:number = 1; i < arr1.length; i++){
        current = arr1[i];
        pre = i -1;
        while (current < arr1[pre] && pre >= 0){
            arr1[pre+1] = arr1[pre]
            pre--;
        }
        arr1[pre+1] = current;
    }

    console.log(arr1)

}

//大顶堆demo
function maxHeapDemo(){
  let arr1 = [34,66,71,22,35,98,21,27,11,9,3,68,40];

  var arr2= sort(arr1,arr1.length);
  console.log(arr2);

  function buildHeap(arr:number[],heapSize:number){

      for(let i = Math.floor((heapSize)/2-1);i>=0;i--){
          heapify(arr,i,heapSize);
      }
  }

  function heapify(arr:number[],i:number,heapSize:number){
     var left = 2*i+1;
     var right = 2*i+2;
     var large = i;
     if(left < heapSize && arr[left] > arr[large]){
         large = left;
     }
     if(right < heapSize && arr[right] > arr[large]){
         large = right;
     }
     if(large !== i){
         swap(arr,i,large);
         heapify(arr,large,heapSize);
     }
  }

  function swap(arr:number[],i:number,j:number){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }

  function sort(arr:number[],heapSize:number){
      buildHeap(arr,heapSize);

      var len = arr.length-1;
     for(let i = heapSize-1;i>0;i--){
         swap(arr,0,i);
         heapify(arr,0,i);
     }
     return arr;
  }
}
//基数排序
function radixSortDemo(){
    let arr1 = [34,66,71,22,35,98,21,27,11,9,3,68,40,999,453,334];
    var arr2= radixSort(arr1,3);
    console.log(arr2);
    function radixSort(arr:number[],maxDigit:number){
        var count:number[][] = [];
        var digit_before = 10;
        var digit_after = 1;
        for(var i=0;i<maxDigit;i++,digit_after *= 10,digit_before *= 10){
            for(var j=0;j<arr.length;j++){
                var digitNum = parseInt(String((arr[j]%digit_before)/digit_after)) ;
                if(!count[digitNum]){
                    count[digitNum]=[];
                }
                count[digitNum].push(arr[j]);
            }
            var temp =0;
            for(var k=0;k<count.length;k++){
               var val;
               if(count[k] != null){
                   while ((val = count[k].shift()) != null)
                   arr[temp++] = val;
               }
            }
        }
        return arr;
    }

}

function topKFrequent(nums: number[], k: number): number[] {
    let arr1:number[][] = [];
    let map1 = new Map();
    for(let i=0;i<nums.length;i++){
        if(map1.get(nums[i])){
            map1.set(nums[i],map1.get(nums[i])+1);
        }else{
            map1.set(nums[i],1);
        }
    }

    map1.forEach((v,k)=>{
        if(arr1[v]){
            arr1[v].push(k);
        }else{
            arr1[v] = [k];
        }
    })
    let res:number[] = [];
    for(let i=arr1.length-1;i>=0 && res.length < k;i--){
        if(arr1){
            res.push(...arr1[i]);
        }
    }
    return res;
}

//分割字符串
function splitStringToArr():void{
    const str1:string = "11223344";
    const k:number = 2;
    const str2:string[] = str1.split("");
    const res:string[] = [];
    // console.log(str2);
    let newstr:string = "";
    for(let i:number=0;i < str2.length; i++){
        newstr = "";
        for(let j:number=i;j<str2.length; j++){
            newstr += str2[j];
            if(newstr.length % k == 0){
                res.push(newstr);
            }
        }
        console.log(res)
    }
}



export default TreeDemo
