import React from "react";

function TreeDemo(){
    // maxHeapDemo();
    radixSortDemo()
    return(
        <div>
            <h2>tree demo</h2>
        </div>
    )
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



export default TreeDemo
