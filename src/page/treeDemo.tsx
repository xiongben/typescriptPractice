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
   //  pasDemo1()
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
   //  maxSubarrayDemo1()
   //  findMinNumDemo1()
   //  findDuplicateNumberDemo1()
   //  longestDemo2()
   //  calculatorDemo1()
   //  miniWindowDemo1()
   //  slidingWindowDemo1()
   //  kthSmallestElementDemo2()
   //  medianDemo1()
   //  friendCircleDemo()
   //  scheduleDemo1()
   //  scheduleDemo2()
   //  longestPathDemo1()
   //  countDemo2()
   // wordbreskDemo1()
   //  wordbreskDemo2()
   //  perfectSquares()
   // decodeWayDemo1()
   //  maxProfitDemo2()
   //  surroundedDemo1()
   //  maxNumberPairsDemo1()
   // longestStrDemo1()
   //  competiveDemo1()
   //  removeDemo1()
   //  spiralDemo2()
   //  searchDemo3()
   // findindexDemo1()
   // sumcloestDemo1()
   //  queenDemo2()
   // lengthWordDemo1()
   //  combinationDemo1()
   // removeElementDemo2()
   // rainWaterDemo1()
   // subsetsDemo2()
   //  triangleDemo1()
   //  uglyNumberDemo1()
   //  summaryDemo1()
   //  pascalTriangleDemo2()
   //  rotatedArrDemo2()
   //  twoSumDemo3()
   //  combinationDemo3()
   //  minimumDemo3()
   //  arrayFindDemo1()
   //  duplicateDemo1()
   //  findDuplicateDemo3()
   //  arrayPartitionDemo3()
   //  subarraySumDemo2()
   //  setMismatchDemo1()
   //  arrayNestDemo1()
   //  majorityElementDemo1()
   //  maxConsecutiveOnesDemo1()
   //  reshapeTheMatrixDemo1()
   //  largestRectangleDemo1()
   //  nextGreaterElementDemo1()
   //  maximumAverageSubarrayDemo1()
   // validTriangleNumberDemo1()
   //  runningSumDemo1()
   //  kidsDemo1()
   //  shuffleArrayDemo1()
   //  sortArrayDemo5()
   //  degreeArrayDemo1()
   //  singleNumberDemo2()
   //  largestNumberDemo3()
   //  pairsArrayDemo1()
   //  teemoDemo1()
   //  housrRobberDemo2()
   //  maximalSquareDemo1()
   //  removeKDigitsDemo1()
   //  removeDuplicateLettersDemo1()
   //  createMaximumNumberDemo1()
   //  wiggleSubsequenceDemo1()
   //  hIndexDemo2()
   //  intersectionTwoArraysDemo1()
   //  largestPerimeterDemo1()
   //  reorganizeStringDemo1()
   //  relativeSortArrayDemo1()


    return(
        <div>
            <h2>tree demo</h2>
        </div>
    )
}

//leecode: Relative Sort Array
function relativeSortArrayDemo1(){
    let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
    console.log(relativeSortArray(arr1,arr2));

    function relativeSortArray(arr1: number[], arr2: number[]): number[] {
       let count:number[] = new Array(1001).fill(0);
       for(let i = 0; i < arr1.length; i++){
           count[arr1[i]]++;
       }
       //先排arr2
        let start = 0;
        for(let i = 0; i < arr2.length; i++){
            while (count[arr2[i]] > 0){
                arr1[start] = arr2[i];
                start++;
                count[arr2[i]]--;
            }
        }
        for(let i = 0; i < count.length; i++){
            while (count[i] > 0){
                arr1[start] = i;
                start++;
                count[i]--;
            }
        }
        return arr1;
    };
}

//leecode: Reorganize String
function reorganizeStringDemo1(){
    let s= "nlmxhnpifuaxinxpxlcttjnlggmkjioewbecnofqpvcikiazmn"
    console.log(reorganizeString(s));

    function reorganizeString(S: string): string {
       let count:number[] = new Array(26).fill(0);
       for(let i = 0; i < S.length; i++){
           let index = S.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
           count[index]++
       }
       let maxIndex = 0;
       for(let i = 0; i < count.length; i++){
           if(count[i] > count[maxIndex]){
               maxIndex = i;
           }
       }
       console.log(count)
       if(count[maxIndex] > (S.length+1)/2){
           return ""
       }
       let res:string[] = new Array(S.length);
       let start = 0;
       while (count[maxIndex] > 0){
           res[start] = String.fromCharCode(maxIndex + "a".charCodeAt(0));
           start += 2;
           count[maxIndex]--;
       }

       for(let i = 0; i < count.length; i++){
           while (count[i] > 0){
               if(start > S.length-1){
                   start = 1;
               }
               res[start] = String.fromCharCode(i + "a".charCodeAt(0));
               start += 2;
               count[i]--;
           }

       }
       return res.join("");
    };
}

//leecode: Largest Perimeter Triangle
function largestPerimeterDemo1(){
    let nums = [3,6,2,3];
    console.log(largestPerimeter(nums));

    function largestPerimeter(nums: number[]): number {
       let res = 0;
       nums.sort((a,b)=>a-b);
       for(let i = nums.length - 1; i > 1; i--){
           if(nums[i-1] + nums[i-2] > nums[i]){
               return nums[i-2] + nums[i-1] + nums[i];
           }
       }
       return res;
    };
}

//leecode: Intersection of Two Arrays
function intersectionTwoArraysDemo1(){
    let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
    console.log(intersection(nums1, nums2));

    function intersection(nums1: number[], nums2: number[]): number[] {
        nums1.sort((a,b)=>a-b);
        nums2.sort((a,b)=>a-b);
        let idx1 = 0, idx2 = 0;
        let res = [];
        while (idx1 < nums1.length && idx2 < nums2.length){
            if(nums1[idx1] == nums2[idx2] && (nums1[idx1] != res[res.length-1] || res.length == 0)){
                res.push(nums1[idx1]);
                idx1++;
                idx2++;
            }else if(nums1[idx1] > nums2[idx2]){
                idx2++;
            }else{
                idx1++;
            }
        }
        while(idx1 < nums1.length){
            if(nums1[idx1] == nums2[idx2]){
                res.push(nums1[idx1]);
            }
            idx1++;
        }
        while(idx2 < nums2.length){
            if(nums1[idx1] == nums2[idx2]){
                res.push(nums2[idx2]);
            }
            idx2++;
        }
        return res;
    };
}

//leecode: H-Index II
function hIndexDemo2(){
    let citations = [0,1,3,5,6];
    console.log(hIndex(citations));

    function hIndex(citations: number[]): number {
        let pivot = 0,left = 0, right = citations.length - 1;
        while (left <= right){
            pivot = (left + right) >> 1;
            if(citations[pivot] == citations.length - pivot){
                return citations.length - pivot;
            }else if(citations[pivot] > citations.length - pivot){
                right = pivot - 1;
            }else{
                left = pivot + 1;
            }
        }
        return citations.length - left;
    };
}

//leecode: Wiggle Subsequence
function wiggleSubsequenceDemo1(){
    let nums = [1,17,5,10,13,15,10,5,16,8];
    console.log(wiggleMaxLength(nums));


    function wiggleMaxLength(nums: number[]): number {
       let up = 1;
       let dowm = 1;
       for(let i = 1; i < nums.length; i++){
           if(nums[i] > nums[i-1]){
               up = dowm + 1;
           }else if(nums[i] < nums[i-1]){
               dowm = up + 1;
           }
       }
       return nums.length == 0? 0 : Math.max(up,dowm);
    };
}

//leecode： Create Maximum Number
function createMaximumNumberDemo1(){
    let nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5;
    console.log(maxNumber(nums1,nums2,k));

    function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
        let res:number[] = new Array(k).fill(0);
        let start = Math.max(0, k-nums2.length);
        let end = Math.min(k, nums1.length);
        for(let i = start; i <= end; i++){
            let arr1 = getMaxSonArr(nums1, i);
            let arr2 = getMaxSonArr(nums2, k-i);
            let tempArr = mergeArr(arr1, arr2);
            if(compareArr(tempArr,0,res,0) > 0){
                res = [...tempArr];
            }
        }
        return res;
    };

    function getMaxSonArr(arr: number[], k:number):number[]{
        let len = arr.length;
        let stack = new Array(k).fill(0);
        let remain = len - k;
        let top = -1;
        for(let i = 0; i < arr.length; i++){
            let num = arr[i];
            while (top >= 0 && remain > 0 && num > stack[top]){
                top--;
                remain--;
            }
            if(top < k-1){
                stack[++top] = num;
            }else {
                remain--;
            }
        }
        return stack;
    }

    function mergeArr(arr1:number[], arr2:number[]):number[]{
        if(arr1.length == 0) return arr2;
        if(arr2.length == 0) return arr1;
        let resLen = arr1.length + arr2.length;
        let res:number[] = new Array(resLen).fill(0);
        let start1 = 0,start2 = 0;
        for(let i = 0 ; i < resLen; i++){
            if(compareArr(arr1,start1,arr2,start2) > 0){
                res[i] = arr1[start1++];
            }else{
                res[i] = arr2[start2++];
            }
        }
        return res;
    }

    function compareArr(arr1:number[],index1:number,arr2:number[],index2:number):number{
        let len1 = arr1.length;
        let len2 = arr2.length;
        while (index1 < len1 && index2 < len2){
            const dif = arr1[index1] - arr2[index2];
            if(dif != 0) return dif;
            index1++;
            index2++
        }
        return (len1-index1) - (len2-index2);
    }
}

