import { response } from "express";
import { Order } from "../interfaces/order.interface";
import OrderModel from "../models/order.model";

const insertOrder = async (order: Order) => {
  const responseInsert = await OrderModel.create(order);
  return responseInsert;
};

const obteinOrdersForPageByDate = async (page: number, limit: number, date: string) => {
  const orders = await OrderModel.find({ createdAt: { $gte: new Date(date) } })
    .skip((page - 1) * limit)
    .limit(limit);
  return orders;
};

const obteinOrders = async (jwtData: any) => {
  const responseOrders = await OrderModel.find({ userId: jwtData.id });
  return responseOrders;
};

const obteinOrder = async (id: string) => {
  const responseOrder = await OrderModel.findOne({ _id: id });
  return responseOrder;
};

const removeOrder = async (id: string) => {
  const responseOrder = await OrderModel.deleteOne({ _id: id });
  return responseOrder;
};

export {
  insertOrder,
  obteinOrders,
  obteinOrder,
  removeOrder,
};
