// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import lobe from '../assets/lobe.jpg'
// import screw from '../assets/screw.jpg'
// import hygenic from '../assets/hygenic.jpg'
// import homo from '../assets/homo.png'

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   category: string;
//   description: string;
//   rating: number;
//   inStock: boolean;
//   specifications?: {
//     material?: string;
//     capacity?: string;
//     power?: string;
//     warranty?: string;
//   };
// }

// const ProductShowcase: React.FC = () => {
//   const navigate = useNavigate();
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [showInquiry, setShowInquiry] = useState<Product | null>(null);

//   const products: Product[] = [
//     {
//       id: 1,
//       name: "Lobe Pump",
//       image: lobe,
//       price: 1895,
//       category: "Centrifugal",
//       description: "High-flow pump for industrial applications with 5000 GPM capacity and energy-efficient design.",
//       rating: 4.8,
//       inStock: true,
//       specifications: {
//         material: "Stainless Steel 316",
//         capacity: "5000 GPM",
//         power: "50 HP",
//         warranty: "2 years"
//       }
//     },
//     {
//       id: 2,
//       name: "Screw Pump",
//       image: screw,
//       price: 2799,
//       category: "Diaphragm",
//       description: "Precision chemical dosing pump with ±1% accuracy and chemical-resistant PTFE diaphragm.",
//       rating: 4.9,
//       inStock: true,
//       specifications: {
//         material: "Cast Iron",
//         capacity: "2500 GPM",
//         power: "30 HP",
//         warranty: "3 years"
//       }
//     },
//     {
//       id: 3,
//       name: "Hygenic Centrifugal Pumps",
//       image: hygenic,
//       price: 4450,
//       category: "High Pressure",
//       description: "Heavy-duty multistage pump with 580 PSI capacity and stainless steel construction.",
//       rating: 4.7,
//       inStock: true,
//       specifications: {
//         material: "SS 304",
//         capacity: "3500 GPM",
//         power: "75 HP",
//         warranty: "2 years"
//       }
//     },
//     {
//       id: 4,
//       name: "HOMOGINESER",
//       image: homo,
//       price: 3250,
//       category: "Submersible",
//       description: "Abrasion-resistant pump for depths up to 100m with 200 HP power rating.",
//       rating: 4.6,
//       inStock: false,
//       specifications: {
//         material: "Cast Iron",
//         capacity: "1500 GPM",
//         power: "200 HP",
//         warranty: "1 year"
//       }
//     },
//     {
//       id: 5,
//       name: "Gear Pump",
//       image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format",
//       price: 1890,
//       category: "Gear",
//       description: "Positive displacement pump with 1000 PSI pressure and compact design.",
//       rating: 4.5,
//       inStock: true,
//       specifications: {
//         material: "Carbon Steel",
//         capacity: "1000 GPM",
//         power: "20 HP",
//         warranty: "2 years"
//       }
//     },
//     {
//       id: 6,
//       name: "Vacuum Pump",
//       image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format",
//       price: 2350,
//       category: "Vacuum",
//       description: "Industrial vacuum solution with 0.1 mbar ultimate vacuum and oil-free option.",
//       rating: 4.8,
//       inStock: true,
//       specifications: {
//         material: "Aluminum",
//         capacity: "500 CFM",
//         power: "15 HP",
//         warranty: "2 years"
//       }
//     },
//     {
//       id: 7,
//       name: "Magnetic Drive Pump",
//       image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&auto=format",
//       price: 3890,
//       category: "Magnetic",
//       description: "Seal-less pump for hazardous chemicals with zero leakage guarantee.",
//       rating: 4.9,
//       inStock: true,
//       specifications: {
//         material: "PTFE Lined",
//         capacity: "800 GPM",
//         power: "40 HP",
//         warranty: "3 years"
//       }
//     },
//     {
//       id: 8,
//       name: "Peristaltic Pump",
//       image: "https://images.unsplash.com/photo-1581092335871-5b4a7a2b9a8d?w=500&auto=format",
//       price: 2100,
//       category: "Peristaltic",
//       description: "Gentle pump for shear-sensitive fluids with FDA compliant materials.",
//       rating: 4.7,
//       inStock: true,
//       specifications: {
//         material: "Stainless Steel",
//         capacity: "200 GPM",
//         power: "10 HP",
//         warranty: "2 years"
//       }
//     },
//     {
//       id: 9,
//       name: "Dosing Pump",
//       image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&auto=format",
//       price: 1750,
//       category: "Dosing",
//       description: "Precision chemical injection pump with ±0.5% accuracy and adjustable flow.",
//       rating: 4.6,
//       inStock: true,
//       specifications: {
//         material: "PVC",
//         capacity: "100 GPM",
//         power: "5 HP",
//         warranty: "2 years"
//       }
//     },
//     {
//       id: 10,
//       name: "Slurry Pump",
//       image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3783?w=500&auto=format",
//       price: 4200,
//       category: "Slurry",
//       description: "Heavy-duty slurry handling pump with abrasion-resistant materials.",
//       rating: 4.8,
//       inStock: false,
//       specifications: {
//         material: "Hard Iron",
//         capacity: "3000 GPM",
//         power: "100 HP",
//         warranty: "1 year"
//       }
//     }
//   ];

