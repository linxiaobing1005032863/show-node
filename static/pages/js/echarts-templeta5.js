function Echarts() {
}
Echarts.prototype.draw = function (obj) {
    var templeta = `
    <section class="${obj.part} bg-color">
        <div class="fix-count">
            <p>${obj.countName[0]}<i>${obj.countI}</i><em>${obj.count[0]}</em></p>
            <p>${obj.countName[1]}<i>${obj.countI}</i><em>${obj.count[1]}</em></p>
        </div>
        <div class="topTitle sm-Title">
            <a class="topImg">
            <em></em>
                <h3>${obj.title}</h3>
            </a>
            <div class="time-btn">
                <ul class="addTab">
                </ul>
            </div>
        </div>
        <div class="echartsStyle">
            <div id="${obj.chartId}"></div>
        </div>
    </section>`;
    return templeta;
};
var arrDetail = [{
    part: 'subsidy',
    title: '报销数据分析图',
    chartId: 'detail-subsidy',
    section:['全部'],
    countName:['总计','单数'],
    countI:':',
    count:['555555','545'],
}, {
    part: 'loan',
    title: '借款数据分析图',
    chartId: 'detail-loan',
    section:['全部'],
    countName:['总计','单数'],
    countI:':',
    count:['555555','545'],
}];
var arrDetail1 = [
    {
    part: 'origin',
    title: '组织结构',
    chartId: 'detail-origin',
    section:[],
     countName:['',''],
     countI:'',
     count:['',''],
    },

    {
        part: 'recruit',
        title: '招聘',
        chartId: 'detail-recruit',
        section:[],
        countName:['',''],
        countI:'',
        count:['',''],
    },
    {
        part: 'bonus',
        title: '项目奖金包',
        chartId: 'detail-bonus',
        section:[],
        countName:['奖金','处罚'],
        countI:':',
        count:['5656','465465'],
    },
    {
        part: 'promote',
        title: '晋升数据',
        chartId: 'detail-promote',
        section:[],
        countName:['',''],
        countI:'',
        count:['',''],
    },

];

function insertEcharts(arr, id) {
    for (var i = 0; i < arr.length; i++) {
        var chart = new Echarts();
        id.innerHTML += chart.draw(arr[i]);
        var addTab = document.getElementsByClassName('addTab')[i];
        addLi(arr[i].section,addTab)
    };
}

