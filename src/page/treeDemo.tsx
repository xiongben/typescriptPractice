import React from "react";
import {Simulate} from "react-dom/test-utils";


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
    // nextPermutationDemo()
    // consecutiveCharDemo()
    // uniquePathsDemo()

    // uniquePathsDemo()
    // quickSortDemo()
    // console.log(findPeakElementDemo())
    // searchDemo2()
    // generateDemo()
    // letterDemo()
    // coinsDemo();
    // uniquePathDemo()
    // smallPathDemo1()
    // getNumsDemo()
    // addDemo1();
    // evalDemo1()
    // majorDemo()
    // LongestIncreasingSubsequenceDemo()
    // gasDemo()
    // powDemo()
    // sqrtDemo()
    // setZeroDemo()
    // jumpdemo2()
    // getRandomDemo1()
    // productDemo1()
    // spiralDemo1()
    // fourSumDemo1()
    // waterDemo1()
    // firstMissionDemo1()
    // rotateImage()
   // sudoDemo1()
   //  rotateArrayDemo()
   //  plusOneDemo()
   //  interDemo1()
   //  strDemo2()
   // validPalindromeDemo()
   //  countsayDemo()
   //  maxsubDemo1()
   //  hammingDemo1()
   // pasDemo1()
   //  validParenthessDemo()
   //  missNumberDemo()
   //  sumdemo2()
   //  palindromeDemo1()
   //  sortArrayDemo2()
   //  romanDemo1()
   //  wordDemo3()
   //  wiggleSortDemo1()
   //  wiggleSortDemo2()
   // sortDemo2()
   //  wordSearchDemo2()
   //  wordSearchDemo3()

    return(
        <div>
            <h2>tree demo</h2>
        </div>
    )
}

// //leecode: Word Search II
// function wordSearchDemo3(){
//     class TrieNode {
//         next: TrieNode[];
//         word: string | null;
//         constructor() {
//             this.next = [];
//             this.word = null;
//         }
//     }
//     var board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
//         words = ["oath","pea","eat","rain"];
//
//     var res = findWords(board,words);
//     console.log(res);
//
//
//     function findWords(board: string[][], words: string[]): string[] {
//         var res:string[] = [];
//         var root:TrieNode = buildTrie(words);
//         for(var i = 0; i < board.length; i++){
//             for(var j = 0; j < board[0].length; j++){
//                 dfs(board,i,j,root,res);
//             }
//         }
//         return res;
//     };
//
//     function dfs(board:string[][], i:number, j:number, trieTreeP:TrieNode, res:string[]) {
//         var c:string = board[i][j];
//         var pIndex:number = c.charCodeAt(0) - "a".charCodeAt(0);
//         if(c == "#" || trieTreeP.next[pIndex] == null) return;
//         trieTreeP = trieTreeP.next[pIndex];
//         if(trieTreeP.word != null){
//             res.push(trieTreeP.word);
//             trieTreeP.word = null;
//         }
//         board[i][j] = "#";
//         if(i > 0) dfs(board,i-1,j,trieTreeP,res);
//         if(j > 0) dfs(board,i,j-1,trieTreeP,res);
//         if(i < board.length-1) dfs(board,i+1,j,trieTreeP,res);
//         if(j < board[0].length-1) dfs(board,i,j+1,trieTreeP,res);
//         board[i][j] = c;
//     }
//
//     function buildTrie(words:string[]):TrieNode {
//        var root:TrieNode = new TrieNode();
//        for(var strVal of words){
//            var p:TrieNode = root;
//            for(var val of strVal.split("")){
//                var i:number = val.charCodeAt(0) - "a".charCodeAt(0);
//                if(p.next[i] == null) p.next[i] = new TrieNode();
//                p = p.next[i];
//            }
//            p.word = strVal;
//        }
//        return root;
//     }
//
//
// }

// //leecode: Word Search II
// function wordSearchDemo2(){
//     var board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
//         words = ["oath","pea","eat","rain"];
//
//     var res = findWords(board,words);
//     console.log(res);
//
//
//     function findWords(board: string[][], words: string[]): string[] {
//         var res:string[] = [];
//         for(var i = 0; i < words.length; i++){
//             if(exist(board,words[i])){
//                 res.push(words[i]);
//             }
//         }
//         return res;
//     };
//
//     function exist(board: string[][], word: string): boolean {
//         for(var j=0;j<board.length;j++){
//             for(var i=0;i<board[0].length;i++){
//                 if(helper(board,j,i,word,0)){
//                     return true;
//                 }
//             }
//         }
//         return false;
//     };
//
//     function helper(board: string[][],j:number,i:number,word:string,len:number):boolean {
//          if(len === word.length) return true;
//          if(j<0 || i<0 || j > board.length-1 || i > board[0].length-1) return false;
//          if(board[j][i] !==word.charAt(len)) return false;
//          board[j][i] = "*";
//          let res:boolean =  helper(board,j+1,i,word,len+1)||
//              helper(board,j,i+1,word,len+1)||
//              helper(board,j-1,i,word,len+1)||
//              helper(board,j,i-1,word,len+1);
//          board[j][i] = word.charAt(len);
//          return res;
//     }
//
// }

// //sortDemo
// function sortDemo2() {
//    var arr1:number[] = [55,23,12,5,1,35,98,122,41,3,9,66,20];
//
//    var res = mergeSort(arr1);
//    console.log(res);
//
//    function mergeSort(arr:number[]):number[] {
//       if(arr.length < 2) return arr;
//       var mid:number = arr.length >> 1;
//       var left:number[] = arr.slice(0,mid);
//       var right:number[] = arr.slice(mid);
//
//       return merge(mergeSort(left),mergeSort(right));
//    }
//
//    function merge(a:number[],b:number[]):number[] {
//        var res:number[] = [];
//        while (a.length > 0 && b.length > 0){
//            if(a[0] > b[0]){
//                res.push(b.shift() as number)
//            }else {
//                res.push(a.shift() as number)
//            }
//        }
//        while(a.length > 0){
//            res.push(a.shift() as number)
//        }
//        while(b.length > 0){
//            res.push(b.shift() as number)
//        }
//        return res;
//    }
//
// }

// //leecode:Wiggle Sort II
// function wiggleSortDemo2(){
//     var nums = [6,13,5,4,5,2];
//     wiggleSort(nums);
//     console.log(nums);
//
//     function wiggleSort(nums: number[]): void {
//          var mid:number = findKthLargest(nums,Math.floor((nums.length+1)/2));
//          var len:number = nums.length;
//          var left:number = 0;
//          var right:number = len-1;
//          var i = 0;
//          while (i <= right){
//              if(nums[getNewIndex(i,len)] < mid){
//                  swaper(getNewIndex(right,len),getNewIndex(i,len),nums);
//                  right--;
//              }else if(nums[getNewIndex(i,len)] > mid){
//                  swaper(getNewIndex(left,len),getNewIndex(i,len),nums);
//                  left++;
//                  i++;
//              }else {
//                  i++;
//              }
//          }
//     };
//
//     function getNewIndex(index:number,n:number){
//         return (1 + 2 * index)%(n|1);
//     }
//
//     function findKthLargest(nums: number[], k: number): number {
//         quickSort(nums,0,nums.length-1);
//         for(var i=0; i < nums.length;i++){
//             k--;
//             if(k == 0) {
//                 return nums[i];
//             }
//         }
//         return 0;
//     };
//
//     function quickSort(arrs:number[],start:number,end:number) {
//
//         if(start > end) return;
//         var i:number = start;
//         var j:number = end;
//         var pivot:number = arrs[start];
//         while(i != j){
//             while(arrs[j] <= pivot && j > i) j--;
//             while(arrs[i] >= pivot && i < j) i++;
//             if(i < j){
//                 swaper(i,j,arrs);
//             }
//
//         }
//         arrs[start] = arrs[i];
//         arrs[i] = pivot;
//         quickSort(arrs,start,i-1);
//         quickSort(arrs,i+1,end);
//         return;
//     }
//
//     function swaper(i:number,j:number,arr:number[]) {
//         var temp:number = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }

