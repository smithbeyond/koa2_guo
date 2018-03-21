export async function login(ctx) {
    const { name } = ctx.query
    ctx.body = 'hello ' + name
}