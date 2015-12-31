define(['jquery'],function($){


	function D (){
		this.init();
	};


	D.prototype = {

		constructor : D,

		init : function(){
			var that =this ;
				that.getData();
		},

		getAjax : function(options){
			var that = this;

			var defaults = {
				type : "GET",
				url : "",
				dataType : "json",
				data : {},
				successFn : function(){},
				errorFn : function(){}
			}

			var options = $.extend({},defaults,options);

			$.ajax({
				type : options.type,
				url : options.url,
				dataType : options.dataType,
				data : options.data
			}).done(options.sucessFn)
				.fail(options.errorFn);
		},

		getData : function(){

			var that = this;
			console.log(1)

				that.getAjax({
					url : "../data/data.json"
				})
		}
	}

	new D;

})