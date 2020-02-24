
'user scrip';
// function for random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// first object is seatle stor
var seattle = {
  minHourCustomer : 23,
  maxHourCustomer : 65,
  averageCookies : 6.3,
  cookiesPerHourArr : [],
  customerPerHour : function(){
    var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
    return cPerHour;
  },
  totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  // make array
  multiplyArr : function (){
    var total;
    for (var i = 0; i< this.totalHours.length ;i++){
      total= this.customerPerHour()*this.averageCookies;
      this.cookiesPerHourArr.push(parseInt(total)) ;
    }
    return this.cookiesPerHourArr;
  },
  // now do html in javascript
  render : function(){
    var div = document.createElement('div');
    console.log(div);
    document.body.appendChild(div);
    div.setAttribute('class','firstDiv');
    document.getElementsByClassName('firstDiv');
    var header2 = document.createElement('h2');
    div.appendChild(header2);
    header2.textContent = 'Seattle store';
    var unorderList = document.createElement('ul');
    div.appendChild(unorderList);
    document.getElementsByTagName('ul');
    var list;
    for (var j=0;j<this.totalHours.length;j++){
      list = document.createElement('li');
      unorderList.appendChild(list);
      list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
    }
  }
};

seattle.render();

// second store tokyo
var tokyo = {
  minHourCustomer : 3,
  maxHourCustomer : 24,
  averageCookies : 1.2,
  cookiesPerHourArr : [],
  customerPerHour : function(){
    var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
    return cPerHour;
  },
  totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  // make array
  multiplyArr : function (){
    var total;
    for (var i = 0; i< this.totalHours.length ;i++){
      total= this.customerPerHour()*this.averageCookies;
      this.cookiesPerHourArr.push(parseInt(total)) ;
    }
    return this.cookiesPerHourArr;
  },
  // now do html in javascript
  render : function(){
    var div = document.createElement('div');
    console.log(div);
    document.body.appendChild(div);
    div.setAttribute('class','firstDiv');
    document.getElementsByClassName('firstDiv');
    var header2 = document.createElement('h2');
    div.appendChild(header2);
    header2.textContent = 'Tokyo store';
    var unorderList = document.createElement('ul');
    div.appendChild(unorderList);
    document.getElementsByTagName('ul');
    var list;
    for (var j=0;j<this.totalHours.length;j++){
      list = document.createElement('li');
      unorderList.appendChild(list);
      list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
    }
  }
};
tokyo.render();

// third store dubai
var dubai = {
  minHourCustomer : 11,
  maxHourCustomer : 38,
  averageCookies : 3.7,
  cookiesPerHourArr : [],
  customerPerHour : function(){
    var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
    return cPerHour;
  },
  totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  // make array
  multiplyArr : function (){
    var total;
    for (var i = 0; i< this.totalHours.length ;i++){
      total= this.customerPerHour()*this.averageCookies;
      this.cookiesPerHourArr.push(parseInt(total)) ;
    }
    return this.cookiesPerHourArr;
  },
  // now do html in javascript
  render : function(){
    var div = document.createElement('div');
    console.log(div);
    document.body.appendChild(div);
    div.setAttribute('class','firstDiv');
    document.getElementsByClassName('firstDiv');
    var header2 = document.createElement('h2');
    div.appendChild(header2);
    header2.textContent = 'Dubai store';
    var unorderList = document.createElement('ul');
    div.appendChild(unorderList);
    document.getElementsByTagName('ul');
    var list;
    for (var j=0;j<this.totalHours.length;j++){
      list = document.createElement('li');
      unorderList.appendChild(list);
      list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
    }
  }
};
dubai.render();

// fourth store paris
var paris = {
  minHourCustomer : 20,
  maxHourCustomer : 38,
  averageCookies : 2.3,
  cookiesPerHourArr : [],
  customerPerHour : function(){
    var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
    return cPerHour;
  },
  totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  // make array
  multiplyArr : function (){
    var total;
    for (var i = 0; i< this.totalHours.length ;i++){
      total= this.customerPerHour()*this.averageCookies;
      this.cookiesPerHourArr.push(parseInt(total)) ;
    }
    return this.cookiesPerHourArr;
  },
  // now do html in javascript
  render : function(){
    var div = document.createElement('div');
    console.log(div);
    document.body.appendChild(div);
    div.setAttribute('class','firstDiv');
    document.getElementsByClassName('firstDiv');
    var header2 = document.createElement('h2');
    div.appendChild(header2);
    header2.textContent = 'Paris store';
    var unorderList = document.createElement('ul');
    div.appendChild(unorderList);
    document.getElementsByTagName('ul');
    var list;
    for (var j=0;j<this.totalHours.length;j++){
      list = document.createElement('li');
      unorderList.appendChild(list);
      list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
    }
  }
};
paris.render();

// fifth store lima
var lima = {
  minHourCustomer : 2,
  maxHourCustomer : 16,
  averageCookies : 4.6,
  cookiesPerHourArr : [],
  customerPerHour : function(){
    var cPerHour = getRandomInt(this.minHourCustomer,this.maxHourCustomer);
    return cPerHour;
  },
  totalHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  // make array
  multiplyArr : function (){
    var total;
    for (var i = 0; i< this.totalHours.length ;i++){
      total= this.customerPerHour()*this.averageCookies;
      this.cookiesPerHourArr.push(parseInt(total)) ;
    }
    return this.cookiesPerHourArr;
  },
  // now do html in javascript
  render : function(){
    var div = document.createElement('div');
    console.log(div);
    document.body.appendChild(div);
    div.setAttribute('class','firstDiv');
    document.getElementsByClassName('firstDiv');
    var header2 = document.createElement('h2');
    div.appendChild(header2);
    header2.textContent = 'Lima store';
    var unorderList = document.createElement('ul');
    div.appendChild(unorderList);
    document.getElementsByTagName('ul');
    var list;
    for (var j=0;j<this.totalHours.length;j++){
      list = document.createElement('li');
      unorderList.appendChild(list);
      list.textContent = `${this.totalHours[j]}: ${this.multiplyArr()[j]} cookies`;
    }
  }
};
lima.render();







