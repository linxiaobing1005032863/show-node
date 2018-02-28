var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    this.getNameDat = function(argvs){   //获取用户和编号
        var options = {
            method : 'GET',
            timeout : 5000,
            uri : config()['aurl'] + '/positiondetailuser/v1/userName/userinfo?userName='+argvs.userName,
        };
        return request(options);
    };

    this.getWeek = function(){  //获取报销的周数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['burl'] + `/reimburseshape/v1/todayWeekNum`,
        };
        return request(options);
    };

    this.getQuary = function(){  //获取报销季度数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['burl'] + `/reimburseshape/v1/todayQuaryNum`,
        };
        return request(options);
    };

    this.collectBorr = function(argvs){  //报销管理汇总
        var options = {
            method : 'POST',
            timeout : 8000,
            uri : config()['burl'] + `/reimburseshape/v1/monWeek/collect`,
            form:argvs
        };
        return request(options);
    };
    this.getContactWeekCollect = function(){ //地区合同周汇总
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['curl'] + `/siginmanage/v1/weekCollectFigure`,
        };
        return request(options);
    };
    this.getContactMonthCollect = function(){   //地区合同月汇总
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['curl'] + `/siginmanage/v1/monthCollectFigure`,
        };
        return request(options);
    };
    this.getContactQuarterCollect = function(){  //地区合同季度汇总
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['curl'] + `/siginmanage/v1/quarterCollectFigure`,
        };
        return request(options);
    };
    this.getContactYearCollect = function(){  //地区合同年汇总
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['curl'] + `/siginmanage/v1/yearCollectFigure`,
        };
        return request(options);
    };
    this.modifyPassword = function(argvs){  //修改密码
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['durl'] + `/v1/update/pwd`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    /*******************************公告****************************************/
    this.getrequiredCount = function(argvs){  //必读且未读公告总条数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/announcement/v1/current/list/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    this.getrequiredReads = function(argvs){  //获取当前用户必读且未读的公告列表
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/announcement/v1/current/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    this.getRead = function(argvs){   //读取公告
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['vurl'] + `/announcement/v1/read/${argvs.id}`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            },

        };
        return request(options);
    };/******************************************任务分配管理****************************************************/
    this.taskCollect = function(argvs){  //汇总
        var options = {
            method : 'GET',
            timeout : 8000,
            uri : config()['turl'] + `/tasknode/v1/ping${urlEncode(argvs,true)}`,
        };
        return request(options);
    };

    /******************************************个人详情****************************************************/
    this.evenCount = function(argvs){   //待办事项的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['eurl'] + `/event/v1/currentUserEvenCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.feedBackCount = function(argvs){   //反馈的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['furl'] + `/problemfeedback/v1/proCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.noticeCount = function(argvs){   //公告的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/announcement/v1/requiredCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.taskCount = function(argvs){   //任务分配的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['turl'] + `/event/v1/currentUserEvenCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.magCount = function(argvs){   //管理提成的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['gurl'] + `/departmentbet/v1/royaltyCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.carCount = function(argvs){   //出车记录的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['hurl'] + `/event/v1/currentUserEvenCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.oilCount = function(argvs){   //油卡充值的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['iurl'] + `/event/v1/currentUserEvenCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.lateCount = function(argvs){   //考勤迟到的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['jurl'] + `/punch/v1/lateCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };

    this.workCount = function(argvs){   //考勤加班的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['jurl'] + `/overwork/v1/overWorkCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };

    this.leaveCount = function(argvs){   //考勤请假的总数
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['jurl'] + `/vacate/v1/vacateCount`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };

    this.quickList = function(argvs){   //快捷导航的列表
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['durl'] + `/homenavigation/v1/list`,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    this.quickEditList = function(argvs){   //快捷导航的列表
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['durl'] + `/homenavigation/v1/edit/order`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};