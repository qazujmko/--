//命名属性
function foo(){}
var bar=fun
ction(){};
var baz=function baz(){};

foo.name;//"foo"
bar.name;//""
baz.name;//"baz"

//回调函数
var finfNodes=function(callback){
	var i=10000,
		nodes=[],
		found;
	if(typeof callback !=="function"){//检查回调函数是否可调用
		callback=false;
	}
	while(i){
		i-=1;
		//...
		if(callback){
			callback(found);
		}
		nodes.push(found);
	}
	return nodes;
};

var hide=function(node){
	node.style.display="none";
};
//调用
finfNodes(hide);
//或者传递一个匿名函数
finfNodes(function(node){
	node.style.display="block";
});

