//  登陆接口
export async function login(ctx) {
    const { name } = ctx.query
    ctx.body = 'hello ' + name
}

// 用户退出接口
export async function logout(ctx) {
    const { name } = ctx.query
    ctx.body = name + ' exist!!'
}