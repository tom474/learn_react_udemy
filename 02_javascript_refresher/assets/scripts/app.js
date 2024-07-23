// --------------------------------------------------

// import { apiKey } from "./util.js";
// console.log(apiKey);

// import apiKey from "./util.js";
// console.log(apiKey);

// import { apiKey, abc as content } from "./util.js";
// console.log(apiKey);
// console.log(content);

// import * as util from "./util.js";
// console.log(util.apiKey);
// console.log(util.abc);

// --------------------------------------------------

// const userMessage = "Hello World!!!";
// console.log(userMessage);

// --------------------------------------------------

// function createGreeting(userName, message = "Hello!") {
// 	console.log(userName);
// 	console.log(message);
// 	return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// --------------------------------------------------

// export default (userName, message) => {
//     console.log("Hello");
//     return userName + message;
// }

// --------------------------------------------------

// const user = {
// 	name: "Max",
// 	age: 34,
// 	greet() {
// 		console.log("Hello!");
// 		console.log(this.age);
// 	},
// };

// console.log(user.name);
// user.greet();

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	greet() {
// 		console.log("Hi!");
// 	}
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// --------------------------------------------------

// const hobbies = ["Sport", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sport");
// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// --------------------------------------------------

// const userNameData = ["Max", "Schwarzmüller"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
// console.log(firstName);
// console.log(lastName);

// const [firstName, lastName] = ["Max", "Schwarzmüller"];
// console.log(firstName);
// console.log(lastName);

// --------------------------------------------------

// const user = {
// 	name: "Max",
// 	age: 34,
// };
// console.log(user.name);
// console.log(user.age);

// const { name: userName, age } = {
// 	name: "Max",
// 	age: 34,
// };
// console.log(userName);
// console.log(age);

// --------------------------------------------------

// const hobbies = ["Sports", "Cooking"];
// const newHobbies = ["Reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
// 	name: "Max",
// 	age: 34,
// };
// const extendedUser = {
// 	isAdmin: true,
// 	...user,
// };
// console.log(extendedUser);

// --------------------------------------------------

// const password = prompt("Your password: ");
// if (password === "Hello") {
//     console.log("Hello works");
// } else if (password === "hello") {
//     console.log("hello works");
// } else {
//     console.log("Access not granted.");
// }

// --------------------------------------------------

// const hobbies = ["Sports", "Cooking"];
// for (const hobby of hobbies) {
// 	console.log(hobby);
// }

// --------------------------------------------------

// const list = document.querySelector("ul");
// list.remove();

// --------------------------------------------------

// function handleTimeout1() {
// 	console.log("Timed out!");
// }

// function handleTimeout2() {
// 	console.log("Time out ... again!");
// }

// setTimeout(handleTimeout1, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
// 	console.log("More timing out...");
// }, 4000);

// --------------------------------------------------

// function init() {
// 	function greet() {
// 		console.log("Hi!");
// 	}
// 	greet();
// }
// init();

// --------------------------------------------------

// const hobbies = ["Sports", "Cooking"];
// hobbies = [];
// hobbies.push("Working");
// console.log(hobbies);
