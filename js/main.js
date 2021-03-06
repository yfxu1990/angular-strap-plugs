require.config({
    // packages: [{
    //     name: 'moment',
    //     // This location is relative to baseUrl. Choose bower_components
    //     // or node_modules, depending on how moment was installed.
    //     location: '[bower_components|node_modules]/moment'
    //     main: 'moment'
    // }]

    baseUrl: "https://ycmbcd.github.io/angular-strap-plugs/",
        paths: {
            "angular": "lib/angular.min",
            "ngSanitize": "lib/angular-sanitize.min",
            "ngAnimate": "lib/angular-animate.min",
            "uiRouter": "lib/angular-ui-router",
            "ngStrap": "lib/angular-strap.min",
            "ngstrapTpl": "lib/angular-strap.tpl.min",
            "momentLocal": "lib/moment-with-locales",
            "moment": "lib/moment",
            "ngFlatDatepicker": "lib/ng-flat-datepicker",
            "ionic": "lib/ionic.bundle",
            "ngFileUpload": "lib/ng-file-upload.min",
            "ngFileUploadShim": "lib/ng-file-upload-shim.min",
            "jquery": "lib/jquery-1.12.0.min",
            "echarts": "",
            // app.js
            "app": "js/app",
            // 控制器
            "ctrlSite": "ctrl/ctrl_site",
            "ctrlPlugs": "ctrl/ctrl_plugs",
            "ctrlCalculator": "ctrl/ctrl_calculator",
            // 拖拽
            "move_modal": "js/move_modal"
    },
    shim: {
        'jquery': {
            exports: '$',
        },
        // 拖拽
        'move_modal': {
            exports: 'move_modal',
            deps: ['jquery']
        },
        'angular': {
            exports: 'angular'
        },
        'ngSanitize': {
            exports: 'ngSanitize',
            deps: ['angular']
        },
        'ngAnimate': {
            deps: ['angular']
        },
        'uiRouter': {
            exports: 'uiRouter',
            deps: ['angular']
        },
        'momentLocal': {
            exports: 'momentLocal',
            deps: ['jquery','angular']
        },
        'moment': {
            exports: 'moment',
            deps: ['jquery','angular']
        },
        'ngStrap': {
            exports: 'ngStrap',
            deps: ['angular']
        },
        'ngstrapTpl': {
            exports: 'ngstrapTpl',
            deps: ['angular','ngStrap']
        },
        'ngFlatDatepicker': {
            exports: 'ngFlatDatepicker',
            deps: ['angular','moment']
        },
        'ngFileUpload': {
            exports: 'ngFileUpload',
            deps: ['angular']
        },
        'ngFileUploadShim': {
            exports: 'ngFileUploadShim',
            deps: ['angular','ngFileUpload']
        },
        'ionic': {
            exports: 'ionic',
            deps: ['angular']
        }
    
    }
});

require(['angular','uiRouter','ngAnimate','ngStrap','ngstrapTpl','moment','ngFlatDatepicker','ngFileUpload','ngFileUploadShim','ionic','app','ctrlSite','ctrlPlugs','ctrlCalculator','move_modal'],function(angular,uiRouter,ngAnimate,ngStrap,ngstrapTpl,moment,ngFlatDatepicker,ngFileUpload,ngFileUploadShim,ionic,app,ctrlSite,ctrlPlugs,ctrlCalculator,move_modal){

    move_modal();   // 启动拖拽模态框

    $(function () {
        angular.bootstrap(document,["myApp"]);  // 启动APP
    });
});
 