//leecode: Remove Duplicate Letters
function removeDuplicateLettersDemo1(){
    let s = "cbacdcbc";
    console.log(removeDuplicateLetters(s))

    function removeDuplicateLetters(s: string): string {
       let num:any = {};
       let haveUse: boolean[] = new Array(26).fill(false);
       for(let i = 0; i < s.length; i++){
           let index = s.charAt(i);
           if(num.hasOwnProperty(index)){
               num[index]++
           }else{
               num[index] = 1;
           }
       }
       let stack:string[] = [];
       for(let i = 0; i < s.length; i++){
           let ch = s.charAt(i);
           if(!haveUse[ch.charCodeAt(0) - "a".charCodeAt(0)]){
               while (stack.length > 0 && ch < stack[stack.length-1]){
                   if(num[stack[stack.length-1]] > 0){
                       haveUse[stack[stack.length-1].charCodeAt(0) - "a".charCodeAt(0)] = false;
                       stack.pop();
                   }else {
                       break;
                   }
               }
               haveUse[ch.charCodeAt(0) - "a".charCodeAt(0)] = true;
               stack.push(ch);
           }

           num[ch]--;
       }
       return stack.join("");
    };
}

//leecode: Remove K Digits
function removeKDigitsDemo1(){
    let num = "112", k = 1;
    console.log(removeKdigits(num, k));

    function removeKdigits(num: string, k: number): string {
        if(num.length == k) return "0";
       let stack:string[] = [];
       for(let i = 0; i < num.length; i++){
           while(stack.length > 0 && k && num[i] < stack[stack.length-1]){
               stack.pop()
               k--;
           }
           stack.push(num[i]);
       }
       while (k > 0){
           stack.pop();
           k--;
       }
       let res = "";
       let firstCharIsZero = true;
       for(let i = 0; i < stack.length; i++){
           if(stack[i] == "0" && firstCharIsZero){
               continue
           }
           firstCharIsZero = false;
           res += stack[i];
       }
       return res == ""?"0":res;
    };
}

//leecode: Maximal Square
function maximalSquareDemo1(){
    let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
    console.log(maximalSquare(matrix));

    function maximalSquare(matrix: string[][]): number {
       if(matrix.length == 0 || matrix[0].length == 0) return 0;
       let maxLong = 0;
       let rows = matrix.length;
       let columns = matrix[0].length;
       let dpArr = new Array(rows);
       for(let i = 0; i < rows; i++){
           dpArr[i] = new Array(columns).fill(0);
       }
       for(let i = 0; i < rows; i++){
           for(let j = 0; j < columns; j++){
               if(matrix[i][j] == "1"){
                   if(i == 0 || j == 0){
                       dpArr[i][j] = 1;
                   }else {
                       dpArr[i][j] = Math.min(dpArr[i-1][j-1],dpArr[i-1][j],dpArr[i][j-1]) + 1;
                   }
                   maxLong = Math.max(maxLong, dpArr[i][j]);
               }
           }
       }
       return maxLong * maxLong;
    };
}

//leecode: House Robber II
function housrRobberDemo2(){
    let nums = [1,2,3,1];
    console.log(rob(nums));

    function rob(nums: number[]): number {
       if(nums.length == 0) return 0;
       if(nums.length == 1) return nums[0];
       return Math.max(helper(nums.slice(0, nums.length-1)),helper(nums.slice(1,nums.length)));

       function helper(nums: number[]){
           let pre = 0,curr = 0,temp = 0;
           for(let num of nums){
               temp = curr;
               curr = Math.max(curr, pre + num);
               pre = temp;
           }
           return curr;
       }
    };
}

//leecode: Teemo Attacking
function teemoDemo1(){
    let timeSeries = [1,2], duration = 2;
    console.log(findPoisonedDuration(timeSeries, duration));

    function findPoisonedDuration(timeSeries: number[], duration: number): number {
       if(timeSeries.length == 0) return 0;
       let total = 0;
       for(let i = 0; i < timeSeries.length-1; i++){
           total += Math.min(duration, timeSeries[i+1] - timeSeries[i]);
       }
       return total + duration;
    };
}

//leecode: K-diff Pairs in an Array
function pairsArrayDemo1(){
    let arr = [3,1,4,1,5], k = 2;
    console.log(findPairs(arr, k));

    function findPairs(nums: number[], k: number): number {
        if(k < 0) return 0;
        let saw = new Set();
        let diff = new Set();
        for(let num of nums){
            if(saw.has(num+k)){
                diff.add(num);
            }
            if(saw.has(num-k)){
                diff.add(num-k);
            }
            saw.add(num);
        }
        return diff.size;
    };
}

//leecode: Largest Number
function largestNumberDemo3() {
  let nums = [3,30,34,5,9];
    console.log(largestNumber(nums));

    function largestNumber(nums: number[]): string {
       let res:string = "";
       nums.sort((a,b)=>{
           let str1 = String(a) + String(b);
           let str2 = String(b) + String(a);
           return parseInt(str2) - parseInt(str1);
       })
        if(nums[0] == 0) return "0"
        for(let i = 0; i < nums.length; i++){
            res += String(nums[i]);
        }
       return res;
    };
}

//leecode: Single Number II
function singleNumberDemo2(){
    let nums = [0,1,0,1,0,1,99]
    console.log(singleNumber(nums));

    function singleNumber(nums: number[]): number {
       let numset:Set<number> = new Set();
       let sum:number = 0;
       let wholeSum = 0;
       for(let num of nums){
           numset.add(num);
           wholeSum += num;
       }
       numset.forEach(el => {
           sum += el;
       })
       return (sum*3 - wholeSum)/2
    };
}

//leecode: Degree of an Array
function degreeArrayDemo1(){
    let nums = [1,2,2,3,1,4,2];
    console.log(findShortestSubArray(nums));

    function findShortestSubArray(nums: number[]): number {
       let valmap:any = {};
       let maxNum:number = 0;
       let minLen:number = 0;
       for (let i = 0; i < nums.length; i++){
           let val = nums[i];
           if(valmap.hasOwnProperty(val)){
               valmap[val][0]++;
               valmap[val][2] = i;
           }else{
               valmap[val] = [];
               valmap[val][0] = 1;
               valmap[val][1] = i;
               valmap[val][2] = i;
           }
       }
       for(let k of Object.keys(valmap)){
           if(valmap[k][0] > maxNum){
               maxNum = valmap[k][0];
               minLen = valmap[k][2] - valmap[k][1] + 1;
           }else if(valmap[k][0] == maxNum){
               if(valmap[k][2] - valmap[k][1] + 1 < minLen){
                   minLen = valmap[k][2] - valmap[k][1] + 1;
               }
           }
       }
       return minLen;
    };
}

//leecode: Sort Array By Parity II
function sortArrayDemo5(){
    let nums = [4,2,5,7];
    console.log(sortArrayByParityII(nums));

    function sortArrayByParityII(nums: number[]): number[] {
        let i = 0, j = 1;
        let n = nums.length;
        while (i < n && j < n){
            while (i < n && nums[i]%2 == 0){
                i += 2;
            }
            while (j < n && nums[j]%2 == 1){
                j += 2;
            }
            if(i < n && j < n){
                swap(nums,i,j);
            }
        }
        return nums;
    };

    function swap(arr:number[],i:number,j:number){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
}

//leecode: Divisor Game
function divisorGameDemo1(){
    let num = 3;

    function divisorGame(N: number): boolean {
       let f:boolean[] = new Array(N + 5).fill(false);
       f[1] = false;
       f[2] = true;
       for(let i = 3; i <= N; i++){
           for(let j = 1; j < i; j++){
               if((i % j) == 0 && !f[i-j]){
                   f[i] = true;
                   break;
               }
           }
       }
       return f[N];
    };
}

//leecode: Shuffle the Array
function shuffleArrayDemo1(){
    let nums = [2,5,1,3,4,7], n = 3;
    console.log(shuffle(nums, n));

    function shuffle(nums: number[], n: number): number[] {
        let res = [];
        for(let i = 0; i < n; i++){
            res.push(nums[i]);
            res.push(nums[i+n]);
        }
        return res;
    };
}

//Leecode：Kids With the Greatest Number of Candies
function kidsDemo1(){
    let candies = [2,3,5,1,3], extraCandies = 3;
    console.log(kidsWithCandies(candies, extraCandies));

    function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
       let res:boolean[] = new Array(candies.length).fill(false);
       let max = 0;
       for(let i = 0; i < candies.length; i++){
           max = Math.max(max, candies[i]);
       }
        for(let i = 0; i < candies.length; i++){
            if(candies[i] + extraCandies >= max){
                res[i] = true;
            }
        }
        return res;
    };
}

//leecode: Running Sum of 1d Array
function runningSumDemo1(){
    let nums = [1,2,3,4];
    console.log(runningSum(nums));

    function runningSum(nums: number[]): number[] {
       let res:number[] = new Array();
       let temp = 0;
       for(let i = 0; i < nums.length; i++){
           temp += nums[i];
           res.push(temp);
       }
       return res;
    };
}

