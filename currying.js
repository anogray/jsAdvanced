const curry = (fxn)=>{
    return curriedFxn = (...args)=>{
        console.log("check",{args})
        if(fxn.length!=args.length){
            console.log("check2",args)

            return  curriedFxn.bind(null, ...args)
        }
        // console.log("check3",fxn.length,args)

        return fxn(...args);
    }
}

const total = (x,y,z)=>x+y+z;

const curriedTotal = curry(total);
console.log(curry(total)(1)(2)(3));

// const curry = (fxn) => {
//     const curriedFxn = (...args) => {
//         console.log("checkargs ...args",args)
//         if (args.length >= fxn.length) {
//             return fxn(...args);
//         } else {
//             return (...newArgs) => {
//                             console.log("newArgs",newArgs)

//                 return curriedFxn(...args, ...newArgs);
//             };
//         }
//     };
//     return curriedFxn;
// };

// const total = (x,y,z)=>x+y+z;

// const curriedTotal = curry(total);
// // console.log(curriedTotal(1)(2)(3));
// console.log(curry(total)(1)(2)(3));