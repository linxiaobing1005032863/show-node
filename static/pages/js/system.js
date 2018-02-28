  //搜索的
/*
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
                $('#searchVal').bind('keydown',function(event){
                    if(event.keyCode == "13") {
                        $.each(dataArr, function (i,n) {
                            if($('#searchVal').val() === n.name){
                                $('.searchDate').show();
                                if($(".haveIf").length == 1) return;
                                searchData(n);
                            }

                        });
                        return false;
                    }
                });
                //监听输入框的值改变
                $('#searchVal').bind('input propertychange',function() {
                    if($('#searchVal').val() == ''){
                        $(".haveIf").remove();
                        $('.searchDate').hide();
                    }else{

                    }
                });
                //点击搜索出现
                $('#enterDown').click(function () {
                    $.each(dataArr, function (i,n) {
                        if($('#searchVal').val() == n.name){
                            $('.searchDate').show();
                            if($(".haveIf").length == 1) return;
                            searchData(n)
                        }else{
        //                                    $('.searchDate').show();
                        }
                    });
                });
            }
        });
*/
$(window).ready(function () {
    ////个人维度tab切换颜色变换
    $('.moveLi>li>a').hover(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
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
        // console.log(reordering);
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
});










