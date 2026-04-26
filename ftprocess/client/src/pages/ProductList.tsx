// src/pages/ProductList.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [selectedRating, setSelectedRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get unique categories with counts
  const categories = ["all", ...new Set(products.map(p => p.category))];
  const getCategoryCount = (category: string) => {
    if (category === "all") return products.filter(p => p.inStock).length;
    return products.filter(p => p.category === category && p.inStock).length;
  };

  // Filter products
  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesRating = product.rating >= selectedRating;
    const inStock = product.inStock;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating && inStock;
  });

  // Sorting
  switch(sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filteredProducts.sort((a, b) => a.id - b.id);
  }

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedRating(0);
    setSortBy("default");
    setPriceRange({ min: 0, max: 50000 });
  };

  const isFilterActive = searchTerm !== "" || selectedCategory !== "all" || selectedRating > 0 || sortBy !== "default" || priceRange.max !== 50000;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Industrial Header */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold tracking-tight">Industrial Products</h1>
          <p className="text-gray-400 text-sm mt-1">Premium quality industrial equipment & supplies</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white border border-gray-300 rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2"
          >
            🔧 Filters {isFilterActive && "(Active)"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          
          {/* Sidebar - Industrial Style */}
          <div className={`
            ${showFilters || !isMobile ? 'block' : 'hidden'} 
            md:block md:w-64 flex-shrink-0
          `}>
            <div className="bg-white border border-gray-200 rounded-lg sticky top-20">
              
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-800">Filters</h3>
                  {isFilterActive && (
                    <button onClick={clearAllFilters} className="text-xs text-red-600 hover:text-red-700">
                      Clear all
                    </button>
                  )}
                </div>
              </div>

              <div className="p-4 space-y-5">
                
                {/* Search */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Search</label>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat === "all" ? "All Categories" : cat} ({getCategoryCount(cat)})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Max Price</label>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs mt-1">
                    <span>₹0</span>
                    <span className="font-bold">₹{priceRange.max.toLocaleString()}</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Min Rating</label>
                  <div className="space-y-1">
                    {[4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                          className="w-3.5 h-3.5"
                        />
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-xs ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                          <span className="text-xs ml-1">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            
            {/* Header Bar */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-800">{filteredProducts.length}</span> products found
                </p>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="default">Sort: Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid - Small Cards */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">🔧</div>
                <p className="text-gray-500">No products found</p>
                <button onClick={clearAllFilters} className="mt-3 text-blue-600 text-sm hover:underline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}