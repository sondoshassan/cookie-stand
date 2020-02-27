
'use strict';

// global variables
var totalHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var newStores = [];

// function for random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// construct object
function Store(nameStore,minHourCustomer,maxHourCustomer,averageCookies){
  this.nameStore = nameStore;
  this.minHourCustomer = minHourCustomer;
  this.maxHourCustomer = maxHourCustomer;
  this.averageCookies = averageCookies;
  this.cookiesPerHourArr = [];
  this.totalOfCookies = 0;
  this.multiplyArr();
  newStores.push(this);
  this.render();
}

// function for random number
Store.prototype.customerPerHour = function(){
  var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
  return cPerHour;
};

// function for cookies per hour
Store.prototype.multiplyArr = function(){
  var multiTotal;
  for (var i = 0; i< totalHours.length ;i++){
    multiTotal= Math.floor((this.customerPerHour())*(this.averageCookies));
    this.cookiesPerHourArr.push(multiTotal) ;
    this.totalOfCookies += this.cookiesPerHourArr[i];
  }
};

// render function
Store.prototype.render = function(){
  // body of table
  document.getElementsByTagName(theTable);
  var elTrInside = document.createElement('tr');
  theTable.appendChild(elTrInside);
  var elTdInside;
  elTdInside = document.createElement('td');
  elTdInside.textContent = this.nameStore;
  elTrInside.appendChild(elTdInside);
  for (var j=0;j<totalHours.length;j++){
    elTdInside = document.createElement('td');
    elTdInside.textContent = this.cookiesPerHourArr[j];
    elTrInside.appendChild(elTdInside);
  }
  elTdInside = document.createElement('td');
  elTdInside.textContent = this.totalOfCookies;
  elTrInside.appendChild(elTdInside);
};

// the main
var div = document.createElement('div');
console.log(div);
document.body.appendChild(div);
div.setAttribute('class','firstDiv');
document.getElementsByClassName('firstDiv');
var header2 = document.createElement('h2');
div.appendChild(header2);
header2.textContent = 'All Stores';
// second div
document.body.appendChild(div);
div.setAttribute('id','second');
document.getElementById('second');
// the table
var theTable = document.createElement('table');
document.body.appendChild(theTable);
document.getElementsByTagName(theTable);
var elTr1 = document.createElement('tr');
theTable.appendChild(elTr1);
document.getElementsByTagName(elTr1);
var elTh1 = document.createElement('th');
elTr1.appendChild(elTh1);
elTh1.textContent = ' ';

// header
function header(){
  var elTh;
  document.getElementsByTagName(elTr1);
  for (var i = 0; i<totalHours.length; i++){
    elTh= document.createElement('th');
    elTr1.appendChild(elTh);
    elTh.textContent = totalHours[i];
  }
  elTh= document.createElement('th');
  elTr1.appendChild(elTh);
  elTh.textContent = 'Total';
}

// form
var shopForm = document.getElementById('mainForm');
shopForm.addEventListener('submit',formShop);
// function for form
function formShop(event){
  event.preventDefault();
  var nameStore = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookie = event.target.avgCookie.value;
  new Store (nameStore,minCust,maxCust,avgCookie);
  // calculation();
  theTable.deleteRow(theTable.rows.length-1);
  total();
}

// call function and objects
header();
new Store ('seattle',23,65,6.3);
new Store ('tokyo',3,24,1.2);
new Store ('dubai',11,38,3.7);
new Store ('paris',20,38,2.3);
new Store ('lima',2,16,4.6);
total();
// calculation();

// total another solution
function total(){
  document.getElementsByTagName(theTable);
  var footer = document.createElement('tfoot');
  theTable.appendChild(footer);
  var totalRow = document.createElement('tr');
  footer.appendChild(totalRow);
  var tdTotalWord = document.createElement('td');
  totalRow.appendChild(tdTotalWord);
  tdTotalWord.textContent = 'Total';
  var total = 0;
  var totalOfTotal = 0;
  for (var l=0;l<totalHours.length;l++){
    for (var i=0; i < newStores.length;i++){
      total += newStores[i].cookiesPerHourArr[l];
    }
    var totalTd = document.createElement('td');
    totalRow.appendChild(totalTd);
    totalTd.textContent = total;
    totalOfTotal += total;
    total = 0;
  }
  var totalOfTotalTd = document.createElement('td');
  totalRow.appendChild(totalOfTotalTd);
  totalOfTotalTd.textContent = totalOfTotal;
}

