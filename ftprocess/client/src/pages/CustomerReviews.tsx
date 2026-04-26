// import React, { useState } from "react";

// interface Review {
//   id: number;
//   productId: number;
//   productName: string;
//   customerName: string;
//   customerAvatar?: string;
//   rating: number;
//   title: string;
//   comment: string;
//   date: string;
//   verified: boolean;
//   helpful: number;
// }

// const CustomerReviews: React.FC = () => {
//   const [reviews, setReviews] = useState<Review[]>([
//     {
//       id: 1,
//       productId: 1,
//       productName: "Centrifugal Pump",
//       customerName: "Michael Chen",
//       customerAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
//       rating: 5,
//       title: "Excellent performance and reliability",
//       comment: "This centrifugal pump exceeded our expectations. Installed it in our manufacturing plant and it's been running flawlessly for 6 months. Highly recommend!",
//       date: "2024-02-15",
//       verified: true,
//       helpful: 24
//     },
//     {
//       id: 2,
//       productId: 1,
//       productName: "Centrifugal Pump",
//       customerName: "Sarah Johnson",
//       customerAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
//       rating: 4,
//       title: "Great pump, but a bit noisy",
//       comment: "Very efficient pump, handles high flow rates well. Installation was straightforward. Only downside is it's slightly louder than expected.",
//       date: "2024-01-20",
//       verified: true,
//       helpful: 12
//     },
//     {
//       id: 3,
//       productId: 2,
//       productName: "Diaphragm Pump",
//       customerName: "David Williams",
//       customerAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
//       rating: 5,
//       title: "Perfect for chemical dosing",
//       comment: "The precision on this diaphragm pump is incredible. We use it for chemical dosing and it's been accurate within 0.5%. Great investment.",
//       date: "2024-02-10",
//       verified: true,
//       helpful: 18
//     },
//     {
//       id: 4,
//       productId: 3,
//       productName: "High Pressure Pump",
//       customerName: "Emily Rodriguez",
//       customerAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
//       rating: 5,
//       title: "Handles high pressure like a champ",
//       comment: "Needed a pump for our high-pressure system and this delivered. Construction is solid, no leaks, and performance is outstanding.",
//       date: "2024-01-28",
//       verified: true,
//       helpful: 31
//     },
//     {
//       id: 5,
//       productId: 4,
//       productName: "Submersible Pump",
//       customerName: "James Wilson",
//       customerAvatar: "https://randomuser.me/api/portraits/men/5.jpg",
//       rating: 4,
//       title: "Good submersible pump",
//       comment: "Works well for our dewatering needs. Build quality is good, but wish it came with a longer cable.",
//       date: "2024-02-05",
//       verified: true,
//       helpful: 9
//     },
//     {
//       id: 6,
//       productId: 5,
//       productName: "Gear Pump",
//       customerName: "Lisa Thompson",
//       customerAvatar: "https://randomuser.me/api/portraits/women/6.jpg",
//       rating: 5,
//       title: "Compact and powerful",
//       comment: "The gear pump is surprisingly compact but delivers great pressure. Perfect for our hydraulic system.",
//       date: "2024-02-18",
//       verified: true,
//       helpful: 15
//     },
//     {
//       id: 7,
//       productId: 6,
//       productName: "Vacuum Pump",
//       customerName: "Robert Martinez",
//       customerAvatar: "https://randomuser.me/api/portraits/men/7.jpg",
//       rating: 5,
//       title: "Excellent vacuum performance",
//       comment: "Achieved 0.1 mbar as advertised. Quiet operation and oil-free design is a huge plus for our clean room.",
//       date: "2024-01-25",
//       verified: true,
//       helpful: 27
//     },
//     {
//       id: 8,
//       productId: 7,
//       productName: "Magnetic Drive Pump",
//       customerName: "Amanda Lee",
//       customerAvatar: "https://randomuser.me/api/portraits/women/8.jpg",
//       rating: 5,
//       title: "Zero leakage, perfect for chemicals",
//       comment: "The magnetic drive design gives us peace of mind with hazardous chemicals. No leaks after 3 months of continuous use.",
//       date: "2024-02-12",
//       verified: true,
//       helpful: 22
//     },
//     {
//       id: 9,
//       productId: 8,
//       productName: "Peristaltic Pump",
//       customerName: "Thomas Anderson",
//       customerAvatar: "https://randomuser.me/api/portraits/men/9.jpg",
//       rating: 4,
//       title: "Good for sensitive fluids",
//       comment: "Works well with shear-sensitive fluids. The peristaltic action is gentle and maintains product integrity.",
//       date: "2024-02-08",
//       verified: true,
//       helpful: 14
//     },
//     {
//       id: 10,
//       productId: 9,
//       productName: "Dosing Pump",
//       customerName: "Jennifer Lee",
//       customerAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
//       rating: 5,
//       title: "Precise dosing every time",
//       comment: "Accuracy is spot on. We use this for chemical injection and it delivers consistent results every batch.",
//       date: "2024-02-01",
//       verified: true,
//       helpful: 19
//     },
//     {
//       id: 11,
//       productId: 10,
//       productName: "Slurry Pump",
//       customerName: "Mark Taylor",
//       customerAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
//       rating: 4,
//       title: "Handles abrasive materials well",
//       comment: "Built tough for slurry applications. Has been running for 4 months with minimal wear on components.",
//       date: "2024-01-18",
//       verified: true,
//       helpful: 11
//     }
//   ]);

