
// String Data Type
var str1= "Hello World";
var str2= "Hello World";
console.log(str1==str2);

// Symbol Data Type
var id1= Symbol("Hello World");
var id2= Symbol("Hello World");
console.log(id1==id2);

// Symbol Data Type
var id= Symbol("Hello World");
console.log(id);
// To see the value we have to use Description Prop
console.log(id.description); 
// To print or alert we have to convert into string type
alert(id.toString());
document.write(id.toString());