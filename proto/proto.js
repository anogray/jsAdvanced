const human = {

    name:"Philips",
    talk:function(){
        console.log("fxn called",this)
    },
    talkA:()=>{
        console.log("fxn arrow called",this)
    }

}

// human.__proto__ = {
//     name:"Philips",
//     talk:function(){
//         console.log("fxn called",this)
//     },
//     talkA:()=>{
//         console.log("fxn arrow called",this)
//     }
// }

// 2 methods of creating proto
// Object.create(human)
// const newHuman = Object.setPrototypeOf({}, human)


const newHuman = Object.create(human)

// const newHuman = Object.setPrototypeOf({}, human)


// human.name="Steve"
// newHuman.name="Steve"
console.log("humanLog",human,human.__proto__,newHuman,newHuman.__proto__);
