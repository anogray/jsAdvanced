function custForEachBody(){

if (!Array.prototype.customForEach) {
    Array.prototype.customForEach = function(callback) {
       for(let item of this) {
          // pass each element to callback
          callback(item);
       }        console.log("checking",callback(22))

     }
   }
   
   // declare an array
   const arr = [10,20,30,40];
   console.log(arr);
   // call custom forEach() on array 
   const doubleArray = arr.customForEach((i) => console.log(i * 2));
   // prints 20 40 60 80
   console.log(doubleArray);

}

// custForEachBody();

function customMapFxn(){
    if (!Array.prototype.customMap) {
        Array.prototype.customMap = function(callback) {
           let newArray = [];
           // iterate array elements
           for(let item of this) {
             // pass each element to callback and push response to new array
             newArray.push(callback(item));
           }
           // return final array
           return newArray;
         }
       }
       
       // declare an array
       const arr = [10,20,30,40];
       // call custom map() on array to square each element or perform any other operation
    //    const squaredArray = arr.customMap((i) => i * i);
       const squaredArray = arr.customMap(function(i){
                            return i * i 
                            });

       // prints [100,400,900,1600]
       console.log(squaredArray);
}

// customMapFxn();

function customFilterFxn(){
    if (!Array.prototype.customFilter) {
        Array.prototype.customFilter = function(callback, context){
            const newArray = [];
            // iterate array elements
            for(let item of this){
                // pass each element to callback and if elements that pass the test push response to new array
                if(callback.call(context, item)){
                    newArray.push(item);
                }
            }
            // return final array
            return newArray;
        }
      }
      
      // declare an array
      const numbers = [1, 2, 3, 4];
      // call custom filter() on array to filter even numbers
      const evens = numbers.customFilter(item => item % 2 === 0);
      // prints [2,4]
      console.log(evens);
}

// customFilterFxn();

