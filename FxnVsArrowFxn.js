// const calculate = {
//     array: [1, 2, 3],
//     sum: () => {
//      // console.log(calculate); // => true
//       return this.array.reduce((result, item) => result + item);
//     }
//   };
//  // console.log(this === window); // => true
//   // Throws "TypeError: Cannot read property 'reduce' of undefined"
//   calculate.sum();

// const calculate = {  
//     array: [1, 2, 3],
//     sum : function(){
//       console.log(this === calculate); // => true
//       return this.array.reduce((result, item) => result + item);
//     }
//   };
//   calculate.sum(); // => 6

function MyCat(name) {
    console.log("inside",name);
    this.catName = name;
    this.isCat = true;

    function isCatPresent() {
        this.isCat++
        console.log("isCatPresent", this.isCat);
    }
}
    // MyCat.prototype.catNameFxn = ()=>{
    //     return this.catName
    // }
    MyCat.prototype.catNameFxn = function(){
        return this.catName
    }
  

const cat = new MyCat("meow0");
console.log({cat});
console.log("result ",cat.catNameFxn());
setTimeout(function(){console.log("regular arrow",cat.catNameFxn())}, 1000);
setTimeout(()=>console.log("timeout arrow",cat.catNameFxn()), 1000);

// const person = {
//     name: 'Alice',
//     greet() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// // Without bind, `this` would be undefined in the greet method
// setTimeout(person.greet, 1000); // Outputs: Hello, undefined!

// // Using bind to ensure `this` refers to `person`
// setTimeout(person.greet.bind(person), 1000); // Outputs: Hello, Alice!