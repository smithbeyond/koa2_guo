import { BindResp } from './resp_utils'

export async function QueryUser(ctx) {
    const { name } = ctx.query
    if (!name) {
        BindResp(ctx, '', 'name can not be null')
        return
    }
    BindResp(ctx, 'user info is: ' + name, undefined)
}