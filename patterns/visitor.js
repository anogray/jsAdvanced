// What is the Mediator pattern?
// The Mediator pattern provides central authority over a group of objects by controlling how these objects interact with each other. The "central" object is known as the 'mediator'. The mediator pattern is useful in scenarios where every object needs to be aware of any state change in any other object in the group.


/*
    Visitor Design Pattern -> https://youtu.be/x-Gx0Ym1Di0
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

function Employee(name, salary)
{
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function()
  {
    return this.salary
  },
  setSalary: function(sal)
  {
    this.salary = sal
  },
  accept: function(visitorFunction)
  {
    visitorFunction(this)
  }
}
/////////////////////////////////////////////

const devsage = new Employee("DevSage", 10000)
console.log(devsage.getSalary())

function ExtraSalary(emp)
{
  emp.setSalary(emp.getSalary() * 2)
}

devsage.accept(ExtraSalary)
console.log(devsage.getSalary())