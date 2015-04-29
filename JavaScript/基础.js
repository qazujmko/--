//变量
var a1,
	a2,
	a3;

// for循环 低效
for  (var i = 0; i < Things.length; i++) {
	Things[i]
};
// for循环 高效
for (var i = 0,max=Things.length; i < max; i++) {
	Things[i]
};
//for in循环
for(var i in man){
	if(man.hasOwnProperty(i)){
		console.log(i,":",man[i])
	}
}//否则会枚举出clone()方法

//使用parseInt()规定进制
var month = "06",
	year = "09";
month=parseInt(month,10);
year=parseInt(year,10);

//命名
//构造函数首字母大写
var adam=new Person();
//其他函数驼峰
function myFunction (argument) {
	// body...
}
//常量
var PI=3.14;
//私有方法
var Person={
	getName://...
	_getFirst://...
	_getLast://...
}

//注释
//可用YUIDOC工具
/**
 *
 *@firstname 姓
 *@getName{string} 输入xxx
 *
 */