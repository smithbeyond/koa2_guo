import Koa from 'koa'
import json from 'koa-json'
import BodyParser from 'koa-bodyparser'
import router from './routes'
import { GetAccessLogger } from './init/log4js'

// 1. make server
const app = new Koa()

// middlewares
// 2. 设置接口支持json格式数据
app.use(BodyParser({
    enableTypes: ['json', 'form', 'text']
}))
// 2. 使用json
app.use(json())
// 3. 初始化日志
const accessLogger = GetAccessLogger('log/access/access.log')
app.use(accessLogger)

// 4. 设置可跨域调用
app.use(async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    await next()
})

// 5. 设置routes
app.use(router.routes(), router.allowedMethods())

module.exports = app