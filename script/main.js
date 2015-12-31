
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../script',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.

    /*兼容非amd规范与插件依赖顺序*/
    shim : {
        jquery : {
            exports : "$"
        },
        json: {
            exports : 'json',
            deps: ['jquery']
        },
        handlebars : {
            exports : 'Handlebars',
            deps : ['jquery']
        }
    },

    paths: {
        jquery: 'jquery-1.11.3',
        json : 'jquery.json.min',
        handlebars : 'handlebars-v4.0.4'
    }
});



(function(requirejs){
	// requirejs.config()
    "use strict";

	requirejs(['d']);

})(window.requirejs)