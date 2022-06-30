// String Literal
// with "", '' and ``

var greetingDoubleQoute = "Hello, my name is John Doe";
var greetingSingleQoute= 'Hello, my name is John Cena';
var greetingTick = `Hello, my name is John Travolta`;

console.log(greetingDoubleQoute);
console.log(greetingSingleQoute);
console.log(greetingTick);

// with new line character behavior
var greetingDoubleQoute = "Hello, my name \n is John Doe";
var greetingSingleQoute = 'Hello, my name is John Cena';
var greetingTick = `Hello, \n my name is 
John  Travolta`;

console.log(greetingDoubleQoute);
console.log(greetingSingleQoute);
console.log(greetingTick);

//output:
// karakter \n akan di identifikasi sebagai baris baru dalam pernyataan string. ketiga format literal string mendukung karakter tersebut. 
// Khusus string literal dengan tick terdapat fitur-fitur tambahan, seperti dukungan text interpolasi dan men format string keluaran sama dengan format penulisan scriptnya.

// additional 
// escape string
var escapeString = '\'\t,/\\\r$#'
console.log(escapeString)
// output:
// \r\n baris baru
// \t tab
// \\ \` escape character

// PROPERTY and METHODS String
// 
// 
const string1 = 'this is string 1'
console.log(string1.prototype)
console.log(string1.constructor('this is string constuctor'))
console.log(string1.length)
console.log(string1)

const string0 = new String('this is string')
console.log(string0.prototype)
console.log(string0.constructor('this is string constuctor'))
console.log(string0.length)
console.log(string0)

const string2 = String('this is string 2')
console.log(string2.prototype)
console.log(string2.constructor('this is string constuctor'))
console.log(string2.length)
console.log(string2)