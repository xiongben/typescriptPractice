import React from "react";

 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

  testDemo();

  function testDemo() {
     let node4 = new ListNode(1,null);
      let node3 = new ListNode(2,node4);
     let node2 = new ListNode(2,node3);
     let node1 = new ListNode(1,node2);
     var res = isPalindrome(node1);
  }


function isPalindrome(head: ListNode | null): boolean {
    if(head == null) return true;
    let fast:any = head;
    let slow:any = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast != null){
        slow = slow.next;
    }
    slow = reverseNode(slow);
    fast = head;
    while(slow != null){
        if(slow.val != fast.val){
            console.log(slow,fast)
            return false;
        }else{
            fast = fast.next;
            slow = slow.next;
        }
    }
    return true;
};

function reverseNode(head: ListNode | null):ListNode | null{
    let pre:ListNode | null = null;
    let next:ListNode | null = null;
    while(head != null){
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

function printLink(node: ListNode | null) {
    var res = "";
  while(node !== null){
      res = res + node.val + "==>";
      node = node.next;
  }
  console.log(res);
}
