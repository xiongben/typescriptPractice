
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;



function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
let userlength = (user as string).length;

let aa: string = greeter(user);

let x: [string, number];

x= ['ddd',10];

enum Color{Red, Green, Blue};
let c:Color = Color.Blue;

console.log(userlength);