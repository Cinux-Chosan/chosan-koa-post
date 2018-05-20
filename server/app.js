const Koa = require('koa')
const path = require('path')
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
// const weappRouter = require('./routes/weapp');
const webRouter = require('./routes/web');
const app = new Koa()

app.use(require('koa-static')(path.join(__dirname, 'clients/client_web/dist')));

// 使用响应处理中间件
// app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
// app.use(weappRouter.routes())
app.use(webRouter.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))
