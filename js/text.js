/**
 * @constructor  文字
 * @param { option : Object } 参数对象
 * @param { option.context : Context } 绘图环境
 * @param { option.x : number } 起始x坐标
 * @param { option.y  : number } 起始y坐标
 */

function Text(option){
    this.context = option.context;
    this.x = option.x;
    this.y = option.y;
    this.num = 0;
    this.startTime=Date.now()
    this.init();
}

Text.prototype = {
    constructor:Text,
    init:function () {  
        this.draw();
        this.update();
    },
    draw:function () {
        this.context.textBaseline='hanging';
        this.context.textAlign='right';
        this.context.font='40px 微软雅黑';
        
       this.context.fillText("坚持了"+this.num+"秒", this.x, this.y);        
      },
      update:function () {  
       this.num = (Date.now()-this.startTime)/1000;
      }
}