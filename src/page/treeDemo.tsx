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
    return(
        <div>
            <h2>tree demo</h2>
        </div>
    )
}

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
