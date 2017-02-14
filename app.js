'use strict';

var cookieStoreOne = {
  location: ['1st and Pike','Seatac Airport'],
  minCustomers: [23,3],
  maxCustomers: [65,24],
  avgCookiesPerCust: [6.3,1.2],
  cookiesPerHour: [],
  customersNeeded: function(){
    for (var i = 6; i < 21; i++){
      var randomNumCustomers = Math.floor(Math.random() * (this.maxCustomers + - this.minCustomers) + this.minCustomers);
      var totalCookiesSold = randomNumCustomers * this.avgCookiesPerCust;
      this.cookiesPerHour.push(parseInt(totalCookiesSold));
    }
  }
};
cookieStoreOne.customersNeeded();
console.log(cookieStoreOne.cookiesPerHour);
console.log(cookieStoreOne.location[1]);
/*
//Object literal notation
var userFullName = prompt('please enter your full name');
var userEmail = prompt('please enter your email');

var myUser = {
  fullName:userFullName,
  userName:'Carlomari',
  email: userEmail,
  numberOfFollowers: 5,
  login: function(){
    console.log(this.fullName + ' has now loged in!');
  }
};

console.log(myUser);
myUser.login();

console.log('--------PRESENT ELEMENTS!-----------');

//'h1' is an element node type
var userElement = document.createElement('h1'); //step 1
//userElement = <h1></h1>

//html element node
userElement.setAttribute('id', 'first-user-heading'); //step 2
//userElement = <h1 id='first-user-heading'></h1>

userElement.textContent = myUser.fullName;
//userElement = <h1 id="first-user-heading">someUserName</h1>

//place on top of page
var sectionEl = document.getElementById('main-content');
//sectionEl = <section id="main-content"></section>

sectionEl.appendChild(userElement); //Step 3

//Gcode
var userHeadingEl = document.getElementById('first-user-heading'); //alt step 1
userHeadingEl.textContent = myUser.fullName; //alt step 2

var userElement = document.createElement('h1'); //step 1
// userElement = <h1></h1>

userElement.setAttribute('id', 'first-user-heading'); //step 2
// userElement = <h1 id="first-user-heading"></h1>

userElement.textContent = myUser.fullName;
//userElement = <h1 id="first-user-heading">someUsername</h1>

var sectionEl = document.getElementById('main-content'); //reference to parent
//<section id ="main-content"></section>

sectionEl.appendChild(userElement); //step 3
*/
