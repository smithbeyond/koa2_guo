import Koa from 'koa'
import json from 'koa-json'
import BodyParser from 'koa-bodyparser'
import router from './routes'
import { GetAccessLogger } from './lib/log4js'

// make server
const app = new Koa()

// middlewares
// 1. 设置接口支持json格式数据
app.use(BodyParser({
    enableTypes: ['json', 'form', 'text']
}))
// 2. 使用json
app.use(json())
// 3. 初始化日志
app.use(GetAccessLogger())
// 4. 设置可跨域调用
app.use(async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    await next()
})
// 5. 设置routes
app.use(router.routes(), router.allowedMethods())

module.exports = app