// //leecode:Wiggle Sort
// function wiggleSortDemo1(){
//     var nums = [3,5,2,1,6,4];
//     wiggleSort2(nums);
//     console.log(nums);
//     function wiggleSort(nums:number[]){
//         nums.sort((a,b)=>a-b)
//         if(nums.length < 2) return;
//         for(var i = 2; i < nums.length; i+=2){
//             swaper(i,i-1,nums);
//         }
//     }
//
//     function swaper(i:number,j:number,arr:number[]) {
//         var temp:number = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//
//     function wiggleSort2(nums:number[]){
//         if (nums.length < 2) return;
//         for(var i = 0; i < nums.length; i++){
//             if((i%2 === 1 && nums[i] < nums[i-1]) || (i%2 === 0 && nums[i] > nums[i-1])){
//                 swaper(i,i-1,nums);
//             }
//         }
//     }
// }


// //leecode:Word Ladder
// function wordDemo3(){
//     var beginWord = "hit",
//         endWord = "cog",
//         wordList = ["hot","dot","dog","lot","log","cog"];
//
//     console.log(ladderLength2(beginWord,endWord,wordList));
//
//     function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
//         var wordId:any = {};
//         var edge:number[][] = [];
//         var nodeNum:number = 0;
//
//         for (var v of wordList){
//             addEdge(v);
//         }
//         addEdge(beginWord)
//         if(!wordId.hasOwnProperty(endWord)) return 0;
//         var dis:number[] = new Array(nodeNum).fill(Number.MAX_SAFE_INTEGER);
//         var beginId:number = wordId[beginWord],
//             endId:number = wordId[endWord];
//         dis[beginId] = 0;
//         var que:number[] = [];
//         que.push(beginId);
//         while (que.length > 0){
//             var x:number = que.shift() as number;
//             if(x == endId){
//                 return dis[endId]/2 + 1;
//             }
//             for(var value of edge[x]){
//                 if(dis[value] == Number.MAX_SAFE_INTEGER){
//                     dis[value] = dis[x]+1;
//                     que.push(value);
//                 }
//             }
//         }
//
//         function addEdge(word:string){
//             addWord(word);
//             var id1:number = wordId[word];
//             var wordArray:string[] = word.split("");
//             for(var i = 0; i < wordArray.length; i++){
//                 var temp:string = wordArray[i];
//                 wordArray[i] = "*";
//                 var newWord:string = wordArray.join("");
//                 addWord(newWord);
//                 var id2:number = wordId[newWord];
//                 edge[id1].push(id2);
//                 edge[id2].push(id1);
//                 wordArray[i] = temp;
//             }
//         }
//
//         function addWord(word:string){
//             if(!wordId.hasOwnProperty(word)){
//                 wordId[word] = nodeNum;
//                 nodeNum++;
//                 edge.push([]);
//             }
//         }
//         return 0;
//     };
//
//     function ladderLength2(beginWord: string, endWord: string, wordList: string[]): number {
//         var ids:any = {};
//         var edge:number[][] = [];
//         var nodeNum:number = 0;
//
//         for(var v of wordList){
//             addEdge(v);
//         }
//         addEdge(beginWord);
//         if(!ids.hasOwnProperty(endWord)) return 0;
//
//         //从起点开始广度优先遍历的初始化
//         var disStart:number[] = new Array(nodeNum).fill(Number.MAX_SAFE_INTEGER);
//         var beginId:number = ids[beginWord];
//         disStart[beginId] = 0;
//         var queueStart:number[] = [];
//         queueStart.push(beginId)
//         //从终点开始广度优先遍历的初始化
//         var disEnd:number[] = new Array(nodeNum).fill(Number.MAX_SAFE_INTEGER);
//         var endId:number = ids[endWord];
//         disEnd[endId] = 0;
//         var queueEnd:number[] = [];
//         queueEnd.push(endId)
//         while(queueStart.length > 0 && queueEnd.length > 0){
//             for(let i = 0; i < queueStart.length; i++){
//                 var nodeBegin:number = queueStart.shift() as number;
//                 if(disEnd[nodeBegin] != Number.MAX_SAFE_INTEGER){
//                     return (disStart[nodeBegin]+disEnd[nodeBegin])/2 +1;
//                 }
//                 for(var value of edge[nodeBegin]){
//                     if(disStart[value] == Number.MAX_SAFE_INTEGER){
//                         disStart[value] = disStart[nodeBegin]+1;
//                         queueStart.push(value);
//                     }
//                 }
//             }
//
//             for(let i = 0; i < queueEnd.length; i++){
//                 var nodeEnd:number = queueEnd.shift() as number;
//                 if(disStart[nodeEnd] != Number.MAX_SAFE_INTEGER){
//                     return (disStart[nodeEnd]+disEnd[nodeEnd])/2 +1;
//                 }
//                 for(var value of edge[nodeEnd]){
//                     if(disEnd[value] == Number.MAX_SAFE_INTEGER){
//                         disEnd[value] = disEnd[nodeEnd]+1;
//                         queueEnd.push(value);
//                     }
//                 }
//             }
//         }
//
//         function addEdge(str:string){
//             addWord(str);
//             var id1:number = ids[str];
//             var strArr:string[] = str.split("");
//             for(var i =0; i < strArr.length; i++){
//                 var temp:string = strArr[i];
//                 strArr[i] = "*";
//                 var newStr = strArr.join("");
//                 addWord(newStr);
//                 var id2:number = ids[newStr];
//                 edge[id1].push(id2);
//                 edge[id2].push(id1);
//                 strArr[i] = temp;
//             }
//         }
//
//         function addWord(str:string){
//             if(!ids.hasOwnProperty(str)){
//                 ids[str] = nodeNum;
//                 nodeNum++;
//                 edge.push([]);
//             }
//         }
//         return 0;
//     };
// }

// //leecode:Roman to Integer
// function romanDemo1(){
//     var s = "MCMXCIV";
//     console.log(romanToInt(s));
//
//     function romanToInt(s: string): number {
//         var res:number = 0;
//         var preNum:number = helper(s.charAt(0));
//         for(var i = 1; i < s.length; i++){
//             var num = helper(s.charAt(i));
//             if(num > preNum){
//                 res-=preNum;
//             }else{
//                 res+=preNum;
//             }
//             preNum = num;
//         }
//         res+=preNum;
//         return res;
//     };
//     function helper(ch:string){
//         switch (ch){
//             case "I":
//                 return 1;
//             case "V":
//                 return 5;
//             case "X":
//                 return 10;
//             case "L":
//                 return 50;
//             case "C":
//                 return 100;
//             case "D":
//                 return 500;
//             case "M":
//                 return 1000;
//             default:
//                 return 0;
//         }
//     }
// }

// //leecode:Squares of a Sorted Array
// function sortArrayDemo2(){
//     var nums = [-4,-1,0,3,10];
//     console.log(sortedSquares(nums));
//     function sortedSquares(nums: number[]): number[] {
//         var res:number[] = [];
//         var len:number = nums.length;
//         for(var i=0,j=len-1,temp=len-1;i <= j;){
//             if(nums[i] * nums[i] < nums[j] * nums[j]){
//                 res[temp] = nums[j] * nums[j];
//                 j--;
//             }else{
//                 res[temp] = nums[i] * nums[i];
//                 i++;
//             }
//             temp--;
//         }
//         return res
//     };
//
// }

// //leecode: Palindrome Partitioning
// function palindromeDemo1(){
//     var s = "aab";
//     console.log(partition(s));
//
//     function partition(s: string): string[][] {
//         var res:string[][] = [];
//         var len:number = s.length;
//         if(len === 0) return res;
//         var dp:boolean[][] = new Array(len);
//         for (var i = 0; i < dp.length; i++){
//             var temp:boolean[] = new Array(len).fill(false)
//             dp[i] = temp;
//         }
//         for(var right = 0; right < len; right++){
//             for(var left = 0; left <= right; left++){
//                 if(s.charAt(left) === s.charAt(right) && (right-left <= 2 || dp[left+1][right-1])){
//                     console.log(left,right)
//                     dp[left][right] = true;
//                 }
//             }
//         }
//         var path:string[] = [];
//         helper(s,0,len,dp,path,res);
//         return res;
//     };
//
//     function helper(s:string,start:number,len:number,dp:boolean[][],path:string[],res:string[][]){
//         if(start === len){
//             res.push([...path]);
//             return
//         }
//         for(var i = start; i < len; i++){
//             if(!dp[start][i]) continue;
//             path.push(s.slice(start,i+1));
//             helper(s,i+1,len,dp,path,res);
//             path.pop();
//         }
//     }
// }

