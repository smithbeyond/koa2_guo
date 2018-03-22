import Router from 'koa-router'
import { login, logout } from './api/login'
import { QueryUser } from './api/user'


const router = new Router()
router.prefix('/backend/api')


// 登陆相关
router.get('/login', login)
router.get('/logout', logout)
// 用户信息相关
router.get('/user/query', QueryUser)


module.exports = router
