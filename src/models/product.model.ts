import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ProductSchema = new Schema<Product>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        stock: {
            type: Number,
            required: true,
            trim: true,
        },
        code: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProductModel: Model<Product> = model("Products", ProductSchema);
export default ProductModel;