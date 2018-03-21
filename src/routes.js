import Router from 'koa-router'
import { login } from './api/login'
const router = new Router()

router.prefix('/backend/api')

router.get('/login', login)

module.exports = router