// //leecode: 4Sum
// function sumdemo2(){
//     var nums = [0,0,0,0], target = 0;
//     console.log(fourSum(nums,0));
//
//     function fourSum(nums: number[], target: number): number[][] {
//         nums.sort((a,b)=>a-b)
//         var res:number[][] = [];
//        if(nums.length < 4) return res;
//        var len:number = nums.length;
//        for(var i = 0; i <= len-4; i++){
//            if(i > 0 && nums[i] === nums[i-1]) continue;
//            for(var j = i+1; j <= len-3; j++){
//                if(j > i+1 && nums[j] === nums[j-1]) continue;
//                var left = j + 1;
//                var right = len - 1;
//                while(left < right){
//                    if(nums[i]+nums[j]+nums[left]+nums[right] > target){
//                        right--;
//                    }else if(nums[i]+nums[j]+nums[left]+nums[right] < target){
//                        left++;
//                    }else {
//                        var tempArr:number[] = [nums[i],nums[j],nums[left],nums[right]];
//                        res.push(tempArr);
//                        while(nums[left] == nums[left+1] && left < right) left++;
//                        while(nums[right] == nums[right-1] && left < right) right--;
//                        left++;
//                        right--;
//                    }
//                }
//            }
//        }
//        return res;
//     };
// }

// //leecode:Missing Number
// function missNumberDemo() {
//     var arr1 = [9,6,4,2,3,5,7,0,1]
//     console.log(missingNumber(arr1));
//     function missingNumber(nums: number[]): number {
//         var len:number = nums.length;
//         for(var i = 0; i < nums.length; i++){
//             len = len^(i^nums[i]);
//         }
//         return len;
//     };
// }

// //leecode：Valid Parentheses
// function validParenthessDemo() {
//     var s = "()[]{}(";
//     console.log(isValid(s))
//     function isValid(s: string): boolean {
//         var stack1:string[] = [];
//         for(var i = 0; i < s.length; i++){
//             console.log(stack1)
//             if(s.charAt(i) === "("){
//                 stack1.push(")")
//             }else if(s.charAt(i) === "["){
//                 stack1.push("]")
//             }else if(s.charAt(i) === "{"){
//                 stack1.push("}")
//             }else if(stack1.length === 0 || stack1.pop() !== s.charAt(i)){
//                 return false;
//             }
//         }
//         return stack1.length === 0;
//     };
// }

// //leecode:Pascal's Triangle
// function  pasDemo1(){
//     var n:number = 5
//     console.log(generate(n));
//
//     function generate(numRows: number): number[][] {
//         var res:number[][] = [];
//         var temp:number[] = []
//         for(var i = 0; i < numRows; i++){
//             temp.unshift(1);
//             for(var j = 1; j < temp.length-1; j++){
//                 temp[j] = temp[j] + temp[j+1];
//             }
//             res.push([...temp]);
//         }
//         return res;
//     };
// }

// //leecode:Reverse Bits
// function reverseBitDemo(){
//     var n = 5;
//
//     console.log(reverseBits(n));
//
//     function reverseBits(n: number): number {
//         var res:number = 0;
//         var point:number = 31;
//         while (n != 0){
//             res += (n&1) << point;
//             point--;
//             n = n >> 1;
//         }
//         return res;
//     };
// }

// //leecode:Number of 1 Bits
// function bitsDemo(){
//     var n = 5;
//     hammingWeight(5);
//     function hammingWeight(n: number): number {
//        var res:number = 0;
//        while (n != 0){
//            res += n&1;
//            n = n >>> 1;
//        }
//        return res
//     };
// }

// //leecode: Hamming Distance
// function hammingDemo1(){
//     var x=1,y=4;
//     hammingDistance(x,y);
//
//     function hammingDistance(x: number, y: number): number {
//         var temp = x ^ y;
//         var res:number = 0;
//         while (temp != 0){
//             if(temp & 1){
//                 res++
//             }
//             temp = temp >> 1;
//         }
//         return res;
//     };
// }

// //leecode:Shuffle an Array
// function shuffleArrayDemo(){
//
//
//     class Solution {
//         nums:number[];
//         original: number[];
//         constructor(nums: number[]) {
//            this.nums = nums;
//            this.original = nums;
//         }
//
//         reset(): number[] {
//             return this.original;
//         }
//
//         shuffle(): number[] {
//              for(var i = 0; i < this.nums.length; i++){
//                  this.swap(i,this.randRang(i,this.nums.length));
//              }
//              return this.nums;
//         }
//
//         swap(i:number,j:number):void{
//             var temp:number = this.nums[i];
//             this.nums[i] = this.nums[j];
//             this.nums[j] = temp;
//         }
//
//         randRang(min:number,max:number):number{
//             var temp:number = Math.floor((max-min)*Math.random()) + min;
//             return temp;
//         }
//     }
// }

// //leecode:Best Time to Buy and Sell Stock
// function stockDemo(){
//     var arr = [7,1,5,3,6,4];
//
//     function maxProfit(prices: number[]): number {
//         var res:number = 0;
//         var maxProfit:number = 0;
//         for(var i = 1; i < prices.length; i++){
//             maxProfit = Math.max(0,maxProfit += prices[i]-prices[i-1])
//             res = Math.max(res,maxProfit);
//         }
//         return res;
//     };
// }

// //leecode:Maximum Subarray
// function maxsubDemo1(){
//     var nums = [-2,1,-3,4,-1,2,1,-5,4];
//     maxSubArray(nums);
//
//     function maxSubArray(nums: number[]): number {
//         if(nums.length === 0) return 0;
//         if(nums.length === 1) return nums[0];
//         var len = nums.length;
//         var tempArr:number[] = new Array(len).fill(0);
//         tempArr[0] = nums[0];
//         var maxNum:number = nums[0];
//         for (var i = 1; i < len; i++){
//             tempArr[i] = Math.max(tempArr[i-1] + nums[i],nums[i]);
//             maxNum = Math.max(maxNum,tempArr[i]);
//         }
//         return maxNum;
//     };
// }

// //leecode:Count and Say
// function countsayDemo(){
//     var n = 4;
//     console.log(countAndSay(n));
//
//     function countAndSay(n: number): string {
//         var res:string = "1";
//         var pre:string = "1";
//         for (var i = 1; i < n; i++){
//             pre = res;
//             res = "";
//             var start:number = 0;
//             var end:number = 0;
//             while (end < pre.length){
//                 while (pre.charAt(start) === pre.charAt(end) && end < pre.length){
//                     end++
//                 }
//                 res += (String(end-start)+pre.charAt(start));
//                 start = end;
//             }
//         }
//         return res;
//     };
//
// }



// //leecode:Valid Palindrome
// function validPalindromeDemo(){
//     var str:string = "A man, a plan, a canal: Panama";
//     console.log(isPalindrome(str));
//
//     function isPalindrome(s: string): boolean {
//        var start:number = 0;
//        var end:number = s.length - 1;
//         var reg = /[a-zA-Z0-9]/;
//        while (start < end){
//            while(!reg.test(s.charAt(start))){
//                start++;
//            }
//            while(!reg.test(s.charAt(end))){
//                end--;
//            }
//            if(s.charAt(start).toLocaleLowerCase() != s.charAt(end).toLocaleLowerCase()){
//                return false;
//            }else{
//                start++;
//                end--;
//            }
//        }
//        return true;
//     };
// }

// //leecode:First Unique Character in a String
// function strDemo2(){
//     var s = "loveleetcode";
//     console.log(firstUniqChar(s));
//
//     function firstUniqChar(s: string): number {
//        var alpaArr:number[] = new Array(26).fill(0);
//        for(var i = 0; i < s.length; i++){
//            var temp:number = s.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
//            alpaArr[temp]++;
//        }
//         for(var i = 0; i < s.length; i++){
//             var temp2:number = s.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
//             if(alpaArr[temp2] === 1){
//                 return i;
//             }
//         }
//         return -1;
//     };
// }

// //leecode:Intersection of Two Arrays II
// function interDemo1(){
//     var nums1 = [4,9,5], nums2 = [9,4,9,8,4];
//
//     console.log(intersect(nums1,nums2));
//
//     function intersect(nums1: number[], nums2: number[]): number[] {
//         if(nums1.length > nums2.length){
//             intersect(nums2, nums1);
//         }
//         var resArr:number[] = [];
//         var numMap:any = {};
//         for(var v of nums1){
//             if(numMap.hasOwnProperty(v)){
//                 numMap[v]++;
//             }else{
//                 numMap[v] = 1;
//             }
//         }
//         for(var v of nums2){
//             if(numMap.hasOwnProperty(v) && numMap[v] > 0){
//                 resArr.push(v);
//                 numMap[v]--;
//             }
//         }
//         return resArr
//     };
//
// }

