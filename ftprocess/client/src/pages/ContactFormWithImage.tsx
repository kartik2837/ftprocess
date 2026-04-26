// import React, { useState } from "react";

// interface ContactFormProps {
//   title?: string;
//   subtitle?: string;
//   imageSrc?: string;
//   imageAlt?: string;
//   buttonText?: string;
//   onSubmit?: (formData: FormData) => void;
// }

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   subject: string;
// }

// const ContactFormWithImage: React.FC<ContactFormProps> = ({
//   title = "Get In Touch",
//   subtitle = "We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.",
//   imageSrc = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3783?w=800&auto=format",
//   imageAlt = "Industrial Pump",
//   buttonText = "Send Message",
//   onSubmit
// }) => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     subject: ""
//   });

//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

//   const validateForm = (): boolean => {
//     const newErrors: Partial<FormData> = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
    
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid phone number";
//     }
    
//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//     }
    
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error for this field when user starts typing
//     if (errors[name as keyof FormData]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsSubmitting(true);
//     setSubmitStatus(null);
    
//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       if (onSubmit) {
//         onSubmit(formData);
//       }
      
//       setSubmitStatus({
//         type: 'success',
//         message: 'Thank you for contacting us! We will get back to you soon.'
//       });
      
//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//         subject: ""
//       });
      
//       // Clear success message after 5 seconds
//       setTimeout(() => setSubmitStatus(null), 5000);
//     } catch (error) {
//       setSubmitStatus({
//         type: 'error',
//         message: 'Something went wrong. Please try again later.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Image */}
//           <div className="relative order-2 lg:order-1">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
//               <img
//                 src='/ft1.png'
//                 alt={imageAlt}
//                 className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
//               {/* Overlay Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-12 h-0.5 bg-orange-500"></div>
//                   <span className="text-sm font-semibold tracking-wider">INDUSTRIAL SOLUTIONS</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">Premium Quality Products</h3>
//                 <p className="text-sm opacity-90">Trusted by industry leaders worldwide</p>
//               </div>
//             </div>
            
//             {/* Decorative Elements */}
//             <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-10 blur-2xl"></div>
//             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="order-1 lg:order-2">
//             <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
//               <div className="text-center mb-8">
//                 <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <span className="text-sm font-semibold">Contact Us</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//                   {title}
//                 </h2>
//                 <p className="text-gray-600">
//                   {subtitle}
//                 </p>
//               </div>

//               {/* Contact Info Bar */}
//               <div className="grid grid-cols-3 gap-3 mb-8">
//                 <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition group">
//                   <svg className="w-6 h-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <p className="text-xs text-gray-600">+1 (555) 123-4567</p>
//                 </div>
//                 <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition group">
//                   <svg className="w-6 h-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <p className="text-xs text-gray-600">info@industrialpumps.com</p>
//                 </div>
//                 <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition group">
//                   <svg className="w-6 h-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   <p className="text-xs text-gray-600">New York, USA</p>
//                 </div>
//               </div>

//               {/* Success/Error Message */}
//               {submitStatus && (
//                 <div className={`mb-6 p-4 rounded-lg ${
//                   submitStatus.type === 'success' 
//                     ? 'bg-green-50 border border-green-200 text-green-700' 
//                     : 'bg-red-50 border border-red-200 text-red-700'
//                 }`}>
//                   <div className="flex items-center gap-2">
//                     {submitStatus.type === 'success' ? (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     ) : (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     )}
//                     <span className="text-sm">{submitStatus.message}</span>
//                   </div>
//                 </div>
//               )}

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
//                         errors.name ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                       placeholder="John Doe"
//                     />
//                     {errors.name && (
//                       <p className="mt-1 text-xs text-red-500">{errors.name}</p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
//                         errors.email ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                       placeholder="john@example.com"
//                     />
//                     {errors.email && (
//                       <p className="mt-1 text-xs text-red-500">{errors.email}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
//                         errors.phone ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                       placeholder="+1 (555) 123-4567"
//                     />
//                     {errors.phone && (
//                       <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Subject *
//                     </label>
//                     <select
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
//                         errors.subject ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     >
//                       <option value="">Select a subject</option>
//                       <option value="Product Inquiry">Product Inquiry</option>
//                       <option value="Technical Support">Technical Support</option>
//                       <option value="Sales">Sales</option>
//                       <option value="General Question">General Question</option>
//                       <option value="Partnership">Partnership</option>
//                     </select>
//                     {errors.subject && (
//                       <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     name="message"
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none ${
//                       errors.message ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     placeholder="Tell us about your requirements..."
//                   ></textarea>
//                   {errors.message && (
//                     <p className="mt-1 text-xs text-red-500">{errors.message}</p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       {buttonText}
//                       <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </>
//                   )}
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-4">
//                   By submitting this form, you agree to our privacy policy and terms of service.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFormWithImage;








import React, { useState } from "react";
import  replace from '../assets/replace.jpeg'

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

const ContactFormWithImage: React.FC<ContactFormProps> = ({
  title = "Get In Touch",
  subtitle = "We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.",
  // imageSrc = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3783?w=800&auto=format",
  imageAlt = "Industrial Pump",
  buttonText = "Send Message",
  onSubmit
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image (Full Height) */}
          <div className="relative order-2 lg:order-1 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full">
              <img
                src={replace}
                alt={imageAlt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-12 h-0.5 bg-orange-500"></div>
                  <span className="text-sm font-semibold tracking-wider">INDUSTRIAL SOLUTIONS</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Premium Quality Products</h3>
                <p className="text-sm md:text-base opacity-90">Trusted by industry leaders worldwide</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                  <div>
                    <p className="text-xl md:text-2xl font-bold">5000+</p>
                    <p className="text-xs opacity-80">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold">150+</p>
                    <p className="text-xs opacity-80">Countries</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold">25+</p>
                    <p className="text-xs opacity-80">Years</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-full flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold">Contact Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {title}
                </h2>
                <p className="text-gray-600">
                  {subtitle}
                </p>
              </div>

              {/* Contact Info Bar */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition group">
                  <svg className="w-6 h-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-xs text-gray-600">+91 9312315676</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition group">
                  <svg className="w-6 h-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs text-gray-600">ft.services@ftprocess.com</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition group">
                  <svg className="w-6 h-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-xs text-gray-600">Noida, 201306, Uttar Pradesh</p>
                </div>
              </div>

              {/* Success/Error Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700' 
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  <div className="flex items-center gap-2">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Sales">Sales</option>
                      <option value="General Question">General Question</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      {buttonText}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormWithImage;