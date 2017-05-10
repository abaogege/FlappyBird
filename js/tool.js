var tools = {

    /**
     * @constructor 图片加载器 
     * @param { imgSrcs : Object }
     * @param { fn : Function}
     */
    imgLoads: function (imgSrcs, fn) {
        var imgObjs = {},
            index = 0,
            num = 0;
        //将imgSrcs的路径信息传递给imgObjs
        for (var k in imgSrcs) {
            imgObjs[k] = new Image();
            imgObjs[k].src = imgSrcs[k];
            index++;
            //给每个图片对象绑定加载事件
            imgObjs[k].onload = function () {
                //加载完成后会触发，当所有图片加载完成后会执行回调函数
                if (++num >= index) {
                    //将imgObjs作为实参
                    fn(imgObjs)
                }

            }
        }
    },
    /**
     * @constructor 判断固定宽度的单位数量 
     * @param { maxwidth : number }
     * @param { roleWidth : number}
     * @return {n : number }
     */
    getRoleNum:function (maxwidth,roleWidth) { 
        return Math.ceil(maxwidth/roleWidth+1)

     }





}