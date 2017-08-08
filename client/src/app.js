var CarView = require('./views/carView');

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;

  var carString = this.responseText;
  var cars = JSON.parse(carString);
  var carView = new CarView(cars);
}

var app = function(){
  var url = "http://localhost:3000/cars";
  makeRequest(url, requestComplete);  
}


window.addEventListener('load', app);