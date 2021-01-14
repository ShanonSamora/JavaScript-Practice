// Array mutators
let dogs = ["Max","Sam", "Lilah"];

let x = dogs.pop() //this will remove the last item in the array
// X will be "Lilah"

dogs.push("Lilah") //this will add "Lilah" in the last position of the array

x = dogs.shift() //this will remove the first item of the array
//X will be "Max"

dogs.unshift(x) //this will put the value of X ("Max") again in the array


//SPLICE
//let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

let z = dogs.splice(1,1) //starts at index 1 and we're gonna delete one thing

//dogs now will be an Array of ["Max", "Lilah"]
//the variable Z will now be an Array of ["Sam"]

a = dogs.splice(1, 0, "Sam") //with this "Sam" will now be back at the middle of the array
//the '1' is the position we wanna replace, '0' how many we want to delete (since is '0' we shifted everything to the right one)
//and then "Sam" is the value we put in there

dogs.splice(1, 0, "Bandit", "Chloe", "Georgia")
//these 3 names will be added to the array AFTER the first object ("Max")
//dogs will now be an Array of ["Max","Bandit", "Chloe", "Georgia", "Sam", "Lilah"]

a = dogs.splice(1,3)
//dogs will now be an Array of ["Max", "Sam", "Lilah"]
// 'a' will now be an Array of ["Bandit", "Chloe", "Georgia"]

dogs.splice(1)
//this will get rid of everything in the array except for the first object ("Max")
//dogs will now be an Array of ["Max"]


//Accessors

let friends = ["Chris", "Jana", "Miguel"]

friends.concat("Jacob")
//this will NOT add "Jacob" to the array

let x = friends.concat("Jacob")
//this will copy the array of friends and add Jacob in the new array of x
//x will now be an Array of ["Chris", "Jana", "Miguel", "Jacob"]
//The array of friends will stay the same

let y = friends.concat(["Jason", "Donna"])
//this will do the same but it'll add 2 objects
//The array of friends will stay the same

friends.indexOf("Miguel")
//returns the index of Miguel (it'll return the number 2)

friends.indexOf("aaaaaaa") //an object that doesn't exist inside the array
//this will return the number -1 because the object does not exist

friends.includes("Chris")
//this will return TRUE because "Chris" exists inside the array

x = friends.join()
//All of the items in the array will turn into a single String in the variable x
//x will now be a String of "Chris,Jana,Miguel"

x = friends.join("|")
//it will do the same but all of the items will be separated by that |
//x will now be a String of "Chris|Jana|Miguel"

x = friends.join(" is awesome! And so is ")
//x will now be a String of "Chris is awesome! And so is Jana is awesome! And so is Miguel"

friends.slice(1)
//it returns everyting in the array except the first item

friends.slice(1,2)
//it returns exclusively the second item of the array ("Jana")

friends.slice(0,2)
//it returns ["Chris", "Jana"]

//SLICE() does not modify the array


//Iterators

let array1 = [1,2,3,4]

array1.forEach((num) => {
    console.log(num)
})

let count = 0;

array1.forEach((item) => {
    count += item;
})
//count will now be 10


let x = array1.map((num) => {
    return num*3;
})
//this will turn x into a new array, copying the same items from array1 and multiply them by 3
//x will now be an Array of [3,6,9,12]

let numberNerd = array1.map(number => "I love the number " + number)
//numberNerd will now be an Array of ["I love the number 1", "I love the number 2", "I love the number 3", "I love the number 4"]

//The difference between .map and .forEach is that .forEach runs the code, .map returns a new Array of items with that code run on it


//Arrow Function
const myFunction = (a, b, c) => {
    console.log(a,b,c)
    return a*b*c
}


//Objects
const myTruck = {
    make: "Chevy",
    model: "Silverado",
    color: "Gray",
    powerWindows: true,
    year: 2015
}
//myTruck {make: "Chevy", model: "Silverado", color: "Gray", powerWindoes: true, year: 2015}

myTruck.model
//"Silverado"

myTruck.color
//"Gray"


myTruck.make
//"Chevy"

myTruck["make"]
//"Chevy"

let myVar = "color"
myTrucl[myVar]
//"Gray"

myTruck.owner = "Josh"
myTruck
//myTruck {color: "Gray", make: "Chevy", model: "Silverado", owner: "Josh", powerWindoes: true, year: 2015}
//The console automatically puts them in order (A-Z) but Javascript does not do that
//you never know where it's gonna be

myTruck["isOutOfFuel"] = false
//This will also add a new attribute to the object

myTruck["firstColor"]
//Only time when you may be using the [] instead of .color


//Example of an array inside an object
const post = {
    id: "aaaaa2000021",
    author: "Shanons",
    text: "I loathe social media",
    comments: [
        {author: "user1", text: "ME too!"},
        {author: "user2", text: "I love it!"},
        {author: "user3", text: "I don't really care"}
    ]
}

post.comments[0]
//Object { author: "user1", text: "ME too!"}

post.comments[0].text
//"ME too!"


//Object methods
const dog = {
    name: "Max",
    age: 1,
    speak: function() {
        console.log("woof woof")
    }
}

dog.speak()
//woof woof

const cat = {
    name: "Lucifer",
    age: 100,
    speak: function() {
        console.log("meow meow")
    }
}

cat.speak()
//meow meow

const person = {
    name: "Josh",
    age:34,
    sayHi: function() {
        console.log("Hi, I'm " + this.name + " and a I'm " + this.age + " years old.");
    }
}

