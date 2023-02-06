// The builder design pattern is a creational pattern that enables you to construct complex objects simply and more declaratively.


function Person(name,weight,height,gender){
    this.name=name;
    this.gender=gender;
    this.height=height;
    this.weight=weight;
}

function PersonBuilder(name,gender){

    this.name=name;
    this.gender=gender;

    // this.setWeight=(weight)=>{
    //     this.weight=weight;
    //     return this;
    // }
    //as this is coming from function not from arrow function which doesn't have own this
    //vs
    this.setWeight=(weight)=>{
        this.weight=weight;
        return this;
    }

    this.setHeight=(height)=>{
        this.height=height;
        return this;
    }

    this.build = ()=>{
        return new Person(this.name, this.gender, this.height, this.weight);
    }
}

const person1 = new Person('Philip','male',100,50);
console.log("Without builder pattern", person1);

const person2 = new PersonBuilder('Philip','male').setHeight(150).setWeight(100).build()
console.log("With builder pattern", person2);