
define(['handlebars'],function(Handlebars){

	// console.log(1212);

	// console.log($('p').html());

	// console.log($('p').html());
	// var json = {name : 13211};
	// console.log($.toJSON(json));
	// var jsonStr = '{"name":"1213"}';
	// console.log($.evalJSON(jsonStr))

	//this 指向对象
	
	// console.log(json)
	// console.log($(document))

	console.log(Handlebars)

	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var context = {title: "My New Post", body: "This is my first post!"};
	var html    = template(context)

	$('body').append(html);

})