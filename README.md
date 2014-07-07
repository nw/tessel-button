
## Tessel Button

A tiny ~2kb library to provide higher level events allowing advanced options via user input with the config button. In addition it provides visual feedback (LEDs) to the user to make counting easier.

**Note:** The purpose of the button [may change in the future](https://tessel.io/docs/hardwareAPI#buttons).

### Install

```bash
  npm install tessel-button --save
```

### Usage

```js

  var button = require('tessel-button');
  
  // Hold Count Event
  button.on('hold', function(count){
    console.log("HOLD COUNT", count);
    switch(count){
      case 1: flushLogs(); break;
      case 2: checkWifi(); break;
      case 3: clearLogs(); break;
      case 4: reset(); break;
      default:
        break;
    }
  });

  // Quick Tap Event
  button.on('click', function(clicks){
    console.log('CLICK COUNT', clicks);
  });

```

### Visual Feedback

<iframe width="854" height="510" src="//www.youtube.com/embed/c__uCQW3_iM" frameborder="0" allowfullscreen></iframe>

You should see the pattern.

<table>
  <thead>
    <tr>
      <th>Count</th>
      <th>LED2</th>
      <th>LED1</th>
      <th>Conn</th>
      <th>Error</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>X</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>2</td>
      <td>X</td>
      <td>X</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>3</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>4</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td>5</td>
      <td>&nbsp;</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td>6</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td>7</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>X</td>
    </tr>
    <tr>
      <td>8</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>9</td>
      <td>X</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>10</td>
      <td>X</td>
      <td>X</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>11</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>12</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td>13</td>
      <td>&nbsp;</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td>14</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td>15</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>X</td>
    </tr>
  </tbody>
</table>



### Options

#### button.hold_duration

**`Default`**: __500__

This option controls the time that needs to elapse before the hold count is incremented. 

#### button.click_timeout

**`Default`**: __300__

The time in between presses in order for a group of clicks to count. This value should be lower then `button.hold_duration`.

### Events

#### `hold`

add an event listener onto the `button`. Returns the hold count.

```js

button.on('hold', function(count){

});

```

#### `click`

add an event listener onto the `button`. Returns the click count.

```js

button.on('click', function(count){

});

```

### Issues

I have notice bizarre behavior when registering multiple listeners on the `button` `press` and `release` events. Haven't had time to research it deeper. I believe there maybe an issue inside the firmware.