//   // Create 4 rows with the same products
//   const rows: Product[][] = [
//     products,  // Row 1: Only Inquiry button
//     products,  // Row 2: Both buttons
//     products,  // Row 3: Both buttons
//     products   // Row 4: Both buttons
//   ];

//   const addToCart = (product: Product) => {
//     setCart(prev => [...prev, product]);
//     setToastMessage(`${product.name} added to cart!`);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 2000);
//   };

//   const handleInquirySubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Inquiry submitted for ${showInquiry?.name}`);
//     setShowInquiry(null);
//   };

//   // Navigate to product details page
//   const handleProductClick = (product: Product) => {
//     // Store selected product in localStorage for the details page
//     localStorage.setItem('selectedProduct', JSON.stringify(product));
//     navigate(`/product/${product.id}`);
//   };

//   const renderStars = (rating: number) => {
//     return (
//       <div className="flex items-center gap-1">
//         {[...Array(5)].map((_, i) => (
//           <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//         <span className="text-xs text-gray-500 ml-1">({rating})</span>
//       </div>
//     );
//   };

//   // Scroll handler for left/right arrows
//   const scrollRow = (rowId: string, direction: 'left' | 'right') => {
//     const container = document.getElementById(rowId);
//     if (container) {
//       const scrollAmount = direction === 'left' ? -350 : 350;
//       container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   const ProductCard = ({ 
//     product, 
//     index, 
//     showCartButton 
//   }: { 
//     product: Product; 
//     index: number; 
//     showCartButton: boolean;
//   }) => (
//     <div
//       key={`${product.id}-${index}`}
//       className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px]"
//       style={{
//         animation: `fadeInUp 0.5s ease forwards`,
//         animationDelay: `${index * 0.03}s`,
//         opacity: 0
//       }}
//       onClick={() => handleProductClick(product)}
//     >
//       {/* Image */}
//       <div className="relative h-48 overflow-hidden bg-gray-100">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//         />
//         {!product.inStock && (
//           <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//             <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Out of Stock</span>
//           </div>
//         )}
//         {product.inStock && (
//           <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//             In Stock
//           </div>
//         )}
//         <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//           {product.category}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition line-clamp-1">
//           {product.name}
//         </h3>
        
//         {/* Rating */}
//         <div className="mb-2">
//           {renderStars(product.rating)}
//         </div>
        
//         <p className="text-gray-600 text-xs mb-2 line-clamp-2">
//           {product.description}
//         </p>
        
//         <div className="text-lg font-bold text-orange-500 mb-3">
//           ${product.price.toLocaleString()}
//         </div>
        
