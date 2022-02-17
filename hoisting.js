// console.log("check x values",x);
// var x = 11;

var a = 10;
console.log("before var",a);
{
    var a = 100;
    console.log("btw var",a);

}
console.log("after var",a);

let width =199;
{
    console.log("firstinside",{width});
     width = 100;
    console.log("after inside changed",{width});
}
function setWidth(){
    console.log("firstinside",{width});
    var width = 100;
    console.log("after inside changed",{width});
}
// (function(){
//     console.log("firstinside",{width});
//     var width = 100;
//     console.log("after inside changed",{width});
// }())
//setWidth();
console.log("after call widht()",width);

var age = 100;
  function abc(age){
    let dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }
  //abc(age)

//   let consta = 10;
  //block scope

//  {
//      let consta = 11;
//      console.log("const a = ",consta);
//      console.log("const ab = ",consta);


//   }

//function scope

 function fxnBlock(){
     var consta = 11;
      console.log("const a = ",consta);

      function insideMore(){
         var consta = 12;
          console.log("const ab = ",consta);

      }
      insideMore();
      console.log("after insideMore",consta);

  }
  fxnBlock();
  console.log("after fxnBlock",consta);


  console.log("last statement");
