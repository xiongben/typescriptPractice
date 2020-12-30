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
