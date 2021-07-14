let circle = new Circle(10,'red');
circle.draw();
let rectangle = new Rectangle(100,8,30);
rectangle.draw();

window.addEventListener('keydown',function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 37:
            rectangle.moveLeft();
            break;
        case 38:
            rectangle.moveUp();
            break;
        case 39:
            rectangle.moveRight();
            break;
        case 40:
            rectangle.moveDown();
            break;
    }
});
function fall(){
    if(!isGameOver()){
        clear();
        rectangle.setBackgroundColor('blue');
        rectangle.draw();
        circle.move();
        circle.draw();
        impact();
        requestAnimationFrame(fall);
    }
    else{
        alert('Game Over!');
    }
}
fall();

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





