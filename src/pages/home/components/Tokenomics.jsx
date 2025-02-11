import React from "react";
import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks";
import { tokenomics, mTokenomics } from "@/assets/images";
import { IS_MOBILE } from "@/constants";

const Tokenomics = () => {
  const { motionFadeInUp, motionSlideUp } = useMotionConfig();
  return (
    <section
      className={`${!IS_MOBILE ? " px-[120px] mt-20 pt-12" : "px-4 mt-12"}   `}
    >
      <motion.div
        initial={motionFadeInUp.initial}
        whileInView={motionFadeInUp.whileInView}
      >
        <h2
          className={`${!IS_MOBILE ? "text-[80px]  mt-10" : "text-[24px]"} text-center`}
        >
          Tokenomics
        </h2>
      </motion.div>

      <motion.div
        initial={motionSlideUp.initial}
        whileInView={motionSlideUp.whileInView}
      >
        <img
          src={IS_MOBILE ? mTokenomics : tokenomics}
          alt=""
          className="mt-10"
        />
      </motion.div>
    </section>
  );
};

export default Tokenomics;
