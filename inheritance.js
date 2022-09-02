// Q1 : Create 2 objects - parent and Child. Attach methods to parent and use those methods in child object using parents prototype?

const parent = {
    fName: "ram",
    lName: "gupta",
    profession : "singer",
    showDetails: function (){
        console.log(` Name is ${this.fName} ${this.lName}, working professional as ${this.profession}`);
    }
}

const child = {
    fName: "shyam",
    lName: "sharma",
    profession: "dancer",
}

child.__proto__ = parent;
parent.showDetails.call(child);

//////////////////////////////////////////////////////////////////

const assgn = {
    fName: "ram",
    lName: "gupta",
    profession : "singer",
    showDetails: function (){
        console.log(` Name is ${this.fName} ${this.lName}, working professional as ${this.prof}`);
    }
}

const assgnOne = {
    fName: "shyam",
    lName: "sharma",
    profession: "dancer",
}

assgnOne.__proto__ = assgn;
assgn.showDetails.call(assgnOne);
console.log(assgnOne.__proto__);
console.log(assgnOne.__proto__.__proto__);
console.log(assgnOne.__proto__.__proto__.__proto__);

///////////////////////////////////////////////////////

Array.prototype.sum = Array.prototype.sum || function (){
    return this.reduce(function(a,b){return a+b},0);
  };

const arr = [1,3,6,2,5,4];
console.log(arr.sum());


////////////////////////////////////////////////////////// 

const student ={
    name: "utkarsh",
    lname: "gupta",
    age : 27,
};

const studentTwo = Object.create(student, {
    dept:{
        value: 'Developer',
    },

    stud:{
        name: "jkl",
        lname:"Joy",
        age:20,
    },

    stud1:{
        name: "opui",
        lname: "vlau",
        age : 25,
    }
})

console.log(Object.getOwnPropertyNames(studentTwo));