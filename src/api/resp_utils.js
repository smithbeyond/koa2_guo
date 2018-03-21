export function BindResp(ctx, data, err_msg) {
    ctx.body = JSON.stringify({
        data: data,
        err_msg: err_msg? err_msg : '',
        err_code: err_msg? -1 : 0,
    })
}