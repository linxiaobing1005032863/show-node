const app = require('koa')();//koa web应用
const path = require('path');//路径
const router = require("koa-router")();//路由中间件
const session = require('koa-session');//cookie
const koaBody = require('koa-body');
const json = require('koa-json');
const cors = require('koa-cors');
const staticCache = require('koa-static-cache');
const config = require(path.resolve('plugins/read-config.js'));
const routersPath = '/koa/routers/';
const port = process.env.PORT ||80;

app.use(cors());//跨域请求,用于与browsesync调试
app.keys = ['feedback'];//session加密值
app.use(session(app));//使用cookie
app.use(koaBody());//必需要路由用之前使用,不然获取不到表单
router.get('/', function *(next) {//根路由
    this.redirect('/index');//重写向到登录页面
    this.status = 301;
});
/*
 {
 "default":"dev",
 "dev": {
 "aurl": "http://172.17.205.33:5351",(组织结构)
 "burl": "http://172.17.205.40:5360",(报销管理)
 "curl": "http://172.17.205.50:5553",(商务合同)
 "durl": "http://172.17.205.32:5350",(用户模块)
 "vurl": "http://announcement.issp.bjike.com:8080",(公告)
 "turl": "http://172.17.205.38:5354",(任务分配)
 "eurl": "http://172.17.205.49:5369",(待办事项)
 "furl": "http://172.17.205.64:5366",(反馈)
 "gurl": "http://royalty.issp.bjike.com:8080",(管理提成)
 "hurl": "http://172.17.205.68:5260",(出车管理)
 "iurl": "http://oilcardmanage.issp.bjike.com:8080",(油卡管理)
 "jurl": "http://172.17.205.54:5356"(考勤)
 }
 }
 */

//============路由===========
app.use(require(path.join(__dirname,routersPath,'index.js'))().routes());//列表路由
app.use(router.routes());

//============静态文件资源===========
app.use(staticCache(path.join(__dirname, './static/pages'), {
    maxAge: 10 * 60 * 60
}));
app.listen(port, function () {
    console.log('koa server listening on port ' + port);
});