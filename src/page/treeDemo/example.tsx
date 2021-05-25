import React from "react";
import {createGunzip} from "zlib";


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
     // balanceBinaryTreeDemo1()
     // houseRobberDemo3()
     // invertBinaryTreeDemo1()
     // binaryTreeRightSideDemo1()
     // countCompleteTreeNodesDemo1()
     // sumOfLeftLeavesDemo1()
     // lowestCommonAncestorDemo1()
     // miniumDepthDemo1()
     // deleteNodeInBSTDemo1()
     // findModeInTreeDemo1()
 }


 //leecode: Find Bottom Left Tree Value
function findBottomLeftTreeValue(){


    function findBottomLeftValue(root: TreeNode | null): number {
        let resArr:number[] = [];
        helper(root, 0, resArr);
        return resArr[resArr.length-1];
    };

    function helper(root: TreeNode | null, level:number, resArr:number[]){
        if(root == null) return;
        if(level == resArr.length){
            resArr.push(root.val);
        }
        helper(root.left, level + 1, resArr);
        helper(root.right, level + 1, resArr);
    }
}

 //leecode： Find Mode in Binary Search Tree
function findModeInTreeDemo1(){
     let arr1 = [1,null,2,2];
    var root:TreeNode = buildTree2(arr1);
    printTree(root)
    // console.log(findMode(root))

    function findMode(root: TreeNode | null): number[] {
        let base = 0, count = 0, maxCount = 0, res:number[] = [];
        dfs(root);
        return res;

        function helper(num: number){
            if(base == num){
                count++;
            }else{
                count = 1;
                base = num;
            }
            if(count == maxCount){
                res.push(num);
            }
            if(count > maxCount){
                maxCount = count;
                res = [num];
            }
        }

        function dfs(root: TreeNode | null){
            if(root == null) return;
            dfs(root.left);
            helper(root.val);
            dfs(root.right);
        }

    };
}


 //leecode： Delete Node in a BST
function deleteNodeInBSTDemo1(){
     let arr1 = [5,3,6,2,4,null,7], key = 3;
    var root:TreeNode = buildTree2(arr1);
    let newnode = deleteNode(root, key);
    printTree(newnode);

    function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
        if(root == null) return null;
        if(key > root.val){
            root.right = deleteNode(root.right, key);
        }else if(key < root.val){
            root.left = deleteNode(root.left, key);
        }else{
            if(root.left == null && root.right == null){
                root = null;
            }else if(root.right != null){
                let chooseNode = getRightMin(root) as TreeNode;
                root.val = chooseNode.val;
                root.right = deleteNode(root.right, root.val);
            }else{
                let chooseNode = getLeftMax(root) as TreeNode;
                root.val = chooseNode.val;
                root.left = deleteNode(root.left, root.val);
            }
        }
        return root;
    };

    function getLeftMax(root: TreeNode | null): TreeNode | null{
        if(root == null) return null;
        root = root.left;
        while (root?.right != null) root = root.right;
        return root;
    }

    function getRightMin(root: TreeNode | null): TreeNode | null{
        if(root == null) return null;
        root = root.right;
        while (root?.left != null) root = root.left;
        return root;
    }
}

 //leecode: Minimum Depth of Binary Tree
function miniumDepthDemo1(){
     let arr1 = [2,null,3,null,4,null,5,null,6];
    var root:TreeNode = buildTree2(arr1);
    console.log(minDepth(root));

    function minDepth(root: TreeNode | null): number {
        if(root == null) return 0;
        if(root.left == null && root.right == null) return 1;
        let minPath = Number.MAX_SAFE_INTEGER;
        if(root.left != null){
            minPath = Math.min(minPath, minDepth(root.left));
        }
        if(root.right != null){
            minPath = Math.min(minPath, minDepth(root.right));
        }
        return minPath + 1;
    };
}

 // Lowest Common Ancestor of a Binary Search Tree
function lowestCommonAncestorDemo1(){
     let arr1 =  [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8;
    var root:TreeNode = buildTree2(arr1);
    let pnode = new TreeNode(p);
    let qnode = new TreeNode(q);
    console.log(lowestCommonAncestor(root, pnode, qnode));

    function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        let res:any = root;
        while (true){
            if(p?.val as number > res?.val && q?.val as number > res?.val){
                res = res.right;
            }else if((p?.val as number) < res?.val && (q?.val as number) < res?.val){
                res = res.left;
            }else{
                break;
            }
        }
        return res;
    };
}

 //leecode: Sum of Left Leaves
function sumOfLeftLeavesDemo1(){
     let arr1 = [3,9,20,null,null,15,7];
    var root:TreeNode = buildTree2(arr1);
    console.log(sumOfLeftLeaves(root));

    function sumOfLeftLeaves(root: TreeNode | null): number {
         if(root == null) return 0;
         return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) +
             (root.left != null && root.left.left == null && root.left.right == null?root.left.val : 0);
    };
}

 //leecode:Count Complete Tree Nodes
