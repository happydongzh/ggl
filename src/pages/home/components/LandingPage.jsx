import React from "react";
import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks";
import WaterWave from "./WaterWave";
import { colorLogo } from "@/assets/images";
import { IS_MOBILE, GADGETSLAB_IMAGES } from "@/constants";

const LandingPage = () => {
  const { motionZoomFade } = useMotionConfig();
  return (
    <header className={`${!IS_MOBILE ? "px-[120px]" : "px-[50px]"}`}>
      <motion.div
        initial={motionZoomFade.initial}
        whileInView={motionZoomFade.whileInView}
        className="flex flex-col items-center justify-center"
      >
        <img
          src={GADGETSLAB_IMAGES.logo}
          alt="Gedgets lab logo"
          className={`${!IS_MOBILE ? "h-[5rem] mt-[10rem] bg-gradient-to-tr from-green-300 to-blue-600  rounded-[2rem] p-5" : "h-[32px] mt-[124px]"}`}
        />
        <h2
          className={`${!IS_MOBILE ? "text-[2rem] mt-20 font-extralight text-center" : "text-[24px] text-center mt-6"}`}
        >
          Your Trusted Service Partner for<br />
          <span
            className={`${!IS_MOBILE ? " bg-clip-text text-transparent bg-gradient-to-r  from-green-300 to-blue-600  ml-4 font-normal" : "text-[24px]"}`}
          >
            ICT Solution
          </span>
        </h2>
        <WaterWave></WaterWave>
      </motion.div>
    </header>
  );
};

export default LandingPage;
