import { Request, Response } from "express";
// Error handle
import { handleHttp } from "../utils/error.handle";
import {
  insertProduct,
  obteinProducts,
  obteinProduct,
  actualizeProduct,
  removeProduct,
} from "../services/product.service";
import { verifyToken } from "../utils/jwt.handle";

interface JwtPayload {
  id: string;
}

// GET
const getProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await obteinProduct(id);
    const data = response ? response : "Product not found";
    res.status(200).send(data);
  } catch (error) {
    handleHttp(res, "Error get product");
  }
};

const getProducts = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  const dataJwt = verifyToken(token || "");
  try {
    const response = await obteinProducts(dataJwt);
    res.status(200).send({ data: response });
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
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const response = await actualizeProduct(id, body);
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "Error update product", error);
  }
};

// DELETE
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await removeProduct(id);
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "Error delete product", error);
  }
};

export { getProduct, getProducts, postProduct, updateProduct, deleteProduct };
