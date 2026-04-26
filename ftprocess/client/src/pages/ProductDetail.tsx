// src/pages/ProductDetail.tsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext"; // ✅ Import useCart

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // ✅ Get addToCart function
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showFullDescription, setShowFullDescription] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="bg-blue-600 text-white px-4 py-2 rounded">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Long description
  const fullDescription = `${product.description} 

This industrial pump is engineered for maximum efficiency and durability in demanding environments. The high-quality construction ensures long-lasting performance with minimal maintenance requirements.

Key Technical Highlights:
• Advanced hydraulic design for optimal flow rates
• Precision-balanced impeller for vibration-free operation
• High-grade mechanical seals for leak-proof performance
• Thermal overload protection for motor safety
• IP55 rated for dust and water resistance

Applications:
• Industrial water supply systems
• Irrigation and agriculture
• HVAC systems
• Pressure boosting stations
• Fire fighting systems

Installation & Maintenance:
The pump comes with a detailed installation manual. Regular maintenance includes checking seals, lubricating bearings, and cleaning the impeller. Our technical support team is available 24/7 for assistance.

Why Choose This Pump?
✓ 10+ years of industry experience
✓ ISO 9001:2015 certified manufacturing
✓ Spare parts available nationwide
✓ On-site installation support
✓ Extended warranty options available`;

  // Get related products
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const displayRelatedProducts = relatedProducts.length > 0 
    ? relatedProducts 
    : products.filter(p => p.id !== product.id).slice(0, 4);

  // ✅ Updated handleAddToCart with Context
  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      alert("Please select a size/model");
      return;
    }
    addToCart(product, quantity, selectedSize);
    alert(`✅ Added ${quantity} x ${product.name} to cart!`);
  };

  const handleInquiry = () => {
    alert(`Inquiry sent for ${product.name}\nWe will contact you soon.`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleThumbnailClick = (index: number) => {
    setMainImage(index);
  };

  const shortDescription = fullDescription.slice(0, 200);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Product Main Card */}
        <div className="rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT SIDE - IMAGES */}
            <div className="bg-transparent">
              <div className="flex gap-3">
                
                {/* Small Thumbnails - Vertical */}
                <div className="flex flex-col gap-2 w-16">
                  {product.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleThumbnailClick(idx)}
                      onMouseEnter={() => handleThumbnailClick(idx)}
                      className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${
                        mainImage === idx
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`View ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Main Big Image */}
                <div className="flex-1">
                  <div 
                    className="relative overflow-hidden cursor-zoom-in bg-transparent"
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                    onMouseMove={handleMouseMove}
                  >
                    <img
                      src={product.images[mainImage]}
                      alt={product.name}
                      className="w-full h-auto object-contain transition-transform duration-200"
                      style={{
                        transform: isZoomed ? 'scale(2)' : 'scale(1)',
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                      }}
                    />
                    
                    {isZoomed && (
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                        🔍 Zoom
                      </div>
                    )}
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2">
                    {mainImage + 1} / {product.images.length}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - PRODUCT INFO */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.inStock ? (
                  <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    ✓ In Stock
                  </span>
                ) : (
                  <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>
              
              {/* Product Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400 text-lg">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-gray-600 font-semibold ml-1">{product.rating}</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 text-sm">128 reviews</span>
              </div>
              
              {/* Price Section */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                {product.originalPrice ? (
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                    <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                      SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </div>
                ) : (
                  <span className="text-4xl font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                )}
                <p className="text-gray-500 text-sm mt-1">Inclusive of all taxes • Free Shipping</p>
              </div>
              
              {/* LONG DESCRIPTION */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Description</h3>
                <div className="text-gray-600 leading-relaxed">
                  {showFullDescription ? (
                    <div>
                      <p className="whitespace-pre-line">{fullDescription}</p>
                      <button
                        onClick={() => setShowFullDescription(false)}
                        className="text-blue-600 hover:text-blue-800 font-semibold mt-2"
                      >
                        Show Less ▲
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p>{shortDescription}...</p>
                      <button
                        onClick={() => setShowFullDescription(true)}
                        className="text-blue-600 hover:text-blue-800 font-semibold mt-2"
                      >
                        Read More ▼
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Key Features */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-600">✓ High Efficiency Motor</li>
                  <li className="flex items-center gap-2 text-gray-600">✓ Corrosion Resistant</li>
                  <li className="flex items-center gap-2 text-gray-600">✓ 2 Year Warranty</li>
                  <li className="flex items-center gap-2 text-gray-600">✓ Easy Installation</li>
                  <li className="flex items-center gap-2 text-gray-600">✓ Energy Saving</li>
                  <li className="flex items-center gap-2 text-gray-600">✓ Low Maintenance</li>
                </ul>
              </div>
              
              {/* Size/Variant Selection */}
              {product.sizes.length > 0 && (
                <div className="mb-4">
                  <label className="block text-gray-800 font-semibold mb-2">Select Model / Size</label>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2 rounded-lg font-medium transition-all ${
                          selectedSize === size
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity Selector */}
              <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="w-16 text-center text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">Available: 50+ units</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                    product.inStock
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  🛒 Add to Cart
                </button>
                <button
                  onClick={handleInquiry}
                  className="flex-1 py-3 rounded-xl font-semibold text-lg bg-orange-600 text-white hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
                >
                  📞 Get Quote
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">🚚</span>
                    <span className="text-gray-500 text-xs">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">🔄</span>
                    <span className="text-gray-500 text-xs">7-Day Returns</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">🛡️</span>
                    <span className="text-gray-500 text-xs">2 Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        {displayRelatedProducts.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded"></span>
                You May Also Like
              </h2>
              <Link to="/products" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                View All Products →
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayRelatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`} 
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-40 bg-gray-50">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    {relatedProduct.originalPrice && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {Math.round(((relatedProduct.originalPrice - relatedProduct.price) / relatedProduct.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-500 mb-1">{relatedProduct.category}</p>
                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-1 mb-1">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-yellow-400 text-xs">
                        {"★".repeat(Math.floor(relatedProduct.rating))}
                        {"☆".repeat(5 - Math.floor(relatedProduct.rating))}
                      </div>
                      <span className="text-xs text-gray-500">({relatedProduct.rating})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-green-600 font-bold">₹{relatedProduct.price.toLocaleString()}</p>
                      {relatedProduct.originalPrice && (
                        <p className="text-gray-400 text-xs line-through">₹{relatedProduct.originalPrice.toLocaleString()}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}