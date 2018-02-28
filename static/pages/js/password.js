window.onload = function () {
    /*************************************获取svg开始******************************/
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "../font/icons/svg-symbols.svg", true);
    ajax.onload = function (e) {
        document.body.insertAdjacentHTML("afterBegin", '<div style="display:none;">' + ajax.responseText + '</div>');
    };
    ajax.send();
    /*************************************获取svg结束******************************/
    /*************************************cookie里面没有username时候跳转到登录页面******************************/
    // if($.cookie('username')==undefined){
    //     window.location.href = 'https://login.issp.bjike.com/login?url=https://show.issp.bjike.com/system.html';
    // }


    /*************************************个人维度tab切换颜色变换******************************/
    $('.moveLi>li>a').hover(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    /**********************快速导航开始************************************/
    //快速导航样式
    $('.tab-if>li').hover(function () {
        $('.tab-if>li').removeClass('active');
        $(this).addClass('active');
    })
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

        setTimeout(get_user_id_data,100)
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
                tmp[weight] = user_id;
            });

            //利用对象本身对key的排序功能 实现排序
            var i;
            var arr = [];
            for(i in tmp){
                var r = tmp[i];
                arr.push(r);
            }

//        排序后的数组
//            console.log(arr);
            console.log(arr);
//            $('#gridome').attr('user_id'+arr[index]).top = arr[index]*40+'px';
        });

    }
    /**********************快速导航结束************************************/

    /**********************修改密码************************************/
    //密码校验
    function checkPassword(v){
        var numasc = 0;
        var charasc = 0;
        var otherasc = 0;
        if(0==v.length){
            $('.hint').html('提示:密码不能为空');
        }else if(v.length<6||v.length>16){
            $('.hint').html('提示:密码至少6个字符,最多16个字符');
        }else{
            for (var i = 0; i < v.length; i++) {
                var asciiNumber = v.substr(i, 1).charCodeAt();
                if (asciiNumber >= 48 && asciiNumber <= 57) {
                    numasc += 1;
                }
                if ((asciiNumber >= 65 && asciiNumber <= 90)||(asciiNumber >= 97 && asciiNumber <= 122)) {
                    charasc += 1;
                }
                if ((asciiNumber >= 33 && asciiNumber <= 47)||(asciiNumber >= 58 && asciiNumber <= 64)||(asciiNumber >= 91 && asciiNumber <= 96)||(asciiNumber >= 123 && asciiNumber <= 126)) {
                    otherasc += 1;
                }
            }

            $.post('/update/pwd',{password:v},function (res) {
                if(res.code == 0){

                }
            });
            $('#picture-mask').show();
            $('.sueAlert').show();
            $('body').css('overflow','hidden');
            setTimeout(function()
                {window.location.href = './system.html'},
                3000);
        }
    }
    //查询用户名和员工编号
    $.get('/positiondetailuser/userName/userinfo',function (response) {
        if(response.code == 0){
            var lou = response.data;
            $('.userName').text(lou.userName);
            $('.empNum').text(lou.empNumer);
            $('.account').text(lou.userName);
        }
    });

    $('.passWordOne').focus(function () {
        $('.hint').html('');
    });

    //修改密码成功弹窗
    $('.confirm').on('click',function () {
        if($('.passWordOne').val() == $('.passWordTwo').val()){
            var data = $('.passWordOne').val();
            checkPassword(data);
        }else {
            $('.hint').text('提示:您输入的两次密码不一致,请重新输入');
            $('.passWordOne').val('');
            $('.passWordTwo').val('');
        }
    });
    //关闭弹窗
    $('.clo').on('click',function () {
        $('#picture-mask').hide();
        $('.sueAlert').hide();
        $('body').css('overflow','inherit');
    });


    //更改名字和员工编号
    $.get('/positiondetailuser/userName/userinfo',function (req) {
        if(req.code == 0) {
            var lou = req.data;
            $('.userName').text(lou.userName);
            $('.empNum').text(lou.empNumer);
        }
    })
};