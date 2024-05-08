var five = require("johnny-five");
var board = new five.Board(10);

board.on("ready", function() {

  var servos = new five.Servos([9, 10]);

  // Sweep all servos in the object from 0-180 and repeat.
  servos.sweep();
});