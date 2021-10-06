import Koa from 'koa';
import KoaRouter from 'koa-router';
import json from 'koa-json';
const app = new Koa();
const router = new KoaRouter();
app.use(json());
/* app.use(async(ctx) => {
    ctx.body = '<h1>KOA Server</h1>';
}); */
router.get('/test', (ctx) => (ctx.body = 'TEST'));
app.use(router.routes()).use(router.allowedMethods());
export default app;
