//命名空间变体
getElementsByTagNameNS('');//与遍历svg有关

//selectors API
//使用类似css谐振器的方法访问包含在article中的img元素
var imgs=document.querySelectorAll("article img");
//访问所有img元素
var imgs=document.querySelectorAll("img");
//返回article直接子节点的img元素
var imgs=document.querySelectorAll("article>img");
//紧跟在<p>后面所有img元素
var imgs=document.querySelectorAll("img+p");
//alt为空的img元素
var imgs=document.querySelectorAll("img[alt='']);
//alt不为空的img元素
var imgs=document.querySelectorAll("img:not([alt='']));
/**querySelector同上 但只返回第一个*/
//找出一组元素的父元素
var parent=document.querySelector("body p").parentNode;
//创建一个给定类的所有元素的一个数组
var elems=document.getElementByClassName('classname');
	=document.querySelectorAll(".classname");
//找出共享同一属性的所有元素
var elems=document.querySelectorAll('*[class]');
//找出带有相同属性的值的元素
var elems=document.querySelectorAll('*[class="red"]');
//类名不确定
var elems=document.querySelectorAll('*[class*="test"]');
if ( is_admin() ) {  
    remove_action( 'init', '_wp_admin_bar_init' );  
}
edition1.00