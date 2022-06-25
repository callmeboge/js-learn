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


