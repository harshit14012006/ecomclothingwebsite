import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Trendy Apparel</h3>
          <p className="text-sm text-gray-300">
            Discover the latest trends in fashion. We offer high-quality and stylish apparel for everyone.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-gray-100 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-100 transition">Contact</a></li>
            <li><a href="/privacy" className="hover:text-gray-100 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-100 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition duration-200">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-white transition duration-200">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-white transition duration-200">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-white transition duration-200">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-gray-300 mb-3">
            Get updates on new arrivals, special offers, and more.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-700 bg-gray-800 rounded-l-lg py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-500 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trendy Apparel. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1280px;
          margin: 0 auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
