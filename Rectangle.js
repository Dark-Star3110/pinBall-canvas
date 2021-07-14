class Rectangle{
    constructor(width,height,speed){
        this.width=width;
        this.height=height;
        this.speed=speed;
        this.canvas=document.getElementById('my-canvas');
        this.x=(this.canvas.width/2)-(this.width/2);
        this.y=this.canvas.height-this.height;
        this.ctx=this.canvas.getContext('2d');
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.fillRect(this.x,this.y,this.width,this.height);
        this.ctx.fill();
    }
    setBackgroundColor(color){
        this.ctx.fillStyle = color;
    }

    moveLeft(){
        if(this.x >=0){
            this.x-=this.speed;
        }
        else{
            this.x=0;
        }
    }
    moveRight(){
        if(this.x <= this.canvas.width-this.width){
            this.x+=this.speed;
        }
        else{
            this.x = this.canvas.width-this.width;
        }
    }
    moveUp(){
        this.y-=this.speed;
    }
    moveDown(){
        this.y+=this.speed;
    }

    clear(){
        this.ctx.clearRect(this.x,this.y,this.width,this.height);
    }

}