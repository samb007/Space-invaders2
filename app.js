
const canvas = document.getElementById("myCanvas");


const width = 70;
const height = 55;
let x = 0;
let y = 550;
let bullety = 546;
let key, pos = 0;
let ctx = canvas.getContext("2d");
let cannon = new Image();
let alienColumn = 9;
let alienRow = 4;


let alien = [];

for (let i = 0;i<alienColumn;i++){
    alien[i]=[];
    for (let j = 0;j<alienRow;j++){
        alien[i][j] = {x:0,y:0};
    }
}

cannon.onload=function()
{
  
  ctx.drawImage(cannon,x,y,width,height);
}
cannon.src="img/Laser_Cannon.png"

let spider = new Image();
spider.src="img/spider.svg"

const drawSpider =()=>{
for (let i=0; i < alienColumn; i++){
  for (let j=0; j< alienRow; j++){
    let alienX = i*(width + 10) +20
    let alienY = j * (height +20) +20
    alien[i][j].x = alienX;
    alien[i][j].y = alienY;
    ctx.drawImage(spider, alienX, alienY, width, height);


  }
}
}
onload=function(){
  drawSpider()
}
document.onkeydown=function(e)
{
  pos=1;
  key=window.event?e.keyCode:e.which;
  
}
document.onkeyup=function(){pos=0}
setInterval(function()
{
    
  if(pos==0)return;
  if(key==37 && x>0){x-=2};
  if (key == 32){bullety-=3} 
  if(key==39 && x<1130){x+=2};
 
    canvas.width=canvas.width;
  ctx.drawImage(cannon,x,y, width,height);
  drawSpider();
  
  ctx.fillStyle = "red"
  ctx.fillRect(x+34, bullety, 3, 10);
  ctx.fill();
},5);



