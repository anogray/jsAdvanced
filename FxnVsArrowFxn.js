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