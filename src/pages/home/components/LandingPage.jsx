import React from "react";
import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks";
import WaterWave from "./WaterWave";
import { colorLogo } from "@/assets/images";
import { IS_MOBILE, GADGETSLAB_IMAGES } from "@/constants";

const LandingPage = () => {
  const { motionZoomFade } = useMotionConfig();
  return (
    <header className="px-[3rem] min-w-96">
      <motion.div
        initial={motionZoomFade.initial}
        whileInView={motionZoomFade.whileInView}
        className="flex flex-col items-center justify-center pt-20 gap-10"
      >
        <div className="w-[16rem] rounded-full p-3 bg-gradient-to-tr from-green-300 to-blue-600">
          <img
            src={GADGETSLAB_IMAGES.logo}
            alt="Gedgets lab logo"
          />
        </div>
        <h2
          className={`${!IS_MOBILE ? "text-[2rem] font-extralight text-center" : "text-[24px] text-center mt-6"}`}>
          Your Trusted Service Partner for<br />
          <span className={`${!IS_MOBILE ? "whitespace-nowrap ml-4 font-normal" : "text-[28px]"} bg-clip-text text-transparent bg-gradient-to-r  from-green-300 to-blue-600`}>
            ICT Solution
          </span>
        </h2>
        <WaterWave></WaterWave>
      </motion.div>
    </header>
  );
};

export default LandingPage;