//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState("");
//   const [newReview, setNewReview] = useState({
//     productName: "",
//     rating: 5,
//     title: "",
//     comment: "",
//     customerName: ""
//   });
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [filterRating, setFilterRating] = useState<number | null>(null);
//   const [sortBy, setSortBy] = useState<"recent" | "helpful" | "rating">("recent");

//   const productsList = [
//     "Centrifugal Pump",
//     "Diaphragm Pump",
//     "High Pressure Pump",
//     "Submersible Pump",
//     "Gear Pump",
//     "Vacuum Pump",
//     "Magnetic Drive Pump",
//     "Peristaltic Pump",
//     "Dosing Pump",
//     "Slurry Pump"
//   ];

//   const handleHelpful = (reviewId: number) => {
//     setReviews(reviews.map(review => 
//       review.id === reviewId 
//         ? { ...review, helpful: review.helpful + 1 }
//         : review
//     ));
//     setToastMessage("Thanks for your feedback!");
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 2000);
//   };

//   const handleReviewSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newReview.productName && newReview.comment && newReview.title && newReview.customerName) {
//       const newReviewObj: Review = {
//         id: reviews.length + 1,
//         productId: reviews.length + 1,
//         productName: newReview.productName,
//         customerName: newReview.customerName,
//         rating: newReview.rating,
//         title: newReview.title,
//         comment: newReview.comment,
//         date: new Date().toISOString().split('T')[0],
//         verified: false,
//         helpful: 0
//       };
//       setReviews([newReviewObj, ...reviews]);
//       setToastMessage("Thank you for your review! It's been submitted for verification.");
//       setShowToast(true);
//       setTimeout(() => setShowToast(false), 2000);
//       setShowReviewModal(false);
//       setNewReview({ productName: "", rating: 5, title: "", comment: "", customerName: "" });
//     }
//   };

//   const renderStars = (rating: number, size: string = "w-4 h-4") => {
//     return (
//       <div className="flex items-center gap-0.5">
//         {[...Array(5)].map((_, i) => (
//           <svg key={i} className={`${size} ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//         <span className="text-xs text-gray-500 ml-1">({rating})</span>
//       </div>
//     );
//   };

//   const getStatistics = () => {
//     const totalReviews = reviews.length;
//     const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
//     const ratingDistribution = [0, 0, 0, 0, 0];
//     reviews.forEach(review => {
//       ratingDistribution[review.rating - 1]++;
//     });
//     return { totalReviews, averageRating, ratingDistribution };
//   };

//   const stats = getStatistics();

//   const filteredReviews = reviews.filter(review => 
//     filterRating ? review.rating === filterRating : true
//   );

//   const sortedReviews = [...filteredReviews].sort((a, b) => {
//     if (sortBy === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime();
//     if (sortBy === "helpful") return b.helpful - a.helpful;
//     if (sortBy === "rating") return b.rating - a.rating;
//     return 0;
//   });

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//             </svg>
//             <span className="text-sm font-semibold">Customer Testimonials</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             What Our <span className="text-orange-500">Customers Say</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Real reviews from satisfied customers who trust our industrial pumps for their critical applications.
//           </p>
//         </div>