// //leecode: plus one
// function plusOneDemo(){
//     var digits = [9,9,9,9,9];
//     console.log(plusOne(digits));
//
//     function plusOne(digits: number[]): number[] {
//         for(var i = digits.length-1; i >= 0; i--){
//             if(digits[i] < 9){
//                 digits[i]++;
//                 return digits;
//             }
//             digits[i] = 0;
//         }
//         if(digits[0] === 0){
//             digits.unshift(1);
//         }
//         return digits
//     };
// }

// //leecode:Rotate Array
// function rotateArrayDemo(){
//     var nums = [1,2,3,4,5,6,7];
//     rotate(nums,3);
//     console.log(nums);
//     function rotate(nums: number[], k: number): void {
//         k = k % nums.length;
//        reverse(nums,0,nums.length-1);
//        reverse(nums,0,k-1);
//        reverse(nums,k,nums.length-1);
//     };
//
//     function reverse(arr:number[],start:number,end:number){
//         var temp:number = 0;
//         while(start < end){
//             temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//             start++
//             end--
//         }
//     }
// }

// //leecode: Valid Sudoku
// function sudoDemo1(){
//     var board =
//             [["8","3",".",".","7",".",".",".","."]
//             ,["6",".",".","1","9","5",".",".","."]
//             ,[".","9","8",".",".",".",".","6","."]
//             ,["8",".",".",".","6",".",".",".","3"]
//             ,["4",".",".","8",".","3",".",".","1"]
//             ,["7",".",".",".","2",".",".",".","6"]
//             ,[".","6",".",".",".",".","2","8","."]
//             ,[".",".",".","4","1","9",".",".","5"]
//             ,[".",".",".",".","8",".",".","7","9"]]
//     console.log(isValidSudoku(board));
//     function isValidSudoku(board: string[][]): boolean {
//          var tempSet = new Set();
//          for(var i = 0; i < 9; i++){
//              for(var j = 0; j < 9; j++){
//                  if(board[i][j] !== "."){
//                      var tempStr = "(" + board[i][j] + ")";
//                      if(tempSet.has(i+tempStr) ||
//                          tempSet.has(tempStr+j) ||
//                          tempSet.has(Math.floor(i/3) + tempStr + Math.floor(j/3))){
//                          return false;
//                      }else{
//                          tempSet.add(i+tempStr)
//                          tempSet.add(tempStr+j)
//                          tempSet.add(Math.floor(i/3) + tempStr + Math.floor(j/3))
//                      }
//                  }
//              }
//          }
//          return true;
//     };
// }

// //leecode:Rotate Image
// function rotateImage(){
//     var matrix = [[1,2,3],[4,5,6],[7,8,9]]
//     rotate(matrix);
//     console.log(matrix);
//     function rotate(matrix: number[][]): void {
//         if(matrix == null || matrix.length < 1) return;
//         for(var i = 0; i < Math.floor(matrix.length/2); i++){
//             var temp:number[] = matrix[i];
//             matrix[i] = matrix[matrix.length-1-i];
//             matrix[matrix.length-1-i] = temp;
//         }
//         for(var i = 0; i < matrix.length; i++){
//            for(var j = 0; j < i; j++){
//                var tempNum:number = matrix[i][j];
//                matrix[i][j] = matrix[j][i];
//                matrix[j][i] = tempNum;
//            }
//         }
//     };
// }

// //leecode: Longest Consecutive Sequence
// function longestSeq1(){
//     var nums = [0,3,7,2,5,8,4,6,0,1];
//
//     console.log(longestConsecutive(nums));
//
//     function longestConsecutive(nums: number[]): number {
//
//     };
//
// }

// //leecode:First Missing Positive
// function firstMissionDemo1() {
//     var nums = [7,8,9,11,12];
//     console.log(firstMissingPositive2(nums));
//
//     function firstMissingPositive(nums: number[]): number {
//         var n:number = nums.length;
//         for(var i = 0; i < n; i++){
//             while(nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i]-1]){
//                 var temp:number = nums[i];
//                 nums[i] = nums[nums[i]-1];
//                 nums[nums[i]-1] = temp;
//             }
//         }
//         for(var i = 0; i < n; i++){
//             if(nums[i] !== i+1){
//                 return i+1;
//             }
//         }
//         return n + 1;
//     };
//
//     function firstMissingPositive2(nums: number[]): number {
//         if(nums === null || nums.length === 0) return 0;
//         var n:number = nums.length;
//         for(var i = 0; i < n; i++){
//             if(nums[i] <= 0){
//                 nums[i] = n + 1;
//             }
//         }
//         for(var i = 0; i < n; i++){
//             var temp:number = Math.abs(nums[i]);
//             if(temp <= n){
//                 nums[temp-1] = -Math.abs(nums[temp-1])
//             }
//         }
//         for(var i = 0; i < n; i++){
//             if(nums[i] > 0){
//                 return i+1;
//             }
//         }
//         return n + 1;
//     };
//
// }

// //leecode:  Container With Most Water
//
// function waterDemo1() {
//     var height = [1,8,6,2,5,4,8,3,7];
//     console.log(maxArea(height));
//
//     function maxArea(height: number[]): number {
//         var res:number = 0;
//         var left:number = 0;
//         var right:number = height.length - 1;
//         while(left < right){
//             var temp = Math.min(height[left],height[right]) * (right - left);
//             res = Math.max(res,temp);
//             if(height[left] < height[right]){
//                 left++;
//             }else{
//                 right--;
//             }
//         }
//         return res;
//     };
// }

// //leecode:4Sum II
// function fourSumDemo1() {
//     var A = [ 1, 2],
//     B = [-2,-1],
//     C = [-1, 2],
//     D = [ 0, 2];
//     console.log(fourSumCount(A,B,C,D));
//
//     function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
//         var numMap:any = {};
//         var res:number = 0;
//         for(var i = 0; i < C.length; i++){
//             for(var j = 0; j < D.length; j++){
//                 var temp:number = C[i] + D[j];
//                 if(numMap.hasOwnProperty(temp)){
//                     numMap[temp]++;
//                 }else{
//                     numMap[temp] = 1;
//                 }
//             }
//         }
//
//         for(var i = 0; i < A.length; i++){
//             for(var j = 0; j < B.length; j++){
//                 var temp2:number = -(A[i] + B[j]);
//                 if(numMap.hasOwnProperty(temp2)){
//                     res += numMap[temp2];
//                 }
//             }
//         }
//         return res;
//     };
// }

// //leecode:Spiral Matrix
// function spiralDemo1() {
//     var matrix = [[1,2,3],[4,5,6],[7,8,9]];
//     spiralOrder(matrix);
//
//     function spiralOrder(matrix: number[][]): number[] {
//         var resArr:number[] = [];
//         if(matrix.length < 1 ) return resArr;
//         var top:number = 0;
//         var left:number = 0;
//         var bottom:number = matrix.length-1;
//         var right:number = matrix[0].length-1;
//         var totalNum:number = matrix.length * matrix[0].length;
//         while (totalNum > 0){
//             for(var i = left; i <= right && top<=bottom; i++){
//                 resArr.push(matrix[top][i]);
//                 totalNum--;
//             }
//             top++;
//
//             for(var i = top; i <= bottom && left<=right; i++){
//                 resArr.push(matrix[i][right]);
//                 totalNum--;
//             }
//             right--;
//
//             for(var i = right; i >= left && top<=bottom; i--){
//                 resArr.push(matrix[bottom][i]);
//                 totalNum--;
//             }
//             bottom--;
//
//             for(var i = bottom; i >= top && left<=right; i--){
//                 resArr.push(matrix[i][left]);
//                 totalNum--;
//             }
//             left++;
//         }
//         // console.log(resArr);
//         return resArr;
//
//     };
// }

// //leecode:Product of Array Except Self
// function productDemo1() {
//     var arr1 = [1,2,3,4];
//     console.log(productExceptSelf(arr1))
//
//     function productExceptSelf(nums: number[]): number[] {
//         var resArr:number[] = [];
//         var leftArr:number[] = [];
//         leftArr[0] = 1;
//         for(var i = 1; i < nums.length; i++){
//             leftArr[i] = leftArr[i-1] * nums[i-1];
//         }
//         var rightTotal:number = 1;
//         for(var i = nums.length-1; i >= 0; i--){
//             resArr[i] = leftArr[i]*rightTotal;
//             rightTotal *= nums[i];
//         }
//         return resArr;
//     };
//
// }