//leecode: Valid Triangle Number
function validTriangleNumberDemo1(){
    let arr = [2,2,3,4]
    console.log(triangleNumber(arr));


    function triangleNumber(nums: number[]): number {
       let res:number = 0;
       nums.sort((a,b)=>a-b);
       for(let i = 0; i < nums.length - 2; i++){
           let k = i + 2;
           for(let j = i + 1; j < nums.length - 1 && nums[i] != 0; j++){
               k = binarySearch(nums,k,nums.length-1,nums[i]+nums[j]);
               res += k - j -1;
           }
       }
       return res;
    };

    function binarySearch(arr:number[],l:number,r:number, target:number){
        while ( r >= l && r < arr.length){
            let mid = (l + r) >> 1;
            if(arr[mid] >= target){
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }
        return l;
    }
}

//leecode: Maximum Average Subarray I
function maximumAverageSubarrayDemo1(){
    let arr = [1,12,-5,-6,50,3], k = 1;
    console.log(findMaxAverage(arr,k));

    function findMaxAverage(nums: number[], k: number): number {
        let res:number = 0;
        for(let i = 0; i < k; i++){
            res += nums[i];
        }
        let temp =res;
        for(let i = 0; i < nums.length - k; i++){
            temp = temp - nums[i] + nums[k+i];
            res = Math.max(res, temp);
        }
        return res/k
    };
}

//leecode: Next Greater Element I
function nextGreaterElementDemo1(){
    let nums1 = [4,1,2], nums2 = [1,3,4,2];
    console.log(nextGreaterElement(nums1,nums2));

    function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
       let res:number[] = [];
       let map:any = {};
       let stack:number[] = [];
       stack[0] = -1;
       for(let i = 0; i < nums2.length; i++){
           while (stack.length > 0 && nums2[i] > stack[0]){
               map[stack[0]] = nums2[i];
               stack.shift();
           }
           stack.unshift(nums2[i]);
       }
        while (stack.length > 0){
            map[stack[0]] = -1;
            stack.shift();
        }
        for(let i = 0; i < nums1.length; i++){
            res[i] = map[nums1[i]]?map[nums1[i]]:-1;
        }
        return res;
    };
}

//leecode: Largest Rectangle in Histogram
function largestRectangleDemo1(){
    let heights = [2,1,5,6,2,3];
    console.log(largestRectangleArea(heights));

    function largestRectangleArea(heights: number[]): number {
        let n = heights.length;
        let left:number[] = new Array(n);
        let right:number[] = new Array(n).fill(n);
        let stack:number[] = [];
        let res = 0;
        stack[0] = -1;
        for(let i = 0; i < n; i++){
            while (stack.length > 0 && heights[stack[0]] >= heights[i]){
                right[stack[0]] = i;
                stack.shift();
            }
            left[i] = stack[0];
            stack.unshift(i);
        }
        console.log(left,right)
        for(let i = 0; i < n; i++){
            res = Math.max(res, (right[i]-left[i]-1) * heights[i]);
        }
        return res;
    };
}

//leecode:Insert Interval
function insertIntervalDemo1(){
    let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];
    console.log(insert(intervals,newInterval));

    function insert(intervals: number[][], newInterval: number[]): number[][] {
        let left = newInterval[0];
        let right = newInterval[1];
        let isSert = false;
        let res:number[][] = [];
        for(let interval of intervals){
            if(interval[0] > right){
                if(!isSert){
                    res.push([left,right]);
                    isSert = true;
                }
                res.push(interval);
            }else if(interval[1] < left){
                res.push(interval);
            }else {
                left = Math.min(interval[0],left);
                right = Math.max(interval[1], right);
            }
        }
        if(!isSert){
            res.push([left,right]);
        }
        return res;
    };
}

//leecode: Reshape the Matrix
function reshapeTheMatrixDemo1() {
   let  nums =[[1,2], [3,4]];
   let r = 1,c = 4;
   console.log(matrixReshape(nums, r, c));

    function matrixReshape(nums: number[][], r: number, c: number): number[][] {
        let m = nums.length;
        let n = nums[0].length;
        if(m*n != r*c) return nums;
        let res = new Array(r).fill(0).map(()=> new Array(c).fill(0));
        for(let i = 0; i < m*n; i++){
            res[Math.floor(i/c)][i%c] = nums[Math.floor(i/n)][i%n]
        }
        return res;
    };
}

//leecode: Max Consecutive Ones
function maxConsecutiveOnesDemo1() {
   let nums = [1,1,0,1,1,1];
   console.log(findMaxConsecutiveOnes(nums));

    function findMaxConsecutiveOnes(nums: number[]): number {
       let res = 0;
       let temp = 0;

       for(let i = 0; i < nums.length; i++){
           if(nums[i] == 1){
               temp++;
           }else {
               res = Math.max(res, temp);
               temp = 0;
           }
       }
       return Math.max(res, temp);
    };
}

//leecode:Majority Element II
function majorityElementDemo1(){
    let nums = [3,2,3];
    console.log(majorityElement(nums));

    function majorityElement(nums: number[]): number[] {
        let res:number[] = [];
       if(nums.length == 0) return res;
       let num1 = nums[0],count1 = 0;
       let num2 = nums[0],count2 = 0;
       for(let num of nums){
           if(num == num1){
               count1++;
               continue;
           }
           if(num == num2){
               count2++;
               continue;
           }
           if(count1 == 0){
               num1 = num;
               count1++;
               continue;
           }
           if(count2 == 0){
               num2 = num;
               count2++;
               continue;
           }
           count1--;
           count2--;
       }
       count1 = 0;
       count2 = 0;
       for(let num of nums){
           if(num == num1){
               count1++;
           }else if(num == num2){
               count2++;
           }
       }
       if(count1 > Math.floor(nums.length/3)){
           res.push(num1);
       }
        if(count2 > Math.floor(nums.length/3)){
            res.push(num2);
        }
        return res;
    };
}

//leecode: Array Nesting
function arrayNestDemo1(){
    let A = [5,4,0,3,1,6,2];
    console.log(arrayNesting(A));

    function arrayNesting(nums: number[]): number {
        let visited:boolean[] = new Array(nums.length).fill(false);
        let res = 0;
        for(let i = 0; i < nums.length; i++){
            if(!visited[i]){
                let start = nums[i];
                let count = 0;
                start = nums[start];
                count++;
                visited[start] = true;
                while (start != nums[i]){
                    start = nums[start];
                    count++;
                    visited[start] = true;
                }
                res = Math.max(res,count);
            }
        }
        return res;
    };
}

//leecode:Set Mismatch
function setMismatchDemo1(){
    let nums = [1,2,2,4];
    console.log(findErrorNums(nums));

    function findErrorNums(nums: number[]): number[] {
        nums.sort((a,b)=>a-b);
        let repeatNum = 0;
        let missNum = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] == nums[i-1]){
                  repeatNum = nums[i];
            }else if(nums[i] > nums[i-1] + 1){
                 missNum = nums[i-1] + 1;
            }
        }
        if(nums[nums.length-1] != nums.length){
            missNum = nums.length;
        }
        if (nums[0] != 1){
            missNum = 1;
        }
        return [repeatNum,missNum];
    };
}

//leecode:Subarray Sum Equals K
function subarraySumDemo2(){
    let nums = [1,1,1], k = 2;
    console.log(subarraySum(nums,k));

    function subarraySum(nums: number[], k: number): number {
        let mapobj:any = {};
        let count = 0;
        let temp = 0;
        mapobj[0] = 1;
        for(let i = 0; i < nums.length; i++){
            temp += nums[i];
            if(mapobj.hasOwnProperty(temp-k)){
                count += mapobj[temp-k];
            }
            if(mapobj.hasOwnProperty(temp)){
                mapobj[temp] += 1;
            }else{
                mapobj[temp] = 1;
            }
        }
        return count;
    };
}


//leecode: Array Partition I
function arrayPartitionDemo3(){
    let nums = [1,4,3,2];
    console.log(arrayPairSum(nums));

    function arrayPairSum(nums: number[]): number {
        nums.sort((a,b)=>a-b);
        let sum = 0;
        for(let i = 0; i < nums.length; i+=2){
            sum+=nums[i];
        }
        return sum;
    };
}


//leecode: Find All Duplicates in an Array
function findDuplicateDemo3(){
    let arr = [4,3,2,7,8,2,3,1];
    console.log(findDuplicates(arr));

    function findDuplicates(nums: number[]): number[] {
        let res:number[] = [];
        for(let i = 0; i < nums.length; i++){
            let index = Math.abs(nums[i]) - 1;
            if(nums[index] < 0){
                res.push(Math.abs(nums[i]))
            }
            nums[index] = -nums[index];
        }
        return res;
    };
}

//leecode: Contains Duplicate II
function duplicateDemo1(){
    let nums = [1,2,3,1], k = 3;
    console.log(containsNearbyDuplicate(nums,k));

    function containsNearbyDuplicate(nums: number[], k: number): boolean {
        let numset = new Set();
        for(let i = 0; i < nums.length; i++){
            if(numset.has(nums[i])) return true;
            numset.add(nums[i]);
            if(numset.size > k){
                numset.delete(nums[i-k]);
            }
        }
        return false;
    };
}

//leecode: Find All Numbers Disappeared in an Array
function arrayFindDemo1(){
    let arr = [4,3,2,7,8,2,3,1]
    console.log(findDisappearedNumbers(arr));

    function findDisappearedNumbers(nums: number[]): number[] {
        let res:number[] = [];
        for(let i = 0; i < nums.length; i++){
            let index = (nums[i] - 1)%(nums.length);
            nums[index] += nums.length;
        }
        for(let i = 0; i < nums.length; i++){
            if(nums[i] <= nums.length){
                res.push(i+1);
            }
        }
        return res;
    };
}

//leecode: Minimum Size Subarray Sum
function minimumDemo3(){
    let target = 213, nums = [12,28,83,4,25,26,25,2,25,25,25,12];
    console.log(minSubArrayLen(target,nums));

    function minSubArrayLen(target: number, nums: number[]): number {
        let len = nums.length;
        if(len == 0) return 0;
        let res = Number.MAX_SAFE_INTEGER;
        let start = 0,end = 0;
        let sum = 0;
        while (end < len){
            sum += nums[end];
            while (sum >= target){
                res = Math.min(res,end-start+1);
                sum -= nums[start];
                start++;
            }
            end++;
        }
        return res == Number.MAX_SAFE_INTEGER?0:res;
    };
}

