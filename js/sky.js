/**
 * @constructor  背景
 * @param { option : Object } 参数对象
 * @param { option.context : Context } 绘图环境
 * @param { option.img : Image } 图片对象
 * @param { option.x : number } 起始x坐标
 * @param { option.y  : number } 起始y坐标
 * @param { option.speed : number } 移动的速度
 */

function Sky(option){
    this.context = option.context;
    this.img = option.img;
    this.x = option.x;
    this.y = option.y;
    this.speed = option.speed;
    this.init()
}

Sky.prototype = {
    constructor : Sky,
    init:function(){
        this.draw();
        this.update();
    },
    draw:function () { 
        this.context.drawImage(this.img, this.x, this.y);
     },
    update:function () { 
        this.x -= this.speed;
        if(this.x<=-this.img.width){
            this.x+=2*this.img.width;
        }
     }
}