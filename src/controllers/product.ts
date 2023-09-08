import { Request, Response } from "express";
// Error handle
import { handleHttp } from "../utils/error.handle";
import {
  insertProduct,
  obteinProducts,
  obteinProduct,
} from "../services/product.service";

// GET
const getProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await obteinProduct(id);
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "Error get product");
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await obteinProducts();
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "Error get products");
  }
};

// POST
const postProduct = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertProduct(body);
    res.status(201).send(response);
  } catch (error) {
    console.log(error);
    handleHttp(res, "Error post product", error);
  }
};

// PUT
const updateProduct = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error update product");
  }
};

// DELETE
const deleteProduct = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error delete product");
  }
};

export { getProduct, getProducts, postProduct, updateProduct, deleteProduct };
