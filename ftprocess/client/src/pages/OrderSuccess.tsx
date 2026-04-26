// // src/pages/OrderSuccess.tsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// interface OrderDetails {
//   fullName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
//   paymentMethod: string;
//   total: number;
//   items: Array<{
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//     image?: string;
//   }>;
//   orderDate?: string;
//   orderId?: string;
// }

// type OrderStatus = "confirmed" | "processing" | "shipped" | "out_for_delivery" | "delivered";

// export default function OrderSuccess() {
//   const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
//   const [currentStatus, setCurrentStatus] = useState<OrderStatus>("confirmed");

//   useEffect(() => {
//     const savedOrder = localStorage.getItem("orderDetails");
    
//     if (savedOrder) {
//       const parsedOrder = JSON.parse(savedOrder);
//       setOrderDetails(parsedOrder);
      
//       const orderDate = parsedOrder.orderDate ? new Date(parsedOrder.orderDate) : new Date();
//       const today = new Date();
//       const daysSinceOrder = Math.floor((today.getTime() - orderDate.getTime()) / (1000 * 3600 * 24));
      
//       if (daysSinceOrder >= 6) setCurrentStatus("delivered");
//       else if (daysSinceOrder >= 4) setCurrentStatus("out_for_delivery");
//       else if (daysSinceOrder >= 2) setCurrentStatus("shipped");
//       else if (daysSinceOrder >= 1) setCurrentStatus("processing");
//       else setCurrentStatus("confirmed");
//     }
//   }, []);

//   if (!orderDetails) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-3 text-sm font-bold text-gray-600">Loading order details...</p>
//         </div>
//       </div>
//     );
//   }

//   const orderId = orderDetails.orderId || "ORD" + Date.now();
//   const orderDate = orderDetails.orderDate 
//     ? new Date(orderDetails.orderDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
//     : new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

//   const shippingAmount = 499;
//   const gstAmount = orderDetails.total * 0.18;
//   const subtotal = orderDetails.total - gstAmount - shippingAmount;

//   const steps = [
//     { key: "confirmed", label: "Order Confirmed", icon: "✓", date: orderDate },
//     { key: "processing", label: "Processing", icon: "⚙️", date: "1 day after order" },
//     { key: "shipped", label: "Shipped", icon: "🚚", date: "2 days after order" },
//     { key: "out_for_delivery", label: "Out for Delivery", icon: "📦", date: "4 days after order" },
//     { key: "delivered", label: "Delivered", icon: "🏠", date: "6 days after order" }
//   ];

//   const getCurrentStepIndex = () => {
//     switch(currentStatus) {
//       case "confirmed": return 0;
//       case "processing": return 1;
//       case "shipped": return 2;
//       case "out_for_delivery": return 3;
//       case "delivered": return 4;
//       default: return 0;
//     }
//   };

//   const getDeliveryDate = () => {
//     const orderDateObj = orderDetails.orderDate ? new Date(orderDetails.orderDate) : new Date();
//     const deliveryDate = new Date(orderDateObj);
//     deliveryDate.setDate(orderDateObj.getDate() + 6);
//     return deliveryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header with progress - Flipkart Style */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
//         <div className="container mx-auto px-4 max-w-6xl py-3">
//           <div className="flex items-center gap-4 text-sm font-bold">
//             <Link to="/" className="text-gray-600 hover:text-blue-600 font-bold">Home</Link>
//             <span className="text-gray-400">›</span>
//             <Link to="/products" className="text-gray-600 hover:text-blue-600 font-bold">Products</Link>
//             <span className="text-gray-400">›</span>
//             <span className="text-blue-600 font-bold">Order Success</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 max-w-6xl py-6">
        
//         {/* Success Message - Flipkart Style */}
//         <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <div>
//               <h2 className="font-bold text-green-800">Order placed successfully!</h2>
//               <p className="text-sm font-semibold text-green-700">Thank you for shopping with ftProcess</p>
//             </div>
//           </div>
//         </div>

