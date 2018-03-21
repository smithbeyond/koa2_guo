import Koa from 'koa'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import router from './routes'
import logger from 'koa-logger'

const app = new Koa()
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// logger
app.use(async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(router.routes(), router.allowedMethods())

module.exports = app