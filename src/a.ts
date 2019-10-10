
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

//接口
interface SquareConfig {
    color?: string;
    width?: number;

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

var newsquare = createSquare({color: "yellow",width:50});
var mysquare = createSquare({color: "blue",opacity: 0.5} as SquareConfig)
console.log(mysquare);