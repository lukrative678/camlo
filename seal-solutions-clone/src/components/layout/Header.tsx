import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-header">
        <div className="container-custom flex justify-end items-center space-x-2">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>08 6350 1755</span>
          </div>
          <div className="mx-1">|</div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:sales@sealsolutionsaustralia.com.au" className="hover:underline">
              sales@sealsolutionsaustralia.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <div className="logo mb-4 md:mb-0">
            <Link to="/">
              <img
                src="https://ext.same-assets.com/855002558/2043439688.png"
                alt="Seal Solutions Australia"
                className="h-16"
              />
            </Link>
          </div>
          <div className="address flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Unit 1,12 Kewdale Road, Welshpool WA 6106</span>
          </div>
          <div className="social-icons hidden md:flex space-x-2">
            <a href="https://plus.google.com/110318272823409460876/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">G</span>
            </a>
            <a href="https://in.pinterest.com/terrynicolaou9/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">P</span>
            </a>
            <a href="http://au.linkedin.com/pub/terry-nicolaou/55/689/311/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container-custom">
          <ul className="flex flex-wrap justify-center md:justify-start">
            <li className="nav-item">
              <Link to="/" className="block px-4 py-3 hover:bg-primary transition-colors">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="block px-4 py-3 hover:bg-primary transition-colors">ABOUT US</Link>
            </li>
            <li className="nav-item relative group">
              <Link to="/products" className="block px-4 py-3 hover:bg-primary transition-colors">PRODUCTS</Link>
              <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg z-10 hidden group-hover:block">
                <Link to="/product-category/hydraulic-pneumatic-seals" className="block px-4 py-2 text-secondary hover:bg-gray-100">Hydraulic & Pneumatic Seals</Link>
                <Link to="/product-category/seal-kits" className="block px-4 py-2 text-secondary hover:bg-gray-100">Seal Kits & Floating Seals</Link>
                <Link to="/product-category/sealing-products" className="block px-4 py-2 text-secondary hover:bg-gray-100">Sealing and Wear Products</Link>
                <Link to="/product-category/wheel-chocks" className="block px-4 py-2 text-secondary hover:bg-gray-100">Wheel Chocks</Link>
                <Link to="/product-category/hydraulics" className="block px-4 py-2 text-secondary hover:bg-gray-100">Hydraulics & Cylinders</Link>
                <Link to="/product-category/silicone-grease" className="block px-4 py-2 text-secondary hover:bg-gray-100">Silicone Grease / Tools</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/services" className="block px-4 py-3 hover:bg-primary transition-colors">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link to="/downloads" className="block px-4 py-3 hover:bg-primary transition-colors">DOWNLOADS</Link>
            </li>
            <li className="nav-item">
              <Link to="/newsletter" className="block px-4 py-3 hover:bg-primary transition-colors">NEWSLETTER</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="block px-4 py-3 hover:bg-primary transition-colors">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Trading Hours */}
      <div className="hidden md:block bg-secondary text-white border-t border-gray-700">
        <div className="container-custom flex justify-end py-1">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Trading Hours: 8.00am - 5.00pm</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
