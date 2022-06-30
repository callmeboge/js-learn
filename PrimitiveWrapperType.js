// Primitive Wrapper Type

// String salah satu type data primitif, 
// nilai primitif dan/atau tipe data primitif merupakan data yang tidak berbentuk object sehinggan tidak memiliki property dan methods

// tipe data primitif
const string1 = 'this is string 1'
console.log(string1.prototype)
console.log(string1.constructor('this is string constuctor'))
console.log(string1.length)
console.log(string1)

// Membuat object string
const string0 = new String('this is string')
console.log(string0.prototype)
console.log(string0.constructor('this is string constuctor'))
console.log(string0.length)
console.log(string0)

// Global function untuk mengubah data ke string
const string2 = String('this is string 2')
console.log(string2.prototype)
console.log(string2.constructor('this is string constuctor'))
console.log(string2.length)
console.log(string2)

// Kenapa pada baris 10, tipe data string yang merupakan tipe data primitif memiliki property length yang VALID.

// Karena JS memiliki fitur bernama "PRIMITIVE WRAPPER TYPE" 
// Fitur ini akan menjalankan proses pembuatan object String secara tersirat, dan akan menghapus objectnya setelah selesai dijalanakan.