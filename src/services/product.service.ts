import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const insertProduct = async (product: Product) => {
  const responseInsert = await ProductModel.create(product);
  return responseInsert;
};

const obteinProducts = async () => {
  const responseProducts = await ProductModel.find({});
  return responseProducts;
};

const obteinProduct = async (id: string) => {
  const responseProduct = await ProductModel.findOne({ _id: id });
  return responseProduct;
};

export { insertProduct, obteinProducts, obteinProduct };
