import React from "react";


class TreeNode {
         val: number
         left: TreeNode | null
         right: TreeNode | null
         constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
         }
 }

 rundemo();

 function rundemo() {
    // let numArr:(number|null)[] = [1,2,3,null,null,4,5];
    // let root: TreeNode | null = buildTree(numArr,1);
    // printTree(root);
    //  let root: TreeNode | null =buildTree2(numArr);
     // printTree(root);
     // designDemo()
     // constructDemo()
     //  smallestDemo1()
     // testDemo1()
     // maxmumDemo1()
     // pathSumDemo1()
     // sumRootDemo1()
     // pathSumDemo2()
     // pathSumDemo3()
     // flattenBinaryTreeDemo1()
 }

 //leecode: Unique Binary Search Trees II
function uniqueSearchTreeDemo1(){
     let n = 3;


    function generateTrees(n: number): Array<TreeNode | null> {
         let res: Array<TreeNode | null> = [];
         if(n == 0) return res;
         return helper(1, n);
    };

    function helper(start: number, end: number): Array<TreeNode | null> {
        let res: Array<TreeNode | null> = [];
        if(start > end){
            res.push(null);
            return res;
        }
        if(start == end){
            let newNode = new TreeNode(start);
            res.push(newNode);
            return res;
        }
        for(let i = start; i <= end; i++){
            let leftNodes = helper(start, i-1);
            let rightNodes = helper(i+1,end);
            for(let leftNode of leftNodes){
                for(let rightNode of rightNodes){
                    let root = new TreeNode(i);
                    root.left = leftNode;
                    root.right = rightNode;
                    res.push(root);
                }
            }
        }
        return res;
    }
}


 //leecode: Flatten Binary Tree to Linked List
function flattenBinaryTreeDemo1() {
  let arr =  [1,2,5,3,4,null,6];
    var root:TreeNode = buildTree2(arr);
  flatten(root);

    function flatten(root: TreeNode | null): void {
       let parentNode: TreeNode = new TreeNode();
       helper(root);

       function helper(root: TreeNode | null) {
          if(root == null) return;
          let leftNode: TreeNode | null = root.left;
          let rightNode: TreeNode | null = root.right;
           parentNode.right = root;
           parentNode.left = null;
          parentNode = root;
          helper(leftNode);
          helper(rightNode);
       }
    };



}

 // leecode: Path Sum
function pathSumDemo3() {
    let arr = [1,2],targetSum = 1;
    var root:TreeNode = buildTree2(arr);
    console.log(hasPathSum(root,targetSum));

    function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        let res:boolean = false;
        helper(root,targetSum,0);
        return res

        function helper(root: TreeNode | null, targetSum: number,tempSum: number){
            if(root == null) return;
            tempSum += root.val;
            if(tempSum == targetSum && root.left == null && root.right == null){
                res = true;
                return;
            }else{
                helper(root.left,targetSum,tempSum);
                helper(root.right,targetSum,tempSum);
            }
        }
    };
}

 //leecode:Path Sum II
function pathSumDemo2(){
    let arr = [5,4,8,11,null,13,4,7,2,null,null,null,1],targetSum = 22;
    var root:TreeNode = buildTree2(arr);
    console.log(pathSum(root,targetSum));

    function pathSum(root: TreeNode | null, targetSum: number): number[][] {
        let res:number[][] = [];
        if(root?.val == targetSum) return res;
        helper(root,targetSum,0,[]);
        return res

        function helper(root: TreeNode | null, targetSum: number,tempSum: number,tempArr: number[]){
            if(root == null) return;
            console.log(tempArr)
            tempSum += root.val;
            tempArr.push(root.val);
            if(tempSum == targetSum && root.left == null && root.right == null){
                res.push([...tempArr]);
                tempArr.pop();
                return;
            }else{
                helper(root.left,targetSum,tempSum,tempArr);
                helper(root.right,targetSum,tempSum,tempArr);
                tempArr.pop();
            }
        }
    };
}

//leecode: Binary Tree Paths
function bimaryPathDemo1(){
    let arr = [1,2,3,null,5];
    var root:TreeNode = buildTree2(arr);
    console.log(binaryTreePaths(root))

    function binaryTreePaths(root: TreeNode | null): string[] {

        let res:string[] = [];
        helper(root,"");
        return res;

        function helper(root: TreeNode | null,str: string){
            if(root == null) return;
            str += root.val
            if(root.left == null && root.right == null){
                res.push(str);
            }else {
                str += "->";
                helper(root.left,str);
                helper(root.right,str);
            }
        }
    };
}


 //leecode: Sum Root to Leaf Numbers
