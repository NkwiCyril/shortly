import React from "react";
import FeatureCard from "./FeatureCard";

import iconBrandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../assets/images/icon-detailed-records.svg";
import fullyCustomizableIcon from "../assets/images/icon-fully-customizable.svg";

const AdvancedStatisticsSection:React.FC = () => {
  return (
    <section className="container mx-auto px-5 text-center mt-28 pb-5">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">Advanced Statistics</h2>
      <p className="text-gray-400 max-w-lg mx-auto mb-20">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>

      <div className="relative">

        <div>
          <div className="md:block hidden absolute top-1/2 left-0 right-0 h-2 bg-cyan-500 z-0 transform -translate-y-1/2"></div>
          <div className="block md:hidden absolute top-0 bottom-0 left-1/2 w-2 bg-cyan-500 z-0 transform -translate-x-1/2"></div>
        </div>

        <div className="grid md:grid-cols-3 space-y-16 md:gap-10 relative z-10">
          <FeatureCard
            icon={iconBrandRecognition}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
            offset="md:mt-0"
          />
          <FeatureCard
            icon={detailedRecordsIcon}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            offset="md:mt-10 md:-mb-10"
          />
          <FeatureCard
            icon={fullyCustomizableIcon}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            offset="md:mt-20 md:-mb-20"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedStatisticsSection;