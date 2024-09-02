const p1 = new Promise((resolve)=>{
    console.log("initiating p1")
    setTimeout(()=>resolve("Promise p2"),10000) 
})

const p2 = new Promise((resolve)=>{
    console.log("initiating p2")
   setTimeout(()=>resolve("Promise p2"),200) 
})


 async function promiseFxn(){

    console.log("promiseFxn initiating");

    const resolve1 = await p1;

    console.log({resolve1});

    const resolve2 = await p2;

    console.log({resolve2});

    console.log("result last line executed")

}

promiseFxn();