//leecode: Combination Sum III
function combinationDemo3(){
    let k = 3, n = 9;
    console.log(combinationSum3(k,n));

    function combinationSum3(k: number, n: number): number[][] {
        let res:number[][] = [];
        let temp:number[] = [];
        let start = 0, sum = 0;
        helper(res,temp,start,0);
        return res;


        function helper(res:number[][],temp:number[],start:number,sum:number){
            if(temp.length > k || sum > n || start > 9) return;
            if(temp.length == k && sum == n){
                res.push([...temp]);
            }
            for(let i = start+1; i < 10; i++){
                temp.push(i);
                sum+=i;
                helper(res,temp,i,sum);
                temp.pop();
                sum-=i;
            }
        }
    };
}

//leecode: Two Sum II - Input array is sorted
function twoSumDemo3(){
    let numbers = [2,7,11,15], target = 9;
    console.log(twoSum(numbers,target));

    function twoSum(numbers: number[], target: number): number[] {
        let res:number[] = [];
        let map:any = {};
        for(let i = 0; i < numbers.length; i++){
            if(map.hasOwnProperty(numbers[i])){
                res = [map[numbers[i]]+1,i+1];
            }else{
                let key = target - numbers[i];
                map[key] = i;
            }
        }
        return res;
    };
}

//leecode: Find Minimum in Rotated Sorted Array II
function rotatedArrDemo2(){
    let arr = [2,2,2,0,1]
    console.log(findMin(arr));

    function findMin(nums: number[]): number {
        let start = 0;
        let end = nums.length-1;
        while (start < end){
            let pivot = (start + end) >> 1;
            if(nums[pivot] < nums[end]){
                end = pivot;
            }else if(nums[pivot] > nums[end]){
                start = pivot + 1;
            }else {
                end--;
            }
        }
        return nums[start];
    };
}

//leecode: Pascal's Triangle II
function pascalTriangleDemo2(){
    let rowIndex = 3;
    console.log(getRow(rowIndex));

    function getRow(rowIndex: number): number[] {
        let temp:number[] = [];
        for(let i = 0; i <= rowIndex; i++){
            temp.unshift(1);
            for(let j = 1; j < temp.length-1; j++){
                temp[j] = temp[j] + temp[j+1];
            }
        }
        return temp;
    };
}

//leecode:Summary Ranges
function summaryDemo1(){
    let nums = [0,1,2,4,5,7];
    console.log(summaryRanges(nums));

    function summaryRanges(nums: number[]): string[] {
       let res:string[] = [];
       let start = 0;
       let end = nums.length;
       while (start < end){
           let low = start;
           start++;
           while (start < end && nums[start] == nums[start-1]+1){
               start++;
           }
           let height = start-1;
           let temp = [""+nums[low]];
           if(low < height){
               temp.push("->");
               temp.push(""+nums[height]);
           }
           res.push(temp.join(""));
       }
       return res;
    };
}

//leecode: Ugly Number II
function uglyNumberDemo1(){
    let n = 10;
    console.log(nthUglyNumber(n));

    function nthUglyNumber(n: number): number {
       let numArr:number[] = new Array(1690);
       let ugly:number;
       let point1 = 0,point2 = 0,point3 = 0;
       numArr[0] = 1;
       for(let i = 1; i <= 1690; i++){
           ugly = Math.min(Math.min(numArr[point1]*2, numArr[point2]*3),numArr[point3]*5);
           numArr[i] = ugly;
           if(ugly == numArr[point1]*2) point1++;
           if(ugly == numArr[point2]*3) point2++;
           if(ugly == numArr[point3]*5) point3++;
       }
       return numArr[n-1];
    };
}

//leecode: Triangle
function triangleDemo1(){
    let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
    console.log(minimumTotal(triangle));

    function minimumTotal(triangle: number[][]): number {
        let n:number = triangle.length;
       let f:number[][] = new Array(n);
       let res:number;
       for(let i = 0; i < n; i++){
           f[i] = new Array(n);
       }
       f[0][0] = triangle[0][0];
       for(let i = 1; i < n; i++){
           f[i][0] = f[i-1][0] + triangle[i][0];
           for(let j = 1; j < i; j++){
               f[i][j] = Math.min(f[i-1][j-1],f[i-1][j]) + triangle[i][j];
           }
           f[i][i] = f[i-1][i-1] + triangle[i][i];
       }
       res = f[n-1][0];
       for(let i = 1; i < n; i++){
           res = Math.min(res, f[n-1][i]);
       }
       return res;
    };
}

//leecode: Subsets II
function subsetsDemo2(){
    let nums = [1,2,2];
    console.log(subsetsWithDup(nums));

    function subsetsWithDup(nums: number[]): number[][] {
       let res:number[][] = [];
       nums.sort((a,b)=>a-b);
       helper(nums,0,[],res);
       return res
    };

    function helper(nums: number[],start:number,temp:number[],res:number[][]){
        res.push([...temp]);
        for(let i = start; i < nums.length; i++){
            if(i > start && nums[i] == nums[i-1]){
                continue;
            }
            temp.push(nums[i]);
            helper(nums,i+1,temp,res);
            temp.pop();
        }
    }
}

//leecode: Trapping Rain Water
function rainWaterDemo1(){
    let height = [0,1,0,2,1,0,1,3,2,1,2,1];
    console.log(trap2(height));

    function trap(height: number[]): number {
        let leftHeight:number[] = new Array(height.length).fill(0);
        let rightHeight:number[] = new Array(height.length).fill(0);
        let res:number = 0;

        for(let i = 1; i < height.length-1; i++){
            leftHeight[i] = Math.max(leftHeight[i-1],height[i-1]);
        }

        for(let i = height.length - 2; i >= 0; i--){
            rightHeight[i] = Math.max(rightHeight[i+1],height[i+1]);
        }

        for(let i = 1; i < height.length-1; i++){
            let min = Math.min(leftHeight[i],rightHeight[i]);
            if(min > height[i]){
                res = res + (min - height[i]);
            }
        }
        return res;
    };

    function trap2(height: number[]): number {
        let stack:number[] = [];
        let res = 0;
        let current = 0;
        while (current < height.length){
            while (stack.length > 0 && height[current] > height[stack[stack.length-1]]){
                let h = height[stack[stack.length-1]];
                stack.pop();
                if(stack.length <= 0) break;
                let distance = current - stack[stack.length-1] - 1;
                let min = Math.min(height[stack[stack.length-1]], height[current]);
                res = res + (min-h)*distance;
            }
            stack.push(current);
            current++;
        }
        return res;
    }
}

//leecode:Remove Element
function removeElementDemo2(){
    let nums = [3,2,2,3], val = 3;

    console.log(removeElement(nums,val));

    function removeElement(nums: number[], val: number): number {
        nums.sort((a,b)=>a-b);
        let len = nums.length;
        let point = 0;
        for(let i = 0; i < len; i++){
            if(nums[i] == val){
                continue;
            }else{
                nums[point] = nums[i];
                point++;
            }
        }
        return point;
    };
}

//leecode: Combinations
function combinationDemo1(){
    let n = 4, k = 2;
    console.log(combine(n, k));

    function combine(n: number, k: number): number[][] {
       let res:number[][] = new Array();
       let tempArr:number[] = new Array();
       helper(res,[],1,n,k);
       return res;
    };

    function helper(res:number[][],tempArr:number[],start:number,n:number,k:number){
        if(k == 0){
            res.push([...tempArr]);
            return;
        }
        for (let i = start; i <= n; i++){
            tempArr.push(i);
            helper(res,tempArr,i+1,n,k-1);
            tempArr.pop();
        }
    }
}

//leecode:Length of Last Word
function lengthWordDemo1(){
    let s = "Hello World";
    console.log(lengthOfLastWord(s));

    function lengthOfLastWord(s: string): number {
        let end:number = s.length - 1;
        while (end >= 0 && s.charAt(end) == " ") end--;
        if(end < 0) return 0;
        let start:number = end;
        while (start >= 0 && s.charAt(start) != " ") start--;
        return end - start;
    };
}

//leecode:N-Queens II
function queenDemo2(){
    let n = 4;
    console.log(solveNQueens(n));
    function solveNQueens(n: number): number {
        var res:number = 0;
        let columns:Set<number> = new Set();
        let diagonals1:Set<number> = new Set();
        let diagonals2:Set<number> = new Set();
        let queens = new Array(n).fill(-1);
        backTrack(queens,n,0,columns,diagonals1,diagonals2);
        return res;


        function backTrack(queens:number[],n:number,row:number,
                           columns:Set<number>,diagonals1:Set<number>,
                           diagonals2:Set<number>){
            if(row == n){
                res++;
            }else{
                for(let i = 0; i < n; i++){
                    if(columns.has(i)) continue;
                    let diagonal1:number = row - i;
                    let diagonal2:number = row + i;
                    if(diagonals1.has(diagonal1)) continue;
                    if(diagonals2.has(diagonal2)) continue;
                    queens[row] = i;
                    columns.add(i);
                    diagonals1.add(diagonal1);
                    diagonals2.add(diagonal2);
                    backTrack(queens,n,row+1,columns,diagonals1,diagonals2);
                    queens[row] = -1;
                    columns.delete(i);
                    diagonals1.delete(diagonal1);
                    diagonals2.delete(diagonal2);
                }
            }
        }
    }
}

