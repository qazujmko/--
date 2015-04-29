//在一篇文章中找到所有图像
var imgstring="";
var articles= document.getElementsByTagName('article');
for (var i = 0; i < articles.length; i++) {
	var imgs= articles[i].getElementsByTagName('img');
	for (var j = 0; j < imgs.length; i++) {
		var img = imgs[j];
		imgstring+=img.src+"<br />";

	};
};
document.getElementById('result').innerHTML=imgstring;

//突出显示每个元素中第一个段落
var paras=document.querySelectorAll('div p:first-of-type');
for(var i=0;i<paras.length;i++){
	paras[i].setAttribute("style","background-color:#ffff00");
}
//另一种方法
var divs= document.querySelectorAll("div");
for (var i = 0; i < divs.length; i++) {
	var ps=divs.item(j).getElementsByTagName("p");
	if(ps.length>0){
		ps[0].setAttribute("style","background-color:#ffff00");
	}
};

//对无序列表应用条纹主题
var lis=document.querySelectorAll('li:nth-child(2n+1)');
for(var i=0;i<lis.length;i++){
	lis[i].setAttribute("style","background-color:#ffeeee");
}
//:nth-child()伪类，