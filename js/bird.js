/**
 * @constructor  鸟
 * @param { option : Object } 参数对象
 * @param { option.context : Context } 绘图环境
 * @param { option.img : Image } 图片对象
 * @param { option.x : number } 起始x坐标
 * @param { option.y  : number } 起始y坐标
 * @param { option.speed : number } 移动的速度
 * @param { option.speedPlus : number} 移动的加速度
 */

function Bird(option){
    this.context = option.context;
    this.img = option.img;
    this.x = option.x;
    this.y = option.y;
    this.speed = option.speed;
    this.speedPlus = option.speedPlus;
    this.index = 0;
    this.init()
}

Bird.prototype = {
    constructor:Bird,
    init:function () {  
        this.draw();
        this.update();
        this.onClick();
    },
    draw:function () {  
        this.index = ++this.index%3;
        this.context.drawImage(this.img,this.img.width*this.index/3,0,1/3*this.img.width,this.img.height,this.x,this.y,1/3*this.img.width,this.img.height)
    },
    update:function () {  
        this.y += this.speed;
        this.speed +=this.speedPlus;
    },
    onClick:function () {  
        var that = this;
        this.context.canvas.onclick = function () {  
            that.speed = -6;
        }
    }
}