person.sayHi()
//Hi, I'm Josh and I'm 34 years old.

const otherPerson = {
    name: "Jacob",
    age: 2,
    sayHi: () => {
        console.log("Hi, I'm " + this.name + " and a I'm " + this.age + " years old.");
    }
}

otherPerson.sayHi()
//Hi, I'm  and I'm undefined years old.
//The arrow function will not work on objects

const posts = {
    user: "Shanons",
    data: ["good", "bad", "ugly"],
    print: function() { //Just the method cannot be an arrow function
        this.data.forEach((comment) => { //In this case I CAN use an arrow function because the first function (the method) it's not arrow, the forEach is.
            console.log(comment)
        })
    }
}

posts.print()
//good
//bad
//ugly


//DOM
const title1 = document.getElementById("id")
title1.style.color = "black"

document.getElementsByClassName("className")

const myH1s = document.getElementsByTagName("h1") //all elements that have the tag "h1". Returns an HTML Collection
const firstTitle = document.querySelector(".p-tags") //by CSS selector. First elements with that class that have been modified in CSS in that specific criteria

const allPTags = document.querySelectorAll("p") //returns all elements that meet that criteria. Returns a NodeList.

const firstItem = document.getElementById("number-one")
firstItem.style.color = "orange"

const otherItems = document.getElementsByClassName("red")

//I could not to this
otherItems.style.color = "red"
//Because is an HTML Collection. The HTML Collection is an array. I'd need to do the following:
for (let i = 0; i < otherItems.length; i++) {
    otherItems[i].style.color = "red"
}

const allHeaders = document.getElementsByTagName("h1")
allHeaders[0].style.fontFamily = "cursive"
allHeaders[1].style.fontFamily = "sans-serif"

document.querySelector("p").style.fontSize = "4em"

document.querySelector("#number-one").style.backgroundColor = "blue"
document.querySelector(".red").style.backgroundColor = "blue"
document.querySelectorAll(".red").style.backgroundColor = "green" //this will not work

for (let i = 0; i < 2; i++) {
    document.querySelectorAll(".red")[i].style.color = "white"
} 
//this is inefficient


const allLIs = document.querySelectorAll("li")

for (let i = 0; i < allLIs.length; i++) {
    allLIs[i].style.color = "black"
}
//this is more efficient

const allLiTags = document.getElementsByTagName("li")
allLiTags.forEach() //there is not forEach() on an HTML Collection

const myLis = Array.from(allLiTags)

myLis.forEach() //I can use this now. There is a function


//Modifying DOM Element Text

const title = document.querySelector("h1")
title.textContent = "A different title"

//A more efficient way in one line:
document.querySelector("h1").textContent = "A different title"

//I can't do the same to lists (ol or ul with LIs), It'll get rid of everything.
//Must do the following instead:

const list = document.querySelector("ol")
list.innerHTML = "<li>Replaces the original list</li>"


//Modyfing DOM Element Classes
//to see if there're classes in there
document.querySelector("p").classList

//to add classes
document.querySelector("p").classList.add("red")

document.querySelector("p").classList
//it will now return the class "red"

document.querySelector("p").classList.remove("red")
//removes it

document.querySelector("p").classList.toggle("red")
//will toggle ON or OFF the class with the name "red"


//Modifying DOM Element Attributes

document.querySelector("a").getAttribute("href")
//will tell me the content of the attribute "href" inside the first "a"

document.querySelector("a").setAttribute("href", "https://www.google.com")
//will now change the content of the attribute to google home page

document.querySelectorAll("a")[1].setAttribute("href","https://www.google.com")
//this will set the attribute of the first "a" to google home page



//DOM Events

document.querySelector("h1").addEventListener("click", () => {
    console.log("clicked")
})
//This is just for demonstration, I need to use traditional functions for event listeners
//will print "clicked" when I click on the first 'h1' element

document.querySelector("li").addEventListener("mouseover", () => {
    console.log("you moused over my li")
})
//will print "you moused over my li" when I mouse over the first 'li' element

document.querySelector("p").addEventListener("click", () => {
    document.querySelector("h1").textContent = "You clicked on my paragraph"
})
//will change the first 'h1' element to "You clicked on my paragraph" when I click on the first 'p' element

document.querySelector("h1").addEventListener("click", () => {
    console.log("this is the second event listener")
})
//will print "this is the second event listener" when I click on the first 'h1' element BUT the program will trigger the first event listener and then this one

document.querySelector("ol").addEventListener("click", () => {
    console.log("clicked the ol")
})
//will print "clicked the ol" when I click on ANY of the elements inside an 'ol'


//DO NOT USE ARROW FUNCTIONS ON EVENT LISTENERS

document.querySelector("p").addEventListener("click", () => {
    console.log(this)
})
//it will return the window object

//Do this instead:
document.querySelector("p").addEventListener("click", function() {
    console.log(this)
})
//it will return the 'p' tag when I click on the first 'p' element



const makeRed = function() {
    this.style.backgroundColor = "red"
}
document.querySelector("p").addEventListener("click", makeRed)
//will turn the background color of 'p' to red using a function already established

//It can be applied to other elements and will do the same thing:
document.querySelector("h1").addEventListener("click", makeRed)
document.querySelector("li").addEventListener("click", makeRed)

//Also, the function makeRed() MUSTN'T be an ARROW FUNCTION because it will return an error

const items = document.querySelectorAll("li")
items
//will print all 'li's

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        this.style.color = "red";
    })
}
