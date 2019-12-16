angleMode(DEGREES);
let x = 50;
let y = -30;
let ananasKmh = 5;
let leistung = 80;
let sprit = 100; //
let a_geschwindigkeit = 5;
let skraft = 3; // Schwerkraft, wie schenll annas fällt
//var start = true;
//let stop = boden;
var boden = 400; 
var ypos = -30;
let xpos = random(-30, 300);
var r = 0;
var g = 0;
var b = 0; 
      
function korb() {
  fill("red");
  rect(150, 400, 60, 45);
}

function ananasF() {
  noStroke();
  fill("#f1853c"); //241,133,28
  ellipse(130, 130, 50, 65);
  strokeWeight(1);
  stroke(51);
  line(121, 135, 117, 127);
  line(126, 129, 121, 135);
  line(135, 114, 138, 120);
  line(143, 114, 138, 120);
  line(128, 129, 131, 135);
  line(136, 129, 131, 135);
  line(140, 129, 142, 135);
  line(146, 129, 142, 135);
  line(109, 135, 113, 127);
  line(117, 147, 115, 140);
  line(117, 147, 122, 140);
  line(127, 157, 132, 150);
  line(122, 149, 126, 157);
  line(137, 147, 131, 140);
  line(137, 147, 141, 140);
  line(120, 114, 124, 121);
  line(130, 114, 124, 121);
  line(135, 159, 112, 110);
  line(144, 150, 123, 102);
  line(115, 153, 135, 100);
  line(123, 161, 144, 108);

  let c = color("#328B3E"); // dunkel Grün
  let d = color("#40B34F"); // hell Grün

  fill(c);
  strokeWeight(1);
  stroke(d);
  triangle(110, 55, 130, 70, 120, 90);
  triangle(130, 70, 160, 55, 140, 90);
  fill(d);
  triangle(120, 95, 140, 95, 140, 40);
  fill(c);
  ellipse(130, 96, 25, 15);
  triangle(128, 85, 118, 100, 120, 70);
  triangle(132, 85, 152, 113, 151, 75);
  fill(d);
  triangle(118, 95, 110, 95, 117, 80);
}

function farbe_aendern() {
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r, g, b);
}

function kreise() {
  farbe_aendern();
  ellipse(50, 50, 30, 10);
  farbe_aendern();
  ellipse(150, 150, 30, 10);
  farbe_aendern();
  ellipse(200, 250, 30, 10);
  farbe_aendern();
  ellipse(250, 150, 30, 10);
  farbe_aendern();
  ellipse(300, 250, 30, 10);
  farbe_aendern();
  ellipse(350, 150, 30, 10);
  farbe_aendern();
  ellipse(400, 300, 30, 10);
  farbe_aendern();
  ellipse(150, 350, 30, 10);
  farbe_aendern();
  ellipse(50, 150, 30, 10);
  farbe_aendern();
  ellipse(400, 50, 30, 10);
  farbe_aendern();
  ellipse(180, 50, 30, 10);
  farbe_aendern();
  ellipse(100, 300, 30, 10);
  farbe_aendern();
  ellipse(30, 250, 30, 10);
  farbe_aendern();
  ellipse(300, 350, 30, 10);
}

function draw() {
  clear();
  //frameRate(0);
  background(120, 130, 110);
  kreise();
  push();
  translate(xpos, y);
  translate(x, y);
  noFill();
  stroke(255);   
  ananasF();
  pop();     
 
  korb(x, y, 10, 50);
  
  pMove();

  y += skraft; 

  treffer();
  textSize(24);
  text("Sprit: " + sprit, 250, 50);
 
  gameOver();


//  if (x>= 150&&x<=210){
//   console.log("Gewonnen");
// }
// else {console.lod("Verlohren");
// }

}      
 
function pMove() {
  if (keyIsDown(UP_ARROW)) {
    leistung -= ananasKmh = 1;
    sprit -= 15;
    y -= a_geschwindigkeit;
  } else {
    ananasKmh = 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    leistung -= 1;
    sprit -= 15;
    ananasKmh = 2;
    x -= a_geschwindigkeit;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    leistung -= 1;
    sprit -= 25;
    ananasKmh = 2;
    x += a_geschwindigkeit;
  }
}

function gameOver() {
  if (leistung <= 0) {
    // && zeit ===0) {
    skraft = 0;
    a_geschwindigk = 0;
    x = 200;
    y = 200;  
    leistung = 0 ;
    sprit = 0;   
    fill(255);  
    textSize(40);
    text("You Loose", 100, 200);
  } 
}

function treffer() {
  // Wenn im Korb geladnet wird und die a_gesch. bei 1 liegt ( beim freihen fall muss 1 verwenden)
  if (  y >= 400&&
    // y <= 400 &&   
    x >= 150 &&               
    x <= 205 && 
    ananasKmh == 1 &&
    leistung >= 0
  ) {
    skraft = 0;
    a_geschwindigkeit = 0;
    x = 200;
    y = 80;  
    fill(255);
    textSize(40);
    text("You WIN", 100, 200);
    text("Punkte: " + leistung + 50, 200, 200);
    frameRate(0);
  }
  if (y >= 455 && x < 150 && x > 205 && ananasKmh > 2) {
    skraft = 0;
    a_geschwindigkeit = 0;
    x = 200; //
    y = 80; // negativ 
    fill(255);
    textSize(40);
    text("You CRASHED", 100, 200);
    frameRate(0);
  }

  if (y >= 400 && x > 282 && ananasKmh > 2) {
    skraft = 0;
    a_geschwindigkeit = 0;
    x = 200;
    y = 80;
    fill(255);
    textSize(40);
    text("You Missed!", 100, 200);
    frameRate(0);
  }
  if (y >= 400 && x < 116 && ananasKmh > 2) {
    skraft = 0;
    a_geschwindigkeit = 0;
    x = 200;
    y = 80;
    fill(255);
    textSize(40);
    text("You Missed!", 100, 200);
    frameRate(0);
  }
} 

//var last = 400; // +280;
// let zeit = 10;
// let gzeit = 1;

// function ende(){
//   translate (x,y);
//   noFill();
//   stroke(255);
//   ananasF(100,200,100,100);
//  }

// if (y >= start) {
//   for (var i = 0; i<= 0; i++){
//   y = 50;
//   y += skraft;
//   push();
//   rectMode(CENTER);
// translate(x, y);
// noFill();
// stroke(255);
// ananasF();
// }
// }
// pop();

// if (y >= start) {
//   //for (var i = 0; i<= 0; i++){
//   y = stop;
//   }

// if (y >= start) {
//     for (var i = 0; i<= 0; i++){
//      y = stop;
//     }
//   }

//  let num = 3;
//   while (num > 0) {
//    num = num - 1;
//  ananasF();
//  }

//rectMode(CENTER);
//let r = random(10, 15);
//frameRate(20);

// wie kann ich die Fläche eingrenzen? und bendene
// wie lass ich drei mal wiederholen?
