//首先定义一个字面量
var dog={
	name:"abc";
	getName:function(){
		return this.name;
	}
}
//添加属性/方法
dog.say=function(){
	return "wang!";
}
//删除属性/方法
delete dog.name;

//自定义构造函数
var Person=function(){
	this.name=name;
	this.say=function(){
		return "I am "+this.name;
	}
}
//调用
var adam=new Person("adam");
adam.say();

//自调用构造函数
function Waffle(){
	if (!(this instanceof Waffle)) {
		return new Waffle();
	};
	this.tastes="y";
}
Waffle.prototype.another=true;
//测试
var a=new Waffle(),
	b=Waffle();
console.log(a.tastes);
console.log(b.tastes);
console.log(a.another);
console.log(b.another);
//否则无法直接调用Waffle();

//数组字面量
var a=["a1","a2","a3"];
//避免使用new Array()
//当向Array传入单个数字时，该值会成为数组长度

//JSON
var jstr='{"mykey":"my value"}';
var data=JSON.parse(jstr);
console.log(data.mykey);//my value

//对象/数组转json字符串
var jsonstr=JSON.stringify(dog);

//正则表达式字面量****
var re=/\\/gm;
//相当于构造函数
var re=new RegExp("\\\\","gm");

//错误对象
function Text() {
　　try {
　　　　alert((prompt("Enter JavaScript to uate:","")))
　　}catch(err) {
　　　　if(err.name == "SyntaxError") alert("Invalid expression")
　　　　else alert("Cannot uate")
　　}
}
