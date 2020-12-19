import React from "react";

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

testDemo();

function testDemo() {
    let node4 = new ListNode(1, null);
    //  let node3 = new ListNode(2,node4);
    // let node2 = new ListNode(2,node3);
    // let node1 = new ListNode(1,node2);
    // var res = isPalindrome(node1);

    // console.log(removeNthFromEnd(node4,1));
    // mergeLinkDemo1()
}

function mergeLinkDemo1() {
    var lists = [[1,4,5],[1,3,4],[2,6]];
    var nodeArr: ListNode[] = [];
    for(var i = 0; i < lists.length; i++){
        nodeArr.push(buildLink(lists[i]))
    }
    // console.log(nodeArr)
    var node1 = mergeKLists(nodeArr);
    printLink(node1);

    function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
        return merge(lists,0,lists.length-1);
    };

    function merge(lists: Array<ListNode | null>, l : number, r: number):ListNode|null {
        if(l > r) return null;
        if(l == r) return lists[l];
        var mid:number = (l + r) >> 1;
        return mergeTwoLink(merge(lists,l,mid),merge(lists,mid+1,r));
    }

    function mergeTwoLink(a:ListNode|null, b:ListNode|null):ListNode|null {
        if(a === null || b === null) return a === null? b : a;
        var head: ListNode = new ListNode();
        var temp: ListNode | null = head;
        var aptr: ListNode | null = a;
        var bptr: ListNode | null = b;
        while(aptr != null && bptr != null){
            if(aptr.val < bptr.val){
                temp.next = aptr;
                aptr = aptr.next;
            }else{
                temp.next = bptr;
                bptr = bptr.next;
            }
            temp = temp.next;
        }
        temp.next = (aptr !== null? aptr : bptr);
        return head.next;
    }
}


function buildLink(arr:number[]):ListNode {
    var head:ListNode = new ListNode();
    if(arr.length < 1) return head;
    var temp:ListNode  = head;
    for(var i = 0; i < arr.length; i++){
        temp.next = new ListNode(arr[i]);
        temp = temp?.next;
    }
    return head.next as ListNode;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    var start: any = head;
    var end: any = head;
    var dummy = new ListNode(-1);
    dummy.next = head;
    var pre: any = dummy;

    for (var i = 0; i < n; i++) {
        end = end.next;
    }
    while (end != null) {
        pre = pre.next;
        start = (start as ListNode).next;
        end = end.next;
    }
    pre.next = start.next;
    return dummy.next;
};


function isPalindrome(head: ListNode | null): boolean {
    if (head == null) return true;
    let fast: any = head;
    let slow: any = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast != null) {
        slow = slow.next;
    }
    slow = reverseNode(slow);
    fast = head;
    while (slow != null) {
        if (slow.val != fast.val) {
            console.log(slow, fast)
            return false;
        } else {
            fast = fast.next;
            slow = slow.next;
        }
    }
    return true;
};

function reverseNode(head: ListNode | null): ListNode | null {
    let pre: ListNode | null = null;
    let next: ListNode | null = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

function printLink(node: ListNode | null) {
    var res = "";
    while (node !== null) {
        res = res + node.val + "==>";
        node = node.next;
    }
    console.log(res);
}
