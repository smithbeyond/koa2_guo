import log4js from 'koa-log4';

export function GetAccessLogger(fileName) {
    log4js.configure({
        appenders: { access: { type: 'DateFile', filename: fileName || 'access.log', pattern: '-yyyy-MM-dd.log', alwaysIncludePattern: true } },
        categories: { default: { appenders: ['access'], level: log4js.levels.INFO } }
      });
    return log4js.koaLogger(log4js.getLogger('access'))
}