//leecode:N-Queens
function queenDemo1(){
    let n = 4;
    console.log(solveNQueens(n));

    function solveNQueens(n: number): string[][] {
        let res:string[][] = [];
        let columns:Set<number> = new Set();
        let diagonals1:Set<number> = new Set();
        let diagonals2:Set<number> = new Set();
        let queens = new Array(n).fill(-1);
        backTrack(res,queens,n,0,columns,diagonals1,diagonals2);
        return res;


        function backTrack(res:string[][],queens:number[],n:number,row:number,
                           columns:Set<number>,diagonals1:Set<number>,
                           diagonals2:Set<number>){
            if(row == n){
                let strItemRes:string[] = getStringItemRes(queens);
                res.push(strItemRes);
            }else{
                for(let i = 0; i < n; i++){
                    if(columns.has(i)) continue;
                    let diagonal1:number = row - i;
                    let diagonal2:number = row + i;
                    if(diagonals1.has(diagonal1)) continue;
                    if(diagonals2.has(diagonal2)) continue;
                    queens[row] = i;
                    columns.add(i);
                    diagonals1.add(diagonal1);
                    diagonals2.add(diagonal2);
                    backTrack(res,queens,n,row+1,columns,diagonals1,diagonals2);
                    queens[row] = -1;
                    columns.delete(i);
                    diagonals1.delete(diagonal1);
                    diagonals2.delete(diagonal2);
                }
            }
        }

        function getStringItemRes(arr:number[]):string[]{
            let len:number = arr.length;
            let res:string[] = new Array();
            for(let i = 0; i < len; i++){
                let strArr1:string[] = new Array(len).fill(".");
                strArr1[arr[i]] = "Q";
                res.push(strArr1.join(""));
            }
            return res;
        }
    };
}

//leecode:3Sum Closest
function sumcloestDemo1(){
    let nums = [-1,2,1,-4], target = 1;
    console.log(threeSumClosest(nums,target));

    function threeSumClosest(nums: number[], target: number): number {
        let res:number = nums[0] + nums[1] + nums[2];
        nums.sort((a,b)=> a-b);
        for(let i = 0; i < nums.length - 2; i++){
            let start = i + 1;
            let end = nums.length - 1;
            let sumRes = 0;
            while (start < end){
                sumRes = nums[i] + nums[start] + nums[end];
                if(sumRes == target){
                    return sumRes;
                }else if(sumRes < target){
                    start++;
                } else {
                    end--;
                }
                if(Math.abs(sumRes-target) < Math.abs(res-target)){
                    res = sumRes;
                }
            }
        }
        return res;
    };
}

//leecode:Search Insert Position
function findindexDemo1(){
    let nums = [1,3,5,6], target = 2;
    console.log(searchInsert(nums, target));

    function searchInsert(nums: number[], target: number): number {
        let start:number = 0;
        let end:number = nums.length - 1;
        if(target > nums[end]) return nums.length;
        if(target < nums[0]) return 0;
        while(start < end){
            let mid = (start + end) >> 1;
            if(nums[mid] == target){
                return mid;
            }else if(nums[mid] < target){
                start = mid + 1;
            }else{
                end = end - 1;
            }
        }
        return start;
    };
}

//leecode: Search a 2D Matrix
function searchDemo3(){
    let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
    console.log(searchMatrix(matrix,target));

    function searchMatrix(matrix: number[][], target: number): boolean {
       let totalNum:number = matrix.length * matrix[0].length;
       let start:number = 0;
       let end:number = totalNum - 1;
       let res:boolean = false;
       while(start <= end){
           let mid:number = (start + end) >> 1;
           let rowNum:number = Math.floor(mid/matrix[0].length);
           let columNum:number = mid % matrix[0].length;
           if(matrix[rowNum][columNum] == target){
               return true;
           }else if(matrix[rowNum][columNum] < target){
               start = mid + 1;
           }else{
               end = mid - 1;
           }
       }
       return false;
    };
}

//leecode:Spiral Matrix II
function spiralDemo2(){
    let n = 3;
    console.log(generateMatrix(n));

    function generateMatrix(n: number): number[][] {
        let total:number = n * n;
        let l = 0;
        let r = n-1;
        let t = 0;
        let b = n-1;
        let res:number[][] = new Array(n);
        let num:number = 1;
        for(let i = 0; i < res.length; i++){
            res[i] = new Array(n);
        }
        while (num <= total){
            for(let j = l; j <= r; j++){
                res[t][j] = num++;
            }
            t++;
            for(let j = t; j <= b; j++){
                res[j][r] = num++;
            }
            r--;
            for(let j = r; j >= l; j--){
                res[b][j] = num++;
            }
            b--;
            for(let j = b; j >= t; j--){
                res[j][l] = num++;
            }
            l++;
        }
        return res;
    };
}

//leecode:Remove Duplicates from Sorted Array II
function removeDemo1(){
    let nums = [0,0,1,1,1,1,2,3,3];
    console.log(removeDuplicates(nums));

    function removeDuplicates(nums: number[]): number {
        let j = 1;
        let count = 1;
        for(let i = 1; i < nums.length; i++){
            if(nums[i] == nums[i-1]){
                count++;
            }else {
                count = 1;
            }
            if(count <= 2){
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    };
}

//leecode:Find the Most Competitive Subsequence
function competiveDemo1(){
    let nums = [2,4,3,3,5,4,9,6], k = 4;
    console.log(mostCompetitive(nums,k));

    function mostCompetitive(nums: number[], k: number): number[] {
        let stack:number[] = [];
        stack[0] = -1;
        let res:number[] = new Array(k);
        for (let i = 0; i < nums.length; i++){
            while (nums[i] < stack[stack.length-1] && k-stack.length+1 < nums.length-i){
                stack.pop();
            }
            if(stack.length-1 < k){
                stack.push(nums[i])
            }
        }
        stack.shift()
        for(let i = 0; i < k; i++){
            res[i] = stack.shift() as number;
        }
        return res;
    };
}

//leecode: Longest Palindromic Substring
function longestStrDemo1(){
    let s = "cbbd";
    console.log(longestPalindrome2(s));

    function longestPalindrome2(s: string): string {
        if(s.length == 0) return "";
        let res:string = s.charAt(0);
        for(let i = 0 ; i < s.length; i++){
            let str1:string = expand(s,i,i);
            let str2:string = expand(s,i,i+1);
            let temp:string = str1.length > str2.length?str1 : str2;
            if(temp.length > res.length){
                res = temp;
            }
        }
        return res;

        function expand(s:string, left:number, right:number):string{
            while(left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)){
                left--;
                right++;
            }
            return s.slice(left+1,right);
        }
    };

    function longestPalindrome(s: string): string {
        let len:number = s.length;
        let dp:boolean[][] = new Array(len);
        if(s.length == 0) return "";
        let res:string = s.charAt(0);
        for(let i = 0; i < dp.length; i++){
            dp[i] = new Array(len).fill(false);
        }
        for(let l = 0; l < len; l++){
            for(let i = 0; i + l < len; i++){
                let j = i + l;
                if(l == 0){
                    dp[i][j] = true;
                }else if(l == 1){
                    dp[i][j] = (s.charAt(i) == s.charAt(j));
                }else{
                    dp[i][j] = dp[i+1][j-1] && (s.charAt(i) == s.charAt(j));
                }
                if(l+1 > res.length && dp[i][j]){
                    res = s.slice(i,j+1);
                }
            }
        }
        return res;
    };
}

//leecode:Max Number of K-Sum Pairs
function maxNumberPairsDemo1(){
    let nums:number[] = [3,1,3,4,3];
    let k:number = 6;
    console.log(maxOperations(nums,k));

    function maxOperations(nums: number[], k: number): number {
        nums.sort((a,b)=>a-b);
        let min:number = 0;
        let max:number = nums.length-1;
        let res:number = 0;
        while(min < max){
            if(nums[min] + nums[max] == k){
                res++;
                min++;
                max--;
            }else if(nums[min] + nums[max] < k){
                min++;
            }else{
                max--;
            }
        }
        return res;
    };

    function maxOperations2(nums: number[], k: number): number {
         nums.sort((a,b)=>a-b);
         let min:number = 0;
         let max:number = nums.length-1;
         let res:number = 0;
         while(min < max){
             if(nums[min] + nums[max] == k){
                 res++;
                 min++;
                 max--;
             }else if(nums[min] + nums[max] < k){
                 min++;
             }else{
                 max--;
             }
         }
         return res;
    };

}

//leecode:Surrounded Regions
function surroundedDemo1(){
    let board:string[][] = [["X","O","X"],["O","X","O"],["X","O","X"]]
    let a = JSON.parse(JSON.stringify(board));
    console.log(a)
    solve(board);

    function solve(board: string[][]): void {
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if((i == 0 || j == 0 || i == board.length - 1 || j == board[0].length-1)&& board[i][j] == "O"){
                    dfs2(board,i,j);
                }
            }
        }

        // console.log(board)
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] == "O"){
                    board[i][j] = "X"
                }
                if(board[i][j] == "#"){
                    board[i][j] = "O"
                }
            }
        }

        function dfs2(board: string[][],i:number,j:number){
            let stuck:number[][] = [];
            let point:number[] = [i,j];
            board[i][j] = "#";
            stuck.push(point);
            while (stuck.length > 0){
                let currentPoint:number[] = stuck[0];
                if(currentPoint[0] - 1 >= 0 && board[currentPoint[0]-1][currentPoint[1]] == "O"){
                    stuck.push([currentPoint[0]-1,currentPoint[1]]);
                    board[currentPoint[0]-1][currentPoint[1]] = "#";
                    continue;
                }
                if(currentPoint[0] + 1 < board.length && board[currentPoint[0]+1][currentPoint[1]] == "O"){
                    stuck.push([currentPoint[0]+1,currentPoint[1]]);
                    board[currentPoint[0]+1][currentPoint[1]] = "#";
                    continue;
                }
                if(currentPoint[1] - 1 >= 0 && board[currentPoint[0]][currentPoint[1]-1] == "O"){
                    stuck.push([currentPoint[0],currentPoint[1]-1]);
                    board[currentPoint[0]][currentPoint[1]-1] = "#";
                    continue;
                }
                if(currentPoint[1] + 1 < board[0].length && board[currentPoint[0]][currentPoint[1]+1] == "O"){
                    stuck.push([currentPoint[0],currentPoint[1]+1]);
                    board[currentPoint[0]][currentPoint[1]+1] = "#";
                    continue;
                }
                stuck.shift();
            }
        }


        function dfs(board: string[][],i:number,j:number){
            if(i < 0 || i >board.length-1 || j < 0 || j > board[0].length-1) return;
            if(board[i][j] != "O") return;
            board[i][j] = "#";
            dfs(board,i-1,j);
            dfs(board,i+1,j);
            dfs(board,i,j-1);
            dfs(board,i,j+1);
        }
    };
}

