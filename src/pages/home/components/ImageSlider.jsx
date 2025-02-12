import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks";

const ImageSlider = ({ images }) => {

  const { motionFadeInUp, motionSlideLeft, motionSlideRight, motionSlideUp } =
    useMotionConfig();
  return (
    <div
      className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar  space-x-4 px-5 mt-7"
    // style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="snap-center shrink-0 w-3/4  flex-none mx-auto relative"
          style={{ minWidth: "90%" }}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover rounded-2xl"
          />
          {
            index === 0 && <>
              <motion.h3
                initial={motionSlideRight.initial}
                whileInView={motionSlideRight.whileInView}
                delay={6}
                className="absolute py-8 top-0 left-0 border-gray-300 w-full text-2xl font-bold text-gray-300 text-center">
                Flexible
              </motion.h3>
              <motion.p initial={motionFadeInUp.initial}
                whileInView={motionFadeInUp.whileInView}
                className="absolute py-12 mt-5 top-6 left-0 text-sm font-extralight text-gray-300 w-full text-center p-5 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600">
                We specialize in providing a flexible and customized services and solutions to our telecoms clients.Customer satisfaction is our priority.
              </motion.p>
            </>
          }
          {
            index === 1 && <>
              <motion.h3
                initial={motionSlideRight.initial}
                whileInView={motionSlideRight.whileInView}
                delay={6}
                className="absolute py-8 top-0 left-0 border-gray-300 w-full text-2xl font-bold text-gray-300 text-center">
                Reliable
              </motion.h3>
              <motion.p initial={motionFadeInUp.initial}
                whileInView={motionFadeInUp.whileInView}
                className="absolute py-12 mt-5 top-6 left-0 text-sm font-extralight text-gray-300 w-full text-center p-5 bg-clip-text text-transparent bg-gradient-to-bl from-green-300 to-blue-600">
                Our professional engineers are experienced staff, they are well-trained and qualified to work on all the systems we install and maintain.
              </motion.p>
            </>
          }
          {
            index === 2 && <>
              <motion.h3
                initial={motionSlideRight.initial}
                whileInView={motionSlideRight.whileInView}
                className="absolute py-8 top-0 left-0 border-gray-300 w-full text-2xl font-bold text-gray-300 text-center">
                Valuable
              </motion.h3>
              <motion.p initial={motionFadeInUp.initial}
                whileInView={motionFadeInUp.whileInView}
                className="absolute py-12 mt-5 top-6 left-0 text-sm font-extralight text-gray-300 w-full text-center p-5 bg-clip-text text-transparent bg-gradient-to-tr from-green-300 to-blue-600">
                Our experience teams will support every aspect of your project with knowledge sharing and competitive pricing.
                Win-Win is our target and we are here to help you succeed.
              </motion.p>
            </>
          }

        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
