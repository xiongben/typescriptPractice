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
    let numArr:(number|null)[] = [1,2,3,null,null,4,5];
    let root: TreeNode | null = buildTree(numArr,1);
    printTree(root);
 }

 function buildTree(numArr:(number|null)[],index:number):TreeNode | null {
     if(index > numArr.length) return null;
    let val:number | null = numArr[index-1];
    // console.log(numArr)
    if(val === null){
        return null;
    }else{
        let node: TreeNode = new TreeNode(val);
        node.left = buildTree(numArr,index*2);
        node.right = buildTree(numArr,index*2+1);
        return node;
    }
 }


 function printTree(root:TreeNode | null) {
     if(root === null) return;
     console.log(root.val);
     printTree(root.left);

     printTree(root.right);
 }
