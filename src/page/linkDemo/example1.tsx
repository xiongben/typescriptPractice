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
    // sortLinkDemo1()
    // removeDemo2()
    // swapNodeDemo1()
    // combinationSumDemo1()
    reverseDemo3()
}

function reverseDemo3(){
    let list = [1,2,3,4,5];
    var head:ListNode = buildLink(list);
    let m = 2, n = 4;
    let newHead = reverseBetween(head,m,n);
    printLink(newHead);

    function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
        if(head == null || head.next == null) return head;
        let res:ListNode = new ListNode(0);
        res.next = head;
        let pre:ListNode | null = res;
        for(let i = 0; i < m-1; i++){
            pre = (pre as ListNode).next;
        }
        let start: ListNode | null = (pre as ListNode).next;
        let then : ListNode | null = (start as ListNode).next;
        for(let i = 0; i < n-m; i++){
            (start as ListNode).next = (then as ListNode).next;
            (then as ListNode).next = (pre as ListNode).next;
            (pre as ListNode).next = then;
            then = (start as ListNode).next;
        }
        return res.next;
    };
}

function combinationSumDemo1(){
    let candidates = [2,3,5], target = 8;
    console.log(combinationSum(candidates,target));

    function combinationSum(candidates: number[], target: number): number[][] {
        let res:number[][] = new Array();
        if(candidates.length == 0) return res;
        candidates.sort((a,b)=>a-b);
        let candidate:number[] = new Array();
        dfs(candidates,target,res,candidate);
        return res;

        function dfs(candidates: number[], target: number,  res: number[][],candidate:number[]){
            if(target == 0){
                res.push([...candidate]);
                return
            }
            for(let i = 0; i < candidates.length; i++){
                if(target - candidates[i] < 0){
                    break;
                }
                if(candidate[candidate.length-1] < candidates[i]) break;
                candidate.push(candidates[i])
                dfs(candidates,target-candidates[i],res,candidate);
                candidate.pop();
            }
        }
    };
}

function swapNodeDemo1(){
    let list = [1,2,3,4];
    var head:ListNode = buildLink(list);
    let newHead = swapPairs(head);
    printLink(newHead)

    function swapPairs(head: ListNode | null): ListNode | null {
       if(head == null || head.next == null) return head;
       let next:ListNode | null = head.next;
       head.next = swapPairs(next.next);
       next.next = head;
       return next;
    };
}

function removeDemo2(){
    var list = [1,1,2,3,3];
    var head:ListNode = buildLink(list);
    var newHead = deleteDuplicates2(head);
    printLink(newHead);

    function deleteDuplicates(head: ListNode | null): ListNode | null {
        let point: ListNode | null = new ListNode();
        let cur: ListNode | null = head;
        let res:ListNode | null = new ListNode();
        res.next = point;
        while (cur != null){
            while(cur.next != null && cur.val == cur.next.val){
                cur = cur?.next;
            }
            (point as ListNode).next = cur;
            point = (point as ListNode).next;
            cur = cur.next;
        }
        return res.next.next;
    };
    function deleteDuplicates2(head: ListNode | null): ListNode | null {
        if(head == null || head.next == null) return head;
        head.next = deleteDuplicates2(head.next);
        return head.next?.val == head.val? head.next:head;
    };
}

function sortLinkDemo1() {
    var lists = [4,2,1,3];
    var node1:ListNode = buildLink(lists);

    var node2 = sortList(node1);
    printLink(node2);

    function sortList(head: ListNode | null): ListNode | null {
        var nodelists:ListNode[] = [];
        var temp: ListNode;
        while (head != null){
            temp = new ListNode(head.val);
            nodelists.push(temp);
            head = head.next;
        }
        return merge(nodelists,0,nodelists.length-1);
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
