// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

const obj = {};
const map1 = new Map();

const arrRes=[];

const arr =[1,2,3,[3,4,9,5,[5,6,8],6,7]];

Array.isArray(arr[2]);


function callMe(arrNested){
    
    if(!arrNested) return;
    
    for(let i=0; i<arrNested.length;i++){
        
        if(!Array.isArray(arrNested[i]) && !map1.has(arrNested[i])){
         map1.set(arrNested[i],arrNested[i]);
        }
        // if(!Array.isArray(arrNested[i]) && !obj[arrNested[i]]){
        //     obj[arrNested[i]] = arrNested[i];

        // }
        else{
            callMe(arrNested[i]);
        }
    }
    
}
callMe(arr);



// for(const idx in obj){
//     arrRes.push(obj[idx]);
// }

for (const [key, value] of map1.entries()) {
    arrRes.push(value)
//   console.log(`${key} = ${value}`);
}

console.log("objVal",arrRes);










