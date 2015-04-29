//复杂数据传递给函数
function Hello (name) {
	name[name.length]="hello"+name[0]+" "+name[1]
}
var name=new Array('A','B');
Hello(name);
name[2]//"hello A B"

//运行时函数
...
window.onload=function(){
	var func=prompt("enter function body:","");//提示框输入函数主题
	var x=prompt("enter value for x:","");//输入x
	var y=prompt("enter value for y:","");//y
	var newFun=new Function("x","y",func);//Function必须大写
	var res=newFun(x,y);//返回结果
}
...

//*
function outer(x){
	return function(y){return x*y;}
}
var multithree=outer(3);
multithree(2)//6
multithree(3)//9

//curry化*
//给一个函数附加多个参数，使参数不重复
function curry(fn,scope){
	var scope=scope||window;
	var args=[];
	for (var i = 2; i < arguments.length; ++i) {
		args.push(arguments[i]);
	};
	return function(){
		var args2=[];
		for (var i = 0; i < arguments.length; i++) {
			args2.push(arguments[i])
		};
		var argstotal=args.concat(args2)
		return fn.apply(scope,argstotal);
	}
}


//匿名闭包
//避免全局变量 在函数调用之间维护状态
(function(){
	var i=0;
	function increment(){
		i++;
		alert("value is "+i);
	}
	function runIncrement(){
		while(i<5){
			increment();
		}
	}
	window.onload=function(){
		runIncrement();
	}
})();