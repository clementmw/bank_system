import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h5 className="text-lg font-bold mb-2">Evergreen Bank</h5>
            <p className="text-gray-400">
              Providing reliable banking services since 2001.
            </p>
            <p className="text-gray-400 mt-4">
              123 Bank Street, Suite 100<br />
              evergreenbank7@gmail.com<br />
              Phone: 1-800-123-4567
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul className="text-gray-400">
              <li className="mt-2">
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li className="mt-2">
                <a href="/services" className="hover:text-white">Services</a>
              </li>
              <li className="mt-2">
                <a href="/contact" className="hover:text-white">Contact Us</a>
              </li>
              <li className="mt-2">
                <a href="/FrequentQA" className="hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h5 className="text-lg font-bold mb-2">Resources</h5>
            <ul className="text-gray-400">
              <li className="mt-2">
                <a href="/blog" className="hover:text-white">Blog</a>
              </li>
              <li className="mt-2">
                <a href="/rates" className="hover:text-white">Rates</a>
              </li>
              <li className="mt-2">
                <a href="/locations" className="hover:text-white">Locations</a>
              </li>
              <li className="mt-2">
                <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Evergreen Bank. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
