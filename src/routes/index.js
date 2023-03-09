import Router from 'koa-router';
import ProductsRouter from './products.js'


const router = new Router({
    prefix: '/api'
})

router.use(ProductsRouter)

router.get('/', (ctx) => {
   
})

export default router.routes()