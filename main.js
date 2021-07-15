let circle = new Circle(5,'red');
circle.draw();
let rectangle = new Rectangle(100,5,30);
rectangle.setBackgroundColor('blue');
rectangle.draw();
// let brick= new Brick(20,20,'green');
// brick.draw();
let space=20;
let score=0;
let listBrick=[];
for(let i=0;i<2;i++){
    for(let j=0;j<6;j++){
        let brick = new Brick(10+j*(30+space),10+i*(10+space),'green');
        listBrick.push(brick);
    }
}
console.log(listBrick);
function drawBrick(){
    for(let i=0;i<listBrick.length;i++){
        if(!listBrick[i].status)
        listBrick[i].draw();
    }
}
drawBrick();

let start=true;

window.addEventListener('keydown',function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 37:
            rectangle.moveLeft();
            break;
        case 39:
            rectangle.moveRight();
            break;
    }
});
function fall(){
    if(!isGameOver()){
        clear();
        drawBrick();
        rectangle.setBackgroundColor('blue');
        rectangle.draw();
        circle.move();
        circle.draw();
        impact();
        checkcollision(circle);
        checkResult();
        if(start){
            requestAnimationFrame(fall);
        }
    }
    else{
        alert('Game Over!');
    }
}
// fall();
function play(){
    start=true;
    fall();
}
function stop(){
    start=false;
}

function clear(){
    let canvas=document.getElementById('my-canvas');
    let ctx=canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function isGameOver(){
    if(circle.y > circle.canvas.height-circle.radius){
        return true;
    }
    return false;
}
function impact(){
    if(circle.x+circle.radius >= rectangle.x && circle.x+circle.radius <= rectangle.x+rectangle.width && circle.y +circle.radius >= rectangle.y){
        circle.dy=-circle.dy;
    }
}

function checkcollision(circle) {
    listBrick.forEach((brick) => {
        if(!brick.status) {
            // va cham tren
            if(circle.x >= brick.x && circle.x <= brick.x + brick.width 
                && (circle.y - circle.radius <= (brick.y + brick.height)) ) {
                    brick.status = true;
                    score++;
                    circle.dy = -circle.dy;
            }
            //va cham duoi
            if(circle.y-circle.radius>=0 && circle.y+circle.radius <= brick.y+brick.height){
                if(circle.x >= brick.x && circle.x <= brick.x + brick.width 
                    && (circle.y + circle.radius >= brick.y)) {
                        score++;
                        brick.status = true;
                        circle.dy = -circle.dy;
                }
            }
        } 
    })
}

function checkResult(){
    document.getElementById('score').innerHTML='Your Score: '+score;
    // if(score==4){
    //     increaseSpeed();
    // }
    // else if(score==8){
    //     increaseSpeed();
    // }
    if(score==12){
        start=false;
        alert('You Win');
    }
}

// function increaseSpeed(){
//     circle.dx=2;
//     circle.dy=2;
// }

function refresh(){
    location.reload();
}





