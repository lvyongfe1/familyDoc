/**
 * Created by lvyongfei on 16/11/15.
 */
define(['app'],function (app) {
  app.config(function ($stateProvider, $urlRouterProvider) {
      // Override the internal 'views' builder with a function that takes the state
      // definition, and a reference to the internal function being overridden:
      $stateProvider.decorator('views', function (state, parent) {
        var result = {}, views = parent(state);
        //var head = "http://192.168.1.48:8081/kangbaomu/doctor/www/";
        var head = "";
        angular.forEach(views, function (config, name) {
          config.controllerUrl = head + config.controllerUrl;
          config.templateUrl = head + config.templateUrl;
          result[name] = config;
        });
        return result;
      });
      $stateProvider

        // setup an abstract state for the tabs directive

        // 首页
        .state('index', {
          url: '/index',
          templateUrl: "templates/index.html",
          controller: "indexCtrl",
          controllerUrl: 'js/controllers/index.js'
        })

        //登录
        .state('login', {
          url: '/login',
          templateUrl: "templates/login.html",
          controller: "loginCtrl",
          controllerUrl: 'js/controllers/login.js'
        })

        // 注册
        .state('register', {
          url: '/register',
          templateUrl: "templates/register.html",
          controllerUrl: 'js/controllers/register.js',
          controller: "registerCtrl"
        })
        .state('userText', {
          url: '/userText',
          templateUrl: "templates/userText.html",
          controllerUrl: 'js/controllers/userText.js',
          controller: "userTextCtrl"
        })
        .state('protocolText', {
          url: '/protocolText',
          templateUrl: "templates/protocolText.html",
          controllerUrl: 'js/controllers/protocolText.js',
          controller: "protocolTextCtrl"
        })

        // 找回密码
        .state('findpsw', {
          url: '/findpsw',
          templateUrl: "templates/findpsw.html",
          controllerUrl: 'js/controllers/findpsw.js',
          controller: "findpswCtrl"
        })

        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:

        // 我的健康（首页）
        .state('tab.minehealth', {
          url: '/minehealth',
          views: {
            'tab-minehealth': {
              templateUrl: 'templates/tab-minehealth.html',
              controller: 'MinehealthCtrl',
              controllerUrl: 'js/controllers/Minehealth.js'

            }
          }
        })

        // 个人信息
        .state('tab.minehealth-detail', {
          url: '/minehealth-detail',
          cache: false,
          views: {
            'tab-minehealth': {
              templateUrl: 'templates/minehealth-detail.html',
              //controller: 'personCtrl',
              //controllerUrl: 'js/controllers/personal.js'
            }
          }
        })

        /*添加家人数据*/
        .state('tab.minehealth-familyAdd', {
          url: '/minehealth-familyAdd',
          cache: false,
          views: {
            'tab-minehealth': {
              templateUrl: 'templates/minehealth-familyAdd.html',
              controller: 'familyAddCtrl',
              controllerUrl: 'js/controllers/familyAdd.js'
            }
          }
        })

        /* 添加医生按钮*/
        .state('tab.minehealth-more', {
          url: '/minehealth-more',
          cache: false,
          views: {
            'tab-minehealth': {
              templateUrl: 'templates/minehealth-more.html',
              controller: 'listCtrl',
              controllerUrl: 'js/controllers/list.js'
            }
          }
        })
        /* 隐私*/
        .state('tab.privacy', {
          url: '/privacy',
          cache: false,
          views: {
            'tab-minehealth': {
              templateUrl: 'templates/privacy.html',
              //controller: 'listCtrl',
              //controllerUrl: 'js/controllers/list.js'
            }
          }
        })

        /* 日程*/
        .state('tab.schedule', {
          url: '/schedule',
          cache: false,
          views: {
            'tab-minehealth': {
              templateUrl: 'templates/schedule.html',
              //controller: 'listCtrl',
              //controllerUrl: 'js/controllers/list.js'
            }
          }
        })

        /* 日程详细*/
        .state('tab.scheduledetail', {
          url: '/scheduledetail',
          cache: false,
          views: {
            'tab-minehealth': {
              templateUrl: 'templates/scheduledetail.html',
              controller: 'MainCtrl',
              controllerUrl: 'js/controllers/MainCtrl.js'
            }
          }
        })

        /* 添加医院按钮*/
        .state('tab.signmedical-more', {
          url: '/signmedical-more',
          cache: false,
          views: {
            'tab-signmedical': {
              templateUrl: 'templates/signmedical-more.html',
              controller: 'docCtrl',
              controllerUrl: 'js/controllers/doc.js'

            }
          }
        })

        /*签约医疗*/
        .state('tab.signmedical', {
          url: '/signmedical',
          views: {
            'tab-signmedical': {
              templateUrl: 'templates/tab-signmedical.html',
              controller: 'SignmedicalCtrl',
              controllerUrl: 'js/controllers/Signmedical.js'

            }
          }
        })

        /*咨询公告*/
        .state('tab.notice', {
          url: '/notice',
          views: {
            'tab-signmedical': {
              templateUrl: 'templates/notice.html',
              controller: 'SignmedicalCtrl',
              controllerUrl: 'js/controllers/Signmedical.js'

            }
          }
        })

        /*咨询公告详情*/
        .state('tab.noticedetail', {
          url: '/noticedetail',
          views: {
            'tab-signmedical': {
              templateUrl: 'templates/noticedetail.html',
              controller: 'SignmedicalCtrl',
              controllerUrl: 'js/controllers/Signmedical.js'

            }
          }
        })

        /*医生问诊*/    /*聊天界面*/
        .state('tab.doctorinquiry', {
          url: '/doctorinquiry',
          views: {
            'tab-doctorinquiry': {
              templateUrl: 'templates/tab-doctorinquiry.html',
              controller: 'DoctorinquiryCtrl',
              controllerUrl: 'js/controllers/Doctorinquiry.js'

            }
          }
        })

        /*聊天的详情页面*/

        .state('tab.message-detail1', {
          url: '/message-detail1',
          views: {
            'tab-doctorinquiry': {
              templateUrl: 'templates/message-detail1.html',
              controller: 'message-detail1Ctrl',
              controllerUrl: 'js/controllers/message-detail1.js'

            }
          }
        })

        .state('tab.message-detail2', {
          url: '/message-detail2',
          views: {
            'tab-doctorinquiry': {
              templateUrl: 'templates/message-detail2.html',
              controller: 'message-detail2Ctrl',
              controllerUrl: 'js/controllers/message-detail2.js'

            }
          }
        })

        /*聊天界面*/
        //.state('tab.doctorinquiry', {
        //  url: '/doctorinquiry',
        //  views: {
        //    'tab-doctorinquiry': {
        //      templateUrl: 'templates/tab-doctorinquiry.html',
        //      controller: 'messageCtrl',
        //      controllerUrl: 'js/controllers/message.js'
        //    }
        //  }
        //})

        .state('tab.message-detail', {
          url: '/message-detail',
          views: {
            'tab-doctorinquiry': {
              templateUrl: 'templates/message-detail.html',
              controller: 'messageDetailCtrl',
              controllerUrl: 'js/controllers/messageDetail.js'

            }
          }
        })



        /*邀请码*/
        .state('tab.invitationcode', {
          url: '/invitationcode',
          views: {
            'tab-doctorinquiry': {
              templateUrl: 'templates/invitationcode.html'
            }
          }
        })

        /*健康管理*/
        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl',
              controllerUrl: 'js/controllers/Account.js'

            }
          }
        })

        .state('tab.records', {
          url: '/records',
          cache: false,
          views: {
            'tab-account': {
              templateUrl: 'templates/records.html',
              //controller: 'personCtrl',
              //controllerUrl: 'js/controllers/personal.js'
            }
          }
        })

        .state('tab.report', {
          url: '/report',
          views: {
            'tab-account': {
              templateUrl: 'templates/report.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })

        //诊疗信息
        .state('tab.diagnosis', {
          url: '/diagnosis',
          views: {
            'tab-account': {
              templateUrl: 'templates/diagnosis.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })


        //血压记录
        .state('tab.bloodpressure', {
          url: '/bloodpressure',
          views: {
            'tab-account': {
              templateUrl: 'templates/bloodpressure.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })

        //血糖记录
        .state('tab.bloodsugar', {
          url: '/bloodsugar',
          views: {
            'tab-account': {
              templateUrl: 'templates/bloodsugar.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })


     //健康报告
        .state('tab.reportdetail', {
          url: '/reportdetail',
          views: {
            'tab-account': {
              templateUrl: 'templates/reportdetail.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })

     // 慢性病 专案
        .state('tab.chronic-disease', {
          url: '/chronic-disease',
          views: {
            'tab-account': {
              templateUrl: 'templates/chronic-disease.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })

        .state('tab.chronic-diseasedetail', {
          url: '/chronic-diseasedetail',
          views: {
            'tab-account': {
              templateUrl: 'templates/chronic-diseasedetail.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })

        .state('tab.chronic-diseasedetail2', {
          url: '/chronic-diseasedetail2',
          views: {
            'tab-account': {
              templateUrl: 'templates/chronic-diseasedetail2.html',
              //controller: 'AccountCtrl',
              //controllerUrl: 'js/controllers/Account.js'

            }
          }
        })


        .state('tab.doc-more', {
          url: '/doc-more',
          views: {
            'tab-signmedical': {
              templateUrl: 'templates/doc-more.html',
              controller: 'listCtrl',
              controllerUrl: 'js/controllers/list.js'

            }
          }
        })
        //.state('tab.scheduledetail', {
        //  url: '/scheduledetail',
        //  views: {
        //    'tab-minehealth': {
        //      templateUrl: 'templates/scheduledetail.html',
        //      controller: 'MainCtrl',
        //      controllerUrl: 'js/controllers/MainCtrl.js'
        //
        //    }
        //  }
        //})
      // if none of the above states are matched, use this as the fallback

      //$urlRouterProvider.otherwise('index');

      $urlRouterProvider.otherwise('/tab/minehealth');
    });
});
