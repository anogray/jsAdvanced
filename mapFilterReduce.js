const arr = [
  {
    firstname: "Arjun",
    lastname: "Singh",
    age: 15,
  },
  {
    firstname: "Vinay",
    lastname: "Kumar",
    age: 20,
  },
  {
    firstname: "Sanjay",
    lastname: "Aggarwal",
    age: 24,
  },
  {
    firstname: "Suresh",
    lastname: "Dubey",
    age: 10,
  },
  {
    firstname: "Kapil",
    lastname: "Sharma",
    age: 28,
  },
];

// console.log(arr);

//filter.map
const res = arr.filter((x)=>x.age<20).map((x)=>x.firstname+" "+x.lastname);
console.log(res)


//reduce method

// const result = arr.reduce(function logic(acc,curr){
//     if(curr.age<20){
//     acc.push(curr.firstname+" "+curr.lastname);
//     }
//     return acc
// },[])

const result = arr.reduce((acc,curr)=>{
    if(curr.age<20){
    acc.push(curr.firstname+" "+curr.lastname);
    }
    return acc
},[])

console.log(result)

const showNames = function(item){
  return item.firstname;
}

const resultNames = arr.map(showNames);
console.log({resultNames})