//Best Time to Buy and Sell Stock III
function maxProfitDemo2(){
    let prices = [3,3,5,0,0,3,1,4];
    console.log(maxProfit(prices));

    function maxProfit(prices: number[]): number {
        if(prices.length < 2) return 0;
        let dp:number[][][] = new Array(prices.length);
        for(let i = 0; i < dp.length; i++){
            dp[i] = new Array(3);
            for(let j = 0; j < dp[i].length; j++){
                dp[i][j] = new Array(2).fill(0);
            }
        }
        dp[0][1][1] = -prices[0];
        dp[0][2][1] = Number.MIN_SAFE_INTEGER;
        for(let i = 1; i < prices.length; i++){

            dp[i][1][1] = Math.max(dp[i-1][1][1],-prices[i]);
            dp[i][1][0] = Math.max(dp[i-1][1][0],dp[i-1][1][1] + prices[i]);
            dp[i][2][0] = Math.max(dp[i-1][2][0],dp[i-1][2][1] + prices[i]);
            dp[i][2][1] = Math.max(dp[i-1][2][1],dp[i-1][1][0] - prices[i]);
        }

        return Math.max(dp[prices.length-1][1][0],dp[prices.length-1][2][0]);
    };
}

//Best Time to Buy and Sell Stock with Cooldown
function maxProfitDemo1(){
    let arr1 = [1,2,3,0,2];
    console.log(maxProfit(arr1));

    function maxProfit(prices: number[]): number {
        if(prices.length == 0) return 0;
        // f[i][0]: 手上持有股票的最大收益
        // f[i][1]: 手上不持有股票，并且处于冷冻期中的累计最大收益
        // f[i][2]: 手上不持有股票，并且不在冷冻期中的累计最大收益
        let len:number = prices.length;
        let f:number[][] = new Array(len);
        for(let i = 0; i < len; i++){
            f[i] = new Array(3);
        }
        f[0][0] = -prices[0];
        f[0][1] = 0;
        f[0][2] = 0;
        for(let i = 1; i < len; i++){
            f[i][0] = Math.max(f[i-1][0],f[i-1][2]-prices[i]);
            f[i][1] = f[i-1][0]+prices[i];
            f[i][2] = Math.max(f[i-1][1],f[i-1][2]);
        }
        return Math.max(f[len-1][1],f[len-1][2]);
    };
}

//leecode: Decode Ways
function decodeWayDemo1(){
    let s = "226";
    console.log(numDecodings(s))

    function numDecodings(s: string): number {
        if(s == null || s.length == 0) return 0;
        let dep:number[] = new Array(s.length+1).fill(0);
        dep[0] = 1;
        dep[1] = s.charAt(0) == "0"?0:1;
        for(let i = 2; i < dep.length; i++){
            let first:number = parseInt(s.substr(i-1,1));
            let second:number = parseInt(s.substr(i-2,2));
            if(first >= 1 && first <= 9){
                dep[i]+= dep[i-1]
            }
            if(second >= 10 && second <= 26){
                dep[i]+= dep[i-2]
            }
        }
        return dep[s.length];
    };
}

//leecode:Perfect Squares
function perfectSquares(){
    let n = 12;

    console.log(numSquares3(n));

    //动态规划
    function numSquares1(n: number): number {
        let squareNums:number[] = [];
        let square_n = Math.floor(Math.sqrt(n));
        let dp:number[] = new Array(n+1).fill(Number.MAX_SAFE_INTEGER);
        for(let i = 0; i <= square_n+1; i++){
            squareNums.push(i*i);
        }
        dp[0] = 0;
        for(let i = 1; i <= n; i++){
            for(let j = 0; j < square_n+1; j++){
                if(i < squareNums[j]) break;
                dp[i] = Math.min(dp[i], dp[i-squareNums[j]]+1);
            }
        }
        return dp[n];
    };
    //贪心算法
    function numSquares2(n: number): number {
        let squareNums:number[] = [];
        let square_n = Math.floor(Math.sqrt(n));
        for(let i = 0; i <= square_n+1; i++){
            squareNums.push(i*i);
        }

        let count:number = 1;
        for(;count <= n;count++){
            if(canBeDivided(n,count)){
                return count;
            }
        }
        return count;

        function canBeDivided(n:number,count:number){
            if(count === 1) return squareNums.indexOf(n) != -1;
            for(let val of squareNums){
                if(canBeDivided(n-val,count-1)){
                    return true;
                }
            }
            return false;
        }

    };
    //贪心+bfs
    function numSquares3(n: number): number {
        let squareNums:number[] = [];
        let square_n = Math.floor(Math.sqrt(n));
        for(let i = 1; i <= square_n; i++){
            squareNums.push(i*i);
        }
        let setQueue:Set<number> = new Set<number>();
        setQueue.add(n);
        let level:number = 0;
        let flag = false;
        while (setQueue.size > 0){
            // console.log(setQueue)
            level++;
            let newSetQueue:Set<number> = new Set<number>();
            setQueue.forEach(queueVal => {
                for(let val of squareNums){
                    if(queueVal == val){
                        flag = true;
                        return level;
                    }else if(queueVal < val){
                        break;
                    }else{
                        newSetQueue.add(queueVal-val)
                    }

                }
            })
            if(flag) return level;
            setQueue = newSetQueue;
        }
        return level;
    }


}

//leecode:Word Break II
function wordbreskDemo2() {
    let s = "pineapplepenapple",
    wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];

    console.log(wordBreak(s,wordDict));

    function wordBreak(s: string, wordDict: string[]): string[] {
        var wordMap:any = {};
        return helper(s,wordDict);

        function helper(s: string, wordDict: string[]): string[]{
            var res:string[] = [];
            if(s.length == 0 || wordDict.length == 0) return res;
            if(wordMap.hasOwnProperty(s)) return wordMap[s];
            if(wordDict.indexOf(s) > -1) res.push(s);
            for(var i = 0; i < s.length; i++){
                var t = s.substring(i+1);
                if(wordDict.indexOf(t) > -1){
                    var tempres:string[] = helper(s.substring(0,i+1),wordDict);
                    if(tempres.length > 0){
                        for(var j = 0; j < tempres.length; j++){
                            res.push(tempres[j] + " " + t);
                        }
                    }
                }
            }
            wordMap[s] = res;
            return res;
        }
    };

}

//leecode:Word Break
function wordbreskDemo1() {
   let s = "applepenapple", wordDict = ["apple", "pen"];
   console.log(wordBreak(s,wordDict));

    function wordBreak(s: string, wordDict: string[]): boolean {
       let len:number = s.length;
       let wordDictSet:Set<string> = new Set(wordDict);
       let temp:Array<boolean> = new Array(len+1).fill(false);
       temp[0] = true;  //表示空串
       for(let i = 1; i <= len; i++){
           for(let j = 0; j < i; j++){
               if(temp[j] && wordDictSet.has(s.substr(j,i-j))){
                   temp[i] = true;
                   break; //注意这里直接跳出
               }
           }
       }
       return temp[len]
    };

}

//leecode:Count of Smaller Numbers After Self
function countDemo2() {
   let nums = [5,2,6,1];
    countSmaller(nums)

    function countSmaller(nums: number[]): number[] {
         let index:number[] = [];
         let tempIndex:number[] = [];
         let res:number[] = new Array(nums.length).fill(0);
         let tempNums:number[] = [];
         if(nums.length < 2) return res;
         for(let i = 0; i < nums.length; i++){
             index[i] = i;
         }
         divide(nums,0,nums.length-1);
         console.log(res);
         return res;

         function divide(nums:number[],left:number,right:number) {
            if(left >= right) return;
            let mid:number = (left + right) >> 1;
            divide(nums,left,mid);
            divide(nums,mid+1,right);
            conbine(nums,left,mid,right)

         }

         function conbine(nums:number[],left:number,mid:number,right:number) {
             let i:number = left,j:number = mid + 1,p:number = left;
             while (i <= mid && j <= right){
                 if(nums[i] <= nums[j]){
                     tempNums[p] = nums[i];
                     tempIndex[p] = index[i];
                     res[index[i]] += (j-mid-1);
                     i++;
                     p++;
                 }else{
                     tempNums[p] = nums[j];
                     tempIndex[p] = index[j];
                     j++;
                     p++;
                 }
             }
             while (i <= mid){
                 tempNums[p] = nums[i];
                 tempIndex[p] = index[i];
                 res[index[i]] += (j-mid-1);
                 i++;
                 p++;
             }
             while (j <= right){
                 tempNums[p] = nums[j];
                 tempIndex[p] = index[j];
                 j++;
                 p++;
             }
             for (let k = left; k <= right; k++){
                 index[k] = tempIndex[k];
                 nums[k] = tempNums[k];
             }
         }

    };
}


