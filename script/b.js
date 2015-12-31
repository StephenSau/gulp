define(function(){

	//面向对象的方式

	function Person (){
		this.name = 1321;
		// this.init();
	} 

	Person.prototype ={

		constructor : Person,

		init : function(){
			console.log(this.name)
		}

		// get : function(){}
	}

	// return new Person;

	//类式继承，原型继承，拷贝继承

	function Man(){
		Person.call(this);
	}

	// var F = function(){};

	// F.prototype = Person.prototype;
	// Man.prototype= new F;

	// Man.prototype.constructor = Man;


	// function extend(subClass,superClass){
	//     var F = function(){};
	//     F.prototype = superClass.prototype;
	//     subClass.prototype = new F();
	//     subClass.prototype.constructor = subClass;
	//     subClass.superclass = superClass.prototype; //加多了个属性指向父类本身以便调用父类函数
	//     if(superClass.prototype.constructor == Object.prototype.constructor){
	//         superClass.prototype.constructor = superClass;
	//     }

	// }

	// extend(Man,Person);
	// function extend(subClass,superClass){

	// 	var F = function(){};
	// 	F.prototype = superClass.prototype;
	// 	subClass.prototype = new F;

	// 	subClass.prototype.constructor = subClass;
	// }
	
	// function extend1(subClass,superClass){
	// 	var F = function(){};

	// 	for(var attr in superClass.prototype){
	// 		if(superClass.protoype.hasOwnProperty(attr)){

	// 			F.prototype[attr] = superClass.prototype[attr];
	// 			subClass.prototype[attr] = F.prototype[attr];
	// 		}
	// 	}
	// 	subClass.prototype.constructor = subClass;
	// }



	// // extend1(Man,Person);
	// extend(Man,Person);
	// extend1(Man,Person);

	// var man = new Man;
	// 	man.init();
	// extend1(Man,Person);

	//copy

	// var clone = function(obj){

	// 	var _f = function(){}

	// 	_f.prototype = obj;

	// 	return new _f;
	// }

	// var a = {
	// 	name : 211,
	// 	getName : function(){
	// 		return this.name
	// 	}
	// }
	

	// var b = clone(a);
	// 	b.setName =function(){};
	// b.name = "666";

	// // console.log(b.name)
	// console.log(a);
	// var a = {
	// 	name : 12313
	// }

	// var b = a;

	// 	b.name 


	//json 与 传统的类

	// console.log(Man.prototype)

	// function extend(subClass,superClass){

	// 	var F = function(){};
	// 	F.prototype = superClass.prototype;
	// 	subClass.prototype = new F;

	// 	subClass.prototype.constructor = subClass;
	// }


	// var Animal = function(){
	// 	this.name =132;
	// };

	// 	Animal.prototype = {
	// 		constructor : Animal,
	// 		name : 121
	// 	}

	// console.log(Animal)

	// function Person (name){

	// 	this.name = name;
	// }

	// Person.prototype ={
	// 	constructor : Person,

	// 	getName :function(){
	// 		return this.name;
	// 	}
	// }

	// function Man(name,sex){
	// 	Person.call(this);
	// 	this.sex = sex;
	// }




	// function extend(subClass,superClass){
	// 	var F = function(){};
	// 	F.prototype = superClass.prototype;
	// 	subClass.prototype = new F;

	// 	subClass.prototype.constructor = Man;

	// }

	// extend(Man,Person);


	// // var person = new Person;

	// // 	console.log(person.getName());

	// var man = new Person('stephen','male');

	// console.log(man.getName());


	

})