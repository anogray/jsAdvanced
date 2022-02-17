
console.log("``````````` Types of invocation methods ````````````\n\n");

let obj1 = {
    name : "Phil",
    getSum : function (a,b, methodName){
        console.log(`${methodName} where a = ${a} and b = ${b}`);
        return ` ${this.name} a+b = ${a+b}\n\n`
    }
}

console.log(obj1.getSum(1,2,"Normal Fxn Called from object : "));

let obj2 = {
    name : "Eden"
}

console.log("Now using some other object to invoke their properties/methods \n\n");

console.log(obj1.getSum.call(obj2, 4,5, "Call Method :"));

console.log(obj1.getSum.apply(obj2, [6,7,"Apply Method : "]));

let bindMethod = obj1.getSum.bind(obj2, 11,12);

console.log(bindMethod("Bind Method"));

