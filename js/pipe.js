/**
 * @constructor  管道
 * @param { option : Object } 参数对象
 * @param { option.context : Context } 绘图环境
 * @param { option.imgUp : Image } 图片对象
 * @param { option.imgDown : Image } 图片对象
 * @param { option.x : number } 起始x坐标
 * @param { option.yUp  : number } 起始y坐标
 * @param { option.yDown  : number } 起始y坐标
 * @param { option.speed : number } 移动的速度
 * @param { option.speedPlus : number } 移动的加速度
 */

function Pipe(option){
     this.context = option.context;
    this.imgUp = option.imgUp;
    this.imgDown = option.imgDown;
    this.x = option.x;
    this.yUp = option.yUp;
    this.yDown = option.yDown;
    this.speed = option.speed;
    this.speedPlus = option.speedPlus;
    
    this.init()
}

Pipe.prototype = {
    constructor:Pipe,
    init:function(){
        this.draw();
        this.update()
    },
    draw:function () {
        //图像
        this.context.drawImage(this.imgUp,this.x,this.yUp)
        this.context.drawImage(this.imgDown,this.x,this.yDown);
        //下方管路径
        this.context.moveTo(this.x,this.context.canvas.height);
        this.context.lineTo(this.x,this.yUp);
        this.context.lineTo(this.x+this.imgUp.width,this.yUp);
        this.context.lineTo(this.x+this.imgUp.width,this.context.canvas.height);
        this.context.closePath();

        //上方管路径
        this.context.moveTo(this.x,0);
        this.context.lineTo(this.x,this.yDown+this.imgDown.height);
        this.context.lineTo(this.x+this.imgDown.width,this.yDown+this.imgDown.height);
        this.context.lineTo(this.x+this.imgDown.width,0);
        this.context.closePath();
        
        // this.context.strokeStyle="black";
        // this.context.stroke();
    },
    update:function () {  
        this.x -= this.speed;
        this.speed+=this.speedPlus

       if(this.x<=-this.imgUp.width*2.5){
            this.x+=8*this.imgUp.width*2.5;
        }
    }
}