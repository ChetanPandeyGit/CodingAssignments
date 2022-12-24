// Q1. Write the code to access element which is having id as "text".

const textId = document.getElementById('text');
console.log(textId.innerText);

// Q2. Write the code to access element which is having tag as "h1".

const eleAccess = document.getElementsByTagName('h1');
console.log(eleAccess[0].innerText);

// Q3. Write the code to access element which is having class as "box".

const classAccess = document.getElementsByClassName('box');
console.log(classAccess[0].innerText);

// Q4. <h1>Hello </h1>
        // Change the heading from ""Hello"" to ""Hello World"" using DOM functions

const tagValue = document.getElementsByTagName('h1');
const newName = tagValue[2].innerText = "Hello World";
console.log(newName);

// Q5. Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

const button = document.getElementsByClassName('btn');
button[0].addEventListener('click', changesDirection);

function changesDirection(){
    const parent = document.getElementsByClassName('container');
    parent[0].style.flexDirection = "column";
}

// Q6. What`s the difference between window vs document?
/*
Window - It represents a browser window that is the very first object that is loaded in the browser. It is the object of the browser and is part of BOM. Global objects, functions, and variables of JavaScript are members of the window object.
syntax:
window.propertyname;

Document - It represents any HTML document that is loaded inside the window. It is the object of window property and is part of BOM and DOM. All the tags, elements with attributes in HTML are part of the document.
syntax:
document.propertyname;
*/

// Q7. <h1>Hello </h1>
//         Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions

const eleColor = document.getElementsByTagName('h1');
eleColor[3].innerText = 'Hello Prepbytes';
eleColor[3].style.color ='red';
eleColor[3].setAttribute('id','heading');

// Q8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

const h3Text = document.getElementById('hw');
function replaceText(){
        h3Text.innerText = "Welcome to Elevation Academy";
}

// Q9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();        
        
        if(hours < 10) hours = "0" + hours;   
        if(mins < 10) mins = "0" + mins;
        if(secs < 10) secs = "0" + secs;        
                
        const timerClock = document.getElementById('timerClock');
        timerClock.innerHTML = `Current Time-  ${hours} : ${mins} : ${secs} `;
                 
}, 1000);

// Q10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected.

function update(){
const select = document.getElementById('years').value;
document.getElementById('option').innerText = select;
}