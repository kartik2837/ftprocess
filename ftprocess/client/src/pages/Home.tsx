// import React from "react";
// import Navbar from "../components/Navbar";
// import Banner from "./Banner";
// import SideSection from "./SideSection";
// import PumpCards from "./pumpCards";
// import ProductShowcase from "./ProductShowcase";
// import CustomerReviews from "./CustomerReviews";
// import ContactFormWithImage from "./ContactFormWithImage";
// import FtProcess from "./FtProcess";

// const Home: React.FC = () => {
//   return (
//     <div className="relative">
//       {/* Navbar - Fixed at top with high z-index */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Navbar />
//       </div>
      
//       {/* Main Content - Add padding top to prevent navbar overlap */}
//       <div className="pt-[70px] md:pt-[80px] lg:pt-[90px]">
//         <Banner />
//         <SideSection />
//         <PumpCards />
//         <ProductShowcase />
//         <ContactFormWithImage />
//         <CustomerReviews />
//         {/* <FtProcess /> */}
//       </div>
//     </div>
//   );
// };

// export default Home;



















import React from "react";
import Navbar from "../components/Navbar";
import Banner from "./Banner";
import SideSection from "./SideSection";
import PumpCards from "./pumpCards";
import ProductShowcase from "./ProductShowcase";
import CustomerReviews from "./CustomerReviews";
import ContactFormWithImage from "./ContactFormWithImage";

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Navbar - Fixed at top with high z-index */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Main Content - Add padding top to prevent navbar overlap */}
      <div className="pt-[70px] md:pt-[80px] lg:pt-[90px]">
        <Banner />
        <SideSection />
        <PumpCards />
        <ProductShowcase />
        <ContactFormWithImage />
        <CustomerReviews />
        {/* <FtProcess /> */}
      </div>
    </div>
  );
};

export default Home;
