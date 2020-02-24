
'user strict';
// function for random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
// global variables
var totalHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// construct object
function Store(nameStore,minHourCustomer,maxHourCustomer,averageCookies){
  this.nameStore = nameStore;
  this.minHourCustomer = minHourCustomer;
  this.maxHourCustomer = maxHourCustomer;
  this.averageCookies = averageCookies;
  this.totalOfCookies = 0;
}
// function for random number
Store.prototype.customerPerHour = function(){
  var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
  return cPerHour;
};
// function for cookies per hour
Store.prototype.multiplyArr = function(){
  var cookiesPerHourArr = [];
  var multiTotal;
  for (var i = 0; i< totalHours.length ;i++){
    multiTotal= (this.customerPerHour())*(this.averageCookies);
    cookiesPerHourArr.push(parseInt(multiTotal)) ;
  }
  this.totalOfCookies += parseInt(multiTotal);// I have aproblem in this part it give me an correct number
  return cookiesPerHourArr;
};
Store.prototype.render = function(){
  // body of table
  document.getElementsByTagName(theTable);
  var elTrInside = document.createElement('tr');
  theTable.appendChild(elTrInside);
  var elTdInside;
  elTdInside = document.createElement('td');
  elTdInside.textContent = this.nameStore;
  elTrInside.appendChild(elTdInside);
  for (var j=0;j<this.multiplyArr().length;j++){
    elTdInside = document.createElement('td');
    elTdInside.textContent = this.multiplyArr()[j];
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

// call function and objects
header();
var seattle = new Store ('seattle',23,65,6.3);
var tokyo = new Store ('tokyo',3,24,1.2);
var dubai = new Store ('dubai',11,38,3.7);
var paris = new Store ('paris',20,38,2.3);
var lima = new Store ('lima',2,16,4.6);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
total();

// total
function total(){
  document.getElementsByTagName(theTable);
  var elTrTotal = document.createElement('tr');
  theTable.appendChild(elTrTotal);
  var elTdInside2;
  elTdInside2 = document.createElement('td');
  elTdInside2.textContent = 'Total';
  elTrTotal.appendChild(elTdInside2);
  var totalColumn = 0;
  var totalOfTotal = 0;
  for (var s = 0; s<totalHours.length;s++){
    totalColumn += seattle.multiplyArr()[s];
    totalColumn += tokyo.multiplyArr()[s];
    totalColumn += dubai.multiplyArr()[s];
    totalColumn += paris.multiplyArr()[s];
    totalColumn += lima.multiplyArr()[s];
    var elTdInside3 = document.createElement('td');
    elTdInside3.textContent = totalColumn;
    elTrTotal.appendChild(elTdInside3);
    totalOfTotal += totalColumn;
    totalColumn = 0;
  }
  var elTdFinal = document.createElement('td');
  elTdFinal.textContent = totalOfTotal;
  elTrTotal.appendChild(elTdFinal);}




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







