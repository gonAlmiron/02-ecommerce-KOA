import Router from 'koa-router';
import { getAllController, getByIdController, saveController, updateController, removeController } from '../controllers/products.js';

const router = new Router({
    prefix: '/products'
});

router.get('/', getAllController)

router.post('/', saveController)

router.get('/:id', getByIdController)

router.put('/:id', updateController)

router.delete('/:id', removeController)

export default router.routes()