import Router from 'koa-router'
import { login, logout } from './api/login'
import { QueryUser } from './api/user'
const router = new Router()

router.prefix('/backend/api')

router.get('/login', login)
router.get('/logout', logout)
router.get('/user/query', QueryUser)

module.exports = router
