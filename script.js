// console.log("hello how do you do...");

function Rectangle(a, b, c, d) {
  var rc = document.getElementById('rectangle').getContext('2d');

  rc.fillStyle = "pink";
  rc.rect(a, b, c, d);
  rc.fill();
}

function Circle(a, b, c, d) {
  var cir = document.getElementById('circle').getContext('2d');

  cir.fillStyle = 'pink';
  cir.arc(a, b, c, d, 2*Math.PI);
  // cir.arc(150, 150, 100, 0, 2*Math.PI);
  cir.fill();
}

