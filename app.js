'use strict';

//First and Pike Store
var firstAndPike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCust: 6.3,
  totalCookies: 0,
  cookiesPerHour: [],
  //Calculation for cookies per hour
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

//Seatac Store
var seatac = {
  location: 'Seatac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCust: 1.2,
  totalCookies: 0,
  cookiesPerHour: [],
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

//Seattle Center Store
var seattleCenter = {
  location: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCust: 3.7,
  totalCookies: 0,
  cookiesPerHour: [],
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

// Capitol Hill Store
var capitolHill = {
  location: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCust: 2.3,
  totalCookies: 0,
  cookiesPerHour: [],
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

//Calling function to count cookie total
firstAndPike.cookieTotal();
seatac.cookieTotal();
seattleCenter.cookieTotal();
capitolHill.cookieTotal();
alki.cookieTotal();

//Array of cookie stores
var cookieStores = [firstAndPike, seatac, seattleCenter, capitolHill, alki];

//Array for store hours
var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var salesPerHour = [firstAndPike.cookiesPerHour,seatac.cookiesPerHour,seattleCenter.cookiesPerHour,capitolHill.cookiesPerHour,alki.cookiesPerHour];
console.log(salesPerHour);

var pikeList = document.getElementById('firstPike');

for (var i = 0; i < firstAndPike.cookiesPerHour.length; i++){
  var listTotal = document.createElement('li');
  listTotal.textContent = time[i] + ': ' + firstAndPike.cookiesPerHour[i];
  pikeList.appendChild(listTotal);
}
var totalSales = document.createElement('li');
totalSales.textContent = 'Total:' + firstAndPike.totalCookies;
pikeList.appendChild(totalSales);

//cookie array
console.log(firstAndPike.totalCookies);
console.log(seatac.totalCookies);
console.log(seattleCenter.totalCookies);
console.log(capitolHill.totalCookies);
console.log(alki.totalCookies);
//total cookies per hour
console.log(firstAndPike.cookiesPerHour);
console.log(seatac.cookiesPerHour);
console.log(seattleCenter.cookiesPerHour);
console.log(capitolHill.cookiesPerHour);
console.log(alki.cookiesPerHour);
/*
var cookieList = document.createElement('li');
//userElement.setAttribute('id','cookie-list');
cookieList.textContent = alki.cookiesPerHour;
sectionEl.appendChild(cookieList);

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
