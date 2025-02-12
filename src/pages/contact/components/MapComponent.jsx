import React, { useEffect } from "react";
// import { motion } from "framer-motion";

const MapComponent = () => {
  return (
    <div className="w-full h-[32rem] p-2 border-gray-400  overflow-hidden">
      <div className="gmap_canvas">
        <iframe className="h-[30rem] rounded-[16px]" width="100%" src="https://maps.google.com/maps?width=800&amp;height=600&amp;hl=en&amp;q=Reading England&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <p className="font-extralight p-5" href="https://embed-googlemap.com">
          Reading, England, United Kingdom
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