function sumRootDemo1(){
     let arr = [4,9,0,5,1];
     var root:TreeNode = buildTree2(arr);
     console.log(sumNumbers(root));

    function sumNumbers(root: TreeNode | null): number {
        let sum:number = 0;
        if(root == null) return sum;
        return helper(root,0);


        function helper(root: TreeNode | null, temp: number):number{
            if(root == null) return 0;
            let tempSum:number = temp*10 + root.val;
            if(root.left == null && root.right == null){
                return tempSum
            }else{
                return helper(root.left, tempSum) + helper(root.right, tempSum);
            }
        }
    };
}

 //leecode: Path Sum III
function pathSumDemo1(){
     let arr = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8;
    var root:TreeNode = buildTree2(arr);
    console.log(pathSum(root, sum));

    function pathSum(root: TreeNode | null, sum: number): number {
        let prefixMap:any = {};
        let target:number = sum;
        prefixMap[0] = 1;
        return recur(root, 0);

        function recur(node: TreeNode | null, curSum: number):number{
            if(node == null) return 0;
            let res = 0;
            curSum += node.val;
            res = res + (prefixMap.hasOwnProperty(curSum - target)?prefixMap[curSum-target]:0);
            prefixMap[curSum] = prefixMap.hasOwnProperty(curSum)?prefixMap[curSum]+1:1;
            let left = recur(node.left, curSum);
            let right = recur(node.right, curSum);
            res = res + left + right;
            prefixMap[curSum] = prefixMap[curSum] - 1;
            return res;
        }

    };
}


 //leecode:Binary Tree Maximum Path Sum
function maxmumDemo1(){
    var arr1 = [-10,9,20,null,null,15,7]
    var root:TreeNode = buildTree2(arr1);
    console.log(maxPathSum(root));

    function maxPathSum(root: TreeNode | null): number {
        var res:number = Number.MIN_SAFE_INTEGER;
        helper(root);

        function helper(root: TreeNode | null):number{
            if(root == null) return 0;
            var leftNum:number = Math.max(0,helper(root.left));
            var rightNum:number = Math.max(0,helper(root.right));
            res = Math.max(res,root.val+leftNum+rightNum);
            return root.val + Math.max(leftNum,rightNum);
        }
        return res;
    };
}

 function testDemo1() {
    var arr1 = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1;
    var root:TreeNode = buildTree2(arr1);
    var pNode:TreeNode = new TreeNode(p);
    var qNode:TreeNode = new TreeNode(q);

    console.log(lowestCommonAncestor(root,pNode,qNode))

     function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
         if(root == null || root == p || root == q) return root;
         let lNode:TreeNode | null = lowestCommonAncestor(root.left,p,q);
         let rNode:TreeNode | null = lowestCommonAncestor(root.right,p,q);
         if(lNode != null && rNode != null) return root;
         return  lNode != null? lNode : rNode;
     };
 }

 //leecode:Lowest Common Ancestor of a Binary Tree
function lowestCommonDemo1(){
     var arr1 = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1;
    let root: TreeNode | null =buildTree2(arr1);
    let pNode: TreeNode = new TreeNode(p);
    let qNode: TreeNode = new TreeNode(q);



    // console.log(lowestCommonAncestor(root,pNode,qNode));
    //
    // function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    //
    // };
}

 //leecode:Smallest Subtree with all the Deepest Nodes
