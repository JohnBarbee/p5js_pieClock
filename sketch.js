function setup() {
  // put setup code here
  createCanvas(400,400)
  angleMode(DEGREES)
}

function draw() {
  // put drawing code here
  clear()
  background(25,25,35)

  translate(canvas.width / 2, canvas.height / 2)
  hr = floor(hour())
  mn = floor(minute())
  sc = floor(second())
  hr = hr % 12
  total = hr + mn + sc;

  //draw hour
  hrMaxAngle = (hr / total) * 360
  fill(255,150,50)
  noStroke()
  text("Hour: " + str(hr),-180,-180)
  if(hr != 0){
  	stroke(255,255,0)
  	strokeWeight(4)
  	arc(0,0,200,200, 0, hrMaxAngle, PIE)
  }

  //draw minutes
  fill(50,255,150)
  noStroke()
  text("Minute: " + str(mn),-180,-160)
  mnMaxAngle = (mn / total) * 360
  if(mn != 0){
  	stroke(255,255,0)
  	strokeWeight(4)
  	arc(0,0,200,200,hrMaxAngle, hrMaxAngle + mnMaxAngle, PIE)
  }

  //draw seconds
  fill(150,50,255)
  noStroke()
  text("Second: " + str(sc),-180,-140)
  if(sc != 0){
  	stroke(255,255,0)
  	strokeWeight(4)
  	arc(0,0,200,200,hrMaxAngle + mnMaxAngle, 360, PIE);
  }
}