import { useMotionConfig } from "@/hooks";
import { motion } from "framer-motion";
import LandingPage from "./components/LandingPage";
import Solution from "./components/Solution";
import Benefits from "./components/Benefits";
import Tokenomics from "./components/Tokenomics";
import { partner, mPartner } from "@/assets/images";
import { IS_MOBILE } from "@/constants";
import "./index.less";
import Contact from "../contact";
const Home = () => {
  const { motionSlideUp } = useMotionConfig();
  return (
    <main className="home-container overflow-x-hidden">
      <LandingPage></LandingPage>
      <Solution></Solution>
      <Benefits></Benefits>
      {/* <Tokenomics></Tokenomics> */}
      <Contact></Contact>
      {/* <motion.div
        className={`${!IS_MOBILE ? "px-[120px] mt-20 pt-10" : "px-4"} `}
        initial={motionSlideUp.initial}
        whileInView={motionSlideUp.whileInView}
      >
        <img
          src={IS_MOBILE ? mPartner : partner}
          alt=""
          className={`${!IS_MOBILE ? "mt-28" : "mt-12"}`}
        />
      </motion.div> */}
    </main>
  );
};

export default Home;
