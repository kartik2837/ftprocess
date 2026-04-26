// src/context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../data/products";

// Cart Item Interface
export interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  category?: string;
}

// Cart Context Interface
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, size?: string) => void;
  removeFromCart: (id: number, size?: string) => void;
  updateQuantity: (id: number, quantity: number, size?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getCartSubtotal: () => number;
  getCartGST: () => number;
  getCartShipping: () => number;
  getCartGrandTotal: () => number;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Load cart from localStorage on initial render
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart
  const addToCart = (product: Product, quantity: number, size?: string) => {
    setCartItems(prevItems => {
      // Check if item already exists (same product and size)
      const existingIndex = prevItems.findIndex(
        item => item.productId === product.id && item.size === size
      );

      if (existingIndex > -1) {
        // Update existing item quantity
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        // Add new item
        const newItem: CartItem = {
          id: Date.now(), // unique id
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          image: product.images[0],
          size: size,
          category: product.category
        };
        return [...prevItems, newItem];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (id: number, size?: string) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === id || (item.productId === id && item.size === size)))
    );
  };

  // Update quantity
  const updateQuantity = (id: number, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id || (item.productId === id && item.size === size)
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate subtotal
  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate GST (18%)
  const getCartGST = () => {
    return getCartSubtotal() * 0.18;
  };

  // Calculate shipping (free above ₹50,000)
  const getCartShipping = () => {
    const subtotal = getCartSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 50000 ? 0 : 499;
  };

  // Calculate grand total
  const getCartGrandTotal = () => {
    return getCartSubtotal() + getCartGST() + getCartShipping();
  };

  // Get total (without GST and shipping) - for backward compatibility
  const getCartTotal = () => {
    return getCartSubtotal();
  };

  // Get total number of items in cart
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        getCartSubtotal,
        getCartGST,
        getCartShipping,
        getCartGrandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}