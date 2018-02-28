window.onload = function () {
    /*************************************获取svg开始******************************/
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "../font/icons/svg-symbols.svg", true);
    ajax.onload = function (e) {
        document.body.insertAdjacentHTML("afterBegin", '<div style="display:none;">' + ajax.responseText + '</div>');
    };
    ajax.send();
    /*************************************获取svg结束******************************/


    /*************************************个人维度tab切换颜色变换******************************/
      $('.moveLi>li>a').hover(function () {
         $(this).parent().addClass('active').siblings().removeClass('active');
      });
      /**********************快速导航开始************************************/
      //快速导航样式
      $('.tab-if>li').hover(function () {
          $('.tab-if>li').removeClass('active');
          $(this).addClass('active');
      });
    $('.tab-if>li').on('mouseleave',function () {
        $(this).removeClass('active');
    });
      //点击快捷导航有顺序
      $('.quickHeader').on('click',function () {
          $('#picture-mask').show();
          $('.quickDiv').show();
          $('html').css('overflow','hidden');
      });
      //快捷导航点击关闭
      $('.btn_cancal,.clo').click(function () {
          $('#picture-mask').hide();
          $('.quickDiv').hide();
          $('html').css('overflow','inherit');
      });

    function aa(obj) {
        $('#gridome').innerHTML = obj;
    }
    var reordering = function($elements) {
        //开始前调用
//        console.log(reordering);
    };
    var reordered = function($elements) {
        //结束后调用
        setTimeout(get_user_id_data)
    };
    $('.gridly').gridly({
        callbacks: { reordering: reordering , reordered: reordered },
        base: 35,
        gutter: 0,
        columns: 1,

    });
    $('.for_ip').click(function(){
        var text = $(this).get(0).checked;
        $(this).toggleClass('active');
        // $(this).html('');
    });
    //获取user_ids 并排序 且 ajax提交
    function get_user_id_data(){
        var dom = $('#gridome div');
        var tmp = {};
        var tap = {};
        var trp = {};
        var trid = {};
        // 列数的权重 必须保证此数字大于每行的最大宽度
        // 其实可以用columns*(gutter+base_width) 来计算 但鉴于columns不经常变 没必要这样写
        var col_base_num = 10000;
        $('.btn_save').click(function () {
            dom.each(function(){
                var self = $(this);
                var left_num = self.css('left').replace(/px/,'');
                var top_num = self.css('top').replace(/px/,'');
                //加1 保证top大于0
                var top_tmp = parseInt(top_num) + 1;
                //权重 = left + (top+1)*col_base_num
                var weight = parseInt(left_num) + (top_tmp*col_base_num);
                var user_id = self.attr('user_id');
                var tit = self.attr('tit');
                var turl = self.attr('turl');
                var tid = self.attr('tid');
                tmp[weight] = user_id;
                tap[weight] = tit;
                trp[weight] = turl;
                trid[weight] = tid;

            });
            //利用对象本身对key的排序功能 实现排序
            var i;
            var orderNumArr = [];
            var navigationNameArr = [];
            var urlArr = [];
            var idArr = [];
            for(i in tmp){
                var r = tmp[i];
                orderNumArr.push(r);
            }
            for(i in tap){
                var r = tap[i];
                navigationNameArr.push(r);
            }
            for(i in trp){
                var r = trp[i];
                urlArr.push(r);
            }
            for(i in trid){
                var r = trid[i];
                idArr.push(r);
            }

            var tos = {};

            for(var i=0;len=orderNumArr.length,i<len;i++){
                // data['tos['+i+']'+'.orderNum'] = i;
                tos[i] = tos[i] || {};
                tos[i].orderNum= Number(i);
            }
            for(var i=0;len=navigationNameArr.length,i<len;i++){
                // data['tos['+i+']'+'.navigationName'] = navigationNameArr[i];
                tos[i] = tos[i] || {};
                tos[i].navigationName= navigationNameArr[i];
            }
            for(var i=0;len=urlArr.length,i<len;i++){
                // data['tos['+i+']'+'.url'] = urlArr[i];
                tos[i] = tos[i] || {};
                tos[i].url= urlArr[i];
            }
            for(var i=0;len=idArr.length,i<len;i++){
                // data['tos['+i+']'+'.id'] = idArr[i];
                tos[i] = tos[i] || {};
                tos[i].id= idArr[i];
            }
            // console.log(tos);
            $.get('/quick/edit',{tos}, function (res) {
                // console.log(res);
            });

        });

    }
    /**********************快速导航结束************************************/

    /**********************个人详情待办事件总数************************************/
      $.get('/even/count',function (res) {
          if(res.code == 0){
              $('#evenCount').html(res.data)
          }

      });
    /**********************个人详情反馈总数************************************/
    $.get('/feedback/feedBackCount',function (res) {
        if(res.code == 0) {
            $('#feedBackCount').html(res.data)
        }
    });
    /**********************个人详情公告总数************************************/
    $.get('/notice/noticeCount',function (res) {
        if(res.code == 0) {
            $('#noticeCount').html(res.data)
        }
    });
    /**********************个人详情任务分配总数************************************/
    $.get('/task/taskCount',function (res) {
        if(res.code == 0) {
            $('#taskCount').html(res.data);
        }
    });
    /**********************个人详情管理提成总数************************************/
    $.get('/mag/magCount',function (res) {
        if(res.code == 0) {
            $('#masCount').html(res.data);
        }
    });
    /**********************个人详情出车记录总数************************************/
    $.get('/car/carCount',function (res) {
        if(res.code == 0) {
            $('#carCount').html(res.data)
        }
    });
    /**********************个人详情油卡充值总数************************************/
    $.get('/oil/oilCount',function (res) {
        if(res.code == 0) {
            $('#oilCount').html(res.data)
        }
    });
    /**********************个人详情考勤总数************************************/
        $.get('/check/lateCount',function (rea) {
            $.get('/check/wordCount',function (rew) {
                $.get('/check/leaveCount',function (res) {
                    $('#checkCount').html(rea.data/rew.data/res.data);
                });
            });
        });
        //获取导航列表
        $.get('/quick/list',function (res) {
            var data = res.data;
            $.each(data, function (i,n) {
                objTem(n);
                alertTem(i,n);
            })
        });
        //快捷导航列表
        function objTem(obj) {
            var tem =
                `<li>
                    <a href="${obj.url}">${obj.navigationName}</a>
                </li>`;
            $('.quickOul').append(tem);
            return tem;
        }
        //生成点击快捷出现的列表
        function alertTem(index,obj) {
        var template =
            `    <div class="brick small pdding" user_id="${obj.orderNum}" tit="${obj.navigationName}" turl="${obj.url}"  tid="${obj.id}">
                    <span>${obj.navigationName}</span>
                    <span><label for="ck+${index+1}" class="for_ip"></label> <input type="checkbox" id="'ck'+${index+1}"  style="display: none"></span>
                    <span>三</span>
                </div>`;
            $('#gridome').append(template);
            return  template
        }
    //更改名字和员工编号
    $.get('/positiondetailuser/userName/userinfo',function (req) {
        if(req.code == 0) {
            var lou = req.data;
            $('.userName').text(lou.userName);
            $('.empNum').text(lou.empNumer);
        }
    })
};
