// inteiros e decimais
const radius = 10;
const pi = 3.14;

// operadores aritimeticos
const area = pi * radius ** 2;

// ordem de precedencia
const crazyOperation = 5 * (10 + 5) ** 2;

//operadores de incremento e decremento
let postlikes = 10;
postlikes++;
console.log("++", postlikes);
postlikes--;
console.log("--", postlikes);
postlikes += 10;
console.log("+=", postlikes);
postlikes -= 5;
console.log("-=",postlikes);
postlikes *= 2;
console.log("*=",postlikes);
postlikes /= 2;
console.log("/=",postlikes);
postlikes %= 2;
console.log("%=",postlikes);
postlikes **= 2;
console.log("**=",postlikes);

// NaN - not a number
console.log(5 / "hello");

//contenação de strings
const likesMessage = "O post tem " + postlikes + " likes";

