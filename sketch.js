
let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#9bf6ff")
  rectMode(CENTER)
  noFill()
  angleMode(DEGREES)//設定角度的單位0~360
  frameRate(50)
}
function draw() {
  background("#0d0c1d");
  //translate(mouseX,mouseY)  //案原點由視窗的左上角移到視窗的中間
  for(let y =0;y<height;y=y+120){
    for(let x=0;x<width;x = x+120){
      push()  //重新設定格式(包含原點(0,0)位置，線條顏色..)，要設定原點(0,0)的位置在(x,y)上 
        translate(x,y)
        stroke("#5465ff")
        //=======產生一個方形==============================================
        //rotate(angle)  //把物件旋轉10度的角度，以原點(0,0)作為旋轉的基準點
        //rect(0,0,600,600,100)
        //angle = sin(frameCount) * 100  //-100 ~ +100
        //=================================================================
        for(let i=0;i<10;i = i+1){
          //let r = random(50,255)  //抽一個亂數值，介於50(包含)與255(不包含)間的數字
          //let g = random(50,255)  //抽一個亂數值，介於50(包含)與255(不包含)間的數字
          //let b = random(50,255)  //抽一個亂數值，介於50(包含)與255(不包含)間的數字
          let r = map(sin(frameCount),-1,1,0,255)
          let g = map(cos(frameCount/2),-1,1,0,255)
          let b = map(sin(frameCount/4),-1,1,0,255)
          stroke(r,g,b)
          rotate(angle)
          rect(0,0,100-i*3,100-i*3,20)
          angle = sin(frameCount) * 30
        }
      pop()
   }
 } 
}
