// import React from 'react';

// interface FooterProps {
//   companyName?: string;
//   year?: number;
// }

// const FtProcess: React.FC<FooterProps> = ({ 
//   companyName = "Industrial Pumps Ltd.", 
//   year = new Date().getFullYear() 
// }) => {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Company Info */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold text-white">
//               Industrial<span className="text-blue-500">Pumps</span>
//             </h3>
//             <p className="text-sm leading-relaxed">
//               Leading manufacturer of high-performance industrial pumps, 
//               providing reliable solutions for over 25 years.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-blue-400 transition-colors">
//                 <span className="sr-only">Facebook</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
//                 </svg>
//               </a>
//               <a href="#" className="hover:text-blue-400 transition-colors">
//                 <span className="sr-only">LinkedIn</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                 </svg>
//               </a>
//               <a href="#" className="hover:text-blue-400 transition-colors">
//                 <span className="sr-only">Twitter</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.6-12.494c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
//               <li><a href="/products" className="hover:text-blue-400 transition-colors">Products</a></li>
//               <li><a href="/industries" className="hover:text-blue-400 transition-colors">Industries</a></li>
//               <li><a href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
//               <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
//             <ul className="space-y-2">
//               <li><a href="/centrifugal-pumps" className="hover:text-blue-400 transition-colors">Centrifugal Pumps</a></li>
//               <li><a href="/diaphragm-pumps" className="hover:text-blue-400 transition-colors">Diaphragm Pumps</a></li>
//               <li><a href="/gear-pumps" className="hover:text-blue-400 transition-colors">Gear Pumps</a></li>
//               <li><a href="/vacuum-pumps" className="hover:text-blue-400 transition-colors">Vacuum Pumps</a></li>
//               <li><a href="/submersible-pumps" className="hover:text-blue-400 transition-colors">Submersible Pumps</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start space-x-3">
//                 <svg className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <span> Plot No. 47, Knowledge Park 5, Near Ecotech III, Greater Noida, 201306, Uttar Pradesh </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span>+91 9312315676</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <span>ft.services@ftprocess.com</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="border-t border-gray-800 mt-8 pt-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
//             <div>
//               <h4 className="text-lg font-semibold text-white mb-2">Subscribe to Newsletter</h4>
//               <p className="text-sm">Get the latest updates on new products and industry insights</p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
//               />
//               <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-sm text-gray-400">
//               &copy; {year} {companyName}. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-sm">
//               <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 Terms & Conditions
//               </a>
//               <a href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 Sitemap
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FtProcess;








import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ft-process-logo.png'

interface FooterProps {
  year?: number;
}

const FtProcess: React.FC<FooterProps> = ({ 
  year = new Date().getFullYear() 
}) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - Updated to ftProcess branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div>
                {/* <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg> */}
              </div>
              <Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="ftprocess logo"
    className="h-20 md:h-24 w-auto object-contain"
  />
</Link>
            </div>
            <p className="text-sm leading-relaxed">
              Leading manufacturer of high-performance industrial pumps and systems, 
              providing reliable solutions for industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.6-12.494c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-l-3 border-orange-500 pl-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>About Us</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Products</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Services</Link></li>
              <li><Link to="/category/all" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Categories</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Contact</Link></li>
            </ul>
          </div>

          {/* Pump Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-l-3 border-orange-500 pl-3">Pump Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/centrifugal" className="hover:text-orange-500 transition-colors text-sm">Centrifugal Pumps</Link></li>
              <li><Link to="/category/diaphragm" className="hover:text-orange-500 transition-colors text-sm">Diaphragm Pumps</Link></li>
              <li><Link to="/category/high-pressure" className="hover:text-orange-500 transition-colors text-sm">High Pressure Pumps</Link></li>
              <li><Link to="/category/submersible" className="hover:text-orange-500 transition-colors text-sm">Submersible Pumps</Link></li>
              <li><Link to="/category/gear" className="hover:text-orange-500 transition-colors text-sm">Gear Pumps</Link></li>
              <li><Link to="/category/vacuum" className="hover:text-orange-500 transition-colors text-sm">Vacuum Pumps</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-l-3 border-orange-500 pl-3">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm"> Plot No. 47, Knowledge Park 5, Near Ecotech III, Greater Noida, 201306, Uttar Pradesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9312315676</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ft.services@ftprocess.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Subscribe to Newsletter</h4>
              <p className="text-sm">Get the latest updates on new products and industry insights</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white focus:ring-1 focus:ring-orange-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {year} ftProcess. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-orange-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for border-left */}
      <style>{`
        .border-l-3 {
          border-left-width: 3px;
        }
      `}</style>
    </footer>
  );
};

export default FtProcess;