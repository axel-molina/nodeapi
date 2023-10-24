import { Request, Response } from "express";
// Error handle
import { handleHttp } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";
import {
  insertOrder,
  obteinOrders,
  obteinOrder,
  removeOrder,
} from "../services/order.service";

// GET

const getOrders = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  const dataJwt = verifyToken(token || "");
  try {
    const response = await obteinOrders(dataJwt);
    res.status(200).send({ data: response });
  } catch (error) {
    handleHttp(res, "Error get orders");
  }
};

const getOrder = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  const dataJwt = verifyToken(token || "");
  const id = req.params.id;
  try {
    const response = await obteinOrder(id);
    res.status(200).send({ data: response });
  } catch (error) {
    handleHttp(res, "Error get order");
  }
};

// POST
const postOrder = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  const dataJwt = verifyToken(token || "");
  const order = req.body;
  try {
    const response = await insertOrder(order);
    res.status(201).send({ data: response });
  } catch (error) {
    handleHttp(res, "Error post order");
  }
};

// DELETE
const deleteOrder = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  const dataJwt = verifyToken(token || "");
  const id = req.params.id;
  try {
    const response = await removeOrder(id);
    res.status(200).send({ data: response });
  } catch (error) {
    handleHttp(res, "Error delete order");
  }
};

export { getOrders, getOrder, postOrder, deleteOrder };