//         {/* Two Column Layout - Flipkart Style */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* LEFT COLUMN - Tracking Timeline (Flipkart Style) */}
//           <div className="lg:col-span-2">
//             {/* Order ID Card */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
//               <div className="p-4 border-b border-gray-200">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-xs text-gray-500 font-bold">ORDER ID</p>
//                     <p className="font-mono text-sm font-bold text-gray-800">{orderId}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-xs text-gray-500 font-bold">ORDER DATE</p>
//                     <p className="text-sm font-bold text-gray-800">{orderDate}</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Flipkart Style Tracking Timeline */}
//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="font-bold text-gray-800 text-lg">Track Order</h3>
//                   <div className="text-right">
//                     <p className="text-xs text-gray-500 font-bold">Expected Delivery</p>
//                     <p className="text-sm font-bold text-green-600">{getDeliveryDate()}</p>
//                   </div>
//                 </div>

//                 {/* Timeline Steps - Flipkart Style */}
//                 <div className="relative">
//                   {/* Vertical Line */}
//                   <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
//                   {steps.map((step, idx) => {
//                     const isCompleted = idx <= getCurrentStepIndex();
//                     const isCurrent = idx === getCurrentStepIndex();
                    
//                     return (
//                       <div key={idx} className="relative flex gap-4 mb-8 last:mb-0">
//                         {/* Icon Circle */}
//                         <div className="relative z-10">
//                           <div className={`
//                             w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
//                             ${isCompleted ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}
//                             ${isCurrent ? 'ring-4 ring-blue-100' : ''}
//                           `}>
//                             {isCompleted ? (
//                               step.key === "delivered" ? "🏠" : step.icon
//                             ) : (
//                               <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                             )}
//                           </div>
//                         </div>
                        
//                         {/* Step Content */}
//                         <div className="flex-1">
//                           <div className="flex justify-between items-start">
//                             <div>
//                               <p className={`font-bold ${isCompleted ? 'text-gray-800' : 'text-gray-400'}`}>
//                                 {step.label}
//                               </p>
//                               <p className="text-xs text-gray-500 font-semibold mt-0.5">
//                                 {idx === 0 ? orderDate : 
//                                  idx === 1 ? "Estimated: Tomorrow" :
//                                  idx === 2 ? "Estimated: 2 days" :
//                                  idx === 3 ? "Estimated: 4 days" :
//                                  "Estimated: 6 days"}
//                               </p>
//                             </div>
//                             {isCurrent && (
//                               <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">
//                                 Current
//                               </span>
//                             )}
//                           </div>
                          
//                           {isCurrent && currentStatus === "out_for_delivery" && (
//                             <div className="mt-2 p-2 bg-orange-50 rounded text-xs font-bold text-orange-700">
//                               🚚 Your order is out for delivery! Expect it today.
//                             </div>
//                           )}
                          
//                           {isCurrent && currentStatus === "delivered" && (
//                             <div className="mt-2 p-2 bg-green-50 rounded text-xs font-bold text-green-700">
//                               ✅ Order delivered successfully! Hope you enjoy your purchase.
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* Delivery Partner Info - Flipkart Style */}
//                 <div className="mt-6 pt-4 border-t border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                         <span className="text-sm">🚚</span>
//                       </div>
//                       <div>
//                         <p className="text-xs text-gray-500 font-bold">Delivery Partner</p>
//                         <p className="text-sm font-bold text-gray-800">ftProcess Logistics</p>
//                       </div>
//                     </div>
//                     <Link to="#" className="text-xs text-blue-600 hover:text-blue-700 font-bold">
//                       Track on map →
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order Items - Flipkart Style */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-4 border-b border-gray-200">
//                 <h3 className="font-bold text-gray-800">Order Items ({orderDetails.items.length})</h3>
//               </div>
//               <div className="divide-y divide-gray-100">
//                 {orderDetails.items.map((item, idx) => (
//                   <div key={idx} className="p-4 flex gap-4">
//                     <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
//                       {item.image ? (
//                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                       ) : (
//                         <span className="text-3xl">🛍️</span>
//                       )}
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-bold text-gray-800">{item.name}</p>
//                       <p className="text-sm text-gray-500 font-semibold mt-1">Quantity: {item.quantity}</p>
//                       <p className="text-sm font-bold text-gray-800 mt-1">₹{item.price.toLocaleString()}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold text-green-600">₹{(item.price * item.quantity).toLocaleString()}</p>
//                       <Link to="#" className="text-xs text-blue-600 hover:text-blue-700 font-bold mt-1 block">
//                         Rate & Review
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN - Order Summary (Flipkart Style) */}
//           <div className="lg:col-span-1 space-y-6">
            
