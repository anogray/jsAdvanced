async function my(){
    return await Promise.resolve("hi")
}

const x =  my();
// console.log(x)


function fx(y,z){
    console.log("see",this.p,this)
    return this.p + this.q+y+z
}

var add = {p:10,q:20};

// console.log(fx.call(add,30,40),fx.apply(add,[50,60]))


function hc(){
    var hack1 = hack2 = 100;
}
// hc();
// console.log(typeof hack1 == 'undefined')
// console.log(typeof hack2 !== 'undefined',hack2)

var xy= "hi";
function myfxn(){
    console.log(xy)
    var xy = 'hello'

}
// myfxn()

var hk_d = {
    hack_name:'alice',
    hack_get:function(){
        return this.hack_name
    }
}
var h = hk_d.hack_get.bind(hk_d);
var h1 = hk_d.hack_get;
// console.log(h());
// console.log(h1());
// console.log(hk_d.hack_get());






