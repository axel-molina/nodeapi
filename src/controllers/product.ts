import { Request, Response } from "express";
// Error handle
import { handleHttp } from "../utils/error.handle";

// GET
const getProduct = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error get product");
  }
};

const getProducts = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error get products");
  }
};

// POST
const postProduct = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "Error post product");
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
