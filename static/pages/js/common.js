window.onload = function () {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "../font/icons/svg-symbols.svg", true);
    ajax.onload = function (e) {
        document.body.insertAdjacentHTML("afterBegin", '<div style="display:none;">' + ajax.responseText + '</div>');
    };
    ajax.send();
  //cookie里面没有username时候跳转到登录页面
   if($.cookie('username')==undefined){
    window.location.href = 'https://login.issp.bjike.com/login?url=https://show.issp.bjike.com/system.html';
   }

/*******************************tab切换*********************************/
$('.addTab li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.addTab li').eq('.addTab li');
    //相同类打印 测试 判断
    //console.log($('.addTab li').index($(this)));
});


/*******************************晋升管理的tab切换*********************************/
$('.time-btn>.listTab>li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

/*******************************待办事项的tab切换*********************************/

$('.todo-ul>.listTab>li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});


/*******************************公告的向上移动*********************************/
var num = 0;

//公告轮播
var timer = setInterval(function () {
    if (aru) return;
    num++;
    if (num > 4) {
        num = 0;
        $('.carousel').css({
            'top': 0,
            'transition': 'top 0s'
        }); //修改
    } else {
        $('.carousel').css({
            'top': -35 * num + "px",
            'transition': 'top 1s'
        });
    }
    $('.carousel>li').eq(num).addClass('active').siblings().removeClass('active');
}, 2000);
var aru = false;

$('.carousel').mouseenter(function () {
    aru = true;
}).mouseleave(function () {
    aru = false;
});

//待办事件轮播
var num1 = 0;
var aru1 = false;
var timer1 = setInterval(function () {
    if (aru) return;
    num1++;
    if (num1 > 4) {
        num1 = 0;
        $('.clip').css({
            'top': 0,
            'transition': 'top 0s'
        }); //修改
    } else {
        $('.clip').css({
            'top': -38 * num1 + "px",
            'transition': 'top 1s'
        });
    }
    $('.clip>li').eq(num1).addClass('active').siblings().removeClass('active');
}, 1500);
var aru1 = false;
$('.clip').mouseenter(function () {
    aru1 = true;
}).mouseleave(function () {
    aru1 = false;
});



/*========================================公告修改===============================================*/
//弹窗
function aa(elem){
    $('.msgText-aa').html("");
    var id=elem.getElementsByTagName("span")[2].innerHTML;
    $('.popup').css({'display':'block'});
    $.post('/announcement/read',{id},   //读取详情
        function (response) {
            if(response.code == 0){
                var list = response.data;
                $('.msgTitle').text(list.title);
                $('.sendUser').text(list.author);
                var content = list.publishContent;
                /* $('input').val(content)*/
                $('.msgText-aa').append(content);
                if($('.msgText-aa').find("td")){
                    $('.msgText-aa').find("td").addClass("aaaa")
                }
            }
        });
    var cc=elem.getElementsByTagName("i").length;
    if(cc>0){
        elem.getElementsByTagName("i")[0].remove();
    }else if(cc=0){
        return false;
    }
}
//修改的 点击公告弹窗

$('.close-botton').click(function(){    //修改的 关闭公告弹窗
    $('.popup').css({'display':'none'})
});

//修改中的  获取列表与总条数

myFunction();
function myFunction() {
    myVar = setInterval(bb, 10000);
}

function bb(){
    $.get('announcement/current/list/count',function(response){      //获取总条数
        if(response.code==0) {
            //公告页码
            var totalCount = response.data;
            showCount = 1;
            limit = 10;

            createTable(1, limit, totalCount);

            $('#callBackPager').extendPagination({

                totalCount: totalCount,

                showCount: showCount,

                limit: limit,

                callback: function (curr, limit, totalCount) {

                    createTable(curr, limit, totalCount);

                }

            });


            function createTable(currPage, limit, total) {

                var html = [], showNum = limit;

                if (total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);

                html.push(' <table class="table table-hover piece" style="margin-left: 0;">');

                html.push('</tbody></table>')
                var mainObj = $('#mainContent');

                mainObj.empty();

                mainObj.html(html.join(''));
                var page = currPage || 1;
                $.get('announcement/current/list', {page}, function (response) {  //读取列表
                    if (response.code == 0) {
                        var lists = response.data;
                        if(lists==undefined){
                            lists=[
                                {
                                    title:null,
                                    publishDate:null,
                                    id:null
                                }
                            ]
                        }
                        var html = template('bea', {lists: lists});
                        var carousel = document.querySelector('.carousel');
                        carousel.innerHTML = html;
                        var x=document.getElementsByClassName("noticea");
                        for(i=0;i<x.length;i++){
                            var dd =document.getElementsByClassName("noticea")[i].getElementsByTagName('e')[0].innerHTML;
                            if(document.getElementsByClassName("noticea")[i].getElementsByTagName('e')[0].innerHTML=="true"){
                                document.getElementsByClassName("noticea")[i].getElementsByTagName('i')[0].remove()
                            }
                        }

                    }

                })
            }
        }
    })
}
bb();
/*========================================公告修改结束===============================================*/

/*========================================搜索结束===============================================*/
        var dataArr = [];
        function dataTwo(obj) {
            $.each(obj.two,function (j,m) {
                var arrTwo = m.three;
                dataThree(arrTwo);
                return dataArr
            })
        }
        function dataThree(obj) {
            $.each(obj,function (k,l) {
                var arr = l.four;
                dataArr = dataArr.concat(arr);
                return dataArr
            })
        }
        //搜索
        $.ajax({
            dataType: 'json',
            url: '../../nav-left.json',
            success: function (data) {
                var dataObj = eval(data).data;
                //一层循环
                $.each(dataObj, function (i,n) {
                    dataTwo(n)
                });
                //input输入完成enter
                var ifData = false;
                $('#searchVal').bind('keydown',function(event){
                    if(event.keyCode == "13") {
                        var dataVal = new RegExp($('#searchVal').val());
                        if($('#searchVal').val() == ''||ifData){
                            $('.searchDate').hide();
                            $(".haveIf").remove();
                        }
                        $.each(dataArr, function (i,n) {
                            if(dataVal.exec(n.name) == null){
                            }else{
                                if($('#searchVal').val() == '') return;
                                ifData = true;
                                $('.searchDate').show();
                                searchData({"name":dataVal.exec(n.name).input,'url':n.url});
                            }
                        });
                        return false;
                    }
                });

                //点击搜索出现
                $('#enterDown').click(function () {
                    if($('#searchVal').val() == '') return;
                    if(ifData) return;
                    var dataVal = new RegExp($('#searchVal').val());
                    $.each(dataArr, function (i,n) {
                        if(dataVal.exec(n.name) == null){
                        }else{
                            ifData = true;
                            $('.searchDate').show();
                            searchData({"name":dataVal.exec(n.name).input,'url':n.url});
                        }
                    });
                    return false;
                });
                //监听输入框的值改变
                $('#searchVal').bind('input propertychange',function() {
                    if($('#searchVal').val() == ''){
                        $(".haveIf").remove();
                        $('.searchDate').hide();
                    }else{

                    }
                });
            }
        });

        //搜索显示
        function searchData(obj) {
            var tempData =
                `<ul class="haveIf">
                 <li>
                    <a href="${obj.url}" title="${obj.name}">${obj.name}</a>
                </li>
            </ul>`;
            $(".searchDate").append(tempData);
            return tempData;
        }
        //搜索结束

};