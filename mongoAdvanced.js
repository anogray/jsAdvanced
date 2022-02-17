// let arr = new Array(20).fill(0);

// console.log("checkarr",arr);

// let tempObj = {
//         updateOne : {
//             filter: { symbol: 0 },
//             update: { $set : { logo : "abcdef" } }
//         }
    
// }

let obj = {a:10};

let newArr=[];

for(let i=0; i<5; i++){
    obj.a=i
        newArr.push(obj);
}
console.log({newArr});

// let objadd={a:1}
// objadd.a={$set : { logo : "abcdef" }};
// console.log(objadd)



// let tempObj = {
//     updateOne : {
//         filter: { symbol: 0 },
//         update: { $set : { logo : "abcdef" } }
//     }

// }

// let newArr = [
// {
// "_id": {
//   "$oid": "61eb1f784d0bc6388de00ed0"
// },
// "symbol": "abc",
// "exchange": "nse"
// },
// {
// "_id": {
//   "$oid": "61eb1f784d0bc6388de00ed1"
// },
// "symbol": "def",
// "exchange": "bse"
// },
// {
// "_id": {
//   "$oid": "61eb1f784d0bc6388de00ed2"
// },
// "symbol": "ghi",
// "exchange": "nse"
// }
// ];

// let pushArr=[];

// for(let i=0; i<3; i++){

// tempObj.updateOne=newArr[i].symbol;
// tempObj.updateOne.update = { $set : { logo : i*2 } };
// let newObj={};
// Object.assign(newObj,tempObj)

// pushArr.push(newObj);
// }

// console.log(pushArr[0].updateOne,pushArr[1].updateOne)