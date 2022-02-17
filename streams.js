let str = "hello";

var buf = Buffer.from(str, 'utf8');

console.log(buf, buf.toString());

console.time("start");
let arr=[];
for(let i =0; i<100000000; i++){
arr.push(i);
}

console.timeEnd("start")