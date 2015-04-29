//创建画布
<canvas id="myCanvas" width="200" height="100"
style="border:1px solid #000000;">
</canvas>
//画线
<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);//起点
ctx.lineTo(200,100);//终点
ctx.stroke();//关闭路径
</script>
//矩形
cxt.fillRect(10,10,30,30);//横坐标，纵坐标，横偏移量，纵偏移量
cxt.fillStyle="rgba(255,0,0,0.5)";//0.5透明度
//圆形
ctx.arc(0,0,100,0,2*Math.PI);//横坐标，纵坐标，半径，起点角度（以x轴正向为0），终点角度（顺时针）
ctx.stroke();
//