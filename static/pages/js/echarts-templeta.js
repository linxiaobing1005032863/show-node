function Echarts() {
}
//定义Echarts的原型方法
Echarts.prototype.draw = function (obj) {
    var templeta = `
    <section class="${obj.part} bg-color">
        <div class="topTitle sm-Title">
            <a class="topImg" href="${obj.url}">
                <em>
                    <svg role="img" class="${obj.type}">
                        <use xlink:href="#${obj.type}"></use>
                    </svg>
                </em>
                <h3>${obj.title}</h3>
                <img src="${obj.gifURL}">
            </a>
            <div class="time-btn">
                <ul class="addTab">
                </ul>
            </div>
        </div>
        <div class="echartsStyle">
            <div id="${obj.chartId}"></div>
        </div>
    </section>`
    return templeta;
};
//定义岗位的Echarts
var arrPost = [{
    part: 'contract',
    type: 'business',
    title: '各地区合同立项情况',
    gifURL: '../../images/business.gif',
    chartId: 'post-contract',
    section:['年度','季度','月度','周度'],
    url:'https://businessproject.issp.bjike.com/'
    }, {
        part: 'attendance',
        type: 'attendance1',
        title: '考勤（加班、请假、出勤）',
        gifURL: '../../images/person.gif',
        chartId: 'post-attend',
        section:['季度','周度'],
        url:'https://attendance.issp.bjike.com/'
    }, {
        part: 'reim',
        type: 'revenue',
        title: '报销管理',
        gifURL: '../../images/money.gif',
        chartId: 'post-reim',
        section:['年度','季度','月度','周度'],
        url:"https://lendreimbursement.issp.bjike.com"
    }, {
        part: 'task',
        type: 'task1',
        title: '任务分配管理',
        gifURL: '../../images/thing.gif',
        chartId: 'post-tasks',
        section:['年度','季度','月度','周度'],
        url:'https://taskallotment.issp.bjike.com/'
    }];
//定义部门的Echarts
var arrDepartment = [{
    part: 'contract',
    type: 'business',
    title: '各地区合同立项情况',
    gifURL: '../../images/business.gif',
    chartId: 'depart-contract',
    section:['年度','季度','月度','周度']
    }, {
        part: 'attendance',
        type: 'attendance1',
        title: '考勤（加班、请假、出勤）',
        gifURL: '../../images/person.gif',
        chartId: 'depart-attend',
        section:['季度','周度']
    }, {
        part: 'reim',
        type: 'revenue',
        title: '报销管理',
        gifURL: '../../images/money.gif',
        chartId: 'depart-reim',
        section:['年度','季度','月度','周度']
    }, {
        part: 'task',
        type: 'task1',
        title: '任务分配管理',
        gifURL: '../../images/thing.gif',
        chartId: 'depart-tasks',
        section:['年度','季度','月度','周度']
    }];
//定义个人信息的Echarts
var arrPerson = [{
        part: 'contract',
        type: 'business',
        title: '各地区合同立项情况',
        gifURL: '../../images/business.gif',
        chartId: 'person-contract',
        section:['年度','季度','月度','周度'],
        url:'https://businessproject.issp.bjike.com/'
    }, {
        part: 'attendance',
        type: 'attendance1',
        title: '考勤（加班、请假、出勤）',
        gifURL: '../../images/person.gif',
        chartId: 'person-attend',
        section:['季度','周度'],
        url:'https://attendance.issp.bjike.com/'
    }, {
        part: 'reim',
        type: 'revenue',
        title: '报销管理',
        gifURL: '../../images/money.gif',
        chartId: 'person-reim',
        section:['年度','季度','月度','周度'],
        url:"https://lendreimbursement.issp.bjike.com"

    }, {
        part: 'task',
        type: 'task1',
        title: '任务分配管理',
        gifURL: '../../images/thing.gif',
        chartId: 'person-tasks',
        section:['年度','季度','月度','周度'],
        url:'https://taskallotment.issp.bjike.com/'
    }];
//动态添加导航
function insertEcharts(arr, id) {
    for (var i = 0; i < arr.length; i++) {
        var chart = new Echarts();
        id.innerHTML += chart.draw(arr[i]);
        var addTab = document.getElementsByClassName('addTab')[i];
        addLi(arr[i].section,addTab)
    };
}
//动态添加年度,季度,月度,周度
function addLi(obj,id) {
    for (var j = 0; len = obj.length,j<len; j++) {
        if(j==0){
            var ul =  `<li class="active businessTab"><a href="javascript:void(0)">${obj[j]}</a></li>`;
        }else {
            var ul =  `<li class="businessTab"><a href="javascript:void(0)">${obj[j]}</a></li>`;
        }
        id.innerHTML += ul;
    };
}