//         {/* Action Buttons - Conditional based on row */}
//         <div className="flex gap-2">
//           {showCartButton ? (
//             <>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   if (product.inStock) addToCart(product);
//                 }}
//                 disabled={!product.inStock}
//                 className={`flex-1 py-2 rounded-lg transition duration-300 flex items-center justify-center gap-1 text-sm ${
//                   product.inStock 
//                     ? 'bg-orange-500 hover:bg-orange-600 text-white' 
//                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 }`}
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 Cart
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setShowInquiry(product);
//                 }}
//                 className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition duration-300 text-sm"
//               >
//                 Inquiry
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowInquiry(product);
//               }}
//               className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition duration-300 text-sm flex items-center justify-center gap-2"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               Request Inquiry
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const ScrollableRow = ({ 
//     products, 
//     rowTitle, 
//     rowId, 
//     showCartButton,
//     rowNumber 
//   }: { 
//     products: Product[]; 
//     rowTitle: string; 
//     rowId: string;
//     showCartButton: boolean;
//     rowNumber: number;
//   }) => (
//     <div className="mb-10">
//       <div className="flex items-center justify-between mb-4 px-2">
//         <div className="flex items-center gap-3">
//           <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
//           <h3 className="text-xl font-bold text-gray-800">{rowTitle}</h3>
//           {rowNumber === 1 && (
//             <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
//               Inquiry Only
//             </span>
//           )}
//           {rowNumber > 1 && (
//             <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
//               Cart + Inquiry
//             </span>
//           )}
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={() => scrollRow(rowId, 'left')}
//             className="p-2 bg-white border border-gray-300 rounded-full hover:bg-orange-50 hover:border-orange-500 transition-all duration-200 shadow-sm"
//             aria-label="Scroll left"
//           >
//             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button
//             onClick={() => scrollRow(rowId, 'right')}
//             className="p-2 bg-white border border-gray-300 rounded-full hover:bg-orange-50 hover:border-orange-500 transition-all duration-200 shadow-sm"
//             aria-label="Scroll right"
//           >
//             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="relative group">
//         <div
//           id={rowId}
//           className="overflow-x-auto overflow-y-visible scrollbar-custom"
//           style={{ scrollBehavior: 'smooth' }}
//         >
//           <div className="flex gap-5 pb-4 px-2" style={{ minWidth: 'min-content' }}>
//             {products.map((product, idx) => (
//               <ProductCard 
//                 key={`${rowId}-${product.id}-${idx}`} 
//                 product={product} 
//                 index={idx}
//                 showCartButton={showCartButton}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//             </svg>
//             <span className="text-sm font-semibold">Premium Quality</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//             Our Industrial{" "}
//             <span className="text-orange-500 relative inline-block">
//               Pump Collection
//               <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
//                 <path d="M1 5.5C67.5 2.5 132.5 2.5 199 5.5" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
//             Discover our comprehensive range of industrial pumps. Click on any product to view detailed specifications.
//           </p>
//           <div className="mt-4 flex justify-center gap-3 flex-wrap">
//             <span className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full shadow-sm">
//               <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//               Use Arrow Buttons to Scroll
//             </span>
//             <span className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full shadow-sm">
//               <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
//               Row 1: Inquiry Only
//             </span>
//             <span className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full shadow-sm">
//               <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//               Rows 2-4: Cart + Inquiry
//             </span>
//           </div>
//         </div>

//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="bg-white rounded-2xl shadow-md p-4 mb-8 flex justify-between items-center border-l-4 border-orange-500 sticky top-4 z-40">
//             <div className="flex items-center gap-4">
//               <div className="bg-orange-100 p-2 rounded-full">
//                 <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <span className="font-semibold text-gray-700">Cart Items: </span>
//                 <span className="text-orange-500 font-bold text-xl">{cart.length}</span>
//               </div>
//             </div>
//             <button
//               onClick={() => alert(`Cart contains ${cart.length} items. Total: $${cart.reduce((sum, p) => sum + p.price, 0).toLocaleString()}`)}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300 flex items-center gap-2"
//             >
//               <span>View Cart</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         )}

//         {/* Scrollable Rows */}
//         <ScrollableRow 
//           products={rows[0]} 
//           rowTitle="📋 Product Catalog - Inquiry Only" 
//           rowId="row1"
//           showCartButton={false}
//           rowNumber={1}
//         />
//         <ScrollableRow 
//           products={rows[1]} 
//           rowTitle="🛒 Best Sellers - Add to Cart Available" 
//           rowId="row2"
//           showCartButton={true}
//           rowNumber={2}
//         />
//         <ScrollableRow 
//           products={rows[2]} 
//           rowTitle="⚙️ Industrial Heavy Duty - Add to Cart Available" 
//           rowId="row3"
//           showCartButton={true}
//           rowNumber={3}
//         />
//         <ScrollableRow 
//           products={rows[3]} 
//           rowTitle="💧 Precision Solutions - Add to Cart Available" 
//           rowId="row4"
//           showCartButton={true}
//           rowNumber={4}
//         />

//         {/* NOTE: Modal is removed - Now using navigation to product details page */}

//         {/* Inquiry Modal */}
//         {showInquiry && (
//           <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowInquiry(null)}>
//             <div className="bg-white rounded-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold">Inquiry for {showInquiry.name}</h3>
//                 <button onClick={() => setShowInquiry(null)} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">&times;</button>
//               </div>
//               <form onSubmit={handleInquirySubmit}>
//                 <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
//                 <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
//                 <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
//                 <textarea placeholder="Your Message" rows={3} className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
//                 <div className="flex gap-3">
//                   <button type="submit" className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold">Submit Inquiry</button>
//                   <button type="button" onClick={() => setShowInquiry(null)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition font-semibold">Cancel</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Toast Notification */}
//         {showToast && (
//           <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce flex items-center gap-2 z-50">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//             {toastMessage}
//           </div>
//         )}
//       </div>

//       {/* Animation Styles */}
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .line-clamp-1 {
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
        
//         .animate-bounce {
//           animation: bounce 0.5s ease;
//         }
        
//         /* Custom scrollbar styling */
//         .scrollbar-custom::-webkit-scrollbar {
//           height: 8px;
//         }
        
//         .scrollbar-custom::-webkit-scrollbar-track {
//           background: #e5e7eb;
//           border-radius: 10px;
//         }
        
//         .scrollbar-custom::-webkit-scrollbar-thumb {
//           background: #f97316;
//           border-radius: 10px;
//         }
        
//         .scrollbar-custom::-webkit-scrollbar-thumb:hover {
//           background: #ea580c;
//         }
        
//         /* Hide scrollbar for cleaner look on some browsers, but keep functionality */
//         .overflow-x-auto {
//           scrollbar-width: thin;
//           scrollbar-color: #f97316 #e5e7eb;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProductShowcase;















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lobe from '../assets/lobe.jpg'
import screw from '../assets/screw.jpg'
import hygenic from '../assets/hygenic.jpg'
import homo from '../assets/homo.png'

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  inStock: boolean;
  specifications?: {
    material?: string;
    capacity?: string;
    power?: string;
    warranty?: string;
  };
}

const ProductShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showInquiry, setShowInquiry] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Lobe Pump",
      image: lobe,
      price: 1895,
      category: "Centrifugal",
      description: "High-flow pump for industrial applications with 5000 GPM capacity and energy-efficient design.",
      rating: 4.8,
      inStock: true,
      specifications: {
        material: "Stainless Steel 316",
        capacity: "5000 GPM",
        power: "50 HP",
        warranty: "2 years"
      }
    },
    {
      id: 2,
      name: "Screw Pump",
      image: screw,
      price: 2799,
      category: "Diaphragm",
      description: "Precision chemical dosing pump with ±1% accuracy and chemical-resistant PTFE diaphragm.",
      rating: 4.9,
      inStock: true,
      specifications: {
        material: "Cast Iron",
        capacity: "2500 GPM",
        power: "30 HP",
        warranty: "3 years"
      }
    },
    {
      id: 3,
      name: "Hygenic Centrifugal Pumps",
      image: hygenic,
      price: 4450,
      category: "High Pressure",
      description: "Heavy-duty multistage pump with 580 PSI capacity and stainless steel construction.",
      rating: 4.7,
      inStock: true,
      specifications: {
        material: "SS 304",
        capacity: "3500 GPM",
        power: "75 HP",
        warranty: "2 years"
      }
    },
    {
      id: 4,
      name: "HOMOGINESER",
      image: homo,
      price: 3250,
      category: "Submersible",
      description: "Abrasion-resistant pump for depths up to 100m with 200 HP power rating.",
      rating: 4.6,
      inStock: false,
      specifications: {
        material: "Cast Iron",
        capacity: "1500 GPM",
        power: "200 HP",
        warranty: "1 year"
      }
    },
    {
      id: 5,
      name: "Gear Pump",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format",
      price: 1890,
      category: "Gear",
      description: "Positive displacement pump with 1000 PSI pressure and compact design.",
      rating: 4.5,
      inStock: true,
      specifications: {
        material: "Carbon Steel",
        capacity: "1000 GPM",
        power: "20 HP",
        warranty: "2 years"
      }
    },
    {
      id: 6,
      name: "Vacuum Pump",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format",
      price: 2350,
      category: "Vacuum",
      description: "Industrial vacuum solution with 0.1 mbar ultimate vacuum and oil-free option.",
      rating: 4.8,
      inStock: true,
      specifications: {
        material: "Aluminum",
        capacity: "500 CFM",
        power: "15 HP",
        warranty: "2 years"
      }
    },
    {
      id: 7,
      name: "Magnetic Drive Pump",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&auto=format",
      price: 3890,
      category: "Magnetic",
      description: "Seal-less pump for hazardous chemicals with zero leakage guarantee.",
      rating: 4.9,
      inStock: true,
      specifications: {
        material: "PTFE Lined",
        capacity: "800 GPM",
        power: "40 HP",
        warranty: "3 years"
      }
    },
    {
      id: 8,
      name: "Peristaltic Pump",
      image: "https://images.unsplash.com/photo-1581092335871-5b4a7a2b9a8d?w=500&auto=format",
      price: 2100,
      category: "Peristaltic",
      description: "Gentle pump for shear-sensitive fluids with FDA compliant materials.",
      rating: 4.7,
      inStock: true,
      specifications: {
        material: "Stainless Steel",
        capacity: "200 GPM",
        power: "10 HP",
        warranty: "2 years"
      }
    },
    {
      id: 9,
      name: "Dosing Pump",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&auto=format",
      price: 1750,
      category: "Dosing",
      description: "Precision chemical injection pump with ±0.5% accuracy and adjustable flow.",
      rating: 4.6,
      inStock: true,
      specifications: {
        material: "PVC",
        capacity: "100 GPM",
        power: "5 HP",
        warranty: "2 years"
      }
    },
    {
      id: 10,
      name: "Slurry Pump",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3783?w=500&auto=format",
      price: 4200,
      category: "Slurry",
      description: "Heavy-duty slurry handling pump with abrasion-resistant materials.",
      rating: 4.8,
      inStock: false,
      specifications: {
        material: "Hard Iron",
        capacity: "3000 GPM",
        power: "100 HP",
        warranty: "1 year"
      }
    }
  ];

  // Create 4 rows with the same products
  const rows: Product[][] = [
    products,  // Row 1: Only Inquiry button
    products,  // Row 2: Both buttons
    products,  // Row 3: Both buttons
    products   // Row 4: Both buttons
  ];

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inquiry submitted for ${showInquiry?.name}`);
    setShowInquiry(null);
  };

  // Navigate to product details page
  const handleProductClick = (product: Product) => {
    // Store selected product in localStorage for the details page
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    navigate(`/product/${product.id}`);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-xs text-gray-500 ml-1">({rating})</span>
      </div>
    );
  };

  // Scroll handler for left/right arrows
  const scrollRow = (rowId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(rowId);
    if (container) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const ProductCard = ({ 
    product, 
    index, 
    showCartButton 
  }: { 
    product: Product; 
    index: number; 
    showCartButton: boolean;
  }) => (
    <div
      key={`${product.id}-${index}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px]"
      style={{
        animation: `fadeInUp 0.5s ease forwards`,
        animationDelay: `${index * 0.03}s`,
        opacity: 0
      }}
      onClick={() => handleProductClick(product)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Out of Stock</span>
          </div>
        )}
        {product.inStock && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            In Stock
          </div>
        )}
        <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition line-clamp-1">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="mb-2">
          {renderStars(product.rating)}
        </div>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="text-lg font-bold text-orange-500 mb-3">
          ${product.price.toLocaleString()}
        </div>
        
        {/* Action Buttons - Conditional based on row */}
        <div className="flex gap-2">
          {showCartButton ? (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (product.inStock) addToCart(product);
                }}
                disabled={!product.inStock}
                className={`flex-1 py-2 rounded-lg transition duration-300 flex items-center justify-center gap-1 text-sm ${
                  product.inStock 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInquiry(product);
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition duration-300 text-sm"
              >
                Inquiry
              </button>
            </>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInquiry(product);
              }}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition duration-300 text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Request Inquiry
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const ScrollableRow = ({ 
    products, 
    rowTitle, 
    rowId, 
    showCartButton,
    rowNumber 
  }: { 
    products: Product[]; 
    rowTitle: string; 
    rowId: string;
    showCartButton: boolean;
    rowNumber: number;
  }) => (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3">
          <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
          <h3 className="text-xl font-bold text-gray-800">{rowTitle}</h3>
          {rowNumber === 1 && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
              Inquiry Only
            </span>
          )}
          {rowNumber > 1 && (
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
              Cart + Inquiry
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollRow(rowId, 'left')}
            className="p-2 bg-white border border-gray-300 rounded-full hover:bg-orange-50 hover:border-orange-500 transition-all duration-200 shadow-sm"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollRow(rowId, 'right')}
            className="p-2 bg-white border border-gray-300 rounded-full hover:bg-orange-50 hover:border-orange-500 transition-all duration-200 shadow-sm"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative group">
        <div
          id={rowId}
          className="overflow-x-auto overflow-y-visible scrollbar-custom"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-5 pb-4 px-2" style={{ minWidth: 'min-content' }}>
            {products.map((product, idx) => (
              <ProductCard 
                key={`${rowId}-${product.id}-${idx}`} 
                product={product} 
                index={idx}
                showCartButton={showCartButton}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-sm font-semibold">Premium Quality</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Industrial{" "}
            <span className="text-orange-500 relative inline-block">
              Pump Collection
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C67.5 2.5 132.5 2.5 199 5.5" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Discover our comprehensive range of industrial pumps. Click on any product to view detailed specifications.
          </p>
          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full shadow-sm">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Use Arrow Buttons to Scroll
            </span>
            <span className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full shadow-sm">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Row 1: Inquiry Only
            </span>
            <span className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full shadow-sm">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Rows 2-4: Cart + Inquiry
            </span>
          </div>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-4 mb-8 flex justify-between items-center border-l-4 border-orange-500 sticky top-4 z-40">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Cart Items: </span>
                <span className="text-orange-500 font-bold text-xl">{cart.length}</span>
              </div>
            </div>
            <button
              onClick={() => alert(`Cart contains ${cart.length} items. Total: $${cart.reduce((sum, p) => sum + p.price, 0).toLocaleString()}`)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300 flex items-center gap-2"
            >
              <span>View Cart</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Scrollable Rows */}
        <ScrollableRow 
          products={rows[0]} 
          rowTitle="📋 Product Catalog - Inquiry Only" 
          rowId="row1"
          showCartButton={false}
          rowNumber={1}
        />
        <ScrollableRow 
          products={rows[1]} 
          rowTitle="🛒 Best Sellers - Add to Cart Available" 
          rowId="row2"
          showCartButton={true}
          rowNumber={2}
        />
        <ScrollableRow 
          products={rows[2]} 
          rowTitle="⚙️ Industrial Heavy Duty - Add to Cart Available" 
          rowId="row3"
          showCartButton={true}
          rowNumber={3}
        />
        <ScrollableRow 
          products={rows[3]} 
          rowTitle="💧 Precision Solutions - Add to Cart Available" 
          rowId="row4"
          showCartButton={true}
          rowNumber={4}
        />

        {/* NOTE: Modal is removed - Now using navigation to product details page */}

        {/* Inquiry Modal */}
        {showInquiry && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowInquiry(null)}>
            <div className="bg-white rounded-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Inquiry for {showInquiry.name}</h3>
                <button onClick={() => setShowInquiry(null)} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">&times;</button>
              </div>
              <form onSubmit={handleInquirySubmit}>
                <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                <textarea placeholder="Your Message" rows={3} className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
                <div className="flex gap-3">
                  <button type="submit" className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold">Submit Inquiry</button>
                  <button type="button" onClick={() => setShowInquiry(null)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition font-semibold">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce flex items-center gap-2 z-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {toastMessage}
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease;
        }
        
        /* Custom scrollbar styling */
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }
        
        /* Hide scrollbar for cleaner look on some browsers, but keep functionality */
        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: #f97316 #e5e7eb;
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
