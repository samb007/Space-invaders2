
const canvas = document.getElementById("myCanvas");


const width = 70;
const height = 55;
let x = 0;
let y = 550;
let bulletY = 546;
let key, pos = 0;
let ctx = canvas.getContext("2d");
let alienColumn = 10;
let alienRow = 4;


let bullets = [];

document.addEventListener('keydown',shoot)
function shoot (e){
  if(e.keyCode == 32){
  let bullet = {x: x+34, y: bulletY}
  bullets.push(bullet);
  drawBullet(bullets);
  
  
}  

}
const drawBullet = (bullets) =>{  
  // ctx.clearRect(0,0,canvas.width, canvas.height)  
  for (let i=0; i<bullets.length; i++){
    if(bullets[i].y> 0){
      ctx.beginPath();
      ctx.rect(bullets[i].x, bullets[i].y, 3,10);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath();
      bullets[i].y -=1;
     
    }
  }
}


let alien = [];

for (let i = 0;i<alienColumn;i++){
    alien[i]=[];
    for (let j = 0;j<alienRow;j++){
        alien[i][j] = {x:0,y:0, status:1};
    }
}



let spider = new Image();
spider.src="img/spider.svg"

const drawSpider =()=>{
  
for (let i=0; i < alienColumn; i++){
  for (let j=0; j< alienRow; j++){
    if(alien[i][j].status == 1 ){
    let alienX = i*(width + 40) +70
    let alienY = j * (height +20) +20
    alien[i][j].x = alienX;
    alien[i][j].y = alienY;
       ctx.drawImage(spider, alienX, alienY, width, height);
  
    // if (bullets[i].x == alienX && bullets[i].y == alienY){
    //   alien[i][j].status = 0
    // }

    }
  }
}

}

let cannon = new Image()
cannon.src="img/Laser_Cannon.png"


document.onkeydown=function(e)
{
  pos=1;
  key=window.event?e.keyCode:e.which;
  
}
document.onkeyup=function(){pos=0}
setInterval(function()
{
    
  // if(pos==0)return;
  if(key==37 && x>0){x-=2};
  
  if(key==39 && x<1130){x+=2};
 
    canvas.width=canvas.width; 
},5);


const game = () =>{
  drawSpider();
  drawBullet(bullets);
  ctx.drawImage(cannon,x,y, width,height);
  
  
}
setInterval(game, 5)

