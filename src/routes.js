import Router from 'koa-router'
import { Login, Logout } from './api/login'
import { QueryUser } from './api/user'


const router = new Router()
router.prefix('/backend/api')


// 登陆相关
router.get('/login', Login)
router.get('/logout', Logout)
// 用户信息相关
router.get('/user/query', QueryUser)


module.exports = router
