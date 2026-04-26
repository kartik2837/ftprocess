// src/pages/Cart.tsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    getCartSubtotal,
    getCartGST,
    getCartShipping,
    getCartGrandTotal
  } = useCart();

  const subtotal = getCartSubtotal();
  const gst = getCartGST();
  const shipping = getCartShipping();
  const grandTotal = getCartGrandTotal();

  // Empty Cart View
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center transform transition-all">
            {/* Animated Empty Cart Icon */}
            <div className="relative inline-block">
              <div className="text-8xl mb-4 animate-bounce">🛒</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">Looks like you haven't added any industrial pumps yet.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              <span>🛍️</span>
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Page Header with Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Shopping Cart</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
              <p className="text-gray-500 mt-1">{cartItems.length} items in your cart</p>
            </div>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
              <span>←</span> Continue Shopping
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ========== LEFT SIDE - CART ITEMS ========== */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              
              {/* Professional Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-800 text-white px-6 py-4 text-sm font-semibold">
                <div className="col-span-6">Product Details</div>
                <div className="col-span-2 text-center">Unit Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-100">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="group hover:bg-gray-50 transition-all duration-300">
                    <div className="px-4 md:px-6 py-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        
                        {/* Product Info with Image */}
                        <div className="md:col-span-6">
                          <div className="flex gap-4">
                            {/* Product Image with Badge */}
                            <div className="relative">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-xl bg-gray-100 shadow-md group-hover:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {index + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                {item.size ? `Model: ${item.size}` : "Industrial Grade"}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {item.category || "Pump"}
                                </span>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 text-xs hover:text-red-700 transition flex items-center gap-1"
                                >
                                  <span>🗑️</span> Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Unit Price */}
                        <div className="md:col-span-2">
                          <div className="text-center">
                            <span className="text-gray-800 font-semibold">₹{item.price.toLocaleString()}</span>
                            <p className="text-xs text-gray-400">per unit</p>
                          </div>
                        </div>

                        {/* Quantity Selector - Professional */}
                        <div className="md:col-span-2">
                          <div className="flex items-center justify-center">
                            <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-9 h-9 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
                              >
                                −
                              </button>
                              <span className="w-14 text-center font-semibold text-gray-800">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-9 h-9 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Total Price */}
                        <div className="md:col-span-2">
                          <div className="text-right md:text-left">
                            <span className="text-xl font-bold text-green-600">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-4 md:px-6 py-4 bg-gray-50 flex justify-between items-center border-t border-gray-200">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 font-medium flex items-center gap-2 transition-colors"
                >
                  <span>🗑️</span> Clear Cart
                </button>
                <div className="flex gap-3">
                  <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                    <span>+</span> Add More Items
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🔒</span>
                <p className="text-xs text-gray-600 mt-1">Secure Payment</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🚚</span>
                <p className="text-xs text-gray-600 mt-1">Free Shipping*</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <span className="text-2xl block">🔄</span>
                <p className="text-xs text-gray-600 mt-1">7-Day Returns</p>
              </div>
            </div>
          </div>

          {/* ========== RIGHT SIDE - ORDER SUMMARY ========== */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-20">
              
              {/* Summary Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>📊</span> Order Summary
                </h2>
              </div>

              <div className="p-6">
                {/* Price Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 font-semibold">Free</span>
                      ) : (
                        <span className="font-semibold">₹{shipping.toLocaleString()}</span>
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>GST (18%)</span>
                    <span className="font-semibold">₹{Math.round(gst).toLocaleString()}</span>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-200 my-3"></div>
                  
                  {/* Total */}
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-gray-800">Total Amount</span>
                    <span className="text-green-600">₹{Math.round(grandTotal).toLocaleString()}</span>
                  </div>
                  
                  {/* Savings Note */}
                  {shipping === 0 && subtotal >= 50000 && (
                    <div className="bg-green-50 rounded-lg p-2 text-center">
                      <p className="text-green-600 text-sm font-medium">✨ You saved ₹499 on shipping!</p>
                    </div>
                  )}
                </div>

                {/* Promo Code Section */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Have a promo code?
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link to="/checkout">
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl mt-6 font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <span>✓</span> Proceed to Checkout
                  </button>
                </Link>

                {/* Payment Methods Icons */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center mb-3">Secure & Trusted Payment</p>
                  <div className="flex justify-center gap-4 text-2xl">
                    <span className="hover:scale-110 transition-transform cursor-pointer">💳</span>
                    <span className="hover:scale-110 transition-transform cursor-pointer">📱</span>
                    <span className="hover:scale-110 transition-transform cursor-pointer">🏦</span>
                    <span className="hover:scale-110 transition-transform cursor-pointer">💵</span>
                    <span className="hover:scale-110 transition-transform cursor-pointer">🪙</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-4 text-center text-xs text-gray-400 space-y-1">
                  <p>✅ Free Shipping on orders above ₹50,000</p>
                  <p>✅ 24/7 Customer Support</p>
                  <p>✅ 2 Year Warranty on all pumps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}