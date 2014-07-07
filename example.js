var button = require('./');

// Hold Count Event
button.on('hold', function(count){
  console.log("HOLD COUNT", count);
});

// Quick Tap Event
button.on('click', function(clicks){
  console.log('CLICK COUNT', clicks);
});