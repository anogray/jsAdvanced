let obj1 = {name:"Phil"};
let obj2 = {name : "Brooke"};

let fxn1 = ()=>{}

let arr1 = [];

let val="5";

console.log("String.__proto__ \n: ", String.__proto__,"\n\n");
console.log("String.__proto__.__proto__ \n: ", String.__proto__.__proto__,"\n\n");
console.log("val.__proto__.__proto__ \n: ", val.__proto__.__proto__,"\n\n");
console.log("String.prototype : \n", String.prototype,"\n\n");
console.log("val.__proto__ \n: ", val.__proto__,"\n\n");

console.log("val.prototype : \n", val.prototype,"\n\n");


console.log("Object.__proto__ \n: ", Object.__proto__,"\n\n");
console.log("Object.__proto__.__proto__ \n: ", Object.__proto__.__proto__,"\n\n");
console.log("Object.prototype : \n", Object.prototype,"\n\n");
console.log("obj1.__proto__ : \n", obj1.__proto__,"\n\n");
console.log("obj1.prototype : \n", obj1.prototype,"\n\n");
console.log("obj1.__proto__.__proto__ : \n", obj1.__proto__.__proto__,"\n\n");

console.log("Array.__proto__ \n: ", Array.__proto__,"\n\n");
console.log("Array.__proto__.__proto__ \n: ", Array.__proto__.__proto__,"\n\n");
console.log("arr1.__proto__.__proto__ : \n", arr1.__proto__.__proto__,"\n\n");
console.log("Array.prototype : \n", Array.prototype,"\n\n");
console.log("arr1.__proto__ : \n", arr1.__proto__,"\n\n");
console.log("arr1.prototype : \n", arr1.prototype,"\n\n");

console.log("Function.__proto__ : \n", Function.__proto__,"\n\n");
console.log("Function.__proto__.__proto__ : \n", Function.__proto__.__proto__,"\n\n");
console.log("fxn1.__proto__.__proto__ \n: ", fxn1.__proto__.__proto__,"\n\n");
console.log("Function.prototype \n: ", Function.prototype,"\n\n");
console.log("fxn1.__proto__ \n: ", fxn1.__proto__,"\n\n");
console.log("fxn1.prototype : \n", fxn1.prototype);

let newArr = new Array();
console.log("newArr.prototype: \n",newArr.prototype);
console.log("newArr.__proto__ : \n",newArr.__proto__);
console.log("newArr.__proto__.__proto__ : \n",newArr.__proto__.__proto__);