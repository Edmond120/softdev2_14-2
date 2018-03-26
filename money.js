var bar = d3.select('#bar');

var Dept =  [
		"Agriculture",
		"Commerce"   ,
		"Defence"    ,
		"Education"  ,
		"Energy"     ,
			];

var Outlays2017=[
		133 ,
		9.28,
		516 ,
		60.2,
		26.7,
			];

var Outlays2018=[
		132 ,
		9.56,
		491 ,
		65.6,
		26.1,
			];

var year = 2017;
var data = Outlays2017
var i = -1;
var c = "red";
var initBarGraph = function(data){
	i = -1;
	bar.selectAll("rect").remove();
	bar.selectAll("text").remove();

	bar.selectAll("rect")
		.data(data)
		.enter()
		.append("rect")
		.attr("x"     ,function(a){return 0;})
		.attr("y"     ,function(a){i = i + 1;return i*50;})
		.attr("height",function(a){return 40;})
		.attr("style" ,function(a){return "fill:" + c})
		.transition()
		.duration(2000)
		.attr("width" ,function(a){return a;})
	i = -1;
	bar.selectAll("text")
		.data(Dept)
		.enter()
		.append("text")
		.attr("x",function(a){return 10;})
		.attr("y",function(a){i = i + 1; return i * 50 + 15;})
		.text(function(a){return a;})
};

var switchGraphs = function(){
	if(year == 2017){
		year = 2018;
		data = Outlays2018;
		c = "green";
	}
	else{
		year = 2017;
		data = Outlays2017;
		c = "red"
	}
	initBarGraph(data);
}

initBarGraph(data);
