abs(x)				//绝对值
acos(x)				//反余弦
asin(x)				//反正弦
atan(x)				//反正切
atan2(x,y)			//x和y的商的反正切
ceil(x)				//大于等于x的最小整数
cos(x)				//
exp(x)				//e^x
floor(x)			//小于等于x的最大整数
log(x)				//lg
max(x1,x2,x3,x4...)	//返回最大值
min(x1,x2,x3,x4...)	//返回最小值
pow(x,y)			//x^y
random()			//大于等于0小于1的随机数
round(x)			//四舍五入
sin(x)				//
sqrt(x)				//

/*实例*/
//随机产生5-10的整数
var num=Math.floor(Math.random()*6)+5;
//随机产生颜色
function randomval (val) {
	return Math.floor(Math.random()*(val+1));
}
function randomcolor(){
	return "rgb("+randomval(255)+","+"+randomval(255)+","+"+randomval(255)+")";
}