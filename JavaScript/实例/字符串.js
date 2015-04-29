//在字符串中查找子字符串
var test="abcdefghijklmn";
vat subs="def";
var i=test.indexOf(subs);//3
var o="xyz";
var p=test.indexOf(0);//-1
//第二个参数为开始搜索位置的一个索引值
var q=test.indexOf("def",6);//-1
//从右向左查
var m=test.lastIndexOf("def",1);//3
//第二个参数 从右向左数n个位置开始 再返回查找的值的从左到右的索引
var n=test.lastIndexOf("lmn",3);//-1

//从一个字符串提取子字符串
var sentence="this is a sentence with a list of items:cherry,orange,apple,banana.";
var start=sentence.indexOf(":");
var end=sentence.indexOf(".",start+1);
var list=sentence.substring(start+1,end);

//分割值为数组
var fruits=list.split(",");

//检查一个非空的字符串
if(((typeof a!="undefined")&&(typeof a.valueOf()=="string"))&&(a.length>0)){}

//split
var list="a,b,c,d";
var arrylist=list.split(",",2);
console.log(arrylist);//["a","b"]

//插入特殊字串

//处理单个行
//使用split("\n")
var txt=document.getElementById('test');
var lines=txt.value.split("\n");
//生成html版本
var resstring="<p>";
for (var i = 0; i < line.length; i++) {
	resstring+= line[i]+"<br>";
}
resstring+="</p>";

//去除字符串末尾空白
for (var i = 0; i < line.length; i++) {
	var string+= line[i].trim();
	resstring+=string;
}

