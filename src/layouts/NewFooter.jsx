import React from "react";
import { useNavigateWithParams } from "@/hooks";
import { GADGETSLAB_IMAGES, IS_MOBILE } from "@/constants";

const NewFooter = () => {
  const { goToHome } = useNavigateWithParams();
  return (
    <main
      className={`${!IS_MOBILE ? "pb-5 px-[120px] pt-10 flex flex-row justify-between items-center font-extralight" : "flex flex-col justify-center items-center"}`}
    >
      <a href="#" className={`${!IS_MOBILE ? "text-16 mt-6" : "text-[12px] mt-4 text-center"}`}> PRIVACY POLICY</a>

      <p
        className={`${!IS_MOBILE ? "text-16 mt-6" : "text-[12px] mt-4 text-center"}`}
      >
        Copyright © 2020 GADGETS LAB - All Rights Reserved.
      </p>
      <img
        src={GADGETSLAB_IMAGES.logo}
        alt="GADGETLAB logo"
        className={`${!IS_MOBILE ? "h-[3rem] bg-gradient-to-r  from-green-300 to-blue-600  rounded-[20px] p-3" : "h-[22px]"} cursor-pointer`}
        onClick={goToHome}
      />
    </main>
  );
};

export default NewFooter;
