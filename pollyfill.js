let arr1 = [1,2];
Array.prototype.addTwo = function(a,b){
    const result = this.map((item=>item*10));
    console.log("the result is ", result, this, this.length);
    return `The answer is ${a+b} `;
}
console.log("added new function as prototype addTwo ", Array.prototype, arr1.__proto__,arr1.addTwo(1,2));