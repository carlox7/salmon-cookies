'use strict';

//First and Pike Store
var firstAndPike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCust: 6.3,
  cookiesPerHour: [],
  //Calculation for cookies per hour
  cookiesNeeded: function(){
    for (var i = 6; i < 21; i++){
      var randomNumCustomers = Math.floor(Math.random() * (this.maxCustomers + - this.minCustomers) + this.minCustomers);
      var totalCookiesSold = randomNumCustomers * this.avgCookiesPerCust;
      this.cookiesPerHour.push(parseInt(totalCookiesSold));
    }
  }
};

//Seatac Store
var seatac = {
  location: 'Seatac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCust: 1.2,
  cookiesPerHour: [],
  cookiesNeeded: function(){
    for (var i = 6; i < 21; i++){
      var randomNumCustomers = Math.floor(Math.random() * (this.maxCustomers + - this.minCustomers) + this.minCustomers);
      var totalCookiesSold = randomNumCustomers * this.avgCookiesPerCust;
      this.cookiesPerHour.push(parseInt(totalCookiesSold));
    }
  }
};

//Seattle Center Store
var seattleCenter = {
  location: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCust: 3.7,
  cookiesPerHour: [],
  cookiesNeeded: function(){
    for (var i = 6; i < 21; i++){
      var randomNumCustomers = Math.floor(Math.random() * (this.maxCustomers + - this.minCustomers) + this.minCustomers);
      var totalCookiesSold = randomNumCustomers * this.avgCookiesPerCust;
      this.cookiesPerHour.push(parseInt(totalCookiesSold));
    }
  }
};

// Capitol Hill Store
var capitolHill = {
  location: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCust: 2.3,
  cookiesPerHour: [],
  cookiesNeeded: function(){
    for (var i = 6; i < 21; i++){
      var randomNumCustomers = Math.floor(Math.random() * (this.maxCustomers + - this.minCustomers) + this.minCustomers);
      var totalCookiesSold = randomNumCustomers * this.avgCookiesPerCust;
      this.cookiesPerHour.push(parseInt(totalCookiesSold));
    }
  }
};
// Alki Store
var alki = {
  location: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCust: 4.6,
  cookiesPerHour: [],
  totalCookies: 0,
  cookiesNeeded: function(){
    for (var i = 6; i < 21; i++){
      var randomNumCustomers = Math.floor(Math.random() * (this.maxCustomers + - this.minCustomers) + this.minCustomers);
      var totalCookiesSold = randomNumCustomers * this.avgCookiesPerCust;
      this.cookiesPerHour.push(parseInt(totalCookiesSold));
    }
  },
  cookieTotal: function(){
    for (var i = 0; i < this.cookiesPerHour.length; i++)
      this.totalCookies += this.cookiesPerHour[i];
  }
};

//Calling function for randomly generated customers per hour
firstAndPike.cookiesNeeded();
seatac.cookiesNeeded();
seattleCenter.cookiesNeeded();
capitolHill.cookiesNeeded();
alki.cookiesNeeded();
alki.cookieTotal();

//Array of cookie stores
var cookieStores = [firstAndPike, seatac, seattleCenter, capitolHill, alki];
console.log(alki.totalCookies);
console.log(firstAndPike.cookiesPerHour);
console.log(seatac.cookiesPerHour);
console.log(seattleCenter.cookiesPerHour);
console.log(capitolHill.cookiesPerHour);
console.log(alki.cookiesPerHour);
//console.log(cookieStoreOne);
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
console.log(userElement);
//html element node
userElement.setAttribute('id', 'first-user-heading'); //step 2
//userElement = <h1 id='first-user-heading'></h1>

userElement.textContent = myUser.fullName;
//userElement = <h1 id="first-user-heading">someUserName</h1>

//place on top of page
var sectionEl = document.getElementById('main-content');
//sectionEl = <section id="main-content"></section>

sectionEl.appendChild(userElement); //Step 3
/*
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
