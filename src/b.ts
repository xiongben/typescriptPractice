
import {StringValidator} from './module';
import * as module2 from 'url';

/// <reference path="Validation.ts" />


function pluck<T,K extends keyof T>(o:T,names:K[]):T[K][]{
    return names.map(n => o[n]);
}
function pluck2<T,K extends keyof T>(o:T,names:K):T[K]{
    return o[names];
}

interface Person {
    name: string;
    age: number;
}

let person1:Person ={
    name: 'kakaxi',
    age: 24,
}

let strings1:string[] = pluck(person1,['name']);
console.log(strings1);

interface Map1<T> {
    [key: string]:T;
}
let keys1: keyof Map1<number>; //string
let value1: Map1<number>;  //number


let pets = new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";
console.log(pets);
for (let pet in pets) {
    console.log(pet); // "species"
}

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return false;
    }
}

let letter1 = new LettersOnlyValidator();
console.log(letter1.isAcceptable("8888"));

let myUrl = module2.parse("http://www.typescriptlang.org");

// let strings11 = ["Hello", "98052", "101"];
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["Letters only"] = new Validation.LettersOnlyValidator();



// let bbs:Validation.StringValidator = {
//     isAcceptable(s){
//         return false
//     }
// }

// console.log(bbs)

// let bbs2 = new Validation.Xbclass();




