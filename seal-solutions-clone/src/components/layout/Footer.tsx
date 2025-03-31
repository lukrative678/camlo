import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-3 mb-4">
              <a href="https://plus.google.com/110318272823409460876/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <span>G</span>
              </a>
              <a href="https://in.pinterest.com/terrynicolaou9/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <span>P</span>
              </a>
              <a href="http://au.linkedin.com/pub/terry-nicolaou/55/689/311/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <span>in</span>
              </a>
            </div>
            <div className="text-gray-300">
              <p className="font-bold text-white mb-1">Seal Solutions Australia</p>
              <p className="mb-1">Unit 1,12 Kewdale Road, Welshpool WA 6106</p>
              <p className="mb-1">
                Mail: <a href="mailto:sales@sealsolutionsaustralia.com.au" className="hover:text-primary transition-colors">sales@sealsolutionsaustralia.com.au</a>
              </p>
              <p>Phone: 08 6350 1755</p>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Your Name:</label>
                <input type="text" id="name" className="form-input" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Your Email:</label>
                <input type="email" id="email" className="form-input" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-1">Your Message:</label>
                <textarea id="message" rows={4} className="form-input"></textarea>
              </div>
              <div className="flex items-end gap-2">
                <div>
                  <label htmlFor="captcha" className="block text-sm mb-1">Security Code:</label>
                  <img src="https://ext.same-assets.com/855002558/3320788979.html" alt="Security Code" className="h-8" />
                </div>
                <input type="text" id="captcha" className="form-input h-10 w-28" />
                <button type="submit" className="bg-white text-secondary font-semibold px-6 py-2 rounded hover:bg-gray-200 transition-colors">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-4 bg-accent">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center md:justify-between text-xs">
            <div className="flex flex-wrap justify-center space-x-2 mb-2 md:mb-0">
              <Link to="/" className="hover:underline">Home</Link>
              <span>|</span>
              <Link to="/about-us" className="hover:underline">About Us</Link>
              <span>|</span>
              <Link to="/products" className="hover:underline">Products</Link>
              <span>|</span>
              <Link to="/services" className="hover:underline">Services</Link>
              <span>|</span>
              <Link to="/downloads" className="hover:underline">Downloads</Link>
              <span>|</span>
              <Link to="/contact-us" className="hover:underline">Contact Us</Link>
              <span>|</span>
              <Link to="/application-for-credit-account" className="hover:underline">Application for Credit Account</Link>
              <span>|</span>
              <Link to="/sitemap" className="hover:underline">Sitemap</Link>
            </div>
            <div className="text-center md:text-right">
              Copyright © 2025 - <Link to="/" className="hover:underline">Seal Solutions Australia PTY LTD</Link> - All Rights Reserved.
              <div>
                <a href="http://tis-ites.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Creative Websites</a> by <a href="http://www.tis-ites.com/web-development.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Target Internet Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="fixed bottom-4 right-4">
        <a href="#top" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
