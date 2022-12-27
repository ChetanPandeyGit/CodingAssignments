//Q1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

const parent = {
    calc(){
        console.log(`${this.firstName} ${this.lastName} ${this.collegeName}`);
    }
}
const child = Object.create(parent);
child.firstName = "Chetan";
child.lastName = "Pandey";
child.collegeName = "Graphic Era";
child.calc();

const child2 = Object.create(parent);
child2.firstName = "Andrea";
child2.lastName = "Botez";
child2.collegeName = "M.I.T.";
child2.calc();

//Q2. Write code to explain prototype chaining.

// The prototype of an object would also have a prototype object. This continues until we reach the top level when there is no prototype object. This is called prototype chaining or prototype chain in JavaScript.

console.log(child.__proto__);
console.log(child.__proto__.__proto__);
console.log(child.__proto__.__proto__.__proto__);

//Q3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const AddSum = {
    name: "EA16",
    add : function(a){
        let sum = 0;
        for(let i = 0 ; i < a.length ; i++){
            sum += a[i];
        }  
        console.log(sum);  
    }
}
AddSum.add([2,4,8,10,20]);

//Q4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      console.log( this.present() + ', it is a ' + this.model);
    }    
  }
  
  let myCar = new Model("Ford", "Mustang");
  myCar.show();