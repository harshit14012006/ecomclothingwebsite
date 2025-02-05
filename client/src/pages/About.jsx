import React from "react";
import { Link } from "react-router-dom";
import aboutUsImg from "../images/aboutusimg.png";
import {ReactTyped} from "react-typed";
const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src={aboutUsImg}
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            <ReactTyped
              strings={[
                "About Trendy Apparel",
                "Discover Fashion",
                "Style Meets Comfort",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
              showCursor={false}
            />
          </h1>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            Discover the story, vision, and values that make Trendy Apparel the
            go-to place for fashionable clothing.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Explore Our Story
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-full transition duration-300">
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Trendy Apparel, we believe that everyone deserves to feel confident
          and stylish. Our mission is to provide high-quality, affordable
          clothing that’s both fashionable and comfortable. We are committed to
          creating styles that empower individuals to express themselves boldly.
        </p>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We prioritize quality, integrity, and innovation in everything we
            do.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Quality
            </h3>
            <p className="text-gray-600">
              We source only the finest materials to craft clothes that stand
              the test of time.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Integrity
            </h3>
            <p className="text-gray-600">
              We believe in ethical business practices and transparency with our
              customers.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Innovation
            </h3>
            <p className="text-gray-600">
              Our team continually pushes the boundaries of fashion to bring you
              the latest trends.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Our dedicated team of fashion experts, designers, and customer service
          representatives work tirelessly to bring you the best shopping
          experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Sarah Lee</h3>
            <p className="text-gray-500">Lead Designer</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Emily White</h3>
            <p className="text-gray-500">Customer Support</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join the Trend!</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Ready to upgrade your wardrobe? Check out our latest collections and
          see what’s new at Trendy Apparel!
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-4 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-full shadow-lg transform transition duration-300 ease-out hover:bg-yellow-400 hover:scale-105 hover:shadow-xl"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