// total
// function total(){
//   document.getElementsByTagName(theTable);
//   var footer = document.createElement('tfoot');
//   theTable.appendChild(footer);
//   var totalRow = document.createElement('tr');
//   footer.appendChild(totalRow);
//   var tdTotalWord = document.createElement('td');
//   totalRow.appendChild(tdTotalWord);
//   tdTotalWord.textContent = 'Total';
//   // index total
//   for (var i = 0;i<totalHours.length;i++){
//     var tdTotalIndex = document.createElement('td');
//     tdTotalIndex.setAttribute('id','total'+i);
//     totalRow.appendChild(tdTotalIndex);}
//   // total of total
//   var tdTotalOfTotal = document.createElement('td');
//   tdTotalOfTotal.setAttribute('id','totalOfTotal');
//   totalRow.appendChild(tdTotalOfTotal);
// }

// function calculation(){
//   var element = 0;
//   var totalOfTotal = 0;
//   for (var i=0 ;i<totalHours.length ;i++){
//     for (var index = 0; index < newStores.length; index++) {
//       element += newStores[index].cookiesPerHourArr[i];
//       // console.log('tell me '+element);
//     }
//     var tdTotalIndex = document.getElementById('total'+i);
//     tdTotalIndex.textContent = element;
//     totalOfTotal += element;
//     element = 0;
//   }
//   var tdTotalOfTotal = document.getElementById('totalOfTotal');
//   tdTotalOfTotal.textContent = totalOfTotal;
// }




// first object is seatle store
// var seattle = {
//   minHourCustomer : 23,
//   maxHourCustomer : 65,
//   averageCookies : 6.3,
//   cookiesPerHourArr : [],
//   totalCookies : 0,
//   customerPerHour : function(){
//     var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
//     return cPerHour;
//   },

//   // make array
//   multiplyArr : function(){
//     var total;
//     for (var i = 0; i< this.totalHours.length ;i++){
//       total= this.customerPerHour()*this.averageCookies;
//       this.cookiesPerHourArr.push(parseInt(total)) ;
//     }
//     console.log(total);
//     this.totalCookies = this.totalCookies + parseInt(total);
//     return this.cookiesPerHourArr;
//   },
//   // now do html in javascript
//   render : function(){
//     var div = document.createElement('div');
//     console.log(div);
//     document.body.appendChild(div);
//     div.setAttribute('class','firstDiv');
//     document.getElementsByClassName('firstDiv');
//     var header2 = document.createElement('h2');
//     div.appendChild(header2);
//     header2.textContent = 'Seattle store';
//     var unorderList = document.createElement('ul');
//     div.appendChild(unorderList);
//     document.getElementsByTagName('ul');
//     var list;
//     for (var j=0;j<this.totalHours.length;j++){
//       list = document.createElement('li');
//       unorderList.appendChild(list);
//       list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
//     }
//     list = document.createElement('li');
//     unorderList.appendChild(list);
//     list.textContent = `Total: ${this.totalCookies} cookies`;
//   }
// };
// seattle.render();



// // second store tokyo
// var tokyo = {
//   minHourCustomer : 3,
//   maxHourCustomer : 24,
//   averageCookies : 1.2,
//   cookiesPerHourArr : [],
//   totalCookies : 0,
//   customerPerHour : function(){
//     var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
//     return cPerHour;
//   },
//   totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   // make array
//   multiplyArr : function (){
//     var total;
//     for (var i = 0; i< this.totalHours.length ;i++){
//       total= this.customerPerHour()*this.averageCookies;
//       this.cookiesPerHourArr.push(parseInt(total)) ;
//     }
//     this.totalCookies = this.totalCookies + parseInt(total);
//     return this.cookiesPerHourArr;
//   },
//   // now do html in javascript
//   render : function(){
//     var div = document.createElement('div');
//     console.log(div);
//     document.body.appendChild(div);
//     div.setAttribute('class','firstDiv');
//     document.getElementsByClassName('firstDiv');
//     var header2 = document.createElement('h2');
//     div.appendChild(header2);
//     header2.textContent = 'Tokyo store';
//     var unorderList = document.createElement('ul');
//     div.appendChild(unorderList);
//     document.getElementsByTagName('ul');
//     var list;
//     for (var j=0;j<this.totalHours.length;j++){
//       list = document.createElement('li');
//       unorderList.appendChild(list);
//       list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
//     }
//     list = document.createElement('li');
//     unorderList.appendChild(list);
//     list.textContent = `Total: ${this.totalCookies} cookies`;
//   }
// };
// tokyo.render();

