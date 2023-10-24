import { Schema, model } from "mongoose";
import { Order } from "../interfaces/order.interface";

const OrderSchema = new Schema<Order>({
  products: [
    {
      quantity: { type: Number },
      name: { type: String },
      price: { type: Number },
    },
  ],
  userId: {
    type: String,
    ref: "Users",
    required: true,
  },
  totalSalePrice: { type: Number },
});

const OrderModel = model<Order>("Orders", OrderSchema);
export default OrderModel;
