
console.log("========b========");

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