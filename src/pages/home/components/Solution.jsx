import React from "react";
import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks";
import {
  mSolution1,
  mSolution2,
  mSolution3,
  solution1,
  solution2,
  solution3,
} from "@/assets/images";
import { IS_MOBILE } from "@/constants";
import ImageSlider from "./ImageSlider";
const images = [mSolution1, mSolution2, mSolution3];

const Solution = () => {
  const { motionFadeInUp, motionSlideLeft, motionSlideRight, motionSlideUp } =
    useMotionConfig();
  return (
    <section className="solution  pt-12">
      <motion.h2
        initial={motionFadeInUp.initial}
        whileInView={motionFadeInUp.whileInView}
        className={`${!IS_MOBILE ? "text-[2rem]  mt-10" : "text-[20px]"} text-center`}>Our Value</motion.h2>

      {!IS_MOBILE ? (
        <>
          <motion.div
            initial={motionSlideLeft.initial}
            whileInView={motionSlideLeft.whileInView}
            className="flex justify-end"
          >
            <div style={{
              backgroundImage: `url(${solution1})`,
            }} className="value justify-center gap-y-5">
              <motion.h3
                initial={motionSlideRight.initial}
                whileInView={motionSlideRight.whileInView}
                delay={6}
                className="text-3xl font-bold text-gray-300 w-1/2 text-center">
                Flexible
              </motion.h3>
              <motion.p initial={motionFadeInUp.initial}
                whileInView={motionFadeInUp.whileInView}
                className="text-xl font-light text-gray-300 w-1/2 text-center p-5">
                We specialize in providing a flexible and customized services and solutions to our telecoms clients.Customer satisfaction is our priority
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={motionSlideRight.initial}
            whileInView={motionSlideRight.whileInView}
            className="flex justify-start"
          >
            <div style={{
              backgroundImage: `url(${solution2})`,
            }} className="value justify-center items-end gap-y-5">
              <motion.h3
                initial={motionSlideLeft.initial}
                whileInView={motionSlideLeft.whileInView}
                delay={6}
                className="text-3xl font-bold text-gray-300 w-1/2 text-center">
                Reliable
              </motion.h3>

              <motion.p initial={motionFadeInUp.initial}
                whileInView={{ ...motionFadeInUp.whileInView, delay: 1 }}
                className="text-xl font-light text-gray-300 w-1/2 text-center p-5">
                Our professional engineers are experienced staff, they are well- trained and qualified to work on all the systems we install and maintain.
              </motion.p>

            </div>
          </motion.div>

          <motion.div
            initial={motionSlideLeft.initial}
            whileInView={motionSlideLeft.whileInView}
            className="flex justify-end"
          >
            <div style={{
              backgroundImage: `url(${solution3})`,
              backgroundSize: "110% 110%",
              // height: "21rem"
            }} className="value justify-center gap-y-5 bg-size">
              <motion.h3
                initial={motionSlideRight.initial}
                whileInView={motionSlideRight.whileInView}
                className="text-3xl font-bold text-gray-300 w-1/2 text-center">
                Valuable
              </motion.h3>
              <motion.p initial={motionFadeInUp.initial}
                whileInView={{ ...motionFadeInUp.whileInView, delay: 1 }}
                className="text-xl font-light text-gray-300 w-1/2 text-center p-5">
                Our experience teams will support every aspect of your project with knowledge sharing and competitive pricing.
                Win-Win  is our target and we are here to help you succeed.
              </motion.p>
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={motionSlideUp.initial}
          whileInView={motionSlideUp.whileInView}
        >
          <ImageSlider images={images}></ImageSlider>
        </motion.div>
      )}
    </section>
  );
};
export default Solution;
