function setup() {
  createCanvas(1500, 800);
  }
 function draw(){ background("blue");
  fill(204, 153, 0);
  square(500, 300, 400);
  fill(102, 255, 255);
  square(550 , 350 ,90);
  square(770 , 350 ,90);
  fill(128, 0, 0);
  rect(550 , 500 ,100, 200);

  fill(0,0,0,)
  rect(800,100,100,150)
 
  // Centrul pătratului mare este la (500+200, 300+200)
  let centerX = 500 + 200;
  let centerY = 60;


  // Dimensiunea triunghiului
  let triangleSize =500; // Atribuiți o valoare aici

  // Coordonatele triunghiului
  let x1 = centerX - triangleSize  / 2;
  let y1 = centerY + triangleSize  / 2;
  let x2 = centerX ;
  let y2 = centerY - triangleSize  / 9;
  let x3 = centerX + triangleSize  / 2;
  let y3 = centerY + triangleSize  / 2;

  fill(304,51,0)
  triangle(x1, y1, x2, y2, x3, y3); // Asigurați-vă că aveți șase argumente aici
  fill(0,255,255)
  ellipse(700,150,45,45)
 
 sun(200,200,50,50)

}
function sun(x,y,d,r){
  fill(255,204,0);
  noStroke();
  ellipse(x,y,d*2);
  
    for (let i = 0; i < r; i++) {
    let angle = map(i, 0, r, 0, TWO_PI);
    let sx = x - cos(angle) * d;
    let sy = y - sin(angle) * d;
    let ex = x - cos(angle) * d * 2;
    let ey = y +  sin(angle) * d * 2;
    stroke(255, 204, 0);
    line(sx, sy, ex, ey);
    noStroke();
  }
}
