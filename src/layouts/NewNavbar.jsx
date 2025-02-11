import React, { useState } from "react";
import Button from "@mui/material/Button";
import ColorfulButton from "./ColorfulButton";
import { useNavigateWithParams } from "@/hooks";
import "./index.less";
import { useAuth0 } from "@auth0/auth0-react";

const NewNavbar = () => {
  const { goToHome, goToLogin, goClusters, goToWorker, goToExplorer, goModels } =
    useNavigateWithParams();
  const { user, isLoading, isAuthenticated, loginWithRedirect, logout } =
    useAuth0();

  return (
    <main className=" text-white  bg-black sticky top-0 z-50  flex justify-between items-center py-5 px-[120px] !w-full">
      <div className="flex items-center">
        <img
          src="/icon.svg"
          alt="Logo"
          className="mr-10 h-7 w-[]118px] cursor-pointer"
          onClick={goToHome}
        />
        <div className="flex items-center space-x-10 ml-20">
          <span
            className="cursor-pointer py-3 px-6 hover:text-blue hover:bg-black-light   hover:rounded-24 transition duration-500  ease-in-out"
            onClick={goClusters}
          >
            Cloud
          </span>
          <span
            className="cursor-pointer py-3 px-6 hover:text-blue hover:bg-black-light   hover:rounded-24 transition duration-500 ease-in-out"
            onClick={goToExplorer}
          >
            Explorer
          </span>
          <span
            className="cursor-pointer py-3 px-6 hover:text-blue hover:bg-black-light   hover:rounded-24 transition duration-500 ease-in-out"
            onClick={goToWorker}
          >
            Worker
          </span>
          <span
            className="cursor-pointer py-3 px-6 hover:text-blue hover:bg-black-light   hover:rounded-24 transition duration-500 ease-in-out"
            onClick={goModels}
          >
            Discover
          </span>
        </div>
      </div>
      {!isLoading && !isAuthenticated && (
        <ColorfulButton
          id="qsLoginBtn"
          color="primary"
          className="btn-margin"
          onClick={() => loginWithRedirect({
            authorizationParams: {
              redirect_uri: window.location.origin + "/cluster",
            },
          })}
        >
          Sign In
        </ColorfulButton>
      )}
    </main>
  );
};

export default NewNavbar;
