var CarView = function(cars){
  this.render(cars);
}

CarView.prototype = {
  render: function(cars){
    
    console.log(cars);
    cars.forEach( function(car){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('cars');
      text.innerText = car.brand + ": " + '"' + car.model + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = CarView;