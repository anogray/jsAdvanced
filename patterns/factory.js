function Tester(name){
    this.name=name;
    this.type='Tester';
}

function Developer(name){
    this.name=name;
    this.type='Developer';
}

function Employee(){
    this.create=function(name,type){

        switch(type){
            case 1:
                return new Tester(name,type);
            case 2:
            return new Developer(name,type);
        }
    }
}

function callEmployee(){
    console.log("calledEmployee : ",this.name + ' is an '+ this.type)
}

const employee = new Employee();
const employees = [];

employees.push(employee.create("Philip",1));
employees.push(employee.create("Avid",2));

console.log("employees",employees)

employees.forEach(ele => {
    callEmployee.call(ele)
});