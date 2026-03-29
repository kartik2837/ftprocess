import React from "react";
import { Link } from "react-router-dom";
import banner from '../assets/7.jpeg'

const SideSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Premium Quality</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Industrial Pump <span className="text-orange-500">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* IMAGE SECTION */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-500">
              <img
                src={banner}
                alt="Industrial Pump"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New Arrival
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                <i className="fas fa-star text-yellow-400 mr-1"></i> 4.9 Rating
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="space-y-6 h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-semibold">Industry Leading Quality</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                High Performance Industrial <span className="text-orange-500">Process Pumps</span>
              </h3>
              
              <div className="h-1 w-20 bg-orange-500 my-4 rounded-full"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                FT PROCESS SYSTEMS is one of Northern India's foremost Manufacturers, Exporters and Solutions Provider of high-performance pumps and related industrial products. Committed to delivering excellence, our mission is to provide unmatched customer service and access to an ever-growing range of reliable, cutting-edge solutions.

                Established by seasoned professionals with over a decade of experience in pump and system technology, FT PROCESS SYSTEMS has become a trusted name in the industry — known for innovation, quality, and customer-approach solutions... 
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">High Efficiency</h4>
                  <p className="text-sm text-gray-500">Up to 95% operational efficiency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Long Lifespan</h4>
                  <p className="text-sm text-gray-500">10+ years maintenance-free</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certified Quality</h4>
                  <p className="text-sm text-gray-500">ISO 9001, API 610 certified</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M9 12h6M6 18h12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="text-sm text-gray-500">Global service network</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-orange-500">5000+</p>
                <p className="text-xs text-gray-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-500">150+</p>
                <p className="text-xs text-gray-500">Countries Served</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-500">25+</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-semibold px-6 py-3 rounded-full transition-all duration-300"
              >
                Contact Sales
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideSection;