// var Singleton = (function () {
//     var instance;

//     function createInstance() {
//         var object = new Object("I was instantiated at: " + new Date().toLocaleString());

//         return object;
//     }

//     return {
//         getInstance: function () {
//             console.log("called getInstance",instance)
//             if (!instance) {
//                 instance = createInstance();
//             }

//             return instance;
//         }
//     };
// })();

// var instance1 = Singleton.getInstance();
// var instance2 = Singleton.getInstance();

// console.log(instance1);
// console.log(instance2);
// console.log(instance1===instance2);

//vs class

class DBConnection {

    constructor(conString) {
        this.conString = conString
    }

    static getInstance(conString) {

        // console.log("called getInstance",this,conString);
        
        if (!this.instance) {
            this.instance = new DBConnection(conString);
        }
        // console.log("called getInstance",this.instance,conString);

      return this.instance;
    }
  }
  
  let con1 = DBConnection.getInstance('mysqldb1');
  let con2 = DBConnection.getInstance('mysqldb2'); 
  
  //the connections are the same
  console.log("con1: "+con1.conString);
  console.log("con2: "+con2.conString);

console.log("con1===con2: "+con1===con2,
DBConnection.getInstance('mysqldb1')===DBConnection.getInstance('mysqldb2'));  
