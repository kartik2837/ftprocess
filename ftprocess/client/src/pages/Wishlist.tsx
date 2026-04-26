// src/pages/Wishlist.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const removeFromWishlist = (id: number) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">❤️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h1>
          <p className="text-gray-500 mb-6">Save your favorite items here</p>
          <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Wishlist</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xs text-gray-500">{item.category}</p>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-green-600 font-bold mt-1">₹{item.price.toLocaleString()}</p>
                <div className="flex gap-2 mt-3">
                  <Link to={`/product/${item.id}`} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center text-sm hover:bg-blue-700">
                    View
                  </Link>
                  <button onClick={() => removeFromWishlist(item.id)} className="px-3 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 text-sm">
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}