function countCompleteTreeNodesDemo1(){
     let arr1 = [1,2,3,4,5,6];
    var root:TreeNode = buildTree2(arr1);
    console.log(countNodes2(root));

    function countNodes(root: TreeNode | null): number {
        if(root == null) return 0;
        let left = countNodes(root.left);
        let right = countNodes(root.right);
        return left + right + 1;
    };

    function countNodes2(root: TreeNode | null): number {
        if(root == null) return 0;
        let res = 0;
        let leftDep = getDep(root.left);
        while (root != null){
            let rightDep = getDep(root.right);
            if(leftDep == rightDep){
                res += Math.pow(2,leftDep);
                root = root.right;
            }else{
                res += Math.pow(2, rightDep);
                root = root.left;
            }
            leftDep--;
        }
        return res;

        function getDep(root: TreeNode | null): number {
            if(root == null) return 0;
            let res = 0;
            while (root != null){
                res++;
                root = root.left;
            }
            return res;
        }
    };
}


 //leecode: Binary Tree Right Side View
function binaryTreeRightSideDemo1(){
     let arr1 = [1,2,3,null,5,null,4];
    var root:TreeNode = buildTree2(arr1);
    let res = rightSideView2(root);
    console.log(res);

    function rightSideView(root: TreeNode | null): number[] {
        if(root == null) return [];
        let res:number[] = [];
        let queue:TreeNode[] = [];
        queue.push(root);
        while (queue.length > 0){
            var size = queue.length;
            for(let i = 0; i < size; i++){
                let node: TreeNode = queue.shift() as TreeNode;
                if(node.left?.val != null){
                    queue.push(node.left);
                }
                if(node.right?.val != null){
                    queue.push(node.right);
                }

                if(i == size-1){
                    res.push(node.val);
                }
            }
        }
        return res;
    };

    function rightSideView2(root: TreeNode | null): number[] {
        let res:number[] = [];
        helper(root, 0);
        return res;

        function helper(root: TreeNode | null, depth: number){
            if(root == null) return;
            if(depth == res.length){
                res.push(root.val);
            }
            depth++;
            helper(root.right, depth);
            helper(root.left, depth);
        }
    }
}

 //leecode: Invert Binary Tree
function invertBinaryTreeDemo1(){
     let arr1 = [4,2,7,1,3,6,9];
    var root:TreeNode = buildTree2(arr1);
    let newRoot: TreeNode | null = invertTree(root);
    printTree(newRoot);


    function invertTree(root: TreeNode | null): TreeNode | null {
       if(root == null) return null;
       let left = invertTree(root.left);
       let right = invertTree(root.right);
       root.left = right;
       root.right = left;
       return root;
    };
}


//  //leecode: Convert Sorted List to Binary Search Tree
// function convertSortedListDemo1() {
//    let arr = [-10, -3, 0, 5, 9];
//
//     function sortedListToBST(arr:number[]): TreeNode | null {
//        let start = 0,end = arr.length-1;
//        let count = 1;
//
//        while ()
//     };
//
//     function getNode(arr:number[],start:number,end:number):number | null {
//        if(start > end) return null;
//        let mid = (start + end) >> 1;
//        return arr[mid];
//     }
//
//     function getMedian(left:) {
//
//     }
// }


//leecode: House Robber III
function houseRobberDemo3() {
    let arr = [3,2,3,null,3,null,1];
    var root:TreeNode = buildTree2(arr);
    let res = rob(root);
    console.log(res);

    function rob(root: TreeNode | null): number {
        let f = new Map(),g = new Map();
        dfs(root)
        return Math.max(f.get(root)||0, g.get(root)||0);

        function dfs(node: TreeNode|null) {
            if(node == null) return;
            dfs(node.left)
            dfs(node.right)
            f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
            g.set(node, Math.max(f.get(node.left)||0,g.get(node.left)||0)+Math.max(f.get(node.right)||0,g.get(node.right)||0));

        }

    };
}

 //leecode: Balanced Binary Tree
function balanceBinaryTreeDemo1() {
  let arr = [1,2,2,3,3,null,null,4,4];
    var root:TreeNode = buildTree2(arr);
    console.log(isBalanced(root));

    function isBalanced(root: TreeNode | null): boolean {
        return helper(root) >= 0;
    };

    function helper(root:TreeNode | null):number {
        if(root == null) return 0;
        let leftNode = helper(root.left);
        let rightNode = helper(root.right);
        if(leftNode == -1 || rightNode == -1 || Math.abs(rightNode-leftNode) > 1){
            return -1;
        }else{
            return Math.max(leftNode,rightNode) + 1;
        }

    }

}


//leecode: Construct Binary Tree from Inorder and Postorder Traversal
function constructBinaryTreeDemo1(){
    let inorder = [9,3,15,20,7], postorder = [9,15,7,20,3];


    function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
        let postIdx = postorder.length - 1;
        let inOrderMap:any = {};
        for(let i = 0; i < inorder.length; i++){
            let val = inorder[i];
            inOrderMap[val] = i;
        }
        return helper(0, inorder.length-1);
        function helper(leftIdx:number, rightIdx:number): TreeNode | null {
            if(leftIdx > rightIdx) return null;
            let rootVal = postorder[postIdx];
            let root = new TreeNode(rootVal);
            let inorderIdx = inOrderMap[rootVal];
            postIdx--;
            root.right = helper(inorderIdx+1, rightIdx);
            root.left = helper(leftIdx, inorderIdx-1);
            return root;
        }
    };
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
     console.log(Math.floor(numArr.length/2)-1)
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
     console.log("====>",root.val);
     printTree(root.left);

     printTree(root.right);
 }
