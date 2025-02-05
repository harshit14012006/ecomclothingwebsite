import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import heroImage from "../images/heroImage.jpg";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000); // Change the slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, [currentIndex]); // Re-run the effect if currentIndex changes

  const cards = [
    {
      title: "Formal Shirt",
      price: "$40",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Formal+Shirt",
    },
    {
      title: "Casual T-Shirt",
      price: "$25",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Casual+T-Shirt",
    },
    {
      title: "Denim Jacket",
      price: "$60",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Denim+Jacket",
    },
    {
      title: "Chinos",
      price: "$35",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Chinos",
    },
    {
      title: "Leather Jacket",
      price: "$120",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Leather+Jacket",
    },
    {
      title: "Blazer",
      price: "$80",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Blazer",
    },
    {
      title: "Hoodie",
      price: "$50",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Hoodie",
    },
    {
      title: "Sneakers",
      price: "$75",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Sneakers",
    },
    {
      title: "Cargo Pants",
      price: "$40",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Cargo+Pants",
    },
    {
      title: "Running Shoes",
      price: "$55",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Running+Shoes",
    },
    {
      title: "Winter Coat",
      price: "$150",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Winter+Coat",
    },
  ];

  const categoriesShowcase = [
    { name: "T-Shirts", image: "/images/tshirt.jpg" },
    { name: "Shirts", image: "/images/shirt.jpg" },
    { name: "Hoodies", image: "/images/hoodie.jpg" },
    { name: "Sweaters", image: "/images/sweater.jpg" },
    { name: "Jackets", image: "/images/jacket.jpg" },
    { name: "Blazers", image: "/images/blazer.jpg" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Image for visibility (optional, only use if you want to ensure it's visible) */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 object-cover w-full h-full opacity-40" // Ensures the image fits properly with some opacity for readability
        />

        {/* Gradient Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl px-6 mx-auto text-center text-white md:px-10 lg:px-12">
          {/* Heading with Typing Animation */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-shadow-md animate-fade-in">
            <ReactTyped
              strings={[
                'Discover the Latest in <span class="text-pink-500">Fashion</span>',
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              startDelay={500}
              showCursor={false}
              loop
              renderText={(strings, index) => (
                <span dangerouslySetInnerHTML={{ __html: strings[index] }} />
              )}
            />
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg font-medium leading-relaxed sm:text-xl md:text-2xl lg:text-3xl opacity-90">
            Explore our exclusive collections, trendy designs, and seasonal
            favorites. Elevate your wardrobe with the best in fashion.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="/shop"
            className="inline-block px-12 py-4 text-xl font-semibold text-white transition-all duration-300 bg-teal-600 rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Ui to show sample clothes */}
      <div className="relative w-full px-4 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        {/* Tagline with color change */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">
            Style That Speaks – Find Your Perfect Look Today!
          </h2>
        </div>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / cards.length) * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-2 py-6 text-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <div className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-64 rounded-md sm:h-72 md:h-80 lg:h-96"
                />
              </div>
              {/* Title and Price beneath each card */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  {card.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition-colors duration-200 transform -translate-y-1/2 bg-gray-700 rounded-full left-4 sm:left-6 top-1/2 sm:w-12 sm:h-12 hover:bg-gray-600"
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition-colors duration-200 transform -translate-y-1/2 bg-gray-700 rounded-full right-4 sm:right-6 top-1/2 sm:w-12 sm:h-12 hover:bg-gray-600"
        >
          ❯
        </button>
      </div>

      {/* Marquee Section for showcase */}
      <div>
        <div className="py-6 text-white bg-teal-800">
          <div className="overflow-hidden">
            <div className="flex items-center justify-center space-x-12 whitespace-nowrap animate-marquee">
              <div className="px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-lg hover:bg-gray-700">
                🎽 Stylish T-Shirts - Perfect for Every Occasion!
              </div>
              <div className="px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-lg hover:bg-gray-700">
                👕 Elegant Shirts - Formal and Casual Styles!
              </div>
              <div className="px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-lg hover:bg-gray-700">
                🧥 Cozy Hoodies - Stay Warm in Style!
              </div>
              <div className="px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-lg hover:bg-gray-700">
                🧣 Comfortable Sweaters - Ideal for Chilly Days!
              </div>
              <div className="px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-lg hover:bg-gray-700">
                🧥 Trendy Jackets - A Must-Have for Your Wardrobe!
              </div>
              <div className="px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-lg hover:bg-gray-700">
                👔 Sharp Blazers - Add a Touch of Class to Your Look!
              </div>
            </div>
          </div>
        </div>

        {/* Adding the custom Tailwind CSS animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </div>

      {/* Shop by Category Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-6 mx-auto">
          <h2 className="mb-10 text-4xl font-extrabold text-center text-indigo-600">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoriesShowcase.map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-transform duration-300 shadow-lg rounded-xl group hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-64 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <button className="px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative w-full px-6 py-20 text-white bg-gradient-to-r from-blue-500 to-teal-500">
      {/* Background image (Optional) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://via.placeholder.com/1600x600/000000/FFFFFF?text=Big+Sale"
          alt="Background Image"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      <div className="relative z-10 text-center">
        <h2 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Big Sale - Up to 50% Off!
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Don't miss out on amazing deals for your favorite products.
          Grab them before they're gone!
        </p>

        {/* CTA Button */}
        <a
          href="/shop-now"
          className="inline-block px-8 py-4 text-xl font-semibold text-gray-800 transition-all bg-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white"
        >
          Shop Now
        </a>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