//         {/* Statistics Section */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-orange-500 mb-2">{stats.totalReviews}</div>
//               <div className="text-gray-600">Total Reviews</div>
//             </div>
//             <div className="text-center">
//               <div className="flex justify-center mb-2">
//                 {renderStars(Math.round(stats.averageRating), "w-6 h-6")}
//               </div>
//               <div className="text-2xl font-bold text-gray-800">{stats.averageRating.toFixed(1)}</div>
//               <div className="text-gray-600">Average Rating</div>
//             </div>
//             <div className="text-center">
//               <div className="space-y-1">
//                 {[5, 4, 3, 2, 1].map(rating => (
//                   <div key={rating} className="flex items-center justify-center gap-2 text-sm">
//                     <span className="w-12">{rating} ★</span>
//                     <div className="w-32 bg-gray-200 rounded-full h-2">
//                       <div 
//                         className="bg-orange-500 rounded-full h-2" 
//                         style={{ width: `${(stats.ratingDistribution[rating-1] / stats.totalReviews) * 100}%` }}
//                       ></div>
//                     </div>
//                     <span className="text-gray-500 w-12">{stats.ratingDistribution[rating-1]}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filter and Sort Section */}
//         <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
//           <div className="flex gap-2">
//             <button
//               onClick={() => setFilterRating(null)}
//               className={`px-4 py-2 rounded-lg transition duration-300 ${
//                 filterRating === null 
//                   ? 'bg-orange-500 text-white' 
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               All
//             </button>
//             {[5, 4, 3, 2, 1].map(rating => (
//               <button
//                 key={rating}
//                 onClick={() => setFilterRating(rating)}
//                 className={`px-4 py-2 rounded-lg transition duration-300 flex items-center gap-1 ${
//                   filterRating === rating 
//                     ? 'bg-orange-500 text-white' 
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {rating} ★
//               </button>
//             ))}
//           </div>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value as any)}
//             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//           >
//             <option value="recent">Most Recent</option>
//             <option value="helpful">Most Helpful</option>
//             <option value="rating">Highest Rated</option>
//           </select>
//         </div>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {sortedReviews.map((review) => (
//             <div 
//               key={review.id} 
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-1"
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   {review.customerAvatar ? (
//                     <img src={review.customerAvatar} alt={review.customerName} className="w-12 h-12 rounded-full object-cover" />
//                   ) : (
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
//                       {review.customerName.charAt(0)}
//                     </div>
//                   )}
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
//                     <div className="flex items-center gap-2">
//                       {renderStars(review.rating, "w-3 h-3")}
//                       <span className="text-xs text-gray-500">{review.date}</span>
//                     </div>
//                   </div>
//                 </div>
//                 {review.verified && (
//                   <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     Verified
//                   </span>
//                 )}
//               </div>
//               <h5 className="font-semibold text-gray-800 mb-2 text-lg">{review.title}</h5>
//               <p className="text-gray-600 text-sm mb-3 line-clamp-3">{review.comment}</p>
//               <div className="text-xs text-gray-500 mb-3">
//                 <span className="font-medium">Product:</span> {review.productName}
//               </div>
//               <button
//                 onClick={() => handleHelpful(review.id)}
//                 className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-500 transition group"
//               >
//                 <svg className="w-4 h-4 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                 </svg>
//                 Helpful ({review.helpful})
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Write a Review Button */}
//         <div className="text-center">
//           <button
//             onClick={() => setShowReviewModal(true)}
//             className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//             </svg>
//             Write a Review
//           </button>
//         </div>

//         {/* Write Review Modal */}
//         {showReviewModal && (
//           <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowReviewModal(false)}>
//             <div className="bg-white rounded-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold">Write a Review</h3>
//                 <button onClick={() => setShowReviewModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">&times;</button>
//               </div>
//               <form onSubmit={handleReviewSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
//                   <select
//                     value={newReview.productName}
//                     onChange={(e) => setNewReview({ ...newReview, productName: e.target.value })}
//                     className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     required
//                   >
//                     <option value="">Choose a product</option>
//                     {productsList.map(product => (
//                       <option key={product} value={product}>{product}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     value={newReview.customerName}
//                     onChange={(e) => setNewReview({ ...newReview, customerName: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
//                   <div className="flex gap-2">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <button
//                         key={star}
//                         type="button"
//                         onClick={() => setNewReview({ ...newReview, rating: star })}
//                         className="focus:outline-none"
//                       >
//                         <svg className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'} transition hover:scale-110`} fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Review Title"
//                   className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   value={newReview.title}
//                   onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
//                   required
//                 />
//                 <textarea
//                   placeholder="Your Review"
//                   rows={4}
//                   className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   value={newReview.comment}
//                   onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                   required
//                 ></textarea>
//                 <div className="flex gap-3">
//                   <button type="submit" className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold">Submit Review</button>
//                   <button type="button" onClick={() => setShowReviewModal(false)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition font-semibold">Cancel</button>
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
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
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
//       `}</style>
//     </section>
//   );
// };

// export default CustomerReviews;











import React, { useState } from "react";

interface Review {
  id: number;
  productId: number;
  productName: string;
  customerName: string;
  customerAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      productId: 1,
      productName: "Centrifugal Pump",
      customerName: "Michael Chen",
      customerAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      title: "Excellent performance and reliability",
      comment: "This centrifugal pump exceeded our expectations. Installed it in our manufacturing plant and it's been running flawlessly for 6 months. Highly recommend!",
      date: "2024-02-15",
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      productId: 1,
      productName: "Centrifugal Pump",
      customerName: "Sarah Johnson",
      customerAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      title: "Great pump, but a bit noisy",
      comment: "Very efficient pump, handles high flow rates well. Installation was straightforward. Only downside is it's slightly louder than expected.",
      date: "2024-01-20",
      verified: true,
      helpful: 12
    },
    {
      id: 3,
      productId: 2,
      productName: "Diaphragm Pump",
      customerName: "David Williams",
      customerAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      title: "Perfect for chemical dosing",
      comment: "The precision on this diaphragm pump is incredible. We use it for chemical dosing and it's been accurate within 0.5%. Great investment.",
      date: "2024-02-10",
      verified: true,
      helpful: 18
    },
    {
      id: 4,
      productId: 3,
      productName: "High Pressure Pump",
      customerName: "Emily Rodriguez",
      customerAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      title: "Handles high pressure like a champ",
      comment: "Needed a pump for our high-pressure system and this delivered. Construction is solid, no leaks, and performance is outstanding.",
      date: "2024-01-28",
      verified: true,
      helpful: 31
    },
    {
      id: 5,
      productId: 4,
      productName: "Submersible Pump",
      customerName: "James Wilson",
      customerAvatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4,
      title: "Good submersible pump",
      comment: "Works well for our dewatering needs. Build quality is good, but wish it came with a longer cable.",
      date: "2024-02-05",
      verified: true,
      helpful: 9
    },
    {
      id: 6,
      productId: 5,
      productName: "Gear Pump",
      customerName: "Lisa Thompson",
      customerAvatar: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 5,
      title: "Compact and powerful",
      comment: "The gear pump is surprisingly compact but delivers great pressure. Perfect for our hydraulic system.",
      date: "2024-02-18",
      verified: true,
      helpful: 15
    },
    {
      id: 7,
      productId: 6,
      productName: "Vacuum Pump",
      customerName: "Robert Martinez",
      customerAvatar: "https://randomuser.me/api/portraits/men/7.jpg",
      rating: 5,
      title: "Excellent vacuum performance",
      comment: "Achieved 0.1 mbar as advertised. Quiet operation and oil-free design is a huge plus for our clean room.",
      date: "2024-01-25",
      verified: true,
      helpful: 27
    },
    {
      id: 8,
      productId: 7,
      productName: "Magnetic Drive Pump",
      customerName: "Amanda Lee",
      customerAvatar: "https://randomuser.me/api/portraits/women/8.jpg",
      rating: 5,
      title: "Zero leakage, perfect for chemicals",
      comment: "The magnetic drive design gives us peace of mind with hazardous chemicals. No leaks after 3 months of continuous use.",
      date: "2024-02-12",
      verified: true,
      helpful: 22
    },
    {
      id: 9,
      productId: 8,
      productName: "Peristaltic Pump",
      customerName: "Thomas Anderson",
      customerAvatar: "https://randomuser.me/api/portraits/men/9.jpg",
      rating: 4,
      title: "Good for sensitive fluids",
      comment: "Works well with shear-sensitive fluids. The peristaltic action is gentle and maintains product integrity.",
      date: "2024-02-08",
      verified: true,
      helpful: 14
    },
    {
      id: 10,
      productId: 9,
      productName: "Dosing Pump",
      customerName: "Jennifer Lee",
      customerAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
      rating: 5,
      title: "Precise dosing every time",
      comment: "Accuracy is spot on. We use this for chemical injection and it delivers consistent results every batch.",
      date: "2024-02-01",
      verified: true,
      helpful: 19
    },
    {
      id: 11,
      productId: 10,
      productName: "Slurry Pump",
      customerName: "Mark Taylor",
      customerAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 4,
      title: "Handles abrasive materials well",
      comment: "Built tough for slurry applications. Has been running for 4 months with minimal wear on components.",
      date: "2024-01-18",
      verified: true,
      helpful: 11
    }
  ]);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    productName: "",
    rating: 5,
    title: "",
    comment: "",
    customerName: ""
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"recent" | "helpful" | "rating">("recent");

  const productsList = [
    "Centrifugal Pump",
    "Diaphragm Pump",
    "High Pressure Pump",
    "Submersible Pump",
    "Gear Pump",
    "Vacuum Pump",
    "Magnetic Drive Pump",
    "Peristaltic Pump",
    "Dosing Pump",
    "Slurry Pump"
  ];

  const handleHelpful = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
    setToastMessage("Thanks for your feedback!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.productName && newReview.comment && newReview.title && newReview.customerName) {
      const newReviewObj: Review = {
        id: reviews.length + 1,
        productId: reviews.length + 1,
        productName: newReview.productName,
        customerName: newReview.customerName,
        rating: newReview.rating,
        title: newReview.title,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        verified: false,
        helpful: 0
      };
      setReviews([newReviewObj, ...reviews]);
      setToastMessage("Thank you for your review! It's been submitted for verification.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      setShowReviewModal(false);
      setNewReview({ productName: "", rating: 5, title: "", comment: "", customerName: "" });
    }
  };

  const renderStars = (rating: number, size: string = "w-4 h-4") => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`${size} ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-xs text-gray-500 ml-1">({rating})</span>
      </div>
    );
  };

  const getStatistics = () => {
    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
    const ratingDistribution = [0, 0, 0, 0, 0];
    reviews.forEach(review => {
      ratingDistribution[review.rating - 1]++;
    });
    return { totalReviews, averageRating, ratingDistribution };
  };

  const stats = getStatistics();

  const filteredReviews = reviews.filter(review => 
    filterRating ? review.rating === filterRating : true
  );

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === "helpful") return b.helpful - a.helpful;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-sm font-semibold">Customer Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real reviews from satisfied customers who trust our industrial pumps for their critical applications.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">{stats.totalReviews}</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(stats.averageRating), "w-6 h-6")}
              </div>
              <div className="text-2xl font-bold text-gray-800">{stats.averageRating.toFixed(1)}</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="space-y-1">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center justify-center gap-2 text-sm">
                    <span className="w-12">{rating} ★</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 rounded-full h-2" 
                        style={{ width: `${(stats.ratingDistribution[rating-1] / stats.totalReviews) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-500 w-12">{stats.ratingDistribution[rating-1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Sort Section */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setFilterRating(null)}
              className={`px-4 py-2 rounded-lg transition duration-300 ${
                filterRating === null 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {[5, 4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                onClick={() => setFilterRating(rating)}
                className={`px-4 py-2 rounded-lg transition duration-300 flex items-center gap-1 ${
                  filterRating === rating 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {rating} ★
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sortedReviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {review.customerAvatar ? (
                    <img src={review.customerAvatar} alt={review.customerName} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                      {review.customerName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                    <div className="flex items-center gap-2">
                      {renderStars(review.rating, "w-3 h-3")}
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                {review.verified && (
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>
              <h5 className="font-semibold text-gray-800 mb-2 text-lg">{review.title}</h5>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{review.comment}</p>
              <div className="text-xs text-gray-500 mb-3">
                <span className="font-medium">Product:</span> {review.productName}
              </div>
              <button
                onClick={() => handleHelpful(review.id)}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-500 transition group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                Helpful ({review.helpful})
              </button>
            </div>
          ))}
        </div>

        {/* Write a Review Button */}
        <div className="text-center">
          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Write a Review
          </button>
        </div>

        {/* Write Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowReviewModal(false)}>
            <div className="bg-white rounded-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Write a Review</h3>
                <button onClick={() => setShowReviewModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">&times;</button>
              </div>
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
                  <select
                    value={newReview.productName}
                    onChange={(e) => setNewReview({ ...newReview, productName: e.target.value })}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Choose a product</option>
                    {productsList.map(product => (
                      <option key={product} value={product}>{product}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={newReview.customerName}
                    onChange={(e) => setNewReview({ ...newReview, customerName: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="focus:outline-none"
                      >
                        <svg className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'} transition hover:scale-110`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Review Title"
                  className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Your Review"
                  rows={4}
                  className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                ></textarea>
                <div className="flex gap-3">
                  <button type="submit" className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold">Submit Review</button>
                  <button type="button" onClick={() => setShowReviewModal(false)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition font-semibold">Cancel</button>
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
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
      `}</style>
    </section>
  );
};

export default CustomerReviews;
