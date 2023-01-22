const curry = (fxn)=>{
    return curriedFxn = (...args)=>{
        // console.log("check",fxn.length,args)
        if(fxn.length!=args.length){
            // console.log("check2",fxn.length,args)

            return  curriedFxn.bind(null, ...args)
        }
        // console.log("check3",fxn.length,args)

        return fxn(...args);
    }
}

const total = (x,y,z)=>x+y+z;

const curriedTotal = curry(total);
console.log(curriedTotal(1)(2)(3));
// console.log(curry(total)(1)(2)(3));