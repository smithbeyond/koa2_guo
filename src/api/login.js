import { logger } from '../lib/log4js'

//  登陆接口
export async function Login(ctx) {
    const { name } = ctx.query
    ctx.body = 'hello ' + name
    if (!ctx.session.id) { 
        console.log("id is null")
        ctx.session.id = 1
    }
    console.log(ctx.session)
    logger.debug('login func log debug')
    logger.info('login func log info')
    logger.error('login func log error')
}

// 用户退出接口
export async function Logout(ctx) {
    const { name } = ctx.query
    ctx.body = name + ' exist!!'
}