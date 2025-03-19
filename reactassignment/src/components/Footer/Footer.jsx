import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">FickleFlight</h2>
            <p className="mt-2 text-sm">
              Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. We also have all your flight needs in your online shop.
            </p>
            <div className="flex mt-4 space-x-3">
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
            </div>
          </div>
          
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>About Us</li>
              <li>News</li>
              <li>Careers</li>
              <li>How we work</li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Account</li>
              <li>Support Center</li>
              <li>FAQ</li>
              <li>Accessibility</li>
            </ul>
          </div>
  
          {/* More Section */}
          <div>
            <h3 className="text-lg font-semibold">More</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Covid Advisory</li>
              <li>Airline Fees</li>
              <li>Tips</li>
              <li>Quarantine Rules</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };

export default Footer