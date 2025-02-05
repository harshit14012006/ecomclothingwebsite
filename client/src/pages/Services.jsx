// Services.jsx
import React from "react";

function Services() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Title Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore the services we offer to make your shopping experience seamless and enjoyable.
        </p>
      </section>

      {/* Services List */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - Clothing Categories */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-tshirt text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Clothing Categories</h3>
            <p className="text-gray-600 mb-4">
              Browse our wide selection of clothing, including dresses, tops, skirts, pants, and more.
            </p>
            <a
              href="/shop"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Explore Categories
            </a>
          </div>

          {/* Service 2 - Fast Delivery */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-truck text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 mb-4">
              Enjoy fast and reliable delivery to your doorstep, so you can start wearing your new clothes in no time!
            </p>
            <a
              href="/delivery-info"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Service 3 - Customization */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-paint-brush text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Customization</h3>
            <p className="text-gray-600 mb-4">
              Get your favorite outfits customized with prints, embroidery, or sizing to fit your style perfectly.
            </p>
            <a
              href="/customization"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Start Customizing
            </a>
          </div>

          {/* Service 4 - Easy Returns */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-undo text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Easy Returns</h3>
            <p className="text-gray-600 mb-4">
              If you're not satisfied with your purchase, our easy returns process allows you to return items with no hassle.
            </p>
            <a
              href="/returns"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More
            </a>
          </div>

          {/* Service 5 - Customer Support */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-headset text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Customer Support</h3>
            <p className="text-gray-600 mb-4">
              Our dedicated customer support team is available 24/7 to assist with any questions or concerns.
            </p>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact Support
            </a>
          </div>

          {/* Service 6 - Secure Payments */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-credit-card text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Secure Payments</h3>
            <p className="text-gray-600 mb-4">
              Shop with confidence with our secure payment options that protect your data and financial details.
            </p>
            <a
              href="/payment-info"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
