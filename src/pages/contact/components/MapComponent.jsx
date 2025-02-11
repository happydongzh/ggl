import React, { useEffect } from "react";
// import { motion } from "framer-motion";

const MapComponent = () => {
  return (
    <div className="w-full h-[32rem] p-5 border-gray-400  overflow-hidden">
      <div className="gmap_canvas">
        <iframe className="h-[30rem] rounded-[32px]" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=800&amp;height=600&amp;hl=en&amp;q=Reading England&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <p className="font-extralight p-5" href="https://embed-googlemap.com">
          Reading, England, United Kingdom
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
