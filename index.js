var tessel = require('tessel')
  , button = tessel.button
  , leds = getLEDs(1,0,3,2) // tessels index order (this is for position)
  , leds_reverse = getLEDs(2,3,0,1) // reverse order
  , counts = { click: 0, hold: 0 }
  , interval
  , timeout;

// PUBLIC OPTIONS  
button.hold_duration = 500;
button.click_timeout = 300;

module.exports = button;


button.on('press', function(time){
  clearInterval(interval);
  clearTimeout(timeout);

  interval = setInterval(function(){
    update(++counts.hold);
  }, button.hold_duration);
});

button.on('release', function(){
  clearInterval(interval);
  clearTimeout(timeout);
  
  if(counts.hold) return publish('hold');

  update(++counts.click);
  timeout = setTimeout(function(){
    publish('click')
  }, button.click_timeout);
});


/* HELPER FUNCTIONS */

function publish(name){
  button.emit(name, counts[name]);
  counts[name] = 0;
  reset();
}

function reset(){
  leds.forEach(function(led){
    led.write(false);
  })
}

function on(offset){
  var count = 0;
  return function(led, idx){
    if(count++ < offset) led.write(true);
    else led.write(false);
  }
}

function update(count){
  var offset = count % 8;
  if(!offset) leds.forEach(reset);
  else if(offset < 5) leds.forEach(on(offset));
  else leds_reverse.forEach(on(4 - (offset - 4)));
}

function getLEDs(){
  var leds = [];
  for(var i=0; i < arguments.length; i++){
    leds.push(tessel.led[arguments[i]])
  }
  return leds;
}
