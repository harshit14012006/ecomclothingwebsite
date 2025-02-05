import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
    category: { type: String },
    image: { type: String }, // Image file path stored as a string
  },
  { timestamps: true }
);

const TShirtProduct = mongoose.model("TShirtProduct", productSchema);
export default TShirtProduct;
