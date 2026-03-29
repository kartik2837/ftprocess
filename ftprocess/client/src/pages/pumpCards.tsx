import React from "react";
import { Link } from "react-router-dom";
import chemicals from '../assets/chemicals.jpg'
import food from '../assets/food-beverage.jpg'
import industrials from '../assets/industrial.jpg'
import pharma from '../assets/pharmastic.jpg'
import mining from '../assets/mining.jpg'
import paint from '../assets/paint-dyies.jpg'
import cnc from '../assets/40.jpeg'
import lathe from '../assets/41.jpeg'
import metal from '../assets/42.jpeg'

interface Pump {
  id: number;
  name: string;
  image: string;
  link: string;
  description?: string;
  specs?: string[];
}

const PumpCards: React.FC = () => {
  const pumps: Pump[] = [
    { 
      id: 1, 
      name: "Chemicals", 
      image: chemicals, 
      link: "/products/Chemicals",
    },
    { 
      id: 2, 
      name: "Food Processing", 
      image: food, 
      link: "/products/diaphragm",
    },
    { 
      id: 3, 
      name: "Industrial ", 
      image: industrials, 
      link: "/products/high-pressure",
    },
    { 
      id: 4, 
      name: "Pharma", 
      image: pharma, 
      link: "/products/submersible",
    },
    { 
      id: 5, 
      name: "Mining Industry", 
      image: mining, 
      link: "/products/gear",
    },
    { 
      id: 6, 
      name: "Paints, Dyes & Chemicals", 
      image: paint, 
      link: "/products/vacuum",
    },
    { 
      id: 7, 
      name: "CNC Milling Machine", 
      image: cnc, 
      link: "/products/magnetic-drive",
    },
    { 
      id: 8, 
      name: "CNC Lathe Machine", 
      image: lathe, 
      link: "/products/peristaltic",
    },
    { 
      id: 9, 
      name: "Metal Machining", 
      image: metal, 
      link: "/products/dosing",
    },
  ];

  // Add animation styles
  const animationStyle = `
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* HEADING SECTION */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-semibold">Premium Quality</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Industrial{" "}
              <span className="text-orange-500 relative inline-block">
                Pump Range
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C67.5 2.5 132.5 2.5 199 5.5" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Discover our comprehensive range of industrial pumps engineered for reliability, 
              efficiency, and performance across all industries.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pumps.map((pump, index) => (
              <Link
                to={pump.link}
                key={pump.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{
                  animation: `fadeUp 0.6s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* IMAGE SECTION */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={pump.image}
                    alt={pump.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform -translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    {index < 3 ? "Best Seller" : "New"}
                  </div>
                  
                  {/* View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-5">
                  {/* NAME */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition text-center">
                    {pump.name}
                  </h3>
                  
                  {/* BUTTON */}
                  <div className="flex items-center justify-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all mt-4">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* DECORATIVE BORDER */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          {/* VIEW ALL BUTTON */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PumpCards;