//             {/* Delivery Address Card */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-4 border-b border-gray-200">
//                 <h3 className="font-bold text-gray-800 flex items-center gap-2">
//                   <span>📍</span> Delivery Address
//                 </h3>
//               </div>
//               <div className="p-4">
//                 <p className="font-bold text-gray-800">{orderDetails.fullName}</p>
//                 <p className="text-sm text-gray-600 font-semibold mt-1">{orderDetails.address}</p>
//                 <p className="text-sm text-gray-600 font-semibold">{orderDetails.city}, {orderDetails.state} - {orderDetails.pincode}</p>
//                 <p className="text-sm text-gray-600 font-bold mt-2">📞 {orderDetails.phone}</p>
//               </div>
//             </div>

//             {/* Price Details Card - Flipkart Style */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-4 border-b border-gray-200">
//                 <h3 className="font-bold text-gray-800">Price Details</h3>
//               </div>
//               <div className="p-4 space-y-3">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600 font-bold">Total MRP</span>
//                   <span className="text-gray-800 font-bold">₹{Math.round(orderDetails.total).toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600 font-bold">Discount on MRP</span>
//                   <span className="text-green-600 font-bold">- ₹0</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600 font-bold">Shipping Fee</span>
//                   <span className="text-green-600 font-bold">FREE</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600 font-bold">GST (18%)</span>
//                   <span className="text-gray-800 font-bold">₹{Math.round(gstAmount).toLocaleString()}</span>
//                 </div>
//                 <div className="border-t border-gray-200 pt-3 mt-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-800 font-bold">Total Amount</span>
//                     <span className="text-green-600 text-lg font-bold">₹{Math.round(orderDetails.total).toLocaleString()}</span>
//                   </div>
//                   <p className="text-xs text-green-600 font-bold mt-1">✓ Inclusive of all taxes</p>
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method Card */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-4 border-b border-gray-200">
//                 <h3 className="font-bold text-gray-800">Payment Method</h3>
//               </div>
//               <div className="p-4">
//                 <div className="flex items-center gap-3">
//                   <span className="text-2xl">
//                     {orderDetails.paymentMethod === "cod" ? "💵" : 
//                      orderDetails.paymentMethod === "card" ? "💳" : "📱"}
//                   </span>
//                   <div>
//                     <p className="font-bold text-gray-800">
//                       {orderDetails.paymentMethod === "cod" ? "Cash on Delivery" : 
//                        orderDetails.paymentMethod === "card" ? "Credit/Debit Card" : "UPI / Wallet"}
//                     </p>
//                     <p className="text-xs text-gray-500 font-semibold">
//                       {orderDetails.paymentMethod === "cod" ? "Pay when delivered" : "Payment completed"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Need Help Card */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-4">
//                 <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
//                 <div className="space-y-2 text-sm">
//                   <a href="#" className="text-blue-600 block hover:text-blue-700 font-bold">
//                     📞 +91-1800-123-4567
//                   </a>
//                   <a href="#" className="text-blue-600 block hover:text-blue-700 font-bold">
//                     ✉️ support@ftprocess.com
//                   </a>
//                   <Link to="#" className="text-blue-600 block hover:text-blue-700 font-bold">
//                     💬 Live Chat
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons - Flipkart Style */}
//         <div className="flex gap-4 mt-6">
//           <Link
//             to="/products"
//             className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-bold text-center hover:bg-blue-700 transition"
//           >
//             Continue Shopping
//           </Link>
//           <Link
//             to="/"
//             className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-gray-200 transition"
//           >
//             Go to Homepage
//           </Link>
//           <button
//             onClick={() => window.print()}
//             className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-gray-200 transition"
//           >
//             Download Invoice
//           </button>
//         </div>

//         {/* Download App Banner - Flipkart Style */}
//         <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-white">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-3">
//               <span className="text-3xl">📱</span>
//               <div>
//                 <p className="font-bold">Track your order on the go!</p>
//                 <p className="text-sm font-semibold opacity-90">Download the ftProcess App for real-time updates</p>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold">
//                 Google Play
//               </button>
//               <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold">
//                 App Store
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface OrderDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: string;
  total: number;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }>;
  orderDate?: string;
  orderId?: string;
}

type OrderStatus = "confirmed" | "processing" | "shipped" | "out_for_delivery" | "delivered";

