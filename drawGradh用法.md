# drawGradh用法说明

## 调用

```js
var cvs =document.getElementById("myCanvas");	

new DrawGradh({
	dom: cvs,  // 必须用原生js获取对象
	xAxis: ['周三','周四','周五','周六','周日','周一','周二'],
	series: [	
		{
            name:'邮件营销',
            data:[ 192, 201, 194, 290, 430, 310, 320]
        },
		
        {
            name:'联盟广告',
            data:[140, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'邮件营销',
            data:[120, 132, 101, 134, 90, 230, 210]
        }
	],
	style: {
		
	},
	showXAxis: true
});
```


## 配置声明



总对象

|参数|类型|默认值|是否必须|说明|
|---|-----|----|-----|-----|
|dom|dom对象，原生js获取|无|是||
|xAxis|数组|无|是|x轴坐标信息|
|series|数组|无|是|数据信息|
|style|对象|见下|否|x，y轴参数信息|
|showXAxis|布尔|true|否|默认展示横坐标信息|




style

|参数|类型|默认值|是否必须|说明|
|---|-----|----|-----|-----|
|csLeftPer|number|0.1|否|建立的坐标系在canvas画布上起始的left比例，也就是相对于canvas画布的值*比例来确定left值，取值范围为(0, 1]|
|csTopPer|number|0.2|否|建立的坐标系在canvas画布上起始的top比例，取值范围为(0, 1]|
|csWidthPer|number|0.8|否|建立的坐标系在canvas画布上宽度，取值范围为(0, 1]|
|csHeightPer|number|0.6|否|建立的坐标系在canvas画布上高度，取值范围为(0, 1]|
|csXLineColor|string|'#000'|否| 坐标轴X的颜色|
|csYLineColor|string|'#aaa'|否| 坐标轴Y的颜色|
|csXlineWidth|number| 1|否| 坐标轴X线条的宽度|
|csYlineWidth|number| 0.2|否| 坐标轴Y线条的宽度|
|csXEveLen|number| 5|否| 横坐标小短横的长度|
|csXfont|string| "12px Arial"|否| 横坐标参数的 字号 字体|
|csYfont|string| "12px Arial"|否| 纵坐标参数的 字号 字体|
|csXfontColor|string| "#000"|否| 横坐标参数的颜色|
|csYfontColor|string| "#000"|否| 纵坐标参数的颜色|
|csXfontLeft|number| 0|否| 横坐标参数距小短横的左位置|
|csYfontLeft|number|-10|否|  纵坐标参数距当前长横的左位置，注意此值为负值为向左移动，正值为向右移动|
|csXfontTop|number| 15|否| 横坐标参数距小短横的上位置|
|csYfontTop|number| 5 |否| 纵坐标参数距当前长横的上位置|



title

|参数|类型|默认值|是否必须|说明|
|---|-----|----|-----|-----|
|text|string| '图表'|否|图表标题|
|color|string| '#000'|否|标题颜色|
|font|string| '16px Arial'|否|字体字号|
|top|number| 26|否|距离顶部的值|
|left|number|20|否|距离底部的值|

colorInfo 

|参数|类型|默认值|是否必须|说明|
|----|-----|----|-----|-----|
|font|string| '12px  Arial'|否||
|fontColor|string| '#000'|否||












