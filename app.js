'use strict';

//Cookie store constructor
function CookieStore (location, minCustomers, maxCustomers, avgCookies,hourlyAvg, totalOfHour){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyAvg = hourlyAvg || [];
  this.totalOfDay = 0;
  this.totalOfHour = 0;
}

//Average cookies per hour
CookieStore.prototype.getAvgCookieCount = function(){
  for (var hours = 0; hours < time.length; hours++){
    var cookiesPerHour =  Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgCookies);
    this.hourlyAvg.push(cookiesPerHour);
    this.totalOfDay += cookiesPerHour;
  }
};

//User store data
CookieStore.prototype.appendTable = function(tableEl){
  var userStore = document.createElement('tr');
  var storeName = document.createElement('td');
  storeName.textContent = this.location;
  userStore.appendChild(storeName);

  for(var j = 0; j < this.hourlyAvg.length; j++) {
    
  }
}
  tableEl.appendChild(userStore);
};

//Cookie Stores
var firstAndPike = new CookieStore('1st and Pike',23,65,6.3);
var seatac = new CookieStore('Seatac Airport',3,24,1.2);
var seattleCenter = new CookieStore('Seattle Center',11,38,3.7);
var capitolHill = new CookieStore('Capitol Hill',20,38,2.3);
var alki = new CookieStore('Alki',2,16,4.6);

//Cookie store Array
var stores = [firstAndPike,seatac,seattleCenter,capitolHill,alki];

//Time Array
var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

firstAndPike.getAvgCookieCount();
seatac.getAvgCookieCount();
seattleCenter.getAvgCookieCount();
capitolHill.getAvgCookieCount();
alki.getAvgCookieCount();

console.log(firstAndPike.totalOfDay);
//Table html node
var tableEl = document.createElement('table');

//Table Row for store time
var timeEl = document.createElement('tr');
tableEl.appendChild(timeEl);

//blank header over store names
var storeHrs = document.createElement('th');
storeHrs.textContent = ' ';
tableEl.appendChild(storeHrs);

//lists store hours
for (var t = 0; t < time.length; t++){
  var storeTime = document.createElement('th');
  storeTime.textContent = time[t];
  tableEl.appendChild(storeTime);
}

//table header for daily location totals
var totalCount = document.createElement('th');
totalCount.textContent = 'Daily Location Total';
tableEl.appendChild(totalCount);

//table of store names
for ( var i = 0; i < stores.length; i++){
  var currentStore = stores[i];

  //creates rows for each store
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  //lists store names as headers
  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.location;
  rowEl.appendChild(nameEl);

  //table of average cookie sales per hour
  for(var ii = 0; ii < time.length; ii++){
    var salesEl = document.createElement('td');
    salesEl.textContent = currentStore.hourlyAvg[ii];
    rowEl.appendChild(salesEl);
  };

  //total cookies sold for the day
  var totalDaysCookies = document.createElement('td');
  totalDaysCookies.textContent = currentStore.totalOfDay;
  rowEl.appendChild(totalDaysCookies);
};

//table row for totals/hr
var dayTotalEl = document.createElement('tr');
tableEl.appendChild(dayTotalEl);

//table header for totals/hr
//var daySalesEl = document.createElement('th');
//daySalesEl.textContent = 'Totals';
//tableEl.appendChild(daySalesEl);

document.getElementById('stores').appendChild(tableEl);

//Set up variable for User to input Cookie store parameters
var userInputStoreForm = document.getElementById('cookie-store-form');

//Event Listener
userInputStoreForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  var storeName = event.target.cookieStoreName.value;
  var minCustomers = parseInt(event.target.minCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  //Adding user store information from Form
  var store = new CookieStore(location, minCustomers, maxCustomers, avgCookies);
  store.getAvgCookieCount();
  stores.push(store);
  var newStores = document.getElementById('tableEl');
  store.appendTable(newStores);
}