// // third store dubai
// var dubai = {
//   minHourCustomer : 11,
//   maxHourCustomer : 38,
//   averageCookies : 3.7,
//   cookiesPerHourArr : [],
//   totalCookies : 0,
//   customerPerHour : function(){
//     var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
//     return cPerHour;
//   },
//   totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   // make array
//   multiplyArr : function (){
//     var total;
//     for (var i = 0; i< this.totalHours.length ;i++){
//       total= this.customerPerHour()*this.averageCookies;
//       this.cookiesPerHourArr.push(parseInt(total)) ;
//     }
//     this.totalCookies = this.totalCookies + parseInt(total);
//     return this.cookiesPerHourArr;
//   },
//   // now do html in javascript
//   render : function(){
//     var div = document.createElement('div');
//     console.log(div);
//     document.body.appendChild(div);
//     div.setAttribute('class','firstDiv');
//     document.getElementsByClassName('firstDiv');
//     var header2 = document.createElement('h2');
//     div.appendChild(header2);
//     header2.textContent = 'Dubai store';
//     var unorderList = document.createElement('ul');
//     div.appendChild(unorderList);
//     document.getElementsByTagName('ul');
//     var list;
//     for (var j=0;j<this.totalHours.length;j++){
//       list = document.createElement('li');
//       unorderList.appendChild(list);
//       list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
//     }
//     list = document.createElement('li');
//     unorderList.appendChild(list);
//     list.textContent = `Total: ${this.totalCookies} cookies`;
//   }
// };
// dubai.render();

// // fourth store paris
// var paris = {
//   minHourCustomer : 20,
//   maxHourCustomer : 38,
//   averageCookies : 2.3,
//   cookiesPerHourArr : [],
//   totalCookies : 0,
//   customerPerHour : function(){
//     var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
//     return cPerHour;
//   },
//   totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   // make array
//   multiplyArr : function (){
//     var total;
//     for (var i = 0; i< this.totalHours.length ;i++){
//       total= this.customerPerHour()*this.averageCookies;
//       this.cookiesPerHourArr.push(parseInt(total)) ;
//     }
//     this.totalCookies = this.totalCookies + parseInt(total);
//     return this.cookiesPerHourArr;
//   },
//   // now do html in javascript
//   render : function(){
//     var div = document.createElement('div');
//     console.log(div);
//     document.body.appendChild(div);
//     div.setAttribute('class','firstDiv');
//     document.getElementsByClassName('firstDiv');
//     var header2 = document.createElement('h2');
//     div.appendChild(header2);
//     header2.textContent = 'Paris store';
//     var unorderList = document.createElement('ul');
//     div.appendChild(unorderList);
//     document.getElementsByTagName('ul');
//     var list;
//     for (var j=0;j<this.totalHours.length;j++){
//       list = document.createElement('li');
//       unorderList.appendChild(list);
//       list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
//     }
//     list = document.createElement('li');
//     unorderList.appendChild(list);
//     list.textContent = `Total: ${this.totalCookies} cookies`;
//   }
// };
// paris.render();

// // fifth store lima
// var lima = {
//   minHourCustomer : 2,
//   maxHourCustomer : 16,
//   averageCookies : 4.6,
//   cookiesPerHourArr : [],
//   totalCookies : 0,
//   customerPerHour : function(){
//     var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
//     return cPerHour;
//   },
//   totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   // make array
//   multiplyArr : function (){
//     var total;
//     for (var i = 0; i< this.totalHours.length ;i++){
//       total= this.customerPerHour()*this.averageCookies;
//       this.cookiesPerHourArr.push(parseInt(total)) ;
//     }
//     this.totalCookies = this.totalCookies + parseInt(total);
//     return this.cookiesPerHourArr;
//   },
//   // now do html in javascript
//   render : function(){
//     var div = document.createElement('div');
//     console.log(div);
//     document.body.appendChild(div);
//     div.setAttribute('class','firstDiv');
//     document.getElementsByClassName('firstDiv');
//     var header2 = document.createElement('h2');
//     div.appendChild(header2);
//     header2.textContent = 'Lima store';
//     var unorderList = document.createElement('ul');
//     div.appendChild(unorderList);
//     document.getElementsByTagName('ul');
//     var list;
//     for (var j=0;j<this.totalHours.length;j++){
//       list = document.createElement('li');
//       unorderList.appendChild(list);
//       list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
//     }
//     list = document.createElement('li');
//     unorderList.appendChild(list);
//     list.textContent = `Total: ${this.totalCookies} cookies`;
//   }
// };
// lima.render();







