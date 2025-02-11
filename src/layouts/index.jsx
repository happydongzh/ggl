import { Outlet } from "react-router-dom";
import NewFooter from "./NewFooter";
import { IS_MOBILE } from "@/constants";
import "./index.less";
const HomeLayout = () => {

  return (
    <div className="bg-black  text-white max-w-[1920px]  mx-auto">
      {/* {!IS_MOBILE && <NewNavbar></NewNavbar>} */}
      <div
        style={{ minHeight: !IS_MOBILE ? "calc(100vh - 210.5px)" : "1600px" }}
        className={`${!IS_MOBILE ? "pb-20  overflow-x-hidden" : "pb-[50px]"} `}
      >
        <Outlet />
      </div>
      <NewFooter></NewFooter>
    </div>
  );
};
export default HomeLayout;