function addLi(obj,id) {
    for (var j = 0; len = obj.length,j<len; j++) {
        if(j==0){
            var ul =  `<li class="active"><a href="javascript:void(0)">${obj[j]}</a></li>`;
        }else {
            var ul =  `<li><a href="javascript:void(0)">${obj[j]}</a></li>`;
        }
        id.innerHTML += ul;
    };
}
if(document.getElementById('graph-detail')){
    var personDetail = document.getElementById('graph-detail');
    insertEcharts(arrDetail, personDetail);
    //个人详情-报销数据分析
    var subsidyDetail = echarts.init(document.getElementById('detail-subsidy'));
    optionSubsidy = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                color:'#3e4245'
            },
            backgroundColor:'#394249'
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '24%',
            containLabel: true,
            lineStyle:{ 
                color: '#3e4245',
            },
           
        },
        legend: {
            // 定位  left center right   ;
            // 定位   top  center bottom
            left: '0',
            top: 'top',
            data: ['未完成单数', '未完成金额数'],
            textStyle: {
                color: '#fff',
            },
            padding: 20,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
            itemGap:30,    //间距
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月','3月', '4月','5月', '6月','7月', '8月','9月', '10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                },
               
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                },
            },
    }],
        yAxis: [
            {
            type: 'value',
            min: 0,
            max: 600,
            interval: 100,
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                }
            },
            splitLine: {
                show: true, 
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#3e4245']
                } 
            }  
        }],
        series: [
            {
            barWidth: '15%',
            name: '未完成单数',
            type: 'bar',
            stack: 'chart',
            z: 3,
            data: [333, 500,100,125,545,110,20,120,120,212,500,0],
            itemStyle: {
                normal: {
                    //控制渐变的颜色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fa49b7'
                    }, {
                        offset: 1,
                        color: '#6841ed'
                    }]),
                    barBorderRadius: [5, 5, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
                }
            },
                barGap: 0.5,  //x轴多个图例的间距
        },
            // {  //阴影
            //     type: 'bar',
            //     stack: 'chart',
            //     silent: true,
            //     itemStyle: {
            //         normal: {
            //             color: '#34383b'
            //         },
            //         barBorderRadius: [10, 10, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
            //     },
            //     data:[0, 0,0,0,0,0,0,0,0,0,0,20],
            //     barGap: 0.5,  //x轴多个图例的间距
            // },
            {
                barWidth: '15%',
                name: '未完成金额数',
                type: 'bar',
                stack: 'component',
                data: [10, 50,500,125,20,110,545,200,400,100,55,0],
                itemStyle: {
                    normal: {
                        //控制渐变的颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#01dafb'
                        }, {
                            offset: 1,
                             color: '#0094e0'
                        }]),
                        barBorderRadius: [5, 5, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
                    }
                },
                barGap: 0.5,  //x轴多个图例的间距
            },
            // {  //背景阴影
            //     type: 'bar',
            //     stack: 'component',
            //     silent: true,
            //     itemStyle: {
            //         normal: {
            //             color: '#34383b'
            //         },
            //         barBorderRadius: [10, 10, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
            //     },
            //     data:[0, 0,0,0,0,0,0,0,0,0,0,20],
            //     barGap: 0.5,  //x轴多个图例的间距
            // },

        ]
    };
    subsidyDetail.setOption(optionSubsidy);
    //个人详情-借款数据分析图
    var loanDetail = echarts.init(document.getElementById('detail-loan'));
    optionLoan = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            },
            backgroundColor:'#394249'
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '24%',
            containLabel: true
        },
        legend: {
            left: '0',
            top: 'top',
            data: ['未完成单数', '未完成金额数'],
            textStyle: {
                color: '#fff',
            },
            padding: 20,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
            itemGap:30, //间距
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月','3月', '4月','5月', '6月','7月', '8月','9月', '10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                }
            },

        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 600,
            interval: 100,
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                }
            },
            splitLine: {
                show: true,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#3e4245']
                }
            }
        }],
        series: [
            {
            barWidth: '15%',
            name: '未完成单数',
            type: 'bar',
            data: [333, 500,100,125,545,110,20,120,120,212,500,50],
            itemStyle: {
                normal: {
                     //控制渐变的颜色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fa49b7',
                }, {
                    offset: 1,
                    color: '#6841ed',
                }]),
                barBorderRadius: [5, 5, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
                }
            }
        },
            {
                barWidth: '15%',
                name: '未完成金额数',
                type: 'bar',
                data: [10, 50,500,125,20,110,545,200,400,100,55,545],
                itemStyle: {
                    normal: {
                       //控制渐变的颜色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#01dafb'
                    }, {
                        offset: 1,
                        color: '#0094e0'
                    }]),
                    barBorderRadius: [5, 5, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
                    }
                },
                barGap: 0.5,  //x轴多个图例的间距
            },
        ]
    };
    loanDetail.setOption(optionLoan);
    var partDetailO = document.getElementById('graph-detail1');
    insertEcharts(arrDetail1, partDetailO);
    //个人详情-组织结构
    var originDetail = echarts.init(document.getElementById('detail-origin'));
    optionOrigin = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            backgroundColor:'#394249'
        },
        legend: {
            orient: 'horizontal', //显示方向
            center: '0',
            bottom: '80',
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
            itemPadding: 20,
            itemGap: 55,  //间距
            textStyle: {
                color: '#fff' // 图例文字颜色
            },
            data: ['本部门人数', '全部人数'],
            icon:'circle', //显示的形状,
        },
        series: [{
            name: '任务分配',
            type: 'pie',
            radius: ['20%', '40%'],
            center: ['50%', '30%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    lineStyle: {
                        width: 2,
                    }
                },
            },
            data: [
                {
                    value: 100,
                    name: '本部门人数',
                    itemStyle: {
                        normal: {
                            color: '#3ca7f9',
                            label: {
                                show: true
                            }
                        }
                    },
                },
                {
                    value: 160,
                    name: '全部人数',
                    itemStyle: {
                        normal: {
                            color: '#f749b8',
                            label: {
                                show: true
                            }
                        }
                    },
                }
            ]
        }]
    };
    originDetail.setOption(optionOrigin);
    //个人详情-招聘
    var recruitDetail = echarts.init(document.getElementById('detail-recruit'));
    optionRecruit = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            },
            backgroundColor:'#394249'
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '27%',
            containLabel: true,
        },
        legend: {
            left: '0',
            top: '20',
            data:['本部门需要招聘人数','本部门近期招聘人数'],
            textStyle: {
                color: '#fff',
            },
            padding: 10,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
            itemGap:30, //间距
        },
        xAxis: [{
            type: 'category',
            data: ['1周', '2周','3周', '4周'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                }
            }
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                }
            },
            splitLine: {
                show: true,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#3e4245']
                }
            }
        }],
        series: [
            {
                barWidth: '10%',
                barGap : '10%',
                name: '本部门需要招聘人数',
                type: 'bar',
                data: [80, 20,100,125],
                itemStyle: {
                    normal: {
                        //控制渐变的颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#01dafb'
                        }, {
                            offset: 1,
                            color: '#0094e0'
                        }]),
                        barBorderRadius: [5, 5, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
                    }
                },
            },
            {
                barWidth: '10%',
                name: '本部门近期招聘人数',
                type: 'bar',
                data: [10, 150,20,125],
                itemStyle: {
                    normal: {
                        //控制渐变的颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#fa49b7'
                        }, {
                            offset: 1,
                            color: '#6841ed'
                        }]),
                        barBorderRadius: [5, 5, 0, 0],  //（顺时针左上，右上，右下，左下）圆角
                    }
                },
                barGap: 0.5,  //x轴多个图例的间距
            },
        ]
    };

    recruitDetail.setOption(optionRecruit);
    //个人详情-项目奖金包
    var bonusDetail = echarts.init(document.getElementById('detail-bonus'));
    optionBonus = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            },
            backgroundColor:'#394249'
        },
        legend: {
            left: '0',
            top: 'top',
            data: ['奖励','处罚'],
            textStyle: {
                color: '#fff',
            },
            icon:'roundRect',
            padding: 20,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18, //图例高度
            itemGap:30, //间距
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '24%',
            containLabel: true,
        },
        xAxis:  {
            type: 'category',
            boundaryGap: true,
            data: ['一季','二季','三季','四季'],
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                }
            },
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                }
            },
            splitLine: {
                show: true,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#3e4245']
                }
            }

        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                textStyle: {
                    color: '#c2c2c2', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3e4245',
                }
            },
            splitLine: {
                show: true,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#3e4245']
                }
            }
        },
        series: [
            {
                name:'奖励',
                type:'line',
                data:[11, 5, 215, 53],
                itemStyle: {
                    normal: {
                        color: '#6582fc',
                        label: {
                            show: true
                        }
                    }
                },
            },
            {
                name:'处罚',
                type:'line',
                data:[100, 126, 5, 15],
                itemStyle: {
                    normal: {
                        color: '#fa49b7',
                        label: {
                            show: true
                        }
                    }
                },
            }
        ]
    };
    //个人详情-晋升数据
    bonusDetail.setOption(optionBonus);
    var promoteDetail = echarts.init(document.getElementById('detail-promote'));
    var data = [70, 70, 70, 70];
    var yMax = 60;
    var dataShadow = [];
    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }
    optionPromote = {
        tooltip:{
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            backgroundColor:'#394249'
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '24%',
            containLabel: true,
            lineStyle:{
                color: '#3e4245',
            },

        },
        legend: {
            data:['技能晋升', '管理等级晋升'],
            // 定位  left center right   ;
            // 定位   top  center bottom
            left: '0',
            top: 'top',
            textStyle: {
                color: '#fff',
            },
            icon:'circle', //显示的形状
            padding: 20,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
            itemGap:30, //间距
        },
        xAxis : [
            {
                type : 'value',
                boundaryGap : [0, 0.01],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    textStyle: {
                        color: '#c2c2c2', //坐标值得具体的颜色
                    },

                },
                axisLine: {
                    lineStyle: {
                        color: '#3e4245',
                    },
                },
                splitLine: {
                    show: false, //显示隐藏网格线
                    //  改变轴线颜色
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#3e4245']
                    }
                },
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['当前管理等级','晋升次数'],
                axisLabel: {
                    textStyle: {
                        color: '#c2c2c2', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#3e4245',
                    }
                },
                splitLine: {
                    show: true,
                    //  改变轴线颜色
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#3e4245']
                    }
                }
            }
        ],
        series : [

            {
                barWidth: '10%',
                name:'技能晋升',
                type:'bar',
                data:[5, 8],
                z: 3,
                itemStyle: {
                    normal: {
                        //控制渐变的颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#6841ed'
                        }, {
                            offset: 1,
                            color: '#fa49b7'
                        }]),
                        barBorderRadius: [0, 5, 5, 0],  //（顺时针左上，右上，右下，左下）圆角
                    }
                }
            },
            {
                barWidth: '10%',
                name:'管理等级晋升',
                type:'bar',
                data:[10,20],
                z: 3,
                itemStyle: {
                    normal: {
                        //控制渐变的颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#0094e0'

                        }, {
                            offset: 1,
                            color: '#01dafb'
                        }]),
                        barBorderRadius: [0, 5, 5, 0],  //（顺时针左上，右上，右下，左下）圆角
                    },
                }
            }
        ]
    };
    promoteDetail.setOption(optionPromote);
    //自适应
    window.onresize = function () {
        //个人详情-报销数据分析
        subsidyDetail.resize();
        //个人详情-借款数据分析图
        loanDetail.resize();
        //个人详情-组织结构
        originDetail.resize();
        //个人详情-项目奖金包
        bonusDetail.resize();
        //个人详情-招聘
        recruitDetail.resize();
        //个人详情-晋升数据
        promoteDetail.resize();
    };
}