//岗位的Echarts
if (document.getElementById('graph-post')){
    var partPost = document.getElementById('graph-post');
    insertEcharts(arrPost, partPost);
    //岗位-晋升管理图标
    var promote = echarts.init(document.getElementById('main'));
    optionPromote = {
        title: { //标题
            text: '管理等级晋升',
            textStyle: {
                fontWeight: 'normal', //标题颜色
                color: '#fff',
                fontSize: 16,
            },
            padding: [0, 0, 0, 30],
        },
        tooltip: { //提示框
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                }
            }
        },
        legend: {
            data: ['邮件营销'],
        },
        grid: { //网格
            left: '2%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: false
            }, //去除网格线
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',
                    width: '2'
                }
            },
            data: ['未通过', '未通过', '通过', '未通过', '通过', '未通过', '未通过', '通过', '通过', '通过']
        }],
        yAxis: [{
            splitLine: {
                show: false
            }, //去除网格线
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',
                    width: '2'
                }
            },
        }],
        series: [{
            name: '晋升管理',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {
                normal: {
                    color: "rgba(71,171,255,0.1)",
                }
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: 'rgba(71,171,255,0.1)',
                    },
                }
            },
            data: [120, 132, 211, 134, 250, 230, 210, 120, 305, 500]
        }]
    };
    promote.setOption(optionPromote);
    //岗位-任务分配
    var task = echarts.init(document.getElementById('post-tasks'));
    optionTask = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            top: 'bottom',
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
            itemPadding: 20,
            itemGap: 5,
            textStyle: {
                color: '#fff' // 图例文字颜色
            },
            data: ['接收次数', '分配次数', '分配未完成次数', '未完成次数', '分配完成次数', '完成次数']
        },
        series: [{
            name: '任务分配',
            type: 'pie',
            radius: ['35%', '50%'],
            center: ['50%', '38%'],
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
            data: [{
                    value: 100,
                    name: '分配未完成次数',
                    itemStyle: {
                        normal: {
                            color: '#d02dc6',
                            label: {
                                show: true
                            }
                        }
                    },
                },
                {
                    value: 60,
                    name: '分配次数',
                    itemStyle: {
                        normal: {
                            color: '#3d42e0',
                            label: {
                                show: true
                            }
                        }
                    },
                },
                {
                    value: 60,
                    name: '分配完成次数',
                    itemStyle: {
                        normal: {
                            color: '#ffbc0c',
                            label: {
                                show: true
                            }
                        }
                    },
                },
                {
                    value: 30,
                    name: '未完成次数',
                    itemStyle: {
                        normal: {
                            color: '#ff6b64',
                            label: {
                                show: true
                            }
                        }
                    },
                },
                {
                    value: 40,
                    name: '完成次数',
                    itemStyle: {
                        normal: {
                            color: '#13d2b0',
                            label: {
                                show: true
                            }
                        }
                    },
                },
                {
                    value: 80,
                    name: '接收次数',
                    itemStyle: {
                        normal: {
                            color: '#00b4fa',
                            label: {
                                show: true
                            }
                        }
                    },
                }
            ]
        }]
    };
    task.setOption(optionTask);
    //岗位-考勤
    var attend = echarts.init(document.getElementById('post-attend'));
    optionAttend = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '24%',
            containLabel: true
        },
        legend: {
            data: ['加班次数', '请假次数', '未打卡次数', '出勤有误次数'],
            textStyle: {
                color: '#fff',
            },
            padding: 20,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
        },
        xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 350,
            interval: 50,
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        }],
        series: [{
                barWidth: '15%',
                name: '加班次数',
                type: 'bar',
                data: [120, 149, 256, 67],
                itemStyle: {
                    normal: {
                        color: '#01a1af'
                    }
                }
            },
            {
                barWidth: '15%',
                name: '请假次数',
                type: 'bar',
                data: [132, 256, 67, 150],
                itemStyle: {
                    normal: {
                        color: '#00b8bd'
                    }
                },
                barGap: 0,
            },
            {
                barWidth: '15%',
                name: '未打卡次数',
                type: 'bar',
                data: [120, 149, 200, 132],
                itemStyle: {
                    normal: {
                        color: '#0094d4'
                    }
                }
            },
            {
                barWidth: '15%',
                name: '出勤有误次数',
                type: 'bar',
                data: [132, 256, 120, 149],
                itemStyle: {
                    normal: {
                        color: '#006ed4'
                    }
                }
            }
        ]
    };
    attend.setOption(optionAttend);
    //岗位-合同立项
    var areaChart = echarts.init(document.getElementById('post-contract'));
    optionAreaChart = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '24%',
            containLabel: true
        },
        legend: {
            data: ['未立项合同金额', '立项合同金额', '不立项合同金额'],
            textStyle: {
                color: '#fff',
            },
            padding: 20,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
        },
        xAxis: [{
            type: 'category',
            data: ['佛山', '江门', '湖南'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 3000000,
            interval: 500000,
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        }],
        series: [{
                barWidth: '15%',
                name: '未立项合同金额',
                type: 'bar',
                data: [154580, 453256, 1446549],
                itemStyle: {
                    normal: {
                        color: '#5B72F4'
                    }
                }
            },
            {
                barWidth: '15%',
                name: '立项合同金额',
                type: 'bar',
                data: [675454, 245456, 1948945],
                itemStyle: {
                    normal: {
                        color: '#555AE9'
                    }
                },
                barGap: 0,
            },
            {
                barWidth: '15%',
                name: '不立项合同金额',
                type: 'bar',
                data: [245500, 1204024, 1454579],
                itemStyle: {
                    normal: {
                        color: '#3E42E1'
                    }
                }
            }
        ]
    };
    areaChart.setOption(optionAreaChart);
    //岗位-报销管理
    var reim = echarts.init(document.getElementById('post-reim'));
    optionReim = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '24%',
            containLabel: true
        },
        legend: {
            data: ['金额'],
            textStyle: {
                color: '#fff',
            },
            padding: 20,
            itemWidth: 18, // 图例图形宽度
            itemHeight: 18,
        },
        xAxis: [{
            type: 'category',
            data: ['申请报销记录', '待审核', '待支付', '已支付'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 1,
            interval: 0.2,
            axisLabel: {
                textStyle: {
                    color: '#fff', //坐标值得具体的颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        }],
        series: [{
            barWidth: '35%',
            name: '金额',
            type: 'bar',
            data: [0.5, 0.2, 0.9, 0.4],
            itemStyle: {
                normal: {
                    color: '#01A1AF'
                }
            }
        }]
    };
    reim.setOption(optionReim);
    window.onresize = function () {
        //岗位
        promote.resize();
        task.resize();
        attend.resize();
        areaChart.resize();
        reim.resize();
    };
    }
else if (document.getElementById('graph-department')) {    //部门的Echarts
        var partDepartment = document.getElementById('graph-department');
        insertEcharts(arrDepartment, partDepartment);
        //部门-商务数据分析
        var business = echarts.init(document.getElementById('busin'));
        optionBusiness = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                y: '30',
                itemWidth: 18, // 图例图形宽度
                itemHeight: 18,
                textStyle: {
                    color: '#fff',
                },
                data: ['成功合作量', '待洽谈量', '潜在客户量']
            },
            series: [{
                name: '商务数据',
                type: 'pie',
                radius: '50%',
                center: ['50%', '60%'],
                labelLine: {
                    normal: {
                        length: 35,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                        }
                    },
                },
                data: [{
                        value: 20,
                        name: '成功合作量',
                        itemStyle: {
                            normal: {
                                color: '#565ae8',
                            }
                        }
                    },
                    {
                        value: 45,
                        name: '待洽谈量',
                        itemStyle: {
                            normal: {
                                color: '#13d2b0'
                            }
                        },
                    },
                    {
                        value: 35,
                        name: '潜在客户量',
                        itemStyle: {
                            normal: {
                                color: '#00b4fa'
                            }
                        }
                    }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            show: true,
                            formatter: '{d}%'
                        },
                        labelLine: {
                            show: true
                        }
                    }
                },

            }]
        };
        business.setOption(optionBusiness);
        //部门-任务分配
        var taskDepart = echarts.init(document.getElementById('depart-tasks'));
        optionTask = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '0',
                top: 'bottom',
                itemWidth: 18, // 图例图形宽度
                itemHeight: 18,
                itemPadding: 20,
                itemGap: 5,
                textStyle: {
                    color: '#fff' // 图例文字颜色
                },
                data: ['接收次数', '分配次数', '分配未完成次数', '未完成次数', '分配完成次数', '完成次数']
            },
            series: [{
                name: '任务分配',
                type: 'pie',
                radius: ['35%', '50%'],
                center: ['50%', '38%'],
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
                data: [{
                        value: 100,
                        name: '分配未完成次数',
                        itemStyle: {
                            normal: {
                                color: '#d02dc6',
                                label: {
                                    show: true
                                }
                            }
                        },
                    },
                    {
                        value: 60,
                        name: '分配次数',
                        itemStyle: {
                            normal: {
                                color: '#3d42e0',
                                label: {
                                    show: true
                                }
                            }
                        },
                    },
                    {
                        value: 60,
                        name: '分配完成次数',
                        itemStyle: {
                            normal: {
                                color: '#ffbc0c',
                                label: {
                                    show: true
                                }
                            }
                        },
                    },
                    {
                        value: 30,
                        name: '未完成次数',
                        itemStyle: {
                            normal: {
                                color: '#ff6b64',
                                label: {
                                    show: true
                                }
                            }
                        },
                    },
                    {
                        value: 40,
                        name: '完成次数',
                        itemStyle: {
                            normal: {
                                color: '#13d2b0',
                                label: {
                                    show: true
                                }
                            }
                        },
                    },
                    {
                        value: 80,
                        name: '接收次数',
                        itemStyle: {
                            normal: {
                                color: '#00b4fa',
                                label: {
                                    show: true
                                }
                            }
                        },
                    }
                ]
            }]
        };
        taskDepart.setOption(optionTask);
        //部门-考勤
        var attendDepart = echarts.init(document.getElementById('depart-attend'));
        optionAttend = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '24%',
                containLabel: true
            },
            legend: {
                data: ['加班次数', '请假次数', '未打卡次数', '出勤有误次数'],
                textStyle: {
                    color: '#fff',
                },
                padding: 20,
                itemWidth: 18, // 图例图形宽度
                itemHeight: 18,
            },
            xAxis: [{
                type: 'category',
                data: ['周一', '周二', '周三', '周四'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 350,
                interval: 50,
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            series: [{
                    barWidth: '15%',
                    name: '加班次数',
                    type: 'bar',
                    data: [120, 149, 256, 67],
                    itemStyle: {
                        normal: {
                            color: '#01a1af'
                        }
                    }
                },
                {
                    barWidth: '15%',
                    name: '请假次数',
                    type: 'bar',
                    data: [132, 256, 67, 150],
                    itemStyle: {
                        normal: {
                            color: '#00b8bd'
                        }
                    },
                    barGap: 0,
                },
                {
                    barWidth: '15%',
                    name: '未打卡次数',
                    type: 'bar',
                    data: [120, 149, 200, 132],
                    itemStyle: {
                        normal: {
                            color: '#0094d4'
                        }
                    }
                },
                {
                    barWidth: '15%',
                    name: '出勤有误次数',
                    type: 'bar',
                    data: [132, 256, 120, 149],
                    itemStyle: {
                        normal: {
                            color: '#006ed4'
                        }
                    }
                }
            ]
        };
        attendDepart.setOption(optionAttend);
        //部门-合同立项
        var areaChartDepart = echarts.init(document.getElementById('depart-contract'));
        optionAreaChart = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '24%',
                containLabel: true
            },
            legend: {
                data: ['未立项合同金额', '立项合同金额', '不立项合同金额'],
                textStyle: {
                    color: '#fff',
                },
                padding: 20,
                itemWidth: 18, // 图例图形宽度
                itemHeight: 18,
            },
            xAxis: [{
                type: 'category',
                data: ['佛山', '江门', '湖南'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 3000000,
                interval: 500000,
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            series: [{
                    barWidth: '15%',
                    name: '未立项合同金额',
                    type: 'bar',
                    data: [154580, 453256, 1446549],
                    itemStyle: {
                        normal: {
                            color: '#5B72F4'
                        }
                    }
                },
                {
                    barWidth: '15%',
                    name: '立项合同金额',
                    type: 'bar',
                    data: [675454, 245456, 1948945],
                    itemStyle: {
                        normal: {
                            color: '#555AE9'
                        }
                    },
                    barGap: 0,
                },
                {
                    barWidth: '15%',
                    name: '不立项合同金额',
                    type: 'bar',
                    data: [245500, 1204024, 1454579],
                    itemStyle: {
                        normal: {
                            color: '#3E42E1'
                        }
                    }
                }
            ]
        };
        areaChartDepart.setOption(optionAreaChart);
        //部门-报销管理
        var reimDepart = echarts.init(document.getElementById('depart-reim'));
        optionReim = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '24%',
                containLabel: true
            },
            legend: {
                data: ['金额'],
                textStyle: {
                    color: '#fff',
                },
                padding: 20,
                itemWidth: 18, // 图例图形宽度
                itemHeight: 18,
            },
            xAxis: [{
                type: 'category',
                data: ['申请报销记录', '待审核', '待支付', '已支付'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 1,
                interval: 0.2,
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            series: [{
                barWidth: '35%',
                name: '金额',
                type: 'bar',
                data: [0.5, 0.2, 0.9, 0.4],
                itemStyle: {
                    normal: {
                        color: '#01A1AF'
                    }
                }
            }]
        };
        reimDepart.setOption(optionReim);
        //窗口改变时候Echarts跟着改变
        // window.onresize = function () {
        //     //部门
        //     business.resize();
        //     taskDepart.resize();
        //     attendDepart.resize();
        //     areaChartDepart.resize();
        //     reimDepart.resize();
        // };
    }
else {
        var partPerson = document.getElementById('graph-person');
        insertEcharts(arrPerson, partPerson);
        //地区合同 默认年度
        $.get('/siginmanage/yearCollectFigure',function (response) {
            if(response.code == 0){
                //个人-合同立项
                var areaChartPerson = echarts.init(document.getElementById('person-contract'));
                optionAreaChart = {
                    color: ['#5b72f4','#555ae9','#3e42e1'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    legend: {
                        data:response.data.legend.data,
                        itemWidth:40,
                        itemHeight:20,
                        textStyle:{
                            fontSize:15,
                            color:'#fff'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data :response.data.xAxis.data,
                            axisTick: {
                                alignWithLabel: true,
                                show:false
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#eaeaea',
                                    width:1,//这里是为了突出显示加上的
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLine:{
                                lineStyle:{
                                    color:'#eaeaea',
                                    width:1,//这里是为了突出显示加上的
                                }
                            },
                            axisTick:{
                                show:false
                            },
                        }
                    ],
                    animationDelay: function (idx) {
                        return idx * 2000;
                    },
                    series:response.data.series,
                };
                // 使用刚指定的配置项和数据显示图表。
                areaChartPerson.setOption(optionAreaChart);
                //适应窗口
                window.onresize =function () {
                    areaChartPerson.resize()
                }
            }
        });
        //地区合同
        $('.businessTab').on('click',function () {
            var myDate = new Date();
            //年
            if($('.businessTab').index($(this)) == 0){   //年
                $.get('/siginmanage/yearCollectFigure',function (response) {
                    if(response.code == 0){
                                    //个人-合同立项
                        var areaChartPerson = echarts.init(document.getElementById('person-contract'));
                        optionAreaChart = {
                            color: ['#5b72f4','#555ae9','#3e42e1'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                },
                            },
                            legend: {
                                data:response.data.legend.data,
                                itemWidth:40,
                                itemHeight:20,
                                textStyle:{
                                    fontSize:15,
                                    color:'#fff'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    data :response.data.xAxis.data,
                                    axisTick: {
                                        alignWithLabel: true,
                                        show:false
                                    },
                                    axisLine:{
                                        lineStyle:{
                                            color:'#eaeaea',
                                            width:1,//这里是为了突出显示加上的
                                        }
                                    }
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value',
                                    axisLine:{
                                        lineStyle:{
                                            color:'#eaeaea',
                                            width:1,//这里是为了突出显示加上的
                                        }
                                    },
                                    axisTick:{
                                        show:false
                                    },
                                }
                            ],
                            animationDelay: function (idx) {
                                return idx * 2000;
                            },
                            series:response.data.series,
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        areaChartPerson.setOption(optionAreaChart);
                        //适应窗口
                        window.onresize =function () {
                            areaChartPerson.resize()
                        }
                    }
                });
            }
            //季度
            if($('.businessTab').index($(this)) == 1){
                $.get('/siginmanage/quarterCollectFigure',function (response) {  //季度
                    if(response.code == 0){
                //个人-合同立项
                        var areaChartPerson = echarts.init(document.getElementById('person-contract'));
                        optionAreaChart = {
                            color: ['#5b72f4','#555ae9','#3e42e1'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                },
                            },
                            legend: {
                                data:response.data.legend.data,
                                itemWidth:40,
                                itemHeight:20,
                                textStyle:{
                                    fontSize:15,
                                    color:'#fff'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    data :response.data.xAxis.data,
                                    axisTick: {
                                        alignWithLabel: true,
                                        show:false
                                    },
                                    axisLine:{
                                        lineStyle:{
                                            color:'#eaeaea',
                                            width:1,//这里是为了突出显示加上的
                                        }
                                    }
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value',
                                    axisLine:{
                                        lineStyle:{
                                            color:'#eaeaea',
                                            width:1,//这里是为了突出显示加上的
                                        }
                                    },
                                    axisTick:{
                                        show:false
                                    },
                                }
                            ],
                            animationDelay: function (idx) {
                                return idx * 2000;
                            },
                            series:response.data.series,
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        areaChartPerson.setOption(optionAreaChart);
                        //适应窗口
                        window.onresize =function () {
                            areaChartPerson.resize()
                        }
                    }
                })
            }
            //月
            if($('.businessTab').index($(this)) == 2){    //月
                $.get('/siginmanage/monthCollectFigure',function (response) {
                    if(response.code == 0){
                        //个人-合同立项
                        var areaChartPerson = echarts.init(document.getElementById('person-contract'));
                        optionAreaChart = {
                            color: ['#5b72f4','#555ae9','#3e42e1'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                },
                            },
                            legend: {
                                data:response.data.legend.data,
                                itemWidth:40,
                                itemHeight:20,
                                textStyle:{
                                    fontSize:15,
                                    color:'#fff'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    data :response.data.xAxis.data,
                                    axisTick: {
                                        alignWithLabel: true,
                                        show:false
                                    },
                                    axisLine:{
                                        lineStyle:{
                                            color:'#eaeaea',
                                            width:1,//这里是为了突出显示加上的
                                        }
                                    }
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value',
                                    axisLine:{
                                        lineStyle:{
                                            color:'#eaeaea',
                                            width:1,//这里是为了突出显示加上的
                                        }
                                    },
                                    axisTick:{
                                        show:false
                                    },
                                }
                            ],
                            animationDelay: function (idx) {
                                return idx * 2000;
                            },
                            series:response.data.series,
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        areaChartPerson.setOption(optionAreaChart);
                        //适应窗口
                        window.onresize =function () {
                            areaChartPerson.resize()
                        }
                    }
                });
            }
            //周
            if($('.businessTab').index($(this)) == 3){
                $.get('/siginmanage/weekCollectFigure',function (response) {  //周
                    if(response.code == 0){
                        if(response.data.series.length == 0){
                            response.data.series = [
                                {data: [0], name: "未立项合同金额", type: "bar"},
                                {data: [0], name: "立项合同金额", type: "bar"},
                                {data: [0], name: "不立项合同金额", type: "bar"}
                            ];
                            //个人-合同立项
                            var areaChartPerson = echarts.init(document.getElementById('person-contract'));
                            optionAreaChart = {
                                color: ['#5b72f4','#555ae9','#3e42e1'],
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                    },
                                },
                                legend: {
                                    data:response.data.legend.data,
                                    itemWidth:40,
                                    itemHeight:20,
                                    textStyle:{
                                        fontSize:15,
                                        color:'#fff'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data :response.data.xAxis.data,
                                        axisTick: {
                                            alignWithLabel: true,
                                            show:false
                                        },
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value',
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        },
                                        axisTick:{
                                            show:false
                                        },
                                    }
                                ],
                                animationDelay: function (idx) {
                                    return idx * 2000;
                                },
                                series:response.data.series,
                            };
                            // 使用刚指定的配置项和数据显示图表。
                            areaChartPerson.setOption(optionAreaChart);
                            //适应窗口
                            window.onresize =function () {
                                areaChartPerson.resize()
                            }
                        }else{
                        //个人-合同立项
                            var areaChartPerson = echarts.init(document.getElementById('person-contract'));
                            optionAreaChart = {
                                color: ['#5b72f4','#555ae9','#3e42e1'],
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                    },
                                },
                                legend: {
                                    data:response.data.legend.data,
                                    itemWidth:40,
                                    itemHeight:20,
                                    textStyle:{
                                        fontSize:15,
                                        color:'#fff'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data :response.data.xAxis.data,
                                        axisTick: {
                                            alignWithLabel: true,
                                            show:false
                                        },
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value',
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        },
                                        axisTick:{
                                            show:false
                                        },
                                    }
                                ],
                                animationDelay: function (idx) {
                                    return idx * 2000;
                                },
                                series:response.data.series,
                            };
                            // 使用刚指定的配置项和数据显示图表。
                            areaChartPerson.setOption(optionAreaChart);
                            //适应窗口
                            window.onresize =function () {
                                areaChartPerson.resize()
                            }
                        }
                    }
                });
            }
        });
         //获取用户信息
        $.get('/positiondetailuser/userName/userinfo',function (req) {
            if(req.code == 0){
                var myDate = new Date();
                var year=myDate.getFullYear(); //获取当前年
                var month=myDate.getMonth()+1;   //获取当前月
                var lou = req.data;
                $('.userName').text(lou.userName);
                $('.empNum').text(lou.empNumer);
                /***********************************报销管理**********************默认年**********************/
                $.post('/reimburseshape/monWeek/collect',{reimburseShapeStatus:'YEAR',year:year,userName:req.data.userName},
                    function (response) {
                    if(response.code == 0){
                        //个人-报销管理
                            var reimPerson = echarts.init(document.getElementById('person-reim'));
                            optionReim = {
                                color: ['#01a1af','#01b8be','#0094d4','#016ed3'],
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                    },
                                },
                                legend: {
                                    data:response.data.reimShapeBarVO.rlegendVO.data,
                                    itemWidth:40,
                                    itemHeight:20,
                                    textStyle:{
                                        fontSize:15,
                                        color:'#01a1af'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : response.data.reimShapeBarVO.xaxisVO.data,
                                        axisTick: {
                                            alignWithLabel: true,
                                            show:false
                                        },
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value',
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        },
                                        axisTick:{
                                            show:false
                                        },
                                    }
                                ],
                                series : [
                                    {
                                        name:response.data.reimShapeBarVO.seriesVO.name,
                                        type:'bar',
                                        barWidth: '10%',
                                        data:response.data.reimShapeBarVO.seriesVO.seriesDataVOList,
                                        animationDelay: function (idx) {
                                            return idx * 1000;
                                        }
                                    },
                                ]
                            };
                            reimPerson.setOption(optionReim);
                            window.onresize =function () {
                                reimPerson.resize()
                            }
                    }
                });
                //报销管理tab切换
                $('.businessTab').on('click',function () {
                    //周
                    if($('.businessTab').index($(this)) == 9){
                        $.get('/reimburseshape/todayWeekNum',function (res) {  //周
                            if(res.code == 0){
                                var data = res.data;
                                $.post('/reimburseshape/monWeek/collect',{reimburseShapeStatus:'WEEK',week:data,userName:req.data.userName},function (response) {
                                    if(response.code == 0){
                                //个人-报销管理
                                    var reimPerson = echarts.init(document.getElementById('person-reim'));
                                    optionReim = {
                                        color: ['#01a1af','#01b8be','#0094d4','#016ed3'],
                                        tooltip : {
                                            trigger: 'axis',
                                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                                type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                            },
                                        },
                                        legend: {
                                            data:response.data.reimShapeBarVO.rlegendVO.data,
                                            itemWidth:40,
                                            itemHeight:20,
                                            textStyle:{
                                                fontSize:15,
                                                color:'#01a1af'
                                            }
                                        },
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        xAxis : [
                                            {
                                                type : 'category',
                                                data : response.data.reimShapeBarVO.xaxisVO.data,
                                                axisTick: {
                                                    alignWithLabel: true,
                                                    show:false
                                                },
                                                axisLine:{
                                                    lineStyle:{
                                                        color:'#eaeaea',
                                                        width:1,//这里是为了突出显示加上的
                                                    }
                                                }
                                            }
                                        ],
                                        yAxis : [
                                            {
                                                type : 'value',
                                                axisLine:{
                                                    lineStyle:{
                                                        color:'#eaeaea',
                                                        width:1,//这里是为了突出显示加上的
                                                    }
                                                },
                                                axisTick:{
                                                    show:false
                                                },
                                            }
                                        ],
                                        series : [
                                            {
                                                name:response.data.reimShapeBarVO.seriesVO.name,
                                                type:'bar',
                                                barWidth: '10%',
                                                data:response.data.reimShapeBarVO.seriesVO.seriesDataVOList,
                                                animationDelay: function (idx) {
                                                    return idx * 1000;
                                                }
                                            },
                                        ]
                                    };
                                    reimPerson.setOption(optionReim);
                                    //适应窗口
                                    window.onresize =function () {
                                        reimPerson.resize()
                                    }
                                    }
                                });
                            }
                        });
                    }
                    //月
                    if($('.businessTab').index($(this)) == 8){
                        $.post('/reimburseshape/monWeek/collect',{reimburseShapeStatus:'MONTH',year:year,month:month,userName:req.data.userName},function (response) {
                            if(response.code == 0){
                                    //个人-报销管理
                                    var reimPerson = echarts.init(document.getElementById('person-reim'));
                                    optionReim = {
                                        color: ['#01a1af','#01b8be','#0094d4','#016ed3'],
                                        tooltip : {
                                            trigger: 'axis',
                                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                                type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                            },
                                        },
                                        legend: {
                                            data:response.data.reimShapeBarVO.rlegendVO.data,
                                            itemWidth:40,
                                            itemHeight:20,
                                            textStyle:{
                                                fontSize:15,
                                                color:'#01a1af'
                                            }
                                        },
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        xAxis : [
                                            {
                                                type : 'category',
                                                data : response.data.reimShapeBarVO.xaxisVO.data,
                                                axisTick: {
                                                    alignWithLabel: true,
                                                    show:false
                                                },
                                                axisLine:{
                                                    lineStyle:{
                                                        color:'#eaeaea',
                                                        width:1,//这里是为了突出显示加上的
                                                    }
                                                }
                                            }
                                        ],
                                        yAxis : [
                                            {
                                                type : 'value',
                                                axisLine:{
                                                    lineStyle:{
                                                        color:'#eaeaea',
                                                        width:1,//这里是为了突出显示加上的
                                                    }
                                                },
                                                axisTick:{
                                                    show:false
                                                },
                                            }
                                        ],
                                        series : [
                                            {
                                                name:response.data.reimShapeBarVO.seriesVO.name,
                                                type:'bar',
                                                barWidth: '10%',
                                                data:response.data.reimShapeBarVO.seriesVO.seriesDataVOList,
                                                animationDelay: function (idx) {
                                                    return idx * 1000;
                                                }
                                            },
                                        ]
                                    };
                                    reimPerson.setOption(optionReim);
                                    //适应窗口
                                    window.onresize =function () {
                                        reimPerson.resize()
                                    }
                            }
                        });
                    }
                    //季度
                    if($('.businessTab').index($(this)) == 7){
                        $.get('/reimburseshape/todayQuaryNum',function (res) {  //季度
                            if(res.code == 0){
                                var data = res.data;
                                $.post('/reimburseshape/monWeek/collect',{reimburseShapeStatus:'QUART',year:year,quart:data,userName:req.data.userName},function (response) {
                                    if(response.code == 0){
                                        //个人-报销管理
                                        var reimPerson = echarts.init(document.getElementById('person-reim'));
                                        optionReim = {
                                            color: ['#01a1af','#01b8be','#0094d4','#016ed3'],
                                            tooltip : {
                                                trigger: 'axis',
                                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                                    type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                                },
                                            },
                                            legend: {
                                                data:response.data.reimShapeBarVO.rlegendVO.data,
                                                itemWidth:40,
                                                itemHeight:20,
                                                textStyle:{
                                                    fontSize:15,
                                                    color:'#01a1af'
                                                }
                                            },
                                            grid: {
                                                left: '3%',
                                                right: '4%',
                                                bottom: '3%',
                                                containLabel: true
                                            },
                                            xAxis : [
                                                {
                                                    type : 'category',
                                                    data : response.data.reimShapeBarVO.xaxisVO.data,
                                                    axisTick: {
                                                        alignWithLabel: true,
                                                        show:false
                                                    },
                                                    axisLine:{
                                                        lineStyle:{
                                                            color:'#eaeaea',
                                                            width:1,//这里是为了突出显示加上的
                                                        }
                                                    }
                                                }
                                            ],
                                            yAxis : [
                                                {
                                                    type : 'value',
                                                    axisLine:{
                                                        lineStyle:{
                                                            color:'#eaeaea',
                                                            width:1,//这里是为了突出显示加上的
                                                        }
                                                    },
                                                    axisTick:{
                                                        show:false
                                                    },
                                                }
                                            ],
                                            series : [
                                                {
                                                    name:response.data.reimShapeBarVO.seriesVO.name,
                                                    type:'bar',
                                                    barWidth: '10%',
                                                    data:response.data.reimShapeBarVO.seriesVO.seriesDataVOList,
                                                    animationDelay: function (idx) {
                                                        return idx * 1000;
                                                    }
                                                },
                                            ]
                                        };
                                        reimPerson.setOption(optionReim);
                                        //适应窗口
                                        window.onresize =function () {
                                            reimPerson.resize()
                                        }
                                    }
                                });
                            }
                        })
                    }
                    //年
                    if($('.businessTab').index($(this)) == 6){
                        $.post('/reimburseshape/monWeek/collect',{reimburseShapeStatus:'YEAR',year:year,userName:req.data.userName},function (response) {
                            if(response.code == 0){
                                //个人-报销管理
                            var reimPerson = echarts.init(document.getElementById('person-reim'));
                            optionReim = {
                                color: ['#01a1af','#01b8be','#0094d4','#016ed3'],
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'none',        // 默认为直线，可选为：'line' | 'shadow'
                                    },
                                },
                                legend: {
                                    data:response.data.reimShapeBarVO.rlegendVO.data,
                                    itemWidth:40,
                                    itemHeight:20,
                                    textStyle:{
                                        fontSize:15,
                                        color:'#01a1af'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : response.data.reimShapeBarVO.xaxisVO.data,
                                        axisTick: {
                                            alignWithLabel: true,
                                            show:false
                                        },
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value',
                                        axisLine:{
                                            lineStyle:{
                                                color:'#eaeaea',
                                                width:1,//这里是为了突出显示加上的
                                            }
                                        },
                                        axisTick:{
                                            show:false
                                        },
                                    }
                                ],
                                series : [
                                    {
                                        name:response.data.reimShapeBarVO.seriesVO.name,
                                        type:'bar',
                                        barWidth: '10%',
                                        data:response.data.reimShapeBarVO.seriesVO.seriesDataVOList,
                                        animationDelay: function (idx) {
                                            return idx * 1000;
                                        }
                                    },
                                ]
                            };
                            reimPerson.setOption(optionReim);
                            //适应窗口
                            window.onresize =function () {
                                reimPerson.resize()
                            }
                            }
                        });
                    }
                });
                /***********************************任务分配管理**********************默认年**********************/
                $.get('/task/collectFigure',{personCountType:'YEAR',user:req.data.userName},function (response) {
                    //个人-任务分配
                    var taskPerson = echarts.init(document.getElementById('person-tasks'));
                        optionTask = {
                            color: ['#d02dc6','#00b6f9','#3142e1','#ffbc0d','#ff6a64','#13d2b0'],
                            tooltip: {
                                trigger: 'item',
                            },
                            legend: {
                                orient : 'vertical',
                                type: 'scroll',
                                right: 0,
                                itemPadding:10,
                                itemGap:30,
                                top: 'middle',
                                data:response.data.strings,
                                textStyle:{
                                    color:'#fff'
                                }
                            },
                            series: [
                                {
                                    type:'pie',
                                    radius: ['65%', '80%'],
                                    center: ['45%', '55%'],
                                    label: {
                                        normal: {
                                            textStyle:{
                                                color:'#fff'
                                            },
                                            rich: {
                                                a: {
                                                    color: '#e6e6e6',
                                                    lineHeight: 40,
                                                    lineWidth: 40,
                                                    align: 'center'
                                                },
                                            }
                                        },
                                    },
                                    data:response.data.data,
                                    animationDelay: function (idx) {
                                        return idx * 1000;
                                    }
                                }
                            ]
                        };
                        taskPerson.setOption(optionTask);
                        //适应窗口
                        window.onresize =function () {
                            taskPerson.resize()
                        }
                    });
                $('.businessTab').on('click',function () {

                    if($('.businessTab').index($(this))==10){
                        $.get('/task/collectFigure',{personCountType:'YEAR',user:req.data.userName},function (response) {
                            //个人-任务分配
                            var taskPerson = echarts.init(document.getElementById('person-tasks'));
                            optionTask = {
                                color: ['#d02dc6','#00b6f9','#3142e1','#ffbc0d','#ff6a64','#13d2b0'],
                                tooltip: {
                                    trigger: 'item',
                                },
                                legend: {
                                    orient : 'vertical',
                                    type: 'scroll',
                                    right: 0,
                                    itemPadding:10,
                                    itemGap:30,
                                    top: 'middle',
                                    data:response.data.strings,
                                    textStyle:{
                                        color:'#fff'
                                    }
                                },
                                series: [
                                    {
                                        type:'pie',
                                        radius: ['65%', '80%'],
                                        center: ['45%', '55%'],
                                        label: {
                                            normal: {
                                                textStyle:{
                                                    color:'#fff'
                                                },
                                                rich: {
                                                    a: {
                                                        color: '#e6e6e6',
                                                        lineHeight: 40,
                                                        lineWidth: 40,
                                                        align: 'center'
                                                    },
                                                }
                                            },
                                        },
                                        data:response.data.data,
                                        animationDelay: function (idx) {
                                            return idx * 1000;
                                        }
                                    }
                                ]
                            };
                            taskPerson.setOption(optionTask);
                            //适应窗口
                            window.onresize =function () {
                                taskPerson.resize()
                            }
                        });
                    }
                    if($('.businessTab').index($(this))==11){
                        $.get('/task/collectFigure',{personCountType:'SEASON',user:req.data.userName},function (response) {
                            //个人-任务分配
                            var taskPerson = echarts.init(document.getElementById('person-tasks'));
                            optionTask = {
                                color: ['#d02dc6','#00b6f9','#3142e1','#ffbc0d','#ff6a64','#13d2b0'],
                                tooltip: {
                                    trigger: 'item',
                                },
                                legend: {
                                    orient : 'vertical',
                                    type: 'scroll',
                                    right: 0,
                                    itemPadding:10,
                                    itemGap:30,
                                    top: 'middle',
                                    data:response.data.strings,
                                    textStyle:{
                                        color:'#fff'
                                    }
                                },
                                series: [
                                    {
                                        type:'pie',
                                        radius: ['65%', '80%'],
                                        center: ['45%', '55%'],
                                        label: {
                                            normal: {
                                                textStyle:{
                                                    color:'#fff'
                                                },
                                                rich: {
                                                    a: {
                                                        color: '#e6e6e6',
                                                        lineHeight: 40,
                                                        lineWidth: 40,
                                                        align: 'center'
                                                    },
                                                }
                                            },
                                        },
                                        data:response.data.data,
                                        animationDelay: function (idx) {
                                            return idx * 1000;
                                        }
                                    }
                                ]
                            };
                            taskPerson.setOption(optionTask);
                            //适应窗口
                            window.onresize =function () {
                                taskPerson.resize()
                            }
                        });
                    }
                    if($('.businessTab').index($(this))==12){
                        $.get('/task/collectFigure',{personCountType:'MONTH',user:req.data.userName},function (response) {
                            //个人-任务分配
                            var taskPerson = echarts.init(document.getElementById('person-tasks'));
                            optionTask = {
                                color: ['#d02dc6','#00b6f9','#3142e1','#ffbc0d','#ff6a64','#13d2b0'],
                                tooltip: {
                                    trigger: 'item',
                                },
                                legend: {
                                    orient : 'vertical',
                                    type: 'scroll',
                                    right: 0,
                                    itemPadding:10,
                                    itemGap:30,
                                    top: 'middle',
                                    data:response.data.strings,
                                    textStyle:{
                                        color:'#fff'
                                    }
                                },
                                series: [
                                    {
                                        type:'pie',
                                        radius: ['65%', '80%'],
                                        center: ['45%', '55%'],
                                        label: {
                                            normal: {
                                                textStyle:{
                                                    color:'#fff'
                                                },
                                                rich: {
                                                    a: {
                                                        color: '#e6e6e6',
                                                        lineHeight: 40,
                                                        lineWidth: 40,
                                                        align: 'center'
                                                    },
                                                }
                                            },
                                        },
                                        data:response.data.data,
                                        animationDelay: function (idx) {
                                            return idx * 1000;
                                        }
                                    }
                                ]
                            };
                            taskPerson.setOption(optionTask);
                            //适应窗口
                            window.onresize =function () {
                                taskPerson.resize()
                            }
                        });
                    }
                    if($('.businessTab').index($(this))==13){
                        $.get('/task/collectFigure',{personCountType:'WEEK',user:req.data.userName},function (response) {
                            //个人-任务分配
                            var taskPerson = echarts.init(document.getElementById('person-tasks'));
                            optionTask = {
                                color: ['#d02dc6','#00b6f9','#3142e1','#ffbc0d','#ff6a64','#13d2b0'],
                                tooltip: {
                                    trigger: 'item',
                                },
                                legend: {
                                    orient : 'vertical',
                                    type: 'scroll',
                                    right: 0,
                                    itemPadding:10,
                                    itemGap:30,
                                    top: 'middle',
                                    data:response.data.strings,
                                    textStyle:{
                                        color:'#fff'
                                    }
                                },
                                series: [
                                    {
                                        type:'pie',
                                        radius: ['65%', '80%'],
                                        center: ['45%', '55%'],
                                        label: {
                                            normal: {
                                                textStyle:{
                                                    color:'#fff'
                                                },
                                                rich: {
                                                    a: {
                                                        color: '#e6e6e6',
                                                        lineHeight: 40,
                                                        lineWidth: 40,
                                                        align: 'center'
                                                    },
                                                }
                                            },
                                        },
                                        data:response.data.data,
                                        animationDelay: function (idx) {
                                            return idx * 1000;
                                        }
                                    }
                                ]
                            };
                            taskPerson.setOption(optionTask);
                            //适应窗口
                            window.onresize =function () {
                                taskPerson.resize()
                            }
                        });
                    }
                })
            }
            });
        //个人-考勤
        var attendPerson = echarts.init(document.getElementById('person-attend'));
        optionAttend = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '24%',
                containLabel: true
            },
            legend: {
                data: ['加班次数', '请假次数', '未打卡次数', '出勤有误次数'],
                textStyle: {
                    color: '#fff',
                },
                padding: 20,
                itemWidth: 18, // 图例图形宽度
                itemHeight: 18,
            },
            xAxis: [{
                type: 'category',
                data: ['周一', '周二', '周三', '周四'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 350,
                interval: 50,
                axisLabel: {
                    textStyle: {
                        color: '#fff', //坐标值得具体的颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }],
            series: [{
                    barWidth: '15%',
                    name: '加班次数',
                    type: 'bar',
                    data: [120, 149, 256, 67],
                    itemStyle: {
                        normal: {
                            color: '#01a1af'
                        }
                    }
                },
                {
                    barWidth: '15%',
                    name: '请假次数',
                    type: 'bar',
                    data: [132, 256, 67, 150],
                    itemStyle: {
                        normal: {
                            color: '#00b8bd'
                        }
                    },
                    barGap: 0,
                },
                {
                    barWidth: '15%',
                    name: '未打卡次数',
                    type: 'bar',
                    data: [120, 149, 200, 132],
                    itemStyle: {
                        normal: {
                            color: '#0094d4'
                        }
                    }
                },
                {
                    barWidth: '15%',
                    name: '出勤有误次数',
                    type: 'bar',
                    data: [132, 256, 120, 149],
                    itemStyle: {
                        normal: {
                            color: '#006ed4'
                        }
                    }
                }
            ]
        };
        attendPerson.setOption(optionAttend);
        //个人-决策平衡
        var decisionPerson = echarts.init(document.getElementById('person-decision'));
        optionDecision = {
            legend: {
                data: ['人钱事的商务合成图：默认汇总当天数据'],
                textStyle: {
                    color: '#fff' // 图例文字颜色
                },
                x: '10%',
                y: 'bottom',
                itemWidth: 18, // 图例图形宽度
                itemHeight: 18,
            },
            radar: {
                name: {
                    show:false,
                    textStyle: {
                        color: '#fff',
                        padding: [3, 5],
                    }
                },
                indicator: [{
                        name: '商务',
                        max: 100
                    },
                    {
                        name: '人',
                        max: 100
                    },
                    {
                        name: '钱',
                        max: 100
                    },
                    {
                        name: '事',
                        max: 100
                    }
                ],
                center: ['50%', '50%'],
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["#2B3034"] // 图表背景网格的颜色
                    }
                },
                axisLine: { // 坐标轴线
                    lineStyle: {
                        width: 1,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00b4fa'
                            },
                            {
                                offset: 1,
                                color: '#6131b3'
                            }
                        ], false)
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00b4fa'
                            },
                            {
                                offset: 1,
                                color: '#6131b3'
                            }
                        ], false)
                    }
                }
            },
            series: [{
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                data: [{
                    value: [70, 60, 75, 85],
                    name: '人钱事的商务合成图：默认汇总当天数据'
                }],

                symbolSize: 6,
                itemStyle: {
                    normal: {
                        // label : {show: true},
                        color: "#00b4fa", // 图表中各个图区域的边框线拐点颜色
                        lineStyle: {
                            color: "#00b4fa", // 图表中各个图区域的边框线颜色
                        },
                        borderWidth: 2,
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#6131b3'
                                },
                                {
                                    offset: 1,
                                    color: '#00b4fa'
                                }
                            ], false)
                        },

                    }
                },
            }]
        };
        decisionPerson.setOption(optionDecision);
        window.onresize = function () {
            //个人-考勤
            attendPerson.resize();
            //个人-决策平衡
            decisionPerson.resize();
        };
    }