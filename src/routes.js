import Router from 'koa-router'

const router = new Router()

router.prefix('/backend/api')

router.get('/login', async(ctx, next) => {
    const { name } = ctx.query
    ctx.body = 'hello ' + name
})

module.exports = router