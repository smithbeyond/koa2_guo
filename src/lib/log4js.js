import { configure, getLogger, koaLogger } from 'koa-log4';
import { AccessLogPath, AppLogPath, ErrorLogPath } from '../conf/conf'

// 首先初始化日志相关数据
configure({
    appenders: {
        access: {
            type: 'dateFile',  //datefile表示是输出按时间分文件的日志
            filename: AccessLogPath || 'access.log',
            maxLogSize: 10485760,  //设置日志文件的最大大小，文件体积超过时，自动分文件
            pattern: '-yyyy-MM-dd_hh.log',  // 按小时分割
            alwaysIncludePattern: true
        },
        app: {
            type: 'dateFile',  //datefile表示是输出按时间分文件的日志
            filename: AppLogPath || 'app.log',
            maxLogSize: 10485760,  //设置日志文件的最大大小，文件体积超过时，自动分文件
            pattern: '-yyyy-MM-dd_hh.log',  // 按小时分割
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
             appenders: ['app'],
             level: 'trace'
        },
        access: {
             appenders: ['access'],
             level: 'info'
        },
        app: {
             appenders: ['app'],
             level: 'trace'
        }
    }
});


// 服务正常打印日志的logger
export const logger = getLogger('app')


let accessLogger
/**
 * GetAccessLogger 获取access日志管理器
 * @param {string} fileName 
 */
export function GetAccessLogger() {
    if (!accessLogger) {
        accessLogger = koaLogger(getLogger('access'))
    }
    return accessLogger
}