// //leecode:Insert Delete GetRandom O(1)
// function getRandomDemo1(){
//     class RandomizedSet {
//         list:number[];
//         map:any;
//         constructor() {
//            this.list = [];
//            this.map = {};
//         }
//
//         insert(val: number): boolean {
//            if(this.map.hasOwnProperty(val)) return false;
//            this.map[val] = this.list.length;
//            this.list.push(val);
//            return true;
//         }
//
//         remove(val: number): boolean {
//            if(!this.map.hasOwnProperty(val)) return false;
//            var lastElement:number = this.list[this.list.length-1];
//            var idx:number = this.map[val];
//            this.list[idx] = lastElement;
//            this.list.slice(this.list.length-1,1);
//            delete this.map[val];
//            return true;
//         }
//
//         getRandom(): number {
//             var randomIndex:number = Math.floor(Math.floor(this.list.length-1) * Math.random())
//             return this.list[randomIndex];
//         }
//     }
//
//     var obj = new RandomizedSet();
//
//     var param1 = obj.insert(1);
//     var param3 = obj.insert(2);
//     var param2 = obj.remove(2);
//     var param4 = obj.getRandom();
//     console.log(param1,param2,param4);
// }

// //leecode:jump game 2
// function jumpdemo2(){
//     var nums = [2,3,1,1,4];
//     console.log(jump2(nums));
//     function jump(nums: number[]): number {
//         var end:number = 0;
//         var maxPosition:number = 0;
//         var resCount:number = 0;
//         for(var  i = 0; i < nums.length-1; i++){
//             maxPosition = Math.max(maxPosition, i + nums[i]);
//             if(i === end){
//                 end = maxPosition;
//                 resCount++;
//             }
//         }
//         return resCount;
//     };
//
//     function jump2(nums: number[]): number {
//         var position:number = nums.length - 1;
//         var resCount:number = 0;
//         while(position > 0){
//             for(var i = 0; i < position; i++){
//                 if((nums[i] + i) >= position){
//                     position = i;
//                     resCount++;
//                     break;
//                 }
//             }
//         }
//         return resCount;
//     };
// }

// //leecode:Set Matrix Zeroes
// function setZeroDemo(){
//     var matrix = [[1,1,1],[1,0,1],[1,1,1]];
//     setZeroes(matrix);
//     console.log(matrix);
//
//     function setZeroes(matrix: number[][]): void {
//         var firstRowHaveZero = false;
//         var firstColumnHaveZero = false;
//         var rowLength = matrix.length;
//         var columnLength = matrix[0].length;
//
//         for(var i = 0; i < rowLength; i++){
//             if(matrix[i][0] === 0){
//                 firstColumnHaveZero = true;
//             }
//         }
//
//         for(var i = 0; i < columnLength; i++){
//             if(matrix[0][i] === 0){
//                 firstRowHaveZero = true;
//             }
//         }
//
//         for(var i = 1; i < rowLength; i++){
//            for(var j = 1; j < columnLength; j++){
//                if(matrix[i][j] === 0){
//                    matrix[i][0] = 0;
//                    matrix[0][j] = 0;
//                }
//            }
//         }
//
//         for(var i = 1; i < rowLength; i++){
//             for(var j = 1; j < columnLength; j++){
//                 if(matrix[i][0] === 0 || matrix[0][j] === 0){
//                     matrix[i][j] = 0;
//                 }
//             }
//         }
//
//         if(firstColumnHaveZero){
//             for(var i = 0; i < rowLength; i++){
//                 matrix[i][0] = 0;
//             }
//         }
//
//         if(firstRowHaveZero){
//             for(var i = 0; i < columnLength; i++){
//                 matrix[0][i] = 0;
//             }
//         }
//     };
// }



// //leecode:Sqrt(x)
// function sqrtDemo(){
//     console.log(mySqrt(8));
//     function mySqrt(x: number): number {
//         var start:number = 0
//         var end:number = Math.floor(x/2)+1;
//         while(start < end){
//             var mid = start + Math.floor((end-start+1)/2);
//             if(mid*mid > x){
//                 end = mid -1;
//             }else{
//                 start = mid;
//             }
//         }
//         return start;
//     };
// }

// //leecode:Pow(x, n)
// function powDemo(){
//     console.log(myPow(2.00000,10));
//     function myPow(x: number, n: number): number {
//         if(n === 0 ) return 1;
//         if(n < 0){
//             n = -n;
//             x = 1/x;
//         }
//         return n%2 === 0?myPow(x*x,Math.floor(n/2)):x*myPow(x*x,Math.floor(n/2));
//     };
// }

// //leecode: Gas Station
// function gasDemo(){
//     var gas  = [3,3,4]
//     var cost = [3,4,4]
//     console.log(canCompleteCircuit(gas,cost));
//     function canCompleteCircuit(gas: number[], cost: number[]): number {
//         var minSpare = Number.MAX_SAFE_INTEGER;
//         var spare = 0;
//         var index = 0;
//         for(var i = 0; i < gas.length; i++){
//             spare += (gas[i]-cost[i]);
//             if(spare < minSpare){
//                 minSpare = spare;
//                 index = i;
//             }
//         }
//         console.log(spare,index)
//         return spare < 0? -1: (index+1)%gas.length
//     };
// }

// //leecode:Longest Increasing Subsequence
// function LongestIncreasingSubsequenceDemo(){
//     var arr1 = [10,9,2,5,3,7,101,18];
//
//     console.log(lengthOfLIS2(arr1));
//     function lengthOfLIS1(nums: number[]): number {
//         var tempArr:number[] = new Array(nums.length).fill(1);
//         for(var i=0;i<nums.length;i++){
//             for(var j=0;j<i;j++){
//                 if(nums[j] < nums[i]){
//                     tempArr[i] = Math.max(tempArr[i],tempArr[j]+1);
//                 }
//             }
//         }
//
//         tempArr.sort((a,b)=>a-b);
//         // console.log(tempArr);
//         return tempArr[nums.length-1];
//     };
//
//     function lengthOfLIS2(nums: number[]): number {
//         var resArr:number[] = [];
//         var count:number = 0;
//         for(var num of nums){
//             var i = 0;
//             var j = count;
//             while(i < j){
//                 var m = Math.floor((i+j)/2);
//                 if(resArr[m] < num){
//                     i = m + 1;
//                 }else{
//                     j = m;
//                 }
//             }
//             resArr[i] = num;
//             if(j === count) count++;
//         }
//         return count;
//     };
// }

// //leecode: Majority Element
// function majorDemo(){
//     var arr1 = [2,2,1,1,1,2,2];
//     console.log(majorityElement(arr1));
//
//     function majorityElement(nums: number[]): number {
//         var temp:number = nums[0];
//         var count:number = 1;
//         for(var i = 1; i < nums.length; i++){
//             if(nums[i] === temp){
//                 count++;
//             }else if(count === 0){
//                 temp = nums[i];
//                 count++;
//             }else{
//                 count--;
//             }
//         }
//         return temp;
//     };
// }

// //leecode: Evaluate Reverse Polish Notation
// function evalDemo1(){
//     var arr1 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
//     evalRPN(arr1);
//
//     function evalRPN(tokens: string[]): number {
//         var stockArr:string[] = [];
//         var a,b:number;
//         for(var v of tokens){
//             if(v === "+"){
//                 a = parseInt(stockArr.shift() as string);
//                 b = parseInt(stockArr.shift() as string);
//                 stockArr.unshift(String(a+b));
//             }else if(v === "-"){
//                 a = parseInt(stockArr.shift() as string);
//                 b = parseInt(stockArr.shift() as string);
//                 stockArr.unshift(String(b-a));
//             }else if(v === "*"){
//                 a = parseInt(stockArr.shift() as string);
//                 b = parseInt(stockArr.shift() as string);
//                 stockArr.unshift(String(b*a));
//             }else if(v === "/"){
//                 a = parseInt(stockArr.shift() as string);
//                 b = parseInt(stockArr.shift() as string);
//                 stockArr.unshift(String(b/a));
//             }else{
//                 stockArr.unshift(v);
//             }
//         }
//         console.log(stockArr);
//         return parseInt(stockArr[0]);
//     };
// }

// //leecode
// function addDemo1(){
//     console.log(getSum(-2,9));
//     function getSum(a: number, b: number): number {
//         var c:number;
//         while (b != 0){
//             c = (a&b);
//             a = a^b;
//             b= (c)<<1;
//         }
//         return a;
//     };
// }


