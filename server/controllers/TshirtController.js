import TShirtProduct from "../models/TShirtModel.js";

// 📌 1️⃣ Get all products
export const getTshirts = async (req, res) => {
  try {
    const products = await TShirtProduct.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 2️⃣ Get single product
export const getTshirtsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 3️⃣ Create product (with file upload)
export const createTshirts = async (req, res) => {
  try {
    const { title, price, size, color, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newProduct = new TShirtProduct({
      title,
      price,
      size,
      color,
      category,
      image,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error); // Add this line to log the error
    res.status(500).json({ error: error.message });
  }
};

// 📌 4️⃣ Update product (with file upload)
export const updateTshirts = async (req, res) => {
  try {
    // Log the request and file information
    console.log("Received update request:", req.params.id);
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    // Destructure the fields from the request body
    const { title, price, size, color, category } = req.body;

    // Find the T-shirt by its ID in the database
    const tshirt = await TShirtProduct.findById(req.params.id);

    // If the T-shirt isn't found, return a 404 error
    if (!tshirt) {
      return res.status(404).json({ message: "T-Shirt not found" });
    }

    // Update the T-shirt fields (only if new values are provided)
    tshirt.title = title || tshirt.title;
    tshirt.price = price || tshirt.price;
    tshirt.size = size || tshirt.size;
    tshirt.color = color || tshirt.color;
    tshirt.category = category || tshirt.category;

    // If a new image is uploaded, update the image field
    if (req.file) {
      tshirt.image = `/uploads/${req.file.filename}`;
    }

    // Save the updated T-shirt to the database
    const updatedTShirt = await tshirt.save();

    // Respond with the updated T-shirt
    res.json({ success: true, product: updatedTShirt });
  } catch (error) {
    // Handle errors by sending a 500 error response
    console.error("❌ Error updating T-Shirt:", error);
    res.status(500).json({ error: error.message });
  }
};

// 📌 5️⃣ Delete product
export const deleteTshirts = async (req, res) => {
  try {
    const product = await TShirtProduct.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
