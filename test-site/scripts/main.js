'use strict'

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var img = document.querySelector('img');
img.onclick = function () {
    var mySrc = img.getAttribute('src');
    console.log('myscr = '+mySrc);
    if (mySrc === 'images/image_1.jpg') {
        img.setAttribute('src', 'images/image_2.jpg')
    } else {
        img.setAttribute('src', 'images/image_1.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}