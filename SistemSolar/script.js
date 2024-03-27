function setup() {
    createCanvas(1600, 700);
}
function draw(){
    background(255,255,255)
    sun(800,350,40,40)
    stroke(0,0,0)
noFill();
    ellipse(820, 350,400, 100)    
    ellipse(840, 350,750, 150)  
    ellipse(860, 350,1000, 180)  
    ellipse(880, 350,1200, 200)  
    ellipse(900, 350,1400, 220)  
    fill("brown")
    ellipse(620, 350, 30)
    fill("green")
    ellipse(1210, 350, 40)
    fill("blue")
    ellipse(360, 350, 60)
    fill("red")
    ellipse(1480, 350, 50)
    fill(255, 153, 0)
    ellipse(200, 350, 90)
    
    
   
}
function sun(x,y,d,r){
    fill(255,204,0);
noStroke();
    ellipse(x,y,d*2);
    
      for (let i = 0; i < r; i++) {
      let angle = map(i, 0, r, 0, TWO_PI);
      let sx = x + cos(angle) * d;
      let sy = y + sin(angle) * d;
      let ex = x + cos(angle) * d * 1.5;
      let ey = y + sin(angle) * d * 1.5;
      stroke(255, 204, 0);
      line(sx, sy, ex, ey);
    }
  }
