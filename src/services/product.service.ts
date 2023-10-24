import { response } from "express";
import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const insertProduct = async (product: Product) => {
  const responseInsert = await ProductModel.create(product);
  return responseInsert;
};

const obteinProductsForPage = async (
  page: number,
  limit: number,
  search: string,
  jwtData: any
) => {
  const responseProductsForPage = await ProductModel.find({
    userId: jwtData.id,
    name: { $regex: search, $options: "i" },
  })
    .skip((page - 1) * limit)
    .limit(limit);
  return responseProductsForPage;
};

const obteinProducts = async (jwtData: any) => {
  const responseProducts = await ProductModel.find({ userId: jwtData.id });
  return responseProducts;
};

const obteinProduct = async (id: string) => {
  const responseProduct = await ProductModel.findOne({ _id: id });
  return responseProduct;
};

const actualizeProduct = async (id: string, data: Product) => {
  const responseProduct = await ProductModel.findOneAndUpdate(
    { _id: id },
    data,
    { new: true }
  );
  return responseProduct;
};

const removeProduct = async (id: string) => {
  const responseProduct = await ProductModel.deleteOne({ _id: id });
  return responseProduct;
};

export {
  insertProduct,
  obteinProduct,
  removeProduct,
  obteinProducts,
  actualizeProduct,
  obteinProductsForPage,
};
