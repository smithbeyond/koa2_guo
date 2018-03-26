import Session from 'koa-session-minimal'
import MysqlStore from 'koa-mysql-session'
import { MYSQL_CONFIG } from '../conf/mysql'


const SESSION_KEY = 'SESSION_ID'
const CONFIG = {
    key: SESSION_KEY, /** (string) cookie key */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 'session',
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    store: new MysqlStore(MYSQL_CONFIG),
};


/**
 * 初始化session，暂时用mysql存储，table名：_mysql_session_store
 * @param {Koa} app koa server.
 */
export function InitSession(app){
    app.use(Session(CONFIG, app))
}