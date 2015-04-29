var arr=['a','d','b','c','e']
//返回a,b,c,d,e
var num=[4,13,2,31,5];
//返回13,2,31,4,5
/*真正排序*/
function compare (a,b) {
	return a-b;
}
console.log(num.sort(compare));
//2,4,5,13,31

//在数组中搜索
var animals=new Array('dog','cat','seal','elephant','walrus','lion','cat');
animals.indexOf("cat");//1
animals.lastindexOf("cat");//5
animals.indexOf("cat",2);//5
animals.lastindexOf("cat",4);//1
//删除元素
animals.splice(animals.indexOf("cat"),1)//删除第一个cat
animals.splice(animals.lastindexOf("cat"),1,"monkey");//替换第二个cat为monkey
//对每个元素应用一个函数
var arr=new Array('ab','bb','cd','ab','cc')
function r(element,index,array){
	if(element=='ab')array[index]='**';
}
arr.forEach(r);
//替换所有ab为‘**’
function convertToHex(element,index,array){
	return element.toString(16);
}
var decArray=[23,255,122,5,16,99];
var hexArray=decArray.map(convertToHex);
//17,ff,a,5,10,63
//使用关联数组存储单元元素名和值
var elemArray=new Object();
var elem=documet.forms[0].elements[0];
elemArray[elem.id]=elem.value;
//迭代
for(var key in elemArray){
	str+=key+','+elemArray[key]+' ';
}