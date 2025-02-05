import React, { useState, useEffect } from "react";
import { Edit, Trash, X } from "lucide-react";
import axios from "axios";

function Adminblazers() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["red", "blue", "green", "black", "white"];
  const categories = ["All", "Men", "Child"];

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchblazers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/blazers/get-all-blazers"
        );
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially, show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchblazers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blazers/${id}`);
      // Remove the deleted product from the state
      setProducts(products.filter((product) => product._id !== id));
      window.alert("Product deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error(
        "Error deleting product:",
        error.response?.data || error.message
      );
      window.alert("Error deleting the product!");
    }
  };

  const openEditModal = (product) => {
    setEditProduct({ ...product });
    setEditModalOpen(true);
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", editProduct.title);
    formData.append("price", editProduct.price);
    formData.append("size", editProduct.size);
    formData.append("color", editProduct.color);
    formData.append("category", editProduct.category);
    if (editProduct.imageFile) {
      formData.append("image", editProduct.imageFile);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/blazers/${editProduct._id}`,
        formData
      );

      if (response.data.success) {
        alert("Product updated successfully!");
        setEditModalOpen(false);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product!");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get selected file
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Generate preview URL
      setEditProduct((prev) => ({
        ...prev,
        imagePreview: previewUrl, // Show preview instantly
        imageFile: file, // Store file for upload
      }));
    }
  };

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    size: "",
    color: "",
    category: "",
    image: null, // This will hold the image file
  });

  // Open modal for adding new product
  const openAddModal = () => {
    setNewProduct({
      title: "",
      price: "",
      image: "",
      size: "M",
      color: "black",
      category: "Men",
    });
    setAddModalOpen(true);
  };
  // Handle file input change
  const addhandleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  // Handle form submission
  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("title", newProduct.title);
    formData.append("price", newProduct.price);
    formData.append("size", newProduct.size);
    formData.append("color", newProduct.color);
    formData.append("category", newProduct.category);
    if (newProduct.image) {
      formData.append("image", newProduct.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/blazers/add-blazers",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Show success alert message
      window.alert("Product added successfully!");
      setAddModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding product:", error);
      // Show error alert message
      window.alert("Error adding the product. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-6">
      <div className="container px-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Admin Dashboard - Manage blazers
        </h1>

        {/* Filters Section */}
        <div className="flex flex-wrap justify-center gap-6 p-6 mb-8 bg-white rounded-lg shadow-md">
          {/* Category Filter */}
          <div className="flex flex-col">
            <h3 className="mb-2 font-semibold text-gray-700">Category:</h3>
            <div className="flex gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="flex flex-col">
            <h3 className="mb-2 font-semibold text-gray-700">Size:</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-md transition-all ${
                    selectedSize === size
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() =>
                    setSelectedSize(selectedSize === size ? null : size)
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="flex flex-col">
            <h3 className="mb-2 font-semibold text-gray-700">Color:</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-9 h-9 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? "border-blue-600"
                      : "border-gray-400"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    setSelectedColor(selectedColor === color ? null : color)
                  }
                ></button>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="flex items-end">
            <button
              className="px-6 py-2 text-white transition-all bg-gray-600 rounded-md hover:bg-gray-700"
              onClick={() => {
                setSelectedSize(null);
                setSelectedColor(null);
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="flex justify-end mb-6">
          <button
            className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
            onClick={() => openAddModal(true)} // You can modify this to open a modal for adding a new product.
          >
            Add New Product
          </button>
        </div>
        {/* Add Product Modal */}
        {addModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-10 backdrop-blur-sm">
            <div className="z-50 w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl h-auto md:h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Add New Product
                </h2>
                <button
                  onClick={() => setAddModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-3">
                {/* Image Upload Section */}
                <div className="flex flex-col items-center col-span-1">
                  <img
                    src={
                      newProduct.image
                        ? URL.createObjectURL(newProduct.image)
                        : "https://via.placeholder.com/150"
                    }
                    alt="Product"
                    className="object-cover w-full rounded-lg shadow-md h-72"
                  />
                  <label className="px-5 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700">
                    Upload Image
                    <input
                      type="file"
                      onChange={addhandleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Product Form Fields */}
                <div className="col-span-2 space-y-6">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newProduct.title}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, title: e.target.value })
                      }
                      className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <input
                      type="text"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                      }
                      className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Size
                      </label>
                      <select
                        value={newProduct.size}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, size: e.target.value })
                        }
                        className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                      >
                        {sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Color
                      </label>
                      <select
                        value={newProduct.color}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            color: e.target.value,
                          })
                        }
                        className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                      >
                        {colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      value={newProduct.category}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          category: e.target.value,
                        })
                      }
                      className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col justify-end gap-6 mt-6 md:flex-row">
                    <button
                      className="px-5 py-3 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() => setAddModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-5 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                      onClick={handleAddProduct}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Section */}
        <div className="z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id}>
                {" "}
                {/* Use `_id` instead of `id` */}
                <div className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-xl cursor-pointer hover:scale-105">
                  <img
                    src={`http://localhost:5000${product.image}`} // No extra slash
                    alt={product.title}
                    className="object-cover w-full rounded-md h-72 sm:h-80 md:h-96"
                  />
                </div>
                <div className="w-full mt-2 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500">₹{product.price}</p>

                  <div className="flex justify-center gap-4 mt-2">
                    <button
                      onClick={() => openEditModal(product)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-800"
                    >
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
  <div className="fixed inset-0 flex items-center justify-end bg-transparent bg-opacity-50 backdrop-blur-sm">
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl h-auto md:h-[90vh] overflow-y-auto">
      {/* Modal Header */}
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-2xl font-semibold text-gray-800">
          Edit Product
        </h2>
        <button
          onClick={() => setEditModalOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-3">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center col-span-1">
          <label className="px-5 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700">
            Upload Image
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <img
            src={
              editProduct.imagePreview ||
              `http://localhost:5000${editProduct.image}`
            }
            alt="Product"
            className="object-cover w-full rounded-lg shadow-md h-72"
          />
        </div>

        {/* Form Fields */}
        <div className="col-span-2 space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={editProduct.title}
              onChange={(e) =>
                setEditProduct({ ...editProduct, title: e.target.value })
              }
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Size
              </label>
              <select
                value={editProduct.size}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, size: e.target.value })
                }
                className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Color
              </label>
              <select
                value={editProduct.color}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    color: e.target.value,
                  })
                }
                className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={editProduct.category}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  category: e.target.value,
                })
              }
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-6 mt-6">
            <button
              className="px-5 py-3 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={() => setEditModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-5 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Adminblazers;
