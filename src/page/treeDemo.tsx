import React from "react";

function TreeDemo(){
    // maxHeapDemo();
    // radixSortDemo()
    // topKFrequent([1,1,1,2,2,3],2)
    // splitStringToArr()
    // insertSort()
    // mergeSort()
    // shellSort()
    // search([4,5,6,7,0,1,2],0);

    // strDemo1();
    // sumdemo()
    // strdemo1()
    // cobinationDemo1()
    // wordSearch()
    // mergeIntervalsDemo()
    // permutationsDemo()
    // longestCommonPrefixDemo()
    nextPermutationDemo()
    return(
        <div>
            <h2>tree demo</h2>
        </div>
    )
}


function nextPermutationDemo() {
    nextPermutation([3,2,1])

    function nextPermutation(nums: number[]): void {
       if(nums.length <= 1) return;
       let i = nums.length-2;
       let j = nums.length-1;
       let k = nums.length-1;
       while (i >= 0 && nums[i] >= nums[j]){
           i--;
           j--;
       }
       if(i >= 0){
           while (nums[k] <= nums[i]) k--;
           swap(nums,i,k);
       }

       reverseArr(nums,j,nums.length-1);
       console.log(nums)
    };

    function swap(nums:number[],start:number,end:number):void {
      let temp:number = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
    }

    function reverseArr(nums:number[],start:number,end:number) {
       if(start > end) return;
       for(let i = start; i < Math.floor(start+end)/2; i++){
           swap(nums,i,start+end-i);
       }
    }
}


function longestCommonPrefixDemo() {
    var res:string = longestCommonPrefix(["flower","flow","flight"])
    console.log(res);
    function longestCommonPrefix(strs: string[]): string {
        if(strs == null || strs.length == 0) return "";
       let tempStr:string = strs[0];
       for(let i=1; i < strs.length; i++){
           while(strs[i].indexOf(tempStr) !== 0){
               tempStr = tempStr.slice(0,tempStr.length-1);
           }
       }
       return tempStr;
    };
}

//leecode47
function permutationsDemo(){
    permuteUnique([1,1,3]);
    function permuteUnique(nums: number[]): number[][] {
        if(nums == null) return [];
        if(nums.length == 1) return [nums]
        let list:number[] = [];
        let res:number[][] = [];
        let used:boolean[] = new Array(nums.length).fill(false);
        nums.sort((a,b)=>a-b);
       helper(nums,list,res,used);
       console.log(res)
        return res
    };

    function helper(nums:number[],list:number[],res:number[][],used:boolean[]) {

        if(list.length == nums.length){
            let newarr = Array.from(list);
            res.push(newarr);
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]) continue;
            if(i > 0 && nums[i-1] == nums[i] && !used[i-1]) continue
            used[i] = true;
            list.push(nums[i])
            helper(nums,list,res,used);
            list.pop()
            used[i] = false;
        }

    }
}

//leecode56
function mergeIntervalsDemo(){
    merge([[1,4],[4,5]])
    function merge(intervals: number[][]): number[][] {
        if(intervals.length < 2) return intervals;
        intervals.sort(function (arr1,arr2) {
            return arr1[0]-arr2[0];
        })
        let res:number[][] = [];
        let start:number = intervals[0][0]
        let end:number = intervals[0][1]
        for(let val of intervals){
            if(val[0] <= end){
                end = Math.max(val[1],end);
            }else {
                res.push([start,end]);
                start = val[0];
                end = val[1];
            }
        }
        res.push([start,end])
        console.log(res);
        return res
    };
}


//leecode79
function wordSearch(){
    var res = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED")
    console.log(res)
    function exist(board: string[][], word: string): boolean {
        for(var j=0;j<board.length;j++){
            for(var i=0;i<board[0].length;i++){
                if(helper(board,j,i,word,0)){
                    return true;
                }
            }
        }
        return false;
    };

    function helper(board: string[][],j:number,i:number,word:string,len:number):boolean {
         if(len === word.length) return true;
         if(j<0 || i<0 || j > board.length-1 || i > board[0].length-1) return false;
         if(board[j][i] !==word.charAt(len)) return false;
         board[j][i] = "*";
         let res:boolean =  helper(board,j+1,i,word,len+1)||
             helper(board,j,i+1,word,len+1)||
             helper(board,j-1,i,word,len+1)||
             helper(board,j,i-1,word,len+1);
         board[j][i] = word.charAt(len);
         return res;
    }

}

