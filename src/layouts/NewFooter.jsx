import React from "react";
import { useNavigateWithParams } from "@/hooks";
import { GADGETSLAB_IMAGES, IS_MOBILE } from "@/constants";

const NewFooter = () => {
  const { goToHome } = useNavigateWithParams();
  return (
    <main
      className={`${!IS_MOBILE ? "pb-[5rem] px-[5rem] pt-10 flex flex-row justify-between items-start font-extralight" : "flex flex-col justify-center items-center "} gap-y-5`}
    >
      <a href="#" className={`${!IS_MOBILE ? "text-16 mt-6" : "text-[12px] mt-4 text-center"}`}> PRIVACY POLICY</a>

      <p
        className={`${!IS_MOBILE ? "text-16 mt-6" : "text-[12px] mt-4 text-center"}`}
      >
        Copyright © 2020 GADGETS LAB - All Rights Reserved.
      </p>

      <div className="w-[10rem] rounded-full p-2 bg-gradient-to-tr from-green-300 to-blue-600">
        <img
          src={GADGETSLAB_IMAGES.logo}
          alt="Gedgets lab logo"
        />
      </div>

    </main>
  );
};

export default NewFooter;
