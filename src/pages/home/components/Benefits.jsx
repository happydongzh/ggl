import React from "react";
import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks";
import { GADGETSLAB_IMAGES } from "@/constants";
import { benefits1, benefits2, benefits3, mBenefits3 } from "@/assets/images";
import {
  flag_de,
  flag_fr,
  flag_nl,
  flag_be,
  flag_lu,
  flag_ch,
  flag_se
} from "@/assets/images"
import { IS_MOBILE } from "@/constants";
const Benefits = () => {
  const { motionFadeInUp, motionSlideUp } = useMotionConfig();
  return (
    <section
      className={`${!IS_MOBILE ? "px-[4rem] mt-20 pt-12" : "px-4 mt-12"}  benefits`}
    >
      <motion.div
        initial={motionFadeInUp.initial}
        whileInView={motionFadeInUp.whileInView}>
        <h2 className={`${!IS_MOBILE ? "text-[2rem] mt-10 " : "text-[24px]"} text-center `}>
          Our Service
        </h2>
        <div
          className={`${!IS_MOBILE ? "flex w-full gap-10 mt-10 flex-wrap justify-center" : "flex-col space-y-4 mt-7"}`}
        >
          <motion.div
            initial={motionSlideUp.initial}
            whileInView={motionSlideUp.whileInView}
            className="service"
          >
            <div className="flex flex-col gap-y-4">
              <h3 className="text-3xl font-extralight text-gray-300 text-center px-5 py-8  bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600 ">
                Telecom Industry Service
              </h3>
              <img
                src={GADGETSLAB_IMAGES.service1}
                alt="Left Image"
                className="object-cover w-full h-full"
              />
              <ul className="text-gray-300 font-extralight p-5 text-center">
                <li>Programme and project management</li>
                <li>Full turn key solutions</li>
                <li>Equipment installation and commissioning</li>
                <li>Testing</li>
                <li>Cabling and labeling</li>
                <li>Fibre install,Splicing</li>
                <li>Resources sourcing&nbsp;</li>
              </ul>
            </div>
          </motion.div>


          <motion.div
            initial={motionSlideUp.initial}
            whileInView={motionSlideUp.whileInView}
            className="service"
          >
            <div className="flex flex-col gap-y-4">
              <h3 className="text-3xl font-extralight text-gray-300 text-center px-5 py-8  bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600 ">
                IDC (Data Centre) Service
              </h3>
              <img
                src={GADGETSLAB_IMAGES.service2}
                alt="Left Image"
                className="object-cover w-full h-full"
              />
              <ul className="text-gray-300 font-extralight p-5 text-center">
                <li>Programme and project management</li>
                <li>New server installation</li>
                <li>Server relocation</li>
                <li>Equipment installation and commissioning</li>
                <li>On-site smart hand work like resetting/rebooting hardware/cable tracing/swap-out faulty components/hardware inspections/patch lead management
                </li>
              </ul>
            </div>
          </motion.div>


          <motion.div
            initial={motionSlideUp.initial}
            whileInView={motionSlideUp.whileInView}
            className="service"
          >
            <div className="flex flex-col gap-y-4">
              <h3 className="text-3xl font-extralight text-gray-300 text-center px-5 py-8  bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600 ">
                Business Office IT Service
              </h3>
              <img
                src={GADGETSLAB_IMAGES.service3}
                alt="Left Image"
                className="object-cover w-full h-full"
              />
              <ul className="text-gray-300 font-extralight p-5 text-center">
                <li>Customized IT system deployment</li>
                <li>Office cabling installation</li>
                <li>WIFI/CCTV/IP sockets/IP phone installation</li>
                <li>Office IT system relocation and recycle</li>
                <li>Meeting room solution deployment</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={motionSlideUp.initial}
            whileInView={motionSlideUp.whileInView}
            className="service"
          >
            <div className="flex flex-col gap-y-4">
              <h3 className="text-3xl font-extralight text-gray-300 text-center px-5 py-8  bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600 ">
                Projects Delivery & Support
              </h3>
              <img
                src={GADGETSLAB_IMAGES.service4}
                alt="Left Image"
                className="object-cover w-full h-full"
              />
              <p className="text-gray-300 font-extralight p-5 text-center">We are capable to help our customer to manage and deliver projects through our local cooperated qualified partners for the following European countries.</p>
              <ul className="text-gray-300 font-extralight p-5 pt-0 text-center flex flex-row flex-wrap gap-3 justify-center items-center">
                <li className="flex flex-col flex-nowrap justify-center items-center">
                  <img className="w-6 h-6" src={flag_de} />
                  Germany
                </li>
                <li className="flex flex-col flex-nowrap justify-center items-center"><img className="w-6 h-6" src={flag_fr} />France</li>
                <li className="flex flex-col flex-nowrap justify-center items-center"><img className="w-6 h-6" src={flag_nl} />Netherlands</li>
                <li className="flex flex-col flex-nowrap justify-center items-center"><img className="w-6 h-6" src={flag_be} />
                  Belgium
                </li>
                <li className="flex flex-col flex-nowrap justify-center items-center"><img className="w-6 h-6" src={flag_lu} />
                  Luxembourg
                </li>
                <li className="flex flex-col flex-nowrap justify-center items-center"><img className="w-6 h-6" src={flag_ch} />Switzerland</li>
                <li className="flex flex-col flex-nowrap justify-center items-center"><img className="w-6 h-6" src={flag_se} />Sweden</li>
              </ul>
              <p className="text-gray-300 font-extralight pb-5 text-center">Your headache, we solve.</p>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default Benefits;
