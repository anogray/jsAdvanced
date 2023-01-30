function Person(){
    this.name="Name1";
    setTimeout(function(){
        console.log("setTImeout",this.name)
    },100);
}

// function Person(){
//     this.name="Name1";
//     setTimeout(function(){
//         console.log("setTImeout",this)
//     }.bind(this),100);
// }

//vs arrow function

// function Person(){
//     this.name="Name1";
//     setTimeout(()=>{
//         console.log("setTImeout",this)
//     },1000);
// }


// const me = new Person();

//not to use arrow function
this.globalObj = "globalObj"
const meObj = {
    name:"Avengers",
    talk :  function(){
        return this
    },
    arrowTalk: ()=>{
        return this
    }
}

console.log("fxnVsArrow",meObj, meObj.talk(), meObj.arrowTalk())