export default function OrderSuccess() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>("confirmed");

  useEffect(() => {
    const savedOrder = localStorage.getItem("orderDetails");
    
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);
      setOrderDetails(parsedOrder);
      
      const orderDate = parsedOrder.orderDate ? new Date(parsedOrder.orderDate) : new Date();
      const today = new Date();
      const daysSinceOrder = Math.floor((today.getTime() - orderDate.getTime()) / (1000 * 3600 * 24));
      
      if (daysSinceOrder >= 6) setCurrentStatus("delivered");
      else if (daysSinceOrder >= 4) setCurrentStatus("out_for_delivery");
      else if (daysSinceOrder >= 2) setCurrentStatus("shipped");
      else if (daysSinceOrder >= 1) setCurrentStatus("processing");
      else setCurrentStatus("confirmed");
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-3 text-sm font-bold text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  const orderId = orderDetails.orderId || "ORD" + Date.now();
  const orderDate = orderDetails.orderDate 
    ? new Date(orderDetails.orderDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const shippingAmount = 499;
  const gstAmount = orderDetails.total * 0.18;

  const steps = [
    { key: "confirmed", label: "Order Confirmed", icon: "✓", date: orderDate },
    { key: "processing", label: "Processing", icon: "⚙️", date: "1 day after order" },
    { key: "shipped", label: "Shipped", icon: "🚚", date: "2 days after order" },
    { key: "out_for_delivery", label: "Out for Delivery", icon: "📦", date: "4 days after order" },
    { key: "delivered", label: "Delivered", icon: "🏠", date: "6 days after order" }
  ];

  const getCurrentStepIndex = () => {
    switch(currentStatus) {
      case "confirmed": return 0;
      case "processing": return 1;
      case "shipped": return 2;
      case "out_for_delivery": return 3;
      case "delivered": return 4;
      default: return 0;
    }
  };

  const getDeliveryDate = () => {
    const orderDateObj = orderDetails.orderDate ? new Date(orderDetails.orderDate) : new Date();
    const deliveryDate = new Date(orderDateObj);
    deliveryDate.setDate(orderDateObj.getDate() + 6);
    return deliveryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with progress - Flipkart Style */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex items-center gap-4 text-sm font-bold">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-bold">Home</Link>
            <span className="text-gray-400">›</span>
            <Link to="/products" className="text-gray-600 hover:text-blue-600 font-bold">Products</Link>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-bold">Order Success</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-6">
        
        {/* Success Message - Flipkart Style */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-green-800">Order placed successfully!</h2>
              <p className="text-sm font-semibold text-green-700">Thank you for shopping with ftProcess</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout - Flipkart Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN - Tracking Timeline (Flipkart Style) */}
          <div className="lg:col-span-2">
            {/* Order ID Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 font-bold">ORDER ID</p>
                    <p className="font-mono text-sm font-bold text-gray-800">{orderId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold">ORDER DATE</p>
                    <p className="text-sm font-bold text-gray-800">{orderDate}</p>
                  </div>
                </div>
              </div>
              
              {/* Flipkart Style Tracking Timeline */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800 text-lg">Track Order</h3>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold">Expected Delivery</p>
                    <p className="text-sm font-bold text-green-600">{getDeliveryDate()}</p>
                  </div>
                </div>

                {/* Timeline Steps - Flipkart Style */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {steps.map((step, idx) => {
                    const isCompleted = idx <= getCurrentStepIndex();
                    const isCurrent = idx === getCurrentStepIndex();
                    
                    return (
                      <div key={idx} className="relative flex gap-4 mb-8 last:mb-0">
                        {/* Icon Circle */}
                        <div className="relative z-10">
                          <div className={`
                            w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
                            ${isCompleted ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}
                            ${isCurrent ? 'ring-4 ring-blue-100' : ''}
                          `}>
                            {isCompleted ? (
                              step.key === "delivered" ? "🏠" : step.icon
                            ) : (
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            )}
                          </div>
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className={`font-bold ${isCompleted ? 'text-gray-800' : 'text-gray-400'}`}>
                                {step.label}
                              </p>
                              <p className="text-xs text-gray-500 font-semibold mt-0.5">
                                {idx === 0 ? orderDate : 
                                 idx === 1 ? "Estimated: Tomorrow" :
                                 idx === 2 ? "Estimated: 2 days" :
                                 idx === 3 ? "Estimated: 4 days" :
                                 "Estimated: 6 days"}
                              </p>
                            </div>
                            {isCurrent && (
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                                Current
                              </span>
                            )}
                          </div>
                          
                          {isCurrent && currentStatus === "out_for_delivery" && (
                            <div className="mt-2 p-2 bg-orange-50 rounded text-xs font-bold text-orange-700">
                              🚚 Your order is out for delivery! Expect it today.
                            </div>
                          )}
                          
                          {isCurrent && currentStatus === "delivered" && (
                            <div className="mt-2 p-2 bg-green-50 rounded text-xs font-bold text-green-700">
                              ✅ Order delivered successfully! Hope you enjoy your purchase.
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Delivery Partner Info - Flipkart Style */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">🚚</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold">Delivery Partner</p>
                        <p className="text-sm font-bold text-gray-800">ftProcess Logistics</p>
                      </div>
                    </div>
                    <Link to="#" className="text-xs text-blue-600 hover:text-blue-700 font-bold">
                      Track on map →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items - Flipkart Style */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-800">Order Items ({orderDetails.items.length})</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {orderDetails.items.map((item, idx) => (
                  <div key={idx} className="p-4 flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-3xl">🛍️</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500 font-semibold mt-1">Quantity: {item.quantity}</p>
                      <p className="text-sm font-bold text-gray-800 mt-1">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{(item.price * item.quantity).toLocaleString()}</p>
                      <Link to="#" className="text-xs text-blue-600 hover:text-blue-700 font-bold mt-1 block">
                        Rate & Review
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Order Summary (Flipkart Style) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Delivery Address Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <span>📍</span> Delivery Address
                </h3>
              </div>
              <div className="p-4">
                <p className="font-bold text-gray-800">{orderDetails.fullName}</p>
                <p className="text-sm text-gray-600 font-semibold mt-1">{orderDetails.address}</p>
                <p className="text-sm text-gray-600 font-semibold">{orderDetails.city}, {orderDetails.state} - {orderDetails.pincode}</p>
                <p className="text-sm text-gray-600 font-bold mt-2">📞 {orderDetails.phone}</p>
              </div>
            </div>

            {/* Price Details Card - Flipkart Style */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-800">Price Details</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-bold">Total MRP</span>
                  <span className="text-gray-800 font-bold">₹{Math.round(orderDetails.total).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-bold">Discount on MRP</span>
                  <span className="text-green-600 font-bold">- ₹0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-bold">Shipping Fee</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-bold">GST (18%)</span>
                  <span className="text-gray-800 font-bold">₹{Math.round(gstAmount).toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex justify-between">
                    <span className="text-gray-800 font-bold">Total Amount</span>
                    <span className="text-green-600 text-lg font-bold">₹{Math.round(orderDetails.total).toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-green-600 font-bold mt-1">✓ Inclusive of all taxes</p>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-800">Payment Method</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {orderDetails.paymentMethod === "cod" ? "💵" : 
                     orderDetails.paymentMethod === "card" ? "💳" : "📱"}
                  </span>
                  <div>
                    <p className="font-bold text-gray-800">
                      {orderDetails.paymentMethod === "cod" ? "Cash on Delivery" : 
                       orderDetails.paymentMethod === "card" ? "Credit/Debit Card" : "UPI / Wallet"}
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">
                      {orderDetails.paymentMethod === "cod" ? "Pay when delivered" : "Payment completed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="text-blue-600 block hover:text-blue-700 font-bold">
                    📞 +91-1800-123-4567
                  </a>
                  <a href="#" className="text-blue-600 block hover:text-blue-700 font-bold">
                    ✉️ support@ftprocess.com
                  </a>
                  <Link to="#" className="text-blue-600 block hover:text-blue-700 font-bold">
                    💬 Live Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Flipkart Style */}
        <div className="flex gap-4 mt-6">
          <Link
            to="/products"
            className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-bold text-center hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-gray-200 transition"
          >
            Go to Homepage
          </Link>
          <button
            onClick={() => window.print()}
            className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-gray-200 transition"
          >
            Download Invoice
          </button>
        </div>

        {/* Download App Banner - Flipkart Style */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📱</span>
              <div>
                <p className="font-bold">Track your order on the go!</p>
                <p className="text-sm font-semibold opacity-90">Download the ftProcess App for real-time updates</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold">
                Google Play
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold">
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
