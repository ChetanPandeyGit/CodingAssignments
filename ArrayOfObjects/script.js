let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

//Q1.
 const studNames = studentRecords.map((x)=>console.log(x.name.toUpperCase()));          

//Q2.
 const studMarksOver50 = studentRecords.filter((x)=> x.marks > 50);
console.log(studMarksOver50);

//Q3.
 const studOver50120 = studentRecords.filter((x)=> x.marks > 50 && x.id > 120);
 console.log(studOver50120);

//Q4.
 const sumMarks = studentRecords.reduce((sum,x)=> sum += x.marks, 0);
console.log(sumMarks);

//Q5.
 const nameMarksOver50 = studentRecords.filter((x)=> x.marks > 50);
const studName = studentRecords.map((x)=>console.log(x.name));

//Q6.
 const sumOver120 = studentRecords.filter((x)=> x.id > 120).reduce((sum,x)=> sum += x.marks, 0);
console.log(sumOver120);

//Q7. 
let sum = 0;
for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks < 50) {
        studentRecords[i].marks += 15;
    }
    if(studentRecords[i].marks > 50){
        sum += studentRecords[i].marks;
    }
}
console.log(sum);

//Q8.
 function Student (fullName, classNo, rollNo) {
        this.fullName = fullName;
        this.classNo = classNo;
        this.rollNo = rollNo;
    }
const chetan = new Student('Chetan Pandey', 203, 3);
const alessia = new Student('Alessia Cara', 103, 1);
const katy = new Student('Katy Perry', 105, 20);
const ariana = new Student('Ariana Grande', 207, 2);
const demi = new Student('Demi Lovato', 303, 5);
const lana = new Student('Lana Del Rey', 311, 15);
let studentDetails = [];
studentDetails.push(chetan);
studentDetails.push(alessia);
studentDetails.push(katy);
studentDetails.push(ariana);
studentDetails.push(demi);
studentDetails.push(lana);

