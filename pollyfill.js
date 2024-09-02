let arr1 = [1,2];
Array.prototype.addTwo = function(a,b){
    const result = this.map((item=>item*10));
    console.log("the result is ", result, this, this.length);
    return `The answer is ${a+b} `;
}
console.log("added new function as prototype addTwo ", Array.prototype, arr1.__proto__,arr1.addTwo(1,2));


Function.prototype.bind = function(context,...args) {
    // console.log("checkme",args)
    // Capture the function to bind
    const fn = this;

    // Return a new function with bound context and arguments
    return function(...newArgs) {
        console.log("checknewArgs",{newArgs},fn,{args},{context})
      // Use `apply` to call the function with the bound context and combined arguments
      return fn.apply(context, args.concat(newArgs));
      return fn.apply(context, [...args, ...newArgs]);// return fn.call(context, ...allArgs); (call methjod needs paramters not array)
      // return fn.call(context, ...[...args, ...newArgs]);
    };
  };

  function greet(greeting,  location, punctuation) {
    return `${greeting}, ${this.name} ${location} ${punctuation}`;
  }
  
  // Create an object to use as context
  const person = { name: 'Alice' };
  
  // Create a bound function
  const greetAlice = greet.bind(person, 'Hello','there' );
  
  // Call the bound function with additional arguments
  console.log(greetAlice('!')); // Outputs: "Hello, Alice!"