class Brick{
    constructor(x,y,color){
        this.width=30;
        this.height=10;
        this.color=color;
        this.x=x;
        this.y=y;
        this.canvas=document.getElementById('my-canvas');
        this.ctx=this.canvas.getContext('2d');
        this.status=false;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle=this.color;
        this.ctx.rect(this.x,this.y,this.width,this.height);
        this.ctx.fill();
    }
}