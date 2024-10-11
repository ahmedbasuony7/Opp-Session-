





function User (id , userName , salary) {
    this.i = id;
    this.userName = userName || "unknown";
    this.salary = salary  <= 5000 ? salary+ 500 : salary; 
}

let userOne = new User(100 , "ahmed" , 5000);
let userTwoe = new User(101 , "saued" , 6000);
let userThree = new User(102 , "ali" , 7000);


console.log(userOne);
console.log(userTwoe);
console.log(userThree);

console.log("##################");
// let userOne = {
//     id : 100 , 
//     userName : "elzero" , 
//     salary : 5000 
// }

// let userTwor = {
//     id : 101 , 
//     userName : "ahmed" , 
//     salary : 6000 
// }

// let userThree = {
//     id : 102 , 
//     userName : "ali" , 
//     salary : 7000 
// }



//  task rectangle 
//  rectangle object  propertiws &&  functions 
function   Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.calcArea = function () {
        return this.width * this.height;
    };

    this.calcPerimeter = function () {
        return 2 * (this.width + this.height);
    };

    this.displayInfo = function () {
        console.log(`Rectangle indexerties is `);
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
        console.log(`Area: ${this.calcArea()}`);
        console.log(`Perimeter: ${this.calcPerimeter()}`);
    };
}

let myRectangle = new Rectangle(5, 7);
myRectangle.displayInfo();


console.log("########  1  ##########");

const obj2 = {
    id: "DS-10",
    location: "SV",
    addr: "123 st",
    
    getSetGen: function() {
        for (let index in this) {
            if (typeof this[index] !== "function") {
                this[`get${capitalize(index)}`] = function() {
                    return this[index];
                };

                this[`set${capitalize(index)}`] = function(value) {
                    this[index] = value;
                };
            }
        }
    }
};


console.log("########  2  ##########");


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

obj2.getSetGen();

console.log(obj2.getId());         
obj2.setLocation("NY");
console.log(obj2.getLocation());   

var user = {
    name: "Ali",
    age: 10
};

obj2.getSetGen.call(user);

console.log(user.getName());   
user.setAge(20);
console.log(user.getAge());   