// //leecode:Longest Increasing Path in a Matrix
// function longestPathDemo1() {
//    let nums =
//        [
//            [9,9,4],
//            [6,6,8],
//            [2,1,1]
//        ];
//
//     console.log(longestIncreasingPath2(nums));
//
//     function longestIncreasingPath(matrix: number[][]): number {
//         let res:number = 0;
//         let dirs:number[][] = [[-1,0],[1,0],[0,-1],[0,1]];
//         let tempArr:number[] = [];
//         let memo:number[][] = [];
//         for(let i = 0; i < matrix.length; i++){
//             let a:number[] = new Array(matrix[0].length as number).fill(0);
//             memo.push(a);
//         }
//         if(matrix.length == 0) return res;
//         for(let i = 0; i < matrix.length; i++){
//             for(let j = 0; j < matrix[0].length; j++){
//                 res = Math.max(res,helper(matrix,i,j,memo));
//             }
//         }
//
//         function helper(matrix: number[][],i:number,j:number,memo:number[][]):number {
//             if(memo[i][j] != 0) return memo[i][j];
//             memo[i][j]++;
//             for(let dir of dirs){
//                 let new_i:number = i + dir[0];
//                 let new_j:number = j + dir[1];
//                 if(new_i >= 0 && new_i < matrix.length && new_j >= 0 && new_j < matrix[0].length && matrix[i][j] < matrix[new_i][new_j]){
//                     memo[i][j] = Math.max(memo[i][j], helper(matrix,new_i,new_j,memo)+1);
//                 }
//             }
//             return memo[i][j];
//         }
//         return res;
//     };
//
//     function longestIncreasingPath2(matrix: number[][]): number {
//         let res:number = 0;
//         let dirs:number[][] = [[-1,0],[1,0],[0,-1],[0,1]];
//         let tempArr:number[][] = [];
//         let memo:number[][] = [];
//         for(let i = 0; i < matrix.length; i++){
//             let a:number[] = new Array(matrix[0].length as number).fill(0);
//             memo.push(a);
//         }
//         if(matrix.length == 0) return res;
//         //建立出度表
//         for(let i = 0; i < matrix.length; i++){
//             for(let j = 0; j < matrix[0].length; j++){
//                 for(let dir of dirs){
//                     let new_i:number = i + dir[0];
//                     let new_j:number = j + dir[1];
//                     if(new_i >= 0 && new_i < matrix.length && new_j >= 0 && new_j < matrix[0].length && matrix[i][j] < matrix[new_i][new_j]){
//                         memo[i][j]++;
//                     }
//                 }
//             }
//         }
//         // console.log(memo);
//
//         for(let i = 0; i < matrix.length; i++){
//             for(let j = 0; j < matrix[0].length; j++){
//                 if(memo[i][j] == 0){
//                     let arr1:number[] = [i,j]
//                     tempArr.push(arr1)
//                 }
//             }
//         }
//
//         while (tempArr.length > 0){
//             res++;
//             let size:number = tempArr.length;
//             for(let i = 0; i < size; i++){
//                 let firstNode:number[] = tempArr.shift() as number[];
//                 let row:number = firstNode[0];
//                 let column:number = firstNode[1];
//                 for(let dir of dirs){
//                     let new_i:number = row + dir[0];
//                     let new_j:number = column + dir[1];
//                     if(new_i >= 0 && new_i < matrix.length && new_j >= 0 && new_j < matrix[0].length && matrix[row][column] > matrix[new_i][new_j]){
//                         memo[new_i][new_j]--;
//                         if(memo[new_i][new_j] == 0){
//                             tempArr.push([new_i,new_j])
//                         }
//                     }
//
//                 }
//             }
//         }
//
//         return res;
//
//     }
// }


//leecode:Course Schedule II
function scheduleDemo2() {
    let numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    console.log(findOrder(numCourses,prerequisites));

    function findOrder(numCourses: number, prerequisites: number[][]): number[] {
        let adjacencyList:number[][] = [];
        let indegrees:number[] = new Array(numCourses).fill(0);
        let tempArr:number[] = [];
        let res:number[] = [];
        for(var i = 0; i < numCourses; i++){
            adjacencyList.push(new Array());
        }
        for(let val of prerequisites){
            adjacencyList[val[1]].push(val[0]);
            indegrees[val[0]]++;
        }
        for(let i = 0; i < numCourses; i++){
            if(indegrees[i] == 0) tempArr.push(i);
        }
        while (tempArr.length > 0){
            let firstNode:number = tempArr.shift() as number;
            numCourses--;
            res.push(firstNode);
            for(let val of adjacencyList[firstNode]){
                indegrees[val]--;
                if(indegrees[val] == 0) tempArr.push(val);
            }
        }

        return numCourses == 0?res:[];
    };
}

//leecode:Course Schedule
function scheduleDemo1() {
   let numCourses = 2, prerequisites = [[1,0]];
    console.log(canFinish(numCourses,prerequisites));

    function canFinish(numCourses: number, prerequisites: number[][]): boolean {
        let adjacencyList:number[][] = [];
        let indegrees:number[] = new Array(numCourses).fill(0); //入度表
        let tempArr:number[] = [];  //放置所有入度为0的节点
        for(let i = 0; i < numCourses; i++){
            adjacencyList.push(new Array());
        }
        for(let val of prerequisites){
            indegrees[val[0]] ++;
            adjacencyList[val[1]].push(val[0]);
        }
        for(let i = 0; i < numCourses; i++){
            if(indegrees[i] == 0) tempArr.push(i);
        }
        while (tempArr.length > 0){
            let firstNode:number = tempArr.shift() as number;
            numCourses--;
            for(let val of adjacencyList[firstNode]){
                indegrees[val]--;
                if(indegrees[val] == 0) tempArr.push(val);
            }
        }
        return numCourses == 0;
    };
}

// //leecode:Friend Circles
// function friendCircleDemo(){
//     var isConnected = [[1,1,0],[1,1,0],[0,0,1]];
//     console.log(findCircleNum(isConnected));
//
//     function findCircleNum(isConnected: number[][]): number {
//        var markArr:number[] = new Array(isConnected.length).fill(0);
//        var res:number = 0;
//        for(var i = 0; i < isConnected.length; i++){
//            if(markArr[i] == 0){
//                helper(isConnected,markArr,i);
//                res++;
//            }
//        }
//        return res;
//     };
//
//     function helper(isConnected: number[][],markArr:number[],i:number){
//         for(var j = 0; j < isConnected.length; j++){
//             if(isConnected[i][j] == 1 && markArr[j] == 0){
//                 markArr[j] = 1;
//                 helper(isConnected,markArr,j);
//             }
//         }
//     }
// }


// //leecode:Median of Two Sorted Arrays
// function medianDemo1() {
//    var nums1 = [1,2], nums2 = [3,4];
//    console.log(findMedianSortedArrays(nums1,nums2));
//
//     function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//        var len1:number = nums1.length;
//        var len2:number = nums2.length;
//        if((len1 + len2) % 2 == 1){
//            var midIndex = (len1 + len2) >> 1;
//            return getKthElement(nums1,nums2,midIndex+1);
//        }else{
//            var midIndex1 = ((len1 + len2) >> 1) -1;
//            var midIndex2 = ((len1 + len2) >> 1);
//            return  (getKthElement(nums1,nums2,midIndex1+1) + getKthElement(nums1,nums2,midIndex2+1))/2;
//        }
//     };
//
//     function getKthElement(nums1: number[], nums2: number[], k:number):number{
//         var len1:number = nums1.length;
//         var len2:number = nums2.length;
//         var index1:number = 0;
//         var index2:number = 0;
//         var kthElement:number = 0
//         while (true){
//             if(index1 == len1){
//                 return nums2[index2+k-1];
//             }
//             if(index2 == len2){
//                 return nums1[index1+k-1];
//             }
//             if(k == 1){
//                 return Math.min(nums1[index1],nums2[index2]);
//             }
//             var half:number = k >> 1;
//             var newIndex1:number = Math.min(len1,index1+half)-1;
//             var newIndex2:number = Math.min(len2,index2+half)-1;
//             if(nums1[newIndex1] <= nums2[newIndex2]){
//                 k-=(newIndex1-index1+1);
//                 index1 = newIndex1 + 1;
//             }else {
//                 k -= (newIndex2-index2+1);
//                 index2 = newIndex2 + 1;
//             }
//         }
//     }
// }


// //leecode: Kth Smallest Element in a Sorted Matrix
// function kthSmallestElementDemo2() {
//    var matrix = [
//            [ 1,  5,  9],
//            [10, 11, 13],
//            [12, 13, 15]
//        ],
//        k = 8;
//
//    console.log(kthSmallest(matrix,k));
//
//
//     function kthSmallest(matrix: number[][], k: number): number {
//         var res:number = 0;
//         if(matrix.length == 0) return res;
//         var left:number = matrix[0][0];
//         var right:number = matrix[matrix.length-1][matrix[0].length-1];
//
//         while (left < right){
//             var mid:number = left + ((right - left) >> 1);
//             console.log(mid);
//             if(checkNum(matrix,k,mid)){
//                 right = mid;
//             }else{
//                 left = mid + 1;
//             }
//         }
//         return left;
//     };
//
//     function checkNum(matrix: number[][],k:number,mid:number) {
//          var len:number = matrix.length;
//          var j:number = 0;
//          var i:number = len - 1;
//          var num:number = 0;
//          while (j < len && i >= 0){
//              if(matrix[i][j] <= mid){
//                  num = num + i + 1;
//                  j++;
//              }else{
//                  i--;
//              }
//          }
//          return num >= k;
//     }
// }

