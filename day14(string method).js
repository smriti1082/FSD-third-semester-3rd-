let text="Hello, welcome to the world of JavaScript!";
console.log(text);
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("in FSD"));

//agr ja se start hone wale words ko check karna hai to "startsWith()""
//  method ka use karenge
console.log(text.startsWith("Hello"));

//agr humari string ing se end ho rahi hai ya nahi ye check karna hai to
//  "endsWith()" method ka use karenge

//humesa end position -1 print krke dega(string is 1 to 5  but print 1 to 4)
console.log(text.endsWith("JavaScript!"));

//slice ka use karenge to string ke beech me se koi part nikalna hai to
console.log(text.slice(7, 14));

//replace ka use karenge to string ke beech me se koi part ko replace 
// karna hai to
console.log(text.replace("JavaScript", "FSD"));

//substring ka use karenge to string ke beech me se koi part nikalna hai to
console.log(text.substring(7, 14));

//split ka use karenge to string ke beech me se koi part ko split karna
//  hai to
console.log(text.split(" "));

//
