import React from "react";



// Function.prototype.bind_ = function (obj){
//     if(typeof this != 'function'){
//         throw new Error("can't bind");
//     }
//     var args = Array.prototype.slice.call(arguments,1);
//     var fn = this;
//     var _fn = function (){}
//     var bound = function (){
//         var params = Array.prototype.slice.call(arguments);
//         fn.apply(this.constructor === fn?this:obj,args.concat(params))
//     }
//     _fn.prototype = fn.prototype;
//     bound.prototype = new _fn();
//     return bound;
// }

// function type(obj){
//     var regexp = /\s(\w+)\]/;
//     var res = regexp.exec(Object.prototype.toString.call(obj))[1];
//     return res;
// }

// Function.prototype.call_ = function (obj){
//     obj = obj?Object(obj):window;
//     var args=[];
//     obj.fn = this;
//     for(var i=1;i < arguments.length;i++){
//         args.push("arguments["+i+"]");
//     }
//     var res = eval("obj.fn("+args+")");
//     delete obj.fn;
//     return res;
// }
//
// Function.prototype.apply_ = function (obj,arr){
//     obj = obj?Object(obj):window;
//     obj.fn = this;
//     var res;
//     if(!arr){
//         res = obj.fn();
//     }else{
//         var args = [];
//         for(var i=0;i<arr.length;i++){
//             args.push("arr["+i+"]");
//         }
//         res = eval("obj.fn("+args+")");
//     }
//     delete obj.fn;
//     return res;
// }

// function debounce(fn,delay){
//     let timeout = null;
//     return function (){
//         clearTimeout(timeout);
//         timeout = setTimeout(()=>{
//             fn.apply(this,arguments)
//         },delay)
//     }
// }

// function throttle(fn,delay){
//     let canrun = true;
//     return function (){
//         if(!canrun) return;
//         canrun = false;
//         setTimeout(()=>{
//             fn.apply(this,arguments);
//             canrun = true;
//         },delay)
//     }
// }


