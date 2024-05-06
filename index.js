// Variables 

// Variables is a container for storing data.

// a variable behave as if it was the value that it contains

// Two steps 

// Declaration (var, let, const) 

// assignment (= assignment operator)

// let a;  // Declaration

// a = 101;  // assignment 

// let userName = "Student"; // String data

// let age = 21;  // Nummber 

// let student = "true";  // Booleans 

// console.log(userName);

// console.log(age);

// console.log(student);


// function without name 


// const greeting = function() {

//      console.log("Hello Students!!!");

// }

// greeting();


// let count = 0;

// document.getElementById("increaseBtn").onclick = function() {

//     count += 1;
    
//     document.getElementById("myLabel").innerHTML = count;

// }

// document.getElementById("decreaseBtn").onclick = function() {

//     count -= 1;
    
//     document.getElementById("myLabel").innerHTML = count;

// }


// function increaseCount() {

//       // count = count + 1;

//       count += 1;

//       document.getElementById("myLabel").innerHTML = count;

// }


// function decreaseCount() {

    // count -= 1;
    
    // document.getElementById("myLabel").innerHTML = count;
    
// }

// ES6

// Arrow = compact alternative to a traditional function


// let a = 1;

// let b = 2;

// let c = 3;

// let d = 4;

// let e = 5;

// function sum1() {

//   return  x + y;

// }

// function sum2(x, y, z) {

//     return  x + y + z;
  
//   }

  
// function sum3(a,b,c,d) {

//     return  a + b + c + d;
  
//   }

//   function sum4(a,b,c,d,e) {

//     return  a + b + c + d + e;
  
//   }

// console.log(sum(a,b,c,d,e));

// function sum(...numbers) {

//     let total = 0;
    
//     for(let number of numbers) {

//         //  total = total + number;

//         total += number;
        
//     }

//     return total;

// }

// let total = sum(2, 3);

// displayConsole(total);

// displayDom(total);

// function sum(x, y) {

//    let result = x + y;

//    return result;

// }

// sum(2, 3, displayDom);

// function sum(x, y, myFunc) {

//     let result = x + y;

//     myFunc(result);

// }

// function displayConsole(output) {

//     console.log(output);

// }

// function displayDom(output) {

//     document.getElementById("myLabel").innerHTML = output;

// }

// Array.ForEach ----> Executes a provided call back function once for each array elements



// let students = ["ganesh", "murugan", "karnan"];

// // let students = ["GANESH", "MURUGAN", "KARNAN"];    // ganesh murugan karnan

// // let students = ["GANESH", "MURUGAN", "KARNAN"];    // gANESH, mURUGAN, kARNAN

// // Print the elememts in the Document or website 

// students.forEach(capitilize);

// students.forEach(print);

// // console.log(students[0]);
// // console.log(students[1]);
// // console.log(students[2]);

// function capitilize(element, index, array) {

//  //         1                 K             +   arnan              =   Karnan
//      array[index] = element[0].toUpperCase() + element.substring(1);   

// }

// function print(element) {

//    console.log(element);

// }


// let numbers = [1, 2, 3, 4, 5];

// let squares = numbers.map(square);

// squares.forEach(print);

// function square(element) {

//      return Math.pow(element, 2);

// }



// function print(element) {

//     console.log(element);

// }

const onlineStore = new Map([

    ["Redmi pro", 5000],
    ["HP Laptop", 7000],
    ["Backpack", 1000],
    ["Formal Shoes", 1500],
    ["Purse", 500]


]);


let shoppingCart = 0;

// shoppingCart = shoppingCart + 1;

// shoppingCart += onlineStore.get("HP Laptop");
// shoppingCart += onlineStore.get("Backpack");

onlineStore.set("water bottle", 300);
onlineStore.delete("water bottle");

console.log(onlineStore.has("Purse"));
console.log(shoppingCart);

console.log(onlineStore.size);

onlineStore.forEach((value, key) => console.log(`${key}  ${value}`));







