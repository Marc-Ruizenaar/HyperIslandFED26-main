// TODO: Set item in localStorage
localStorage.setItem("Name", "Marc");

// TODO: Get item from localStorage
console.log(localStorage.getItem("Name"));

// TODO: Remove item from localStorage
localStorage.removeItem("Name");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const user2 = { name: "NotMarc" };
localStorage.setItem("User2", JSON.stringify(user2));

// TODO: Get an object from localStorage
const retrievedUser2 = JSON.parse(localStorage.getItem("User2") || '{}');

// TODO: Set item in sessionStorage
sessionStorage.setItem("Surname", "Ruizenaar");

// TODO: Get item from sessionStorage
console.log(sessionStorage.getItem("Surname"));

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("Surname");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const user3 = { name: "NotNotMarc" };
sessionStorage.setItem("User3", JSON.stringify(user3));

// TODO: Get an object from sessionStorage
const retrievedUser3 = JSON.parse(sessionStorage.getItem("User3") || '{}');