// //leecode:Sliding Window Maximum
// function slidingWindowDemo1() {
//    var nums = [7,2,4], k = 2;
//    console.log(maxSlidingWindow(nums,k));
//
//     function maxSlidingWindow(nums: number[], k: number): number[] {
//         var res:number[] = [];
//         if(nums.length == 0 || k < 0) return res;
//         var tempArr:number[] = [];
//         var resIndex:number = 0;
//         for(var i = 0; i < nums.length; i++){
//             while(tempArr.length > 0 && tempArr[0] < i-k+1){
//                 tempArr.shift();
//             }
//             while (tempArr.length > 0 && nums[tempArr[tempArr.length-1]] < nums[i]){
//                 tempArr.pop();
//             }
//             tempArr.push(i);
//             if(i >= k-1){
//                 res[resIndex] = nums[tempArr[0]];
//                 resIndex++;
//             }
//         }
//         return res;
//     };
// }

// //leecode: Minimum Window Substring
// function miniWindowDemo1() {
//    var s = "AD", t = "A"
//     console.log(minWindow(s,t));
//
//     function minWindow(s: string, t: string): string {
//         var tStringMap:any = {},
//             tempStringMap:any = {};
//         for(var i = 0; i < t.length; i++){
//             if(!tStringMap.hasOwnProperty(t.charAt(i))){
//                 tStringMap[t.charAt(i)] = 0
//             }
//             tStringMap[t.charAt(i)]++;
//         }
//         var left:number = 0,
//             right:number = -1;
//         var lTemper:number = -1,rTemper:number = -1;
//         var resLen:number = Number.MAX_SAFE_INTEGER;
//         while (right < s.length){
//             right++;
//             if(right < s.length && tStringMap.hasOwnProperty(s.charAt(right))){
//                 if(!tempStringMap.hasOwnProperty(s.charAt(right))){
//                     tempStringMap[s.charAt(right)] = 0;
//                 }
//                 tempStringMap[s.charAt(right)]++;
//             }
//             while(check() && left <= right){
//                if(right-left+1 < resLen){
//                    resLen = right-left+1;
//                    lTemper = left;
//                    rTemper = right+1;
//                }
//                if(tStringMap.hasOwnProperty(s.charAt(left))){
//                    tempStringMap[s.charAt(left)]--;
//                }
//                left++;
//             }
//
//         }
//
//         function check():boolean {
//             for(var key in tStringMap){
//                 var val = tempStringMap.hasOwnProperty(key)?tempStringMap[key]:0;
//                 if(val < tStringMap[key]){
//                     return false;
//                 }
//             }
//             return true;
//         }
//
//         return lTemper == -1? "": s.slice(lTemper,rTemper);
//     };
// }

// //leecode:Basic Calculator II
// function calculatorDemo1() {
//     var s = "14-3/2";
//     console.log(calculate(s))
//
//     function calculate(s: string): number {
//         var res:number = 0;
//         var num:number = 0;
//         var calChar:string = "";
//         var stack:Array<number> = [];
//         var sign:string = "+";
//         if(s.length == 0) return res;
//         for (var i = 0; i < s.length; i++){
//             if(isNumber(s.charAt(i))){
//                 num = num * 10 + parseInt(s.charAt(i));
//             }
//             if((!isNumber(s.charAt(i)) && s.charAt(i) != " ") || i == s.length - 1 ){
//                 if(sign == "-"){
//                     stack.push(-num);
//                 }
//                 if(sign == "+"){
//                     stack.push(num);
//                 }
//                 if(sign == "*"){
//                     stack.push((stack.pop() as number)*num)
//                 }
//                 if(sign == "/"){
//                     var temp:number = stack.pop() as number;
//                     temp = temp < 0? -Math.floor(-temp/num):Math.floor(temp/num);
//                     stack.push(temp)
//                 }
//                 sign = s.charAt(i);
//                 num = 0;
//             }
//         }
//         for(var v of stack){
//             res += v;
//         }
//         return res;
//     };
//
//     function isNumber(s:string):boolean {
//        if(s.charCodeAt(0) >= "0".charCodeAt(0) && s.charCodeAt(0) <= "9".charCodeAt(0)){
//            return true;
//        }
//        return false;
//     }
// }

// //leecode:Longest Consecutive Sequence
// function longestDemo2(){
//     var nums = [0,3,7,2,5,8,4,6,0,1];
//     console.log(longestConsecutive(nums))
//
//     function longestConsecutive(nums: number[]): number {
//        var res:number = 0;
//        if(nums.length < 1) return res;
//        var numsSet = new Set(nums);
//        for(var i = 0; i < nums.length; i++){
//            if(!numsSet.has(nums[i]-1)){
//                var y:number = nums[i] + 1;
//                while (numsSet.has(y)){
//                    y++;
//                }
//                res = Math.max(res,y-nums[i]);
//            }
//        }
//        return res;
//     };
// }

// //leecode:Find the Duplicate Number
// function findDuplicateNumberDemo1(){
//     var nums = [3,1,3,4,2];
//     var res = findDuplicate(nums);
//     console.log(res);
//
//     function findDuplicate(nums: number[]): number {
//         var left:number = 0;
//         var right:number = nums.length - 1;
//         while (left < right){
//             console.log(left,right)
//             var mid:number = (left+right) >> 1;
//             var count:number = 0;
//             for(var v of nums){
//                 if(v <= mid) count++;
//             }
//             console.log("count: "+count)
//             if(count <= mid){
//                 left = mid + 1;
//             } else{
//                 right = mid
//             }
//         }
//         return left;
//     };
// }

// //leecode:Find Minimum in Rotated Sorted Array
// function findMinNumDemo1(){
//     var nums = [5,1,2,3,4];
//     console.log(findMin(nums));
//
//     function findMin(nums: number[]): number {
//         if(nums.length  == 1) return nums[0];
//         var left:number = 0;
//         var right:number = nums.length - 1;
//         if(nums[right] > nums[left]) return nums[0];
//         while (left <= right){
//
//             var mid:number = (left + right) >> 1;
//             console.log(left,right,mid)
//             if(nums[mid] > nums[mid+1]){
//                 return nums[mid+1];
//             }
//             if(nums[mid-1] > nums[mid]){
//                 return nums[mid];
//             }
//             if(nums[left] > nums[mid]){
//                 right = mid - 1;
//             }else{
//                 left = mid + 1;
//             }
//         }
//         return -1;
//     };
// }

// //leecode:Maximum Product Subarray
// function maxSubarrayDemo1() {
//     var arr1 = [2,3,-2,4];
//     console.log(maxProduct(arr1))
//
//     function maxProduct(nums: number[]): number {
//         var res:number = nums[0];
//         var imax:number = res;
//         var imin:number = res;
//         for(var i = 1; i < nums.length; i++){
//             console.log("max: " + imax + ";min: " + imin);
//             if(nums[i] < 0){
//                 var temp = imin;
//                 imin = imax;
//                 imax = temp;
//             }
//
//             imax = Math.max(nums[i],nums[i] * imax);
//             imin = Math.min(nums[i],nums[i] * imin);
//             res = Math.max(res, imax)
//         }
//         return res;
//     };
//
//
// }

// //leecode:Implement Trie (Prefix Tree)
// function trieTreeDemo1() {
//     class TrieNode {
//         next: TrieNode[];
//         word: string | null;
//         constructor() {
//             this.next = [];
//             this.word = null;
//         }
//     }
//
//     class Trie {
//         root:TrieNode;
//         constructor() {
//            this.root = new TrieNode();
//         }
//
//         insert(word: string): void {
//             var p:TrieNode = this.root;
//             for(var i = 0; i < word.length; i++){
//                 var pIndex:number = word.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
//                 if(p.next[pIndex] == null) p.next[pIndex] = new TrieNode();
//                 p = p.next[pIndex];
//             }
//             p.word = word;
//         }
//
//         search(word: string): boolean {
//              var ws:TrieNode = this.root;
//              for(var i = 0; i < word.length; i++){
//                  var c:string = word.charAt(i);
//                  var pIndex:number = word.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
//                  if(ws.next[pIndex] == null) return false;
//                  ws = ws.next[pIndex];
//              }
//              if(ws.word == null) return false;
//              return true;
//         }
//
//         startsWith(prefix: string): boolean {
//             var ws:TrieNode = this.root;
//             for(var i = 0; i < prefix.length; i++){
//                 var c:string = prefix.charAt(i);
//                 var pIndex:number = prefix.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
//                 if(ws.next[pIndex] == null) return false;
//                 ws = ws.next[pIndex];
//             }
//             return true;
//         }
//     }
// }

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

//leecode：Valid Parentheses
function validParenthessDemo() {
    var s = "()[]{}(";
    console.log(isValid(s))
    function isValid(s: string): boolean {
        var stack1:string[] = [];
        for(var i = 0; i < s.length; i++){
            console.log(stack1)
            if(s.charAt(i) === "("){
                stack1.push(")")
            }else if(s.charAt(i) === "["){
                stack1.push("]")
            }else if(s.charAt(i) === "{"){
                stack1.push("}")
            }else if(stack1.length === 0 || stack1.pop() !== s.charAt(i)){
                return false;
            }
        }
        return stack1.length === 0;
    };
}

// //leecode:Pascal's Triangle
function  pasDemo1(){
    var n:number = 5
    console.log(generate(n));

    function generate(numRows: number): number[][] {
        var res:number[][] = [];
        var temp:number[] = []
        for(var i = 0; i < numRows; i++){
            temp.unshift(1);
            for(var j = 1; j < temp.length-1; j++){
                temp[j] = temp[j] + temp[j+1];
            }
            res.push([...temp]);
        }
        return res;
    };
}

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
