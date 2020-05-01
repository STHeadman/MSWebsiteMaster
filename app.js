'use strict';
// let = variable 

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

// The backslash in the word "here\'s" is an escape character that's needed to define the apostrophe as text. 
console.log('Here\'s a hidden message');

