import Koa from 'koa'
import MainRouter from '../routes/index.js'
import {koaBody} from 'koa-body';

const app = new Koa()

app.use(koaBody()); 

app.use(MainRouter)

export default app