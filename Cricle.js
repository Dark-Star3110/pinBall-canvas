class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        this.canvas=document.getElementById('my-canvas');
        this.ctx=this.canvas.getContext('2d');
        this.x=this.canvas.width/2;
        this.y=this.radius;
        this.dx=2;
        this.dy=2;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        this.ctx.fillStyle=this.color;
        this.ctx.fill();
    }
    move(){
        if(this.x < this.radius || this.x > this.canvas.width-this.radius){
            this.dx=-this.dx;
        }
        if(this.y < this.radius){
            this.dy=-this.dy
        }
        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
    }  
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}