// //leecode 96
// function getNumsDemo(){
//     console.log(numTrees(3));
//     function numTrees(n: number): number {
//         var resArr:number[] = new Array(n+1).fill(0);
//         resArr[0] = 1;
//         resArr[1] = 1;
//         for(var i=2;i<=n;i++){
//             for(var j=1;j<=i;j++){
//                 resArr[i] += resArr[j-1]*resArr[i-j];
//             }
//         }
//         return resArr[n];
//     };
// }

// //leecode 64
// function smallPathDemo1(){
//     var grid = [[1,2,3],[4,5,6]];
//     var res = minPathSum(grid);
//     console.log(res);
//     function minPathSum(grid: number[][]): number {
//        var m:number = grid.length;
//        var n:number = grid[0].length;
//        for(var i=1;i<m;i++){
//            grid[i][0] += grid[i-1][0];
//        }
//         for(var i=1;i<n;i++){
//             grid[0][i] += grid[0][i-1];
//         }
//         for(var i=1;i<m;i++){
//             for(var j=1;j<n;j++){
//                 grid[i][j] += Math.min(grid[i-1][j],grid[i][j-1]);
//             }
//         }
//         return grid[m-1][n-1];
//     };
// }


// //leecode
// function uniquePathDemo(){
//     var obstacleGrid = [[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]]
//     var res = uniquePathsWithObstacles2(obstacleGrid);
//     console.log(res);
//
//     function uniquePathsWithObstacles2(obstacleGrid: number[][]): number {
//         if(obstacleGrid.length == 0 ) return 0;
//         var len:number = obstacleGrid[0].length;
//         var tempArr:number[] = new Array(len).fill(0);
//         tempArr[0] = 1;
//         for(var item of obstacleGrid){
//             for(var j=0;j<len;j++){
//                 if(item[j] == 1){
//                     tempArr[j] = 0;
//                 }else if(j > 0){
//                     tempArr[j] += tempArr[j-1];
//                 }
//             }
//         }
//         return tempArr[len-1];
//     };
//
//     function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
//         if(obstacleGrid.length == 0 ) return 0;
//         if(obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1] == 1) return 0;
//         var res = helper(obstacleGrid,0,0);
//         console.log(res)
//         return res;
//     };
//
//     function helper(obstacleGrid: number[][],i:number,j:number):number{
//         if(i>obstacleGrid.length-1 || j>obstacleGrid[0].length-1 || i < 0 || j < 0) return 0;
//         if(i == obstacleGrid.length-1 && j == obstacleGrid[0].length-1){
//             return 1;
//         }
//         if(obstacleGrid[i][j] == 0){
//             obstacleGrid[i][j] = 1;
//             var l1 = helper(obstacleGrid,i+1,j);
//             var l2 = helper(obstacleGrid,i,j+1);
//             obstacleGrid[i][j] = 0;
//             return l1+l2;
//         }
//         return 0;
//     }
// }

// //leecode
// function coinsDemo(){
//     var coins = [186,419,83,408], amount = 6249;
//     console.log(coinChange(coins,amount));
//     function coinChange(coins: number[], amount: number): number {
//         if(coins.length == 0) return -1;
//         var memo:number[] = new Array(amount+1);
//         memo[0] = 0;
//         for(var i=1;i<=amount;i++){
//             var min = Number.MAX_SAFE_INTEGER;
//             for(var j=0;j<coins.length;j++){
//                 if(i-coins[j] >= 0 && memo[i-coins[j]] < min){
//                     min = memo[i-coins[j]] + 1;
//                 }
//             }
//             memo[i] = min
//         }
//         return memo[amount] == Number.MAX_SAFE_INTEGER? -1:memo[amount];
//     };
//
//
// }



// //leecode
// function letterDemo() {
//     var digits:string = "23";
//     var res = letterCombinations2(digits);
//     console.log(res);
//
//
//     function letterCombinations2(digits: string): string[] {
//         var mapArr:string[] = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
//         var res:string[] = [];
//         if(digits.length == 0) return res;
//         res.push("");
//         for(var i=0;i<digits.length;i++){
//             var strArr:string[] = mapArr[parseInt(digits.charAt(i))].split("");
//             while(res[0].length == i){
//                 var tempStr:string = res.shift() as string;
//                 for(var value of strArr){
//                     res.push(tempStr+value);
//                 }
//             }
//         }
//         return res;
//     };
//
//
//     function letterCombinations(digits: string): string[] {
//         var mapArr:string[] = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
//         var res:string[] = [];
//         if(digits.length == 0) return res;
//         helper(digits,res,"",0,mapArr);
//         return res;
//     };
//
//     function helper(digits: string,res:string[],str:string,num:number,mapArr:string[]) {
//          if(num > digits.length) return;
//          if(str.length == digits.length){
//              res.push(str);
//              return;
//          }
//          var strArr:string[] = mapArr[parseInt(digits.charAt(num))].split("");
//          for(var i=0;i<strArr.length;i++){
//             helper(digits,res,str+strArr[i],num+1,mapArr);
//           }
//     }
// }


// //leecode
// function generateDemo() {
//
//     generateParenthesis(3);
//
//     function generateParenthesis(n: number): string[] {
//         var res:string[] = [];
//         var str:string = "";
//         helper(n,res,str,0,0);
//         console.log(res);
//         return res;
//     };
//
//     function helper(n:number,res:string[],str:string,l_number:number,r_number:number) {
//         if(str.length == n*2){
//             res.push(str);
//             return;
//         }
//         if(l_number < n){
//             helper(n,res,str+"(",l_number+1,r_number);
//         }
//         if(r_number < l_number){
//             helper(n,res,str+")",l_number,r_number+1);
//         }
//     }
// }


// //leecode
// function searchDemo2() {
//     var matrix:number[][] = [
//         [1,   4,  7, 11, 15],
//         [2,   5,  8, 12, 19],
//         [3,   6,  9, 16, 22],
//         [10, 13, 14, 17, 24],
//         [18, 21, 23, 26, 30]
//     ];
//
//     console.log(searchMatrix(matrix,20));
//
//     function searchMatrix(matrix: number[][], target: number): boolean {
//         if(matrix.length == 0 || matrix[0].length == 0) return false;
//         var row:number = 0;
//         var column:number = matrix[0].length-1;
//         while(row <= matrix.length-1 && column >= 0){
//             if(target == matrix[row][column]) return true;
//             if(target > matrix[row][column]){
//                 row++;
//             }else{
//                 column--;
//             }
//         }
//         return false;
//     };
// }

// //leecode
// function findPeakElementDemo(){
//     var nums = [1,2,3,1];
//
//     return helper(nums,0,nums.length-1)
//
//     function helper(nums: number[],start:number,end:number){
//
//         while(start < end){
//             var mid1:number = Math.floor((start+end)/2);
//             var mid2:number = mid1+1;
//             console.log(mid1,mid2)
//             if(nums[mid1] < nums[mid2]){
//                 start = mid2;
//             }else{
//                 end = mid1;
//             }
//         }
//         return start;
//     }
//
// }


// function quickSortDemo(){
//     var arr1 = [45,32,11,2,67,12,49,90,17,19];
//     quickSort(arr1,0,arr1.length-1);
//     console.log(arr1);
//
//     function quickSort(arrs:number[],start:number,end:number) {
//
//         if(start > end) return;
//        var i:number = start;
//        var j:number = end;
//        var pivot:number = arrs[start];
//        while(i != j){
//            while(arrs[j] >= pivot && j > i) j--;
//            while(arrs[i] <= pivot && i < j) i++;
//            if(i < j){
//                swaper(i,j,arrs);
//            }
//
//        }
//        arrs[start] = arrs[i];
//        arrs[i] = pivot;
//        quickSort(arrs,start,i-1);
//        quickSort(arrs,i+1,end);
//        return;
//     }
//
//     function swaper(i:number,j:number,arr:number[]) {
//         var temp:number = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }

// function demo1():number{
//     var num1 = 123456;
//     var reverseNum1 = reverseNum(num1);
//
//     if(reverseNum1 < num1) return 0;
//     for(var i=1; i < 10; i++){
//         if(num1 * i == reverseNum1){
//             return i;
//         }
//     }
//     return 0;
//
//     function reverseNum(a:number){
//         var temp=0;
//         while(a/10 != 0){
//             temp = temp*10 + Math.floor(a%10)
//             a= Math.floor(a/10);
//         }
//         return temp;
//     }
// }
//
//
// //leecode
// function numberdemo1() {
//     let res:number = titleToNumber("ZY");
//     console.log(res);
//
//     function titleToNumber(s: string): number {
//         let res:number = 0;
//         for(let i = 0; i < s.length; i++){
//             res = res*26 + (s.charAt(i).charCodeAt(0) - "A".charCodeAt(0) + 1);
//         }
//         return res;
//     };
// }

