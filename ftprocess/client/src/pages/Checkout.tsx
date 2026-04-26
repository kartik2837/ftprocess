// src/pages/Checkout.tsx
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartSubtotal, getCartGST, getCartShipping, getCartGrandTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod"
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartSubtotal();
  const gst = getCartGST();
  const shipping = getCartShipping();
  const total = getCartGrandTotal();

  // If cart is empty, redirect to products
  if (cartItems.length === 0) {
    return <Navigate to="/order-success" replace />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const orderId = "ORD" + Date.now() + Math.floor(Math.random() * 1000);
    const orderDetails = {
      ...formData,
      total: total,
      items: cartItems,
      orderDate: new Date().toISOString(),
      orderId: orderId
    };
    
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    clearCart();
    setIsProcessing(false);
    navigate("/order-success", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        
        {/* Breadcrumb */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">Cart</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          <p className="text-sm text-gray-500 mt-1">Complete your purchase securely</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <div className="w-16 h-0.5 bg-green-600 hidden sm:block"></div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
              <div className="w-16 h-0.5 bg-blue-600 hidden sm:block"></div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            </div>
          </div>
          <div className="flex justify-between max-w-md mx-auto mt-2 text-xs">
            <div className="text-green-600 font-medium">Cart</div>
            <div className="text-green-600 font-medium">Details</div>
            <div className="text-blue-600 font-medium">Payment</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT SIDE - FORM */}
          <div className="lg:col-span-2 space-y-5">
            <form onSubmit={handleSubmit}>
              
              {/* Personal Details */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">1</span>
                    Personal Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">2</span>
                    Shipping Address
                  </h2>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="House No, Street, Area"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Mumbai"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">State</label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Maharashtra"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Pincode</label>
                        <input
                          type="text"
                          name="pincode"
                          required
                          value={formData.pincode}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="400001"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">3</span>
                    Payment Method
                  </h2>
                </div>
                <div className="p-5">
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-xl">💵</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">Cash on Delivery</p>
                        <p className="text-xs text-gray-500">Pay when you receive</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-xl">💳</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">Credit / Debit Card</p>
                        <p className="text-xs text-gray-500">Visa, Mastercard, RuPay</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === "upi"}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-xl">📱</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">UPI / Wallet</p>
                        <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2 ${
                  isProcessing
                    ? "bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Place Order • ₹{Math.round(total).toLocaleString()}
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500 mt-3">
                By placing order, you agree to our Terms & Conditions
              </p>
            </form>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg sticky top-20">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">Order Summary</h2>
              </div>
              
              <div className="p-5">
                {/* Items */}
                <div className="max-h-80 overflow-y-auto space-y-3 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-3 border-b border-gray-100">
                      <img 
                        src={item.image || "https://via.placeholder.com/50"} 
                        alt={item.name} 
                        className="w-12 h-12 object-cover rounded border border-gray-200"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/50";
                        }}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800 line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-sm text-gray-800">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                
                {/* Price Breakdown */}
                <div className="space-y-2 pt-3 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800">₹{Math.round(subtotal).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800">{shipping === 0 ? "Free" : `₹${Math.round(shipping).toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="text-gray-800">₹{Math.round(gst).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between text-base font-bold">
                      <span className="text-gray-900">Total</span>
                      <span className="text-green-600">₹{Math.round(total).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <div className="flex justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">🔒 Secure</span>
                    <span className="flex items-center gap-1">✓ 100% Safe</span>
                    <span className="flex items-center gap-1">🛡️ Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESSING MODAL */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-800 mb-1">Processing Order</h3>
              <p className="text-sm text-gray-500">Please wait...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}