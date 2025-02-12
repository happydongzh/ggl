
import { motion } from "framer-motion";
import MapComponent from "./components/MapComponent";
import {
  useMotionConfig,
  useNavigateWithParams,
  // useSocialMediaAndEmailLinks,
} from "@/hooks";
import "./index.less";
import { useState } from "react";
import { Form } from "react-router-dom";
const Contact = () => {
  // const { openLink, availableLinks, LINK_TYPES } =
  //   useSocialMediaAndEmailLinks();
  // const { goAbout } = useNavigateWithParams();
  const [showMsg, setShowMsg] = useState(false);

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(message);
    setShowMsg(true);
  };

  const {
    // motionSlideLeft,
    // motionSlideRight,
    motionScaleUp,
    motionZoomFade,
    motionFadeInUp,
  } = useMotionConfig();

  return (
    <div className="contact text-center flex flex-col items-center pt-[3rem]">
      <motion.div
        initial={motionScaleUp.initial}
        whileInView={motionScaleUp.whileInView}
      >
        <h1 className="text-[2rem] text-gray-300">
          Contact Us
        </h1>
        <p className="text-18 text-gray-300 break-words leading-7 text-center px-10">
          If you would like to learn more, or wish to discuss a specific application, then please do not hesitate to contact us:
        </p>
      </motion.div>
      <section className="flex space-x-32 mt-10 px-5 lg:w-3/5 md:w-full w-full">
        <motion.div
          initial={motionScaleUp.initial}
          whileInView={motionScaleUp.whileInView}
          className="border-gradient w-full"
        >
          <div className="inner">
            {
              showMsg && <div>
                <div className="text-3xl text-green-400">✓</div>
                <p className="bg-clip-text text-transparent bg-gradient-to-l from-green-300 to-blue-600">Thank you for your inquiry! We willl get back to you as soon as possible</p>
              </div>
            }
            {
              !showMsg &&
              <form className="flex flex-col gap-y-4 w-full" action="" method="post" onSubmit={onFormSubmit}>
                <input type="text" placeholder="Name" className="input" required />
                <input type="email" placeholder="Email" className="input" required />
                <textarea
                  required
                  placeholder="Message"
                  className="resize-none">
                </textarea>
                <button type="submit" className="btn mt-4">Send</button>
              </form>

            }

          </div>
        </motion.div>
      </section>
      <section className="w-full mt-16">
        <motion.div
          initial={motionZoomFade.initial}
          whileInView={motionZoomFade.whileInView}
          className="flex flex-col justify-center"
        >
          <h1 className="text-[2rem] text-gray-300">
            About Us
          </h1>
          <div className="mt-8 w-full h-[32rem] px-[0.5rem] md:px-[2rem] lg:px-[3rem] flex flex-col items-center justify-center">
            <MapComponent></MapComponent>
          </div>
        </motion.div>
      </section>
      <motion.div
        className="w-full mt-10"
        initial={motionFadeInUp.initial}
        whileInView={motionFadeInUp.whileInView}
      >
        <section className="bg-transparent px-[0.5rem] md:px-[2rem] lg:px-[3rem] text-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className=" rounded-[1rem] overflow-hidden">
            <img src="https://img1.wsimg.com/isteam/stock/wNNBVNP/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600" alt="about us" />
          </div>
          <div className="p-[1rem]">
            <p className="font-extralight text-18 text-left text-gray-300 tracking-wider ">
              <span className="text-2xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600 ">Gadgets Lab</span> is a new established small company. It was formed by highly experienced telecommunication professionals .The founder and key staffs have been dedicated on the IT and Telecommunications over 20 years with successful experiences and rich knowledges on the project deployment and management.
              We offer telecommunications infrastructure services by customised solutions to meet specific needs whist ensuring customer satisfaction. Our goal is to deliver high quality and cost effective solutions within the IT & telecommunication sectors.
              We work closely with our customers, partners and suppliers,to building long-term mutually beneficial relationships.
              Flexible,Reliable and Valuable is our commitments to customers.
            </p>
          </div>

        </section>
      </motion.div>
    </div>
  );
};

export default Contact;
