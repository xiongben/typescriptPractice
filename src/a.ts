
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

// console.log(userlength);

//Interface
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig):{color: string, square: number} {
   var newsquare = {color: "red", square: 100};
   if(config.color){
       newsquare.color = config.color;
   }
   if(config.width){
       newsquare.square = config.width*config.width;
   }
   return newsquare;
}

var newsquare = createSquare({color: "yellow",width:50,opacity:0.5});
var mysquare = createSquare({color: "blue",opacity: 0.5} as SquareConfig)
// console.log(mysquare);

// function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch : SearchFunc;
mySearch = function(source:string, subString:string):boolean{
    let result = source.search(subString);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}
let myarray:StringArray;
myarray = ["bob", "jack"];
let mystr = myarray[0];

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d:Date) {
//         this.currentTime = d;
//     }
//     constructor(h:number, m: number){ }
// }

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }

// interface ClockInterface {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface{return new ctor(hour,minute)}

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

var mytextbox = new Button();
mytextbox.select();

// function
function buildName(firstName: string, lastName?: string){
    return firstName + " " + lastName;
}

let mybuildname = buildName("kakaxi","mingren");

// function identity<T>(args: T): T{
//     return args;
// }
// let output = identity<string>("hello");
// let output2 = identity("hello");

interface GenericIdentityFn<T> {
    <T>(arg: T): T;
}
function identity<T>(args: T) : T {
    return args;
}

let myidentity: GenericIdentityFn<number> = identity;

interface Lengthwise {
    length: number;
}

function loggingidentity<T extends Lengthwise>(args: T):T{
    console.log(args.length);
    return args;
}

loggingidentity({length: 10, value: 3});

function create<T>(c:{new():T;}):T {
    return new c();
}

//枚举
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let mycircle1: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}

// enum E {
//     Foo,
//     Bar,
// }

// function f(x: E) {
//     if (x !== E.Foo) {
//         //             ~~~~~~~~~~~
//         // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     }
// }
// console.log(E.Bar)

declare enum Enumm {
    A = 1,
    B,
    C = 2
}



// module MyModule {
//     // Claiming this enum exists with 'declare', but it doesn't...
//     export declare enum Lies {
//         Foo = 0,
//         Bar = 1     
//     }
//     var x = Lies.Foo; // Depend on inlining
// }

// module SomeOtherCode {
//     // x ends up as 'undefined' at runtime
//     import x = MyModule.Lies;

//     // Try to use lookup object, which ought to exist
//     // runtime error, canot read property 0 of undefined
//     console.log(x[x.Foo]);
// }
// window.onmousedown = function(mouseEvent:any) {
//     console.log(mouseEvent.button);  //<- Error
// };

// let s = "foo";
// s = null;

// type Tree<T> = {
//     value: T;
//     left: Tree<T>;
// }



type Easing = "ease-in" | "ease-out" | "ease-in-out";

