"use strict";


let nums = [1, 2, 3, 5, 6, 8, 21];

function sumOfOddNums(arr) {
    let sum = 0;
    for (const item of arr) {
        if (item % 2 == 1) {
            sum += item;
        }
    }
    console.log(sum);
}

// sumOfOddNums(nums);

function sumOfEvenNums(arr) {
    let sum = 0;
    for (const item of arr) {
        if (item % 2 == 0) {
            sum += item;
        }
    }
    console.log(sum);
}

// sumOfEvenNums(nums);

function checkOddNum(num) {
    return num % 2 == 1;
}

function checkEvenNum(num) {
    return num % 2 == 0;
}

function sumOfNumsByCondition(arr, callback) {
    let sum = 0;
    for (const item of arr) {
        if (callback(item)) {
            sum += item;
        }
    }
    console.log(sum);
}

// sumOfNumsByCondition(nums,checkOddNum)
// sumOfNumsByCondition(nums,checkEvenNum)

//sumOfNumsByCondition(nums, m => m % 2 == 1);

let result = nums.filter(m => m > 10);

let result2 = nums.find(m => m == 6);

let result3 = nums.findIndex(m => m == 6);

// console.log(result3);


class Animal {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let animal = new Animal(100, 200);

animal.name = "test"

// console.log(animal.name);

class Bird extends Animal {
    constructor(a, b) {
        super(a, b)
        this.name = "Bird"
    }

    getName(t) {
        console.log(t);
    }
}

let bird = new Bird(200, 300);
// bird.getName(2000);


let surname = new String();

surname = "test"

let isMarried = new Boolean();

isMarried = true;

// console.log(isMarried);

class Test {
    constructor(name) {
        this.name = name;
    }
}

Test.prototype.surname = "surname test";
Test.prototype.getName = function () {
    console.log("function test");
}

let test = new Test("hello");
// test.getName();


String.prototype.customContains = function (str) {
    return this.includes(str);
}

let name = "Rashad";

// console.log(name.customContains("a"));


let date = new Date();

let year = date.getFullYear();

let month = date.getMonth();

let output = `${month + 1} - ${year}`

// console.log(output);

let data = Math.sqrt(64);

let data2 = Math.pow(2, 5);

// console.log(data2);


// let elems = document.getElementsByTagName("h1");

// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     console.log(element);
// }

// let elem = document.getElementsByClassName("test");
// console.log(element);

// let elem = document.getElementById("products");
// console.log(elem);


// let elem = document.querySelector("h1");

// // console.log(elem);

// let elems = document.querySelectorAll("h1");

// for (let i = 0; i < elems.length; i++) {
//         const element = elems[i];
//         console.log(element);
//     }


// let elems = document.querySelectorAll("h1")
// elems[0].style.backgroundColor = "red";

// for (const item of elems) {
//     item.style.backgroundColor = "red";
// }


let h1 = document.querySelector("h1");

// h1.innerText = "test"
// h1.innerHTML = "<spam>Test</spam>"

// console.log(h1.innerText);
// console.log(h1.innerHTML);

// h1.style.backgroundColor = "blue";
// h1.style.margin = "200px";

// h1.className = "active test";
// h1.classList.add("test2");
// h1.classList.remove("test");

// console.log(h1.classList.contains("active"));

// h1.setAttribute("id","text");
// console.log(h1.getAttribute("id"));
// console.log(h1.hasAttribute("id"));

let button = document.querySelector("button");

button.addEventListener("click",function(){
    this.style.backgroundColor = "magenta";
    h1.style.backgroundColor = "green";
    h1.style.color = "white";
    let buttonText = this.innerText;
    this.innerText = h1.innerText;
    h1.innerText = buttonText;
})