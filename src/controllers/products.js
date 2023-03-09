import { ProductModel } from "../persistence/models/products.model.js";

export const getAllController = async (ctx, next) => {
    ctx.body = {            
      status: 'success',   
      data: await ProductModel.find({}),
    };
    ctx.status = 200;       
}


export const saveController = async (ctx, next) => {
  console.log(ctx.request);
  const data = ctx.request.body;

  const result = await ProductModel.create(data)

  ctx.body = {
    status: 'success',
    data: result,
  };
  ctx.status = 201;
}

export const getByIdController = async (ctx, next) => {
  const { id } = ctx.params;
  ctx.body = {
    status: 'success',
    data: await ProductModel.findById(id),
  };
  ctx.status = 200;
}


export const updateController = async (ctx, next) => {
  const { id } = ctx.params;

  const data = ctx.request.body;

  await ProductModel.findByIdAndUpdate(id, data)

  ctx.body = {
    status: 'success',
    data: data,
  };
  ctx.status = 200;
}

export const removeController = async (ctx, next) => {
  const { id } = ctx.params;
  await ProductModel.findByIdAndDelete(id)

  ctx.status = 200;
  ctx.body = {
    status: 'success',
    message: `Book deleted with id: ${id}`,
  };
}