// src/pages/Profile.tsx
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  joinDate: string;
  profileImage?: string;
  bio?: string;
  company?: string;
  designation?: string;
  city?: string;
}

interface Order {
  id: string;
  orderId?: string;
  total: number;
  orderDate: string;
  items: any[];
  paymentMethod: string;
  status?: string;
}

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    bio: "",
    company: "",
    designation: "",
    city: ""
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
      return;
    }
    const userData = JSON.parse(currentUser);
    setUser(userData);
    setEditForm({
      fullName: userData.fullName || "",
      phone: userData.phone || "",
      email: userData.email || "",
      bio: userData.bio || "Industrial pump professional",
      company: userData.company || "ftProcess",
      designation: userData.designation || "Customer",
      city: userData.city || "Mumbai, India"
    });
    setPreviewImage(userData.profileImage || null);
    
    // Get user orders
    const savedOrder = localStorage.getItem("orderDetails");
    if (savedOrder) {
      const orderData = JSON.parse(savedOrder);
      const userOrders = Array.isArray(orderData) ? orderData : [orderData];
      // Add status to orders
      const ordersWithStatus = userOrders.map((order: any) => ({
        ...order,
        status: "Delivered"
      }));
      setOrders(ordersWithStatus);
    }
  }, [navigate]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should be less than 2MB");
        return;
      }
      if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
        alert("Please upload JPEG, PNG or GIF image");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setPreviewImage(imageData);
        if (user) {
          const updatedUser = { ...user, profileImage: imageData };
          localStorage.setItem("currentUser", JSON.stringify(updatedUser));
          const users = JSON.parse(localStorage.getItem("users") || "[]");
          const userIndex = users.findIndex((u: any) => u.id === user.id);
          if (userIndex !== -1) {
            users[userIndex] = updatedUser;
            localStorage.setItem("users", JSON.stringify(users));
          }
          setUser(updatedUser);
          alert("✅ Profile picture updated!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    if (user) {
      const updatedUser = { 
        ...user, 
        fullName: editForm.fullName, 
        phone: editForm.phone,
        email: editForm.email,
        bio: editForm.bio,
        company: editForm.company,
        designation: editForm.designation,
        city: editForm.city
      };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
      }
      setUser(updatedUser);
      setIsEditing(false);
      alert("✅ Profile updated successfully!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  const getInitials = () => {
    return user.fullName
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Delivered": return "bg-green-100 text-green-700";
      case "Processing": return "bg-blue-100 text-blue-700";
      case "Shipped": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Cover Section with Gradient */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 md:left-10 md:transform-none">
          <div className="relative group">
            <div className="w-32 h-32 rounded-2xl bg-white shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
              {previewImage ? (
                <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{getInitials()}</span>
                </div>
              )}
            </div>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/gif" onChange={handleImageUpload} className="hidden" />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 max-w-7xl pt-20 pb-12">
        
        {/* User Info Header */}
        <div className="text-center md:text-left md:ml-44 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{user.fullName}</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
            <span className="text-gray-500">{user.designation || "Customer"}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">{user.company || "ftProcess"}</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">Member since {new Date(user.joinDate).toLocaleDateString()}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-4 sticky top-20">
              
              <div className="text-center mb-4 pb-4 border-b border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {previewImage ? (
                    <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-bold text-white">{getInitials()}</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition flex items-center gap-3 ${
                    activeTab === "profile" 
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">👤</span>
                  <span className="font-medium">Profile</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition flex items-center gap-3 ${
                    activeTab === "orders" 
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">📦</span>
                  <span className="font-medium">Orders</span>
                  {orders.length > 0 && (
                    <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                      {orders.length}
                    </span>
                  )}
                </button>
                
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition flex items-center gap-3 ${
                    activeTab === "wishlist" 
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">❤️</span>
                  <span className="font-medium">Wishlist</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("address")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition flex items-center gap-3 ${
                    activeTab === "address" 
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">📍</span>
                  <span className="font-medium">Addresses</span>
                </button>
                
                <hr className="my-3 border-gray-100" />
                
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 transition flex items-center gap-3"
                >
                  <span className="text-xl">🚪</span>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-4 mt-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-3">Quick Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Orders</span>
                  <span className="font-bold text-gray-800">{orders.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Spent</span>
                  <span className="font-bold text-green-600">
                    ₹{orders.reduce((sum, o) => sum + o.total, 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Member Since</span>
                  <span className="text-sm text-gray-500">{new Date(user.joinDate).getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>📋</span> Profile Information
                  </h2>
                </div>
                
                <div className="p-6">
                  {isEditing ? (
                    <div className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                          <input
                            type="text"
                            value={editForm.fullName}
                            onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={editForm.phone}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                          <input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                          <input
                            type="text"
                            value={editForm.city}
                            onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                          <input
                            type="text"
                            value={editForm.company}
                            onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                          <input
                            type="text"
                            value={editForm.designation}
                            onChange={(e) => setEditForm({ ...editForm, designation: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                        <textarea
                          rows={3}
                          value={editForm.bio}
                          onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={handleUpdateProfile}
                          className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-medium text-gray-500">Full Name</label>
                        <p className="text-gray-800 text-lg font-semibold mt-1">{user.fullName}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-medium text-gray-500">Email Address</label>
                        <p className="text-gray-800 text-lg mt-1">{user.email}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-medium text-gray-500">Phone Number</label>
                        <p className="text-gray-800 text-lg mt-1">{user.phone}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-medium text-gray-500">Location</label>
                        <p className="text-gray-800 text-lg mt-1">{user.city || "Mumbai, India"}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-medium text-gray-500">Company</label>
                        <p className="text-gray-800 text-lg mt-1">{user.company || "ftProcess"}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-medium text-gray-500">Designation</label>
                        <p className="text-gray-800 text-lg mt-1">{user.designation || "Customer"}</p>
                      </div>
                      <div className="md:col-span-2 bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-medium text-gray-500">Bio</label>
                        <p className="text-gray-700 mt-1">{user.bio || "Industrial pump professional"}</p>
                      </div>
                    </div>
                  )}
                  
                  {!isEditing && (
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition flex items-center gap-2"
                      >
                        <span>✏️</span> Edit Profile
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>📦</span> My Orders
                  </h2>
                </div>
                <div className="p-6">
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📦</div>
                      <p className="text-gray-500 mb-4">No orders yet</p>
                      <Link to="/products" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition">
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition">
                          <div className="flex flex-wrap justify-between items-start gap-3">
                            <div>
                              <p className="font-semibold text-gray-800">Order #{order.orderId || "ORD" + Date.now()}</p>
                              <p className="text-sm text-gray-500 mt-1">{new Date(order.orderDate).toLocaleDateString()}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-orange-600 text-xl">₹{Math.round(order.total).toLocaleString()}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(order.status || "Delivered")}`}>
                                {order.status || "Delivered"}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                            <p className="text-sm text-gray-500">{order.items?.length || 0} items</p>
                            <button className="text-orange-500 text-sm hover:underline">View Details →</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>❤️</span> My Wishlist
                  </h2>
                </div>
                <div className="p-6 text-center py-12">
                  <div className="text-6xl mb-4">❤️</div>
                  <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                  <Link to="/products" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition">
                    Browse Products
                  </Link>
                </div>
              </div>
            )}
            
            {/* Address Tab */}
            {activeTab === "address" && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>📍</span> Saved Addresses
                    </h2>
                    <button className="px-3 py-1 bg-white text-orange-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                      + Add New
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-800">Home</h3>
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Default</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">{user.fullName}</p>
                      <p className="text-gray-500 text-xs mt-1">123 Industrial Area, MIDC, Andheri East, Mumbai - 400093</p>
                      <p className="text-gray-500 text-xs mt-1">Phone: {user.phone}</p>
                      <div className="flex gap-3 mt-3">
                        <button className="text-orange-500 text-xs hover:underline">Edit</button>
                        <button className="text-red-500 text-xs hover:underline">Delete</button>
                      </div>
                    </div>
                    
                    <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center hover:border-orange-500 transition cursor-pointer">
                      <div className="text-center">
                        <span className="text-3xl text-gray-400">+</span>
                        <p className="text-gray-500 text-sm mt-1">Add New Address</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}