function strDemo1(){
    let low:number = 0;
    let reslength:number = 0;
    longestPalindrome("cbbd");
    function longestPalindrome(s: string): string {
        if(s.length < 2) return s;
        for(let i = 0; i < s.length-1; i++){
            helper(s,i,i);
            helper(s,i,i+1);
        }

        console.log(s.substr(low,reslength))
        return s.substr(low,reslength)
    };

    function helper(s:string,i:number,j:number){
        while(i >=0 && j <= s.length-1 && s.charAt(i) == s.charAt(j)){
            i--;
            j++;
        }
        if(j-i-1> reslength){
            low = i+1;
            reslength = j-i-1;
        }

    }
}



function cobinationDemo1(){
    combinationSum2([10,1,2,7,6,1,5],8)

    function combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort();
        let res:number[][] = [];
        let link:number[] = [];
        helper(candidates,res,link,0,target);
        console.log(res)
        return res;
    };

    function helper(canArr:number[],res:number[][],link:number[],startIndex:number,sum:number){
        if(sum == 0){

            let newLinkArr:number[] = Array.from(link);
            console.log(newLinkArr);
            res.push(newLinkArr);
            return;
        }
        if(sum < 0) return;
        for(let i = startIndex;i<canArr.length;i++){
            if(i > startIndex && canArr[i] == canArr[i-1]) continue;


            link.push(canArr[i])
            helper(canArr,res,link,i+1,sum-canArr[i]);
            link.pop();
        }
    }
}


function strdemo1() {
    let res = isAnagram("anagram","nagaram");
    console.log(res);
   function isAnagram(str1:string,str2:string) {
       let ailpha:number[] = new Array(26);
       ailpha.fill(0)
       for(let i=0;i<str1.length;i++){
           ailpha[str1.charAt(i).charCodeAt(0)-'a'.charCodeAt(0)]++;
       }
       for(let i=0;i<str2.length;i++){
           ailpha[str2.charAt(i).charCodeAt(0)-'a'.charCodeAt(0)]--;
       }

       for(let i of ailpha){
           if(i != 0){
               return false;
           }
       }
       return true;
   }
}


function sumdemo(){
    let res:number[][] = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);
    console.log(res);
    function threeSum(nums: number[]): number[][] {
        nums.sort((a,b)=> a-b);
        console.log(nums)
        let low:number = 0;
        let high:number = nums.length-1;
        let sum:number = 0;
        let resArr:number[][] = [];
        for(let i=0;i<nums.length-2;i++){
            if(i === 0 || (i>0 && nums[i]  !== nums[i-1])){
                low = i+1;
                high = nums.length-1;
                sum = 0 - nums[i];
                while(low < high){
                    if(sum === nums[low]+nums[high]){
                        resArr.push([nums[low],nums[high],nums[i]]);
                        while(low < high && nums[low]===nums[low+1]) low++;
                        while(low < high && nums[high] === nums[high-1]) high--;
                        low++;high--;
                    }else if(sum > nums[low]+nums[high]){
                        low++;
                    }else{
                        high--;
                    }

                }
            }
        }
        return resArr;
    };
}


function search(nums: number[], target: number): number {

    let low:number = 0;
    let high:number = nums.length-1;
    while(low < high){
        let mid:number = Math.floor((low + high)/2)
        if(nums[mid] > nums[high]){
            low = mid +1
        }else{
            high = mid
        }
    }
    let row:number = low;
    console.log(row)
    low=0;
    high=nums.length-1;
    while(low<=high){
        let currMid = Math.floor((low+high)/2);
        let realMid = (row+currMid)%(nums.length);
        if(target == nums[realMid]){
            return realMid;
        }
        if(target > nums[realMid]){
            low = currMid+1;
        }else if(target < nums[realMid]){
            high = currMid-1;

        }
    }
    return -1;

};

//希尔排序
function shellSort(){
    let arr1:number[] = [34,66,71,22,35,98,21,27,11,9,3,68,40];
    let len:number = arr1.length;
    for(let gap = Math.floor(len/2);gap>0;gap=Math.floor(gap/2)){
        for(let i=gap;i<len;i++){
            let j:number = i-gap;
            let current:number = arr1[i];
            while (j>= 0 && current < arr1[j]){
                arr1[j+gap] = arr1[j];
                j = j-gap;
            }
            arr1[j+gap] = current;
        }
    }
    console.log(arr1)
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
