/^start/	->"start..."
/end$/		->"...end"
/se*/ 		->"seeee"||"se" //0或多次
/ap?/		->"apple"||"and"//0或一次
/ap+/		->"apple"!="and"//一或多次
/ap{2}/		->"apple"||"appp"!="ap" //严格匹配2次，结果为"app"，"app"
/ap{2,}/	->"apple"||"appp"!="ap" //匹配2次或多于2次,"app","appp"
/ap{2,4}/	->"apple"||"appp"!="ap" //匹配2次到4次,"app","appp"
/a.e/		->"ane"||"axe"//不匹配换行符
/a[px]e/	->"ape"||"axe"!="are"!="apxe"//匹配[]中一个
/a[^px]e/	->"are"!="arre//不匹配[^]中任意
/\bno/		->"nono"//匹配边界上的单词，第一个no
/\Bno/		->"nono"//匹配非边界上的单词，第二个no

\d		->匹配0-9数字
\D 		->非数字字符
\w		->匹配字母数字下划线
\W 		->匹配非字母数字下划线
\n 		->匹配换行
\s 		->一个单个的空白字符
\S 		->一个单个的非空白字符
\t 		->一个制表符

g 全局匹配，不是在第一次匹配后停止
m 对多行字符串的每一行 应用^&
i 忽略大小写
//圆括号
var name="abe lincoln";
var re=/^(\w+)\s(\w+)$/;
var newname=name.replace(re,"$2,$1");//"lincoln,abe"

/*调试代码*/
<script>
var str="";
var patt1=;
document.write(str.match(patt1));
</script>

//使用命名实体替代html标签
var html="<><><><>";
html=html.replace(/</g,"&lt;");
html=html.replace(/>/g,"&gt");
document.getElementById('').innerHTML=html;

//函数
/*regexp	正则表达式
 *modifier	规定匹配的类型gmi
 *searchvalue	查找的字符串或者正则表达式
 */
RegExpObject.compile(regexp,modifier);//compile() 方法用于在脚本执行过程中编译正则表达式 也可用于改变和重新编译正则表达式
RegExpObject.exec(string);//如果字符串中有匹配的值返回该匹配值，否则返回 null
RegExpObject.test(string);//如果字符串中有匹配的值返回 true ，否则返回 false
string.search(searchvalue);//与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置
string.match(regexp);//返回存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。 如果没找到匹配结果返回 null 。
string.replace(searchvalue,"newvalue");//替换
string.split(searchvalue,limit);//返回处理过的字符串 limit为长度，可选

//实例去html标签
var html="<p>123</p>";
html=html.replace(/</g,"&lt;");
html=html.replace(/>/g,"&gt;");