// //leecode 62
// function uniquePathsDemo(){
//     var num = 0;
//     uniquePaths(10,7);
//     console.log(num)
//     uniquePaths2(10,7);
//     function uniquePaths2(m: number, n: number): number {
//         let temp:number[][] = new Array();
//         for(var i=0;i<m;i++){
//             temp.push((new Array(n)).fill(0));
//         }
//         for(let i = 0; i < m; i++){
//             temp[i][0] = 1;
//         }
//         for(let i = 0; i < n; i++){
//             temp[0][i] = 1;
//         }
//         for(let i = 1; i < m; i++){
//             for(let j = 1; j < n; j++){
//                 temp[i][j] = temp[i-1][j] + temp[i][j-1];
//             }
//         }
//         console.log(temp[m-1][n-1])
//         return temp[m-1][n-1];
//     };
//
//     function uniquePaths(m: number, n: number) {
//         let sum:number = 0;
//         let haveUsed: boolean[][] = new Array();
//         for(var i=0;i<m+1;i++){
//             haveUsed.push((new Array(n+1)).fill(false));
//         }
//         let res = helper(m,n,haveUsed);
//         console.log(res);
//
//     };
//
//     function helper(m: number, n: number, haveUsed: boolean[][]){
//         // console.log(m,n,sum)
//         if( m < 1 ||  n < 1) return 0;
//         if(haveUsed[m][n]) return 0;
//         if(m == 1 && n == 1){
//             return 1;
//         }
//         haveUsed[m][n] = true;
//         let l1:number = helper(m-1,n,haveUsed);
//         let l2:number = helper(m,n-1,haveUsed);
//         haveUsed[m][n] = false;
//         return l1+l2;
//     }
// }