function smallestDemo1() {
      var arr1 = [0,1,null,3,2];
    let root: TreeNode | null =buildTree2(arr1);

    // printTree(root);
    console.log(subtreeWithAllDeepest(root))



    function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
        var depthMap:any = {};
        return sub(root);
        function sub(root: TreeNode | null): TreeNode | null{
            if(root === null) return null;
            var ld = getDepth(root.left);
            var rd = getDepth(root.right);
            if(ld == rd){
                return root;
            }else if(ld > rd){
                return subtreeWithAllDeepest(root.left);
            }else{
                return subtreeWithAllDeepest(root.right);
            }
        }

        function getDepth(root:TreeNode | null) {
            if(root === null){
                return 0;
            }
            if(depthMap.hasOwnProperty(root.val)){
                return depthMap[root.val]
            }
            var ld = getDepth(root.left);
            var rd = getDepth(root.right);
            depthMap[root.val] = Math.max(ld,rd)+1;
            return depthMap[root.val];
        }

    };
}


 //leecode
 function constructDemo(){
     var preorder = [3,9,20,15,7];
     var inorder = [9,3,15,20,7] ;
     var root = buildTree(preorder,inorder);
     printTree(root);
     function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
         var node = helper(0,0,inorder.length-1,preorder,inorder);
         return node;
     };
     function helper(preStart:number,start:number,end:number,preorder: number[], inorder: number[]):TreeNode | null{
         if(preStart > preorder.length-1 || start > end) return null;
         var node:TreeNode = new TreeNode(preorder[preStart]);
         var cur:number = 0;
         for(var i = 0; i < inorder.length; i++){
             if(inorder[i] == preorder[preStart]){
                 cur = i;
             }
         }
         node.left = helper(preStart+1,start,cur-1,preorder,inorder);
         node.right = helper(preStart+cur-start+1,cur+1,end,preorder,inorder);
         return node;
     }
 }

 //leecode
 function designDemo(){
     let numArr:(number|null)[] = [1,2,3,null,null,4,5];
     let root: TreeNode | null =buildTree2(numArr);
     var str = serialize(root);
     let rootres: TreeNode | null =deserialize(str);
     console.log(rootres)
     printTree(rootres)
     // var res2 = inOrderFn(root);
     // console.log(res2)
     /*
     * Encodes a tree to a single string.
     */
     function serialize(root: TreeNode | null) {
          var str:string = "";
          return serializeHelp(root,str);
     };

     function serializeHelp(root: TreeNode | null, str: string):string{
         if(root === null){
             str += "None,";
         }else{
             str += (root.val + ",");
             str = serializeHelp(root.left, str);
             str = serializeHelp(root.right,str);
         }
         return str;
     }



     /*
      * Decodes your encoded data to tree.
      */
     function deserialize(data: string): TreeNode | null {
        var strArr:string[] = data.split(",");
        return deserializeHelp(strArr);
     };

     function deserializeHelp(arrs: string[]):TreeNode | null{
        if(arrs[0] === "None"){
            arrs.shift();
            return null;
        }
        var root: TreeNode = new TreeNode(parseInt(arrs[0]));
        arrs.shift();
        root.left = deserializeHelp(arrs);
        root.right = deserializeHelp(arrs);
        return root;
     }
 }

 // function buildTree(numArr:(number|null)[],index:number):TreeNode | null {
 //     if(index > numArr.length) return null;
 //    let val:number | null = numArr[index-1];
 //    // console.log(numArr)
 //    if(val === null){
 //        return null;
 //    }else{
 //        let node: TreeNode = new TreeNode(val);
 //        node.left = buildTree(numArr,index*2);
 //        node.right = buildTree(numArr,index*2+1);
 //        return node;
 //    }
 // }

 function buildTree2(numArr:(number|null)[]){
     var list:TreeNode[] = [];
     for(var i = 0; i < numArr.length; i++){
         var node: TreeNode = new TreeNode(numArr[i] as any,null,null);
         list.push(node);
     }
     if(list.length > 0){
         for(var i = 0; i < Math.floor(numArr.length/2)-1; i++){
             if(list[2*i+1].val != null){
                 list[i].left = list[2*i+1];
             }
             if(list[2*i+2].val != null){
                 list[i].right = list[2*i+2];
             }
         }
         var lastIndex:number = Math.floor(numArr.length/2)-1;
         list[lastIndex].left = list[2*lastIndex+1];
         if(numArr.length % 2 === 1){
             list[lastIndex].right = list[2*lastIndex+2];
         }
     }
     return list[0];
 }


 function inOrderFn(root:TreeNode | null):number[] {
      var res:number[] = [];
      var stackArr:(TreeNode|null)[] = [];
      if(root == null) return res;
      var node: TreeNode|null = root;
      while (stackArr.length > 0 || node != null){
          while (node != null){
              stackArr.push(node);
              node = node.left;
          }
          node = stackArr.pop() as TreeNode;
          res.push(node.val)
          node = node.right;
      }
      return res;
 }


 function printTree(root:TreeNode | null) {
     if(root === null) return;
     console.log(root.val);
     printTree(root.left);

     printTree(root.right);
 }
