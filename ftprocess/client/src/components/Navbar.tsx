import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from '../assets/ft-process-logo.png';

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  // Check if user is logged in and get profile image
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const userData = JSON.parse(user);
      setCurrentUser(userData);
      setProfileImage(userData.profileImage || null);
    } else {
      setCurrentUser(null);
      setProfileImage(null);
    }
  }, [location.pathname]);

  // Listen for profile image updates
  useEffect(() => {
    const handleStorageChange = () => {
      const user = localStorage.getItem("currentUser");
      if (user) {
        const userData = JSON.parse(user);
        setCurrentUser(userData);
        setProfileImage(userData.profileImage || null);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setProfileImage(null);
    setUserDropdownOpen(false);
    navigate("/");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-dropdown')) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const categoryItems = [
    { name: "Centrifugal Pumps", path: "/category/centrifugal" },
    { name: "Diaphragm Pumps", path: "/category/diaphragm" },
    { name: "High Pressure Pumps", path: "/category/high-pressure" },
    { name: "Submersible Pumps", path: "/category/submersible" },
    { name: "Gear Pumps", path: "/category/gear" },
    { name: "Vacuum Pumps", path: "/category/vacuum" },
    { name: "Industrial Systems", path: "/category/systems" },
    { name: "Magnetic Drive Pumps", path: "/category/magnetic-drive" },
    { name: "Peristaltic Pumps", path: "/category/peristaltic" },
    { name: "Dosing Pumps", path: "/category/dosing" }
  ];

  // Get initials for avatar fallback
  const getInitials = () => {
    if (!currentUser?.fullName) return "U";
    return currentUser.fullName
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-18 md:h-18 object-contain" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            <li className="relative group">
              <Link
                to="/"
                className={`px-4 py-2 text-gray-700 font-semibold text-sm lg:text-base transition-all duration-200 block relative overflow-hidden ${
                  location.pathname === "/" ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-orange-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                location.pathname === "/" ? "w-full left-0" : ""
              }`}></span>
            </li>

            <li className="relative group">
              <Link
                to="/about"
                className={`px-4 py-2 text-gray-700 font-semibold text-sm lg:text-base transition-all duration-200 block relative overflow-hidden ${
                  location.pathname === "/about" ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 bg-orange-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                location.pathname === "/about" ? "w-full left-0" : ""
              }`}></span>
            </li>

            {/* CATEGORY DROPDOWN */}
            <li className="relative group">
              <button className="px-4 py-2 text-gray-700 font-semibold text-sm lg:text-base hover:text-orange-500 transition-colors duration-200 flex items-center gap-1 group">
                Category
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-2">
                    <div className="px-4 py-3 bg-gradient-to-r from-orange-50 to-transparent border-b border-orange-100">
                      <h3 className="text-sm font-bold text-orange-600">Pump Categories</h3>
                      <p className="text-xs text-gray-500">Browse our industrial range</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {categoryItems.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="flex items-center gap-2 px-3 py-2.5 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                        >
                          <span className="text-sm font-medium">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 p-2">
                      <Link
                        to="/category/all"
                        className="flex items-center justify-between px-3 py-2 text-orange-500 font-semibold text-sm hover:bg-orange-50 rounded-lg transition-colors"
                      >
                        <span>View All Categories</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative group">
              <Link
                to="/products"
                className={`px-4 py-2 text-gray-700 font-semibold text-sm lg:text-base transition-all duration-200 block relative overflow-hidden ${
                  location.pathname === "/products" ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                <span className="relative z-10">Products</span>
                <span className="absolute inset-0 bg-orange-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                location.pathname === "/products" ? "w-full left-0" : ""
              }`}></span>
            </li>

            <li className="relative group">
              <Link
                to="/services"
                className={`px-4 py-2 text-gray-700 font-semibold text-sm lg:text-base transition-all duration-200 block relative overflow-hidden ${
                  location.pathname === "/services" ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                <span className="relative z-10">Services</span>
                <span className="absolute inset-0 bg-orange-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                location.pathname === "/services" ? "w-full left-0" : ""
              }`}></span>
            </li>

            <li className="relative group">
              <Link
                to="/contact"
                className={`px-4 py-2 text-gray-700 font-semibold text-sm lg:text-base transition-all duration-200 block relative overflow-hidden ${
                  location.pathname === "/contact" ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-orange-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                location.pathname === "/contact" ? "w-full left-0" : ""
              }`}></span>
            </li>
          </ul>

          {/* RIGHT SIDE - Search, User, Cart */}
          <div className="flex items-center gap-2 md:gap-3">
            
            {/* SEARCH BUTTON */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-200 relative group"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <div
                className={`absolute right-0 top-12 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden transition-all duration-300 z-50 ${
                  searchOpen ? "w-80 opacity-100 visible" : "w-0 opacity-0 invisible"
                }`}
              >
                <div className="flex items-center p-2">
                  <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search industrial pumps..."
                    className="w-full outline-none px-3 py-2 text-sm text-gray-700"
                    autoFocus={searchOpen}
                  />
                  <button className="px-3 py-1 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors text-sm font-medium">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* USER DROPDOWN - WITH PROFILE IMAGE */}
            {currentUser ? (
              <div className="relative user-dropdown">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-200"
                >
                  {/* Profile Image or Initials */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold overflow-hidden">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      getInitials()
                    )}
                  </div>
                  <span className="hidden lg:block text-sm font-semibold">
                    {currentUser.fullName?.split(" ")[0]}
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${userDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="py-2">
                      {/* User Info with Image */}
                      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold overflow-hidden">
                          {profileImage ? (
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            getInitials()
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{currentUser.fullName}</p>
                          <p className="text-xs text-gray-500">{currentUser.email}</p>
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <Link
                        to="/profile"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <span className="text-xl">👤</span>
                        <span className="text-sm font-medium">My Profile</span>
                      </Link>
                      
                      <Link
                        to="/profile?tab=orders"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <span className="text-xl">📦</span>
                        <span className="text-sm font-medium">My Orders</span>
                      </Link>
                      
                      <Link
                        to="/wishlist"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <span className="text-xl">❤️</span>
                        <span className="text-sm font-medium">Wishlist</span>
                      </Link>
                      
                      <hr className="my-1 border-gray-100" />
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                      >
                        <span className="text-xl">🚪</span>
                        <span className="text-sm font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex items-center px-4 py-1.5 border-2 border-orange-500 text-orange-500 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Login
              </Link>
            )}

            {/* CART BUTTON */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-200 group"
              aria-label="Cart"
              id="cartIcon"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center shadow-lg animate-pulse-slow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link
            to="/"
            className="block px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <Link
            to="/about"
            className="block px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Category Dropdown */}
          <div className="mt-1">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
            >
              <span>Category</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${categoryOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${categoryOpen ? "max-h-[600px]" : "max-h-0"}`}>
              <div className="pl-6 pr-2 py-2 space-y-1">
                {categoryItems.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-3 py-2.5 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/category/all"
                  className="block px-3 py-2.5 text-sm text-orange-500 font-semibold hover:bg-orange-50 rounded-lg transition-colors mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Categories
                </Link>
              </div>
            </div>
          </div>
          
          <Link
            to="/products"
            className="block px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          
          <Link
            to="/services"
            className="block px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          
          <Link
            to="/contact"
            className="block px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-3 mt-2 border-t border-gray-100">
            {currentUser ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold overflow-hidden">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      getInitials()
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{currentUser.fullName}</p>
                    <p className="text-xs text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>👤</span> My Profile
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>❤️</span> Wishlist
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-red-600 font-semibold hover:bg-red-50 rounded-xl transition-all duration-200"
                >
                  <span>🚪</span> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center justify-center px-4 py-3 text-orange-500 font-semibold border-2 border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;