// //leecode
// function consecutiveCharDemo() {
//     maxPower("hooraaaaaaaaaaay");
//     function maxPower(s: string): number {
//         if(s == null || s.length == 0) return 0;
//        let max:number = 0;
//        let j:number = 1;
//        for(let i = 1; i < s.length; i++){
//            if(s.charAt(i-1) == s.charAt(i)){
//                j++;
//                max = Math.max(max,j);
//            }else{
//                j = 1;
//            }
//        }
//        console.log(max)
//        return max;
//     };
// }
//
// //leecode
// function nextPermutationDemo() {
//     nextPermutation([3,2,1])
//
//     function nextPermutation(nums: number[]): void {
//        if(nums.length <= 1) return;
//        let i = nums.length-2;
//        let j = nums.length-1;
//        let k = nums.length-1;
//        while (i >= 0 && nums[i] >= nums[j]){
//            i--;
//            j--;
//        }
//        if(i >= 0){
//            while (nums[k] <= nums[i]) k--;
//            swap(nums,i,k);
//        }
//
//        reverseArr(nums,j,nums.length-1);
//        console.log(nums)
//     };
//
//     function swap(nums:number[],start:number,end:number):void {
//       let temp:number = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;
//     }
//
//     function reverseArr(nums:number[],start:number,end:number) {
//        if(start > end) return;
//        for(let i = start; i < Math.floor(start+end)/2; i++){
//            swap(nums,i,start+end-i);
//        }
//     }
// }
//
//
// function longestCommonPrefixDemo() {
//     var res:string = longestCommonPrefix(["flower","flow","flight"])
//     console.log(res);
//     function longestCommonPrefix(strs: string[]): string {
//         if(strs == null || strs.length == 0) return "";
//        let tempStr:string = strs[0];
//        for(let i=1; i < strs.length; i++){
//            while(strs[i].indexOf(tempStr) !== 0){
//                tempStr = tempStr.slice(0,tempStr.length-1);
//            }
//        }
//        return tempStr;
//     };
// }
//
// //leecode47
// function permutationsDemo(){
//     permuteUnique([1,1,3]);
//     function permuteUnique(nums: number[]): number[][] {
//         if(nums == null) return [];
//         if(nums.length == 1) return [nums]
//         let list:number[] = [];
//         let res:number[][] = [];
//         let used:boolean[] = new Array(nums.length).fill(false);
//         nums.sort((a,b)=>a-b);
//        helper(nums,list,res,used);
//        console.log(res)
//         return res
//     };
//
//     function helper(nums:number[],list:number[],res:number[][],used:boolean[]) {
//
//         if(list.length == nums.length){
//             let newarr = Array.from(list);
//             res.push(newarr);
//             return;
//         }
//         for(let i=0;i<nums.length;i++){
//             if(used[i]) continue;
//             if(i > 0 && nums[i-1] == nums[i] && !used[i-1]) continue
//             used[i] = true;
//             list.push(nums[i])
//             helper(nums,list,res,used);
//             list.pop()
//             used[i] = false;
//         }
//
//     }
// }
//
// //leecode56
// function mergeIntervalsDemo(){
//     merge([[1,4],[4,5]])
//     function merge(intervals: number[][]): number[][] {
//         if(intervals.length < 2) return intervals;
//         intervals.sort(function (arr1,arr2) {
//             return arr1[0]-arr2[0];
//         })
//         let res:number[][] = [];
//         let start:number = intervals[0][0]
//         let end:number = intervals[0][1]
//         for(let val of intervals){
//             if(val[0] <= end){
//                 end = Math.max(val[1],end);
//             }else {
//                 res.push([start,end]);
//                 start = val[0];
//                 end = val[1];
//             }
//         }
//         res.push([start,end])
//         console.log(res);
//         return res
//     };
// }
//
//
// //leecode79
// function wordSearch(){
//     var res = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED")
//     console.log(res)
//     function exist(board: string[][], word: string): boolean {
//         for(var j=0;j<board.length;j++){
//             for(var i=0;i<board[0].length;i++){
//                 if(helper(board,j,i,word,0)){
//                     return true;
//                 }
//             }
//         }
//         return false;
//     };
//
//     function helper(board: string[][],j:number,i:number,word:string,len:number):boolean {
//          if(len === word.length) return true;
//          if(j<0 || i<0 || j > board.length-1 || i > board[0].length-1) return false;
//          if(board[j][i] !==word.charAt(len)) return false;
//          board[j][i] = "*";
//          let res:boolean =  helper(board,j+1,i,word,len+1)||
//              helper(board,j,i+1,word,len+1)||
//              helper(board,j-1,i,word,len+1)||
//              helper(board,j,i-1,word,len+1);
//          board[j][i] = word.charAt(len);
//          return res;
//     }
//
// }
//
// function strDemo1(){
//     let low:number = 0;
//     let reslength:number = 0;
//     longestPalindrome("cbbd");
//     function longestPalindrome(s: string): string {
//         if(s.length < 2) return s;
//         for(let i = 0; i < s.length-1; i++){
//             helper(s,i,i);
//             helper(s,i,i+1);
//         }
//
//         console.log(s.substr(low,reslength))
//         return s.substr(low,reslength)
//     };
//
//     function helper(s:string,i:number,j:number){
//         while(i >=0 && j <= s.length-1 && s.charAt(i) == s.charAt(j)){
//             i--;
//             j++;
//         }
//         if(j-i-1> reslength){
//             low = i+1;
//             reslength = j-i-1;
//         }
//
//     }
// }
//
//
//
// function cobinationDemo1(){
//     combinationSum2([10,1,2,7,6,1,5],8)
//
//     function combinationSum2(candidates: number[], target: number): number[][] {
//         candidates.sort();
//         let res:number[][] = [];
//         let link:number[] = [];
//         helper(candidates,res,link,0,target);
//         console.log(res)
//         return res;
//     };
//
//     function helper(canArr:number[],res:number[][],link:number[],startIndex:number,sum:number){
//         if(sum == 0){
//
//             let newLinkArr:number[] = Array.from(link);
//             console.log(newLinkArr);
//             res.push(newLinkArr);
//             return;
//         }
//         if(sum < 0) return;
//         for(let i = startIndex;i<canArr.length;i++){
//             if(i > startIndex && canArr[i] == canArr[i-1]) continue;
//
//
//             link.push(canArr[i])
//             helper(canArr,res,link,i+1,sum-canArr[i]);
//             link.pop();
//         }
//     }
// }
//
//
// function strdemo1() {
//     let res = isAnagram("anagram","nagaram");
//     console.log(res);
//    function isAnagram(str1:string,str2:string) {
//        let ailpha:number[] = new Array(26);
//        ailpha.fill(0)
//        for(let i=0;i<str1.length;i++){
//            ailpha[str1.charAt(i).charCodeAt(0)-'a'.charCodeAt(0)]++;
//        }
//        for(let i=0;i<str2.length;i++){
//            ailpha[str2.charAt(i).charCodeAt(0)-'a'.charCodeAt(0)]--;
//        }
//
//        for(let i of ailpha){
//            if(i != 0){
//                return false;
//            }
//        }
//        return true;
//    }
// }
//
//
// function sumdemo(){
//     let res:number[][] = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);
//     console.log(res);
//     function threeSum(nums: number[]): number[][] {
//         nums.sort((a,b)=> a-b);
//         console.log(nums)
//         let low:number = 0;
//         let high:number = nums.length-1;
//         let sum:number = 0;
//         let resArr:number[][] = [];
//         for(let i=0;i<nums.length-2;i++){
//             if(i === 0 || (i>0 && nums[i]  !== nums[i-1])){
//                 low = i+1;
//                 high = nums.length-1;
//                 sum = 0 - nums[i];
//                 while(low < high){
//                     if(sum === nums[low]+nums[high]){
//                         resArr.push([nums[low],nums[high],nums[i]]);
//                         while(low < high && nums[low]===nums[low+1]) low++;
//                         while(low < high && nums[high] === nums[high-1]) high--;
//                         low++;high--;
//                     }else if(sum > nums[low]+nums[high]){
//                         low++;
//                     }else{
//                         high--;
//                     }
//
//                 }
//             }
//         }
//         return resArr;
//     };
// }
//
//
// function search(nums: number[], target: number): number {
//
//     let low:number = 0;
//     let high:number = nums.length-1;
//     while(low < high){
//         let mid:number = Math.floor((low + high)/2)
//         if(nums[mid] > nums[high]){
//             low = mid +1
//         }else{
//             high = mid
//         }
//     }
//     let row:number = low;
//     console.log(row)
//     low=0;
//     high=nums.length-1;
//     while(low<=high){
//         let currMid = Math.floor((low+high)/2);
//         let realMid = (row+currMid)%(nums.length);
//         if(target == nums[realMid]){
//             return realMid;
//         }
//         if(target > nums[realMid]){
//             low = currMid+1;
//         }else if(target < nums[realMid]){
//             high = currMid-1;
//
//         }
//     }
//     return -1;
//
// };
//
// //希尔排序
// function shellSort(){
//     let arr1:number[] = [34,66,71,22,35,98,21,27,11,9,3,68,40];
//     let len:number = arr1.length;
//     for(let gap = Math.floor(len/2);gap>0;gap=Math.floor(gap/2)){
//         for(let i=gap;i<len;i++){
//             let j:number = i-gap;
//             let current:number = arr1[i];
//             while (j>= 0 && current < arr1[j]){
//                 arr1[j+gap] = arr1[j];
//                 j = j-gap;
//             }
//             arr1[j+gap] = current;
//         }
//     }
//     console.log(arr1)
// }
//
// //归并排序
// function mergeSort(){
//     let arr1:number[] = [34,66,71,22,35,98,21,27,11,9,3,68,40];
//
//     let res = slicefn(arr1);
//     console.log(res);
//
//     function slicefn(arr:number[]):number[]{
//         if(arr.length <2) return arr;
//         let mid:number = Math.floor(arr.length/2);
//         let leftArr:number[] = arr.slice(0,mid);
//         let rightArr:number[] = arr.slice(mid)
//         return mergeFn(slicefn(leftArr),slicefn(rightArr))
//     }
//
//     function mergeFn(arr1:number[],arr2:number[]):number[]{
//         let res:number[] = [];
//         while(arr1.length > 0 && arr2.length > 0){
//             if(arr1[0] > arr2[0]){
//                 res.push(arr2.shift() as number);
//             }else{
//                 res.push(arr1.shift() as number);
//             }
//         }
//         while (arr1.length > 0){
//             res.push(arr1.shift() as number);
//         }
//         while (arr2.length > 0){
//             res.push(arr2.shift() as number);
//         }
//
//         return res;
//     }
// }
//
// //插入排序
// function insertSort(){
//     let arr1:number[] = [34,66,71,22,35,98,21,27,11,9,3,68,40];
//     let pre:number = 0;
//     let current: number = 0;
//
//     for(let i:number = 1; i < arr1.length; i++){
//         current = arr1[i];
//         pre = i -1;
//         while (current < arr1[pre] && pre >= 0){
//             arr1[pre+1] = arr1[pre]
//             pre--;
//         }
//         arr1[pre+1] = current;
//     }
//
//     console.log(arr1)
//
// }
//
// //大顶堆demo
// function maxHeapDemo(){
//   let arr1 = [34,66,71,22,35,98,21,27,11,9,3,68,40];
//
//   var arr2= sort(arr1,arr1.length);
//   console.log(arr2);
//
//   function buildHeap(arr:number[],heapSize:number){
//
//       for(let i = Math.floor((heapSize)/2-1);i>=0;i--){
//           heapify(arr,i,heapSize);
//       }
//   }
//
//   function heapify(arr:number[],i:number,heapSize:number){
//      var left = 2*i+1;
//      var right = 2*i+2;
//      var large = i;
//      if(left < heapSize && arr[left] > arr[large]){
//          large = left;
//      }
//      if(right < heapSize && arr[right] > arr[large]){
//          large = right;
//      }
//      if(large !== i){
//          swap(arr,i,large);
//          heapify(arr,large,heapSize);
//      }
//   }
//
//   function swap(arr:number[],i:number,j:number){
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//   }
//
//   function sort(arr:number[],heapSize:number){
//       buildHeap(arr,heapSize);
//
//       var len = arr.length-1;
//      for(let i = heapSize-1;i>0;i--){
//          swap(arr,0,i);
//          heapify(arr,0,i);
//      }
//      return arr;
//   }
// }
// //基数排序
// function radixSortDemo(){
//     let arr1 = [34,66,71,22,35,98,21,27,11,9,3,68,40,999,453,334];
//     var arr2= radixSort(arr1,3);
//     console.log(arr2);
//     function radixSort(arr:number[],maxDigit:number){
//         var count:number[][] = [];
//         var digit_before = 10;
//         var digit_after = 1;
//         for(var i=0;i<maxDigit;i++,digit_after *= 10,digit_before *= 10){
//             for(var j=0;j<arr.length;j++){
//                 var digitNum = parseInt(String((arr[j]%digit_before)/digit_after)) ;
//                 if(!count[digitNum]){
//                     count[digitNum]=[];
//                 }
//                 count[digitNum].push(arr[j]);
//             }
//             var temp =0;
//             for(var k=0;k<count.length;k++){
//                var val;
//                if(count[k] != null){
//                    while ((val = count[k].shift()) != null)
//                    arr[temp++] = val;
//                }
//             }
//         }
//         return arr;
//     }
//
// }
//
// function topKFrequent(nums: number[], k: number): number[] {
//     let arr1:number[][] = [];
//     let map1 = new Map();
//     for(let i=0;i<nums.length;i++){
//         if(map1.get(nums[i])){
//             map1.set(nums[i],map1.get(nums[i])+1);
//         }else{
//             map1.set(nums[i],1);
//         }
//     }
//
//     map1.forEach((v,k)=>{
//         if(arr1[v]){
//             arr1[v].push(k);
//         }else{
//             arr1[v] = [k];
//         }
//     })
//     let res:number[] = [];
//     for(let i=arr1.length-1;i>=0 && res.length < k;i--){
//         if(arr1){
//             res.push(...arr1[i]);
//         }
//     }
//     return res;
// }
//
// //分割字符串
// function splitStringToArr():void{
//     const str1:string = "11223344";
//     const k:number = 2;
//     const str2:string[] = str1.split("");
//     const res:string[] = [];
//     // console.log(str2);
//     let newstr:string = "";
//     for(let i:number=0;i < str2.length; i++){
//         newstr = "";
//         for(let j:number=i;j<str2.length; j++){
//             newstr += str2[j];
//             if(newstr.length % k == 0){
//                 res.push(newstr);
//             }
//         }
//         console.log(res)
//     }